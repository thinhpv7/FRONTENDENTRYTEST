import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //---------------- Properties---------------
  readonly getQuestionURL = 'http://localhost:8080/api/questions/';
  readonly TestsURL = 'http://localhost:8080/api/tests/';
  readonly getAnswerSheetURL = 'http://localhost:8080/api/answerssheets'
  readonly rootURL = 'http://localhost:8080';

  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':'
      + Math.floor(this.seconds % 60);
  }
  //---------------- Http Methods---------------
  public getTests(): Observable<any> {
    return this.http.get(this.TestsURL)
  }

  public getQuestions(id: string): Observable<any> {
    return this.http.get(this.getQuestionURL + id)
  }

  // getAnswer() {
  //   var body = this.qns.map(x => x.questionAnswersList.id);
  //   return this.http.post(this.getAnswerSheetURL, body);
  // }

  
  submitScore() {
    var body = JSON.parse(localStorage.getItem('user'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootURL + "/api/UpdateOutput", body);
  }
}
