import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuizService{

    constructor(private httpClient:HttpClient){}

    loadData():Observable<Question[]>{
        return this.httpClient.get<Question[]>("http://localhost:3000/questions");
    }

}

//Model Class -- maps json data from REST API
export class Question{
    constructor(public questionId: number,
        public question: string,
        public choices: string[],
        public correctChoice: string){}
}