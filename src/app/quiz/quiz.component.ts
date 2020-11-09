import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question, QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions:Question[];

  index: number;
  score: number;

  myChoice: string;
  
  progress:string;

  answers: string[];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.loadData().subscribe(data => this.questions = data);
    this.index = 0;
    this.answers = new Array(10);
    this.myChoice = "";
    this.progress = "start"
  }

  onAnswer(): void{
    if(this.questions[this.index].choices.indexOf(this.myChoice) != -1){
      this.answers[this.index] = this.myChoice;
      this.index++;
      this.myChoice = "";
      if(this.index == this.questions.length - 1){
        this.progress = "finished"
        this.score = 0;
        for(let i = 0; i < this.answers.length; i++){

          if(this.answers[i] == this.questions[i].correctChoice){
            this.score++;
          } 
        }
      }

    }
  }

  onStart(): void{
    this.progress = "inProgress";
  }

  onRestart(): void{
    this.progress = "start";
    this.index = 0;
  }



}
