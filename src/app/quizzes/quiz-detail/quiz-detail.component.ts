import { Observable } from 'rxjs';
import { Tests } from './../../models/tests';
import { Question } from './../../models/question';
import { TestsService } from './../../services/tests.service';
import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {
  tests$: Observable<any>;
  question$: Observable<any>;
  //Quiz = Question , Subject = Tests
  currentPage=0;
  currentQuizId: string;
  currentQuiz: Question;
  Quizs: Question[];
  Question: String;
  Answers: Object;
  Timer: Date;
  Test: Tests;
  PAns: {[key: string] : string; } = {};
  length: number;
  sumpoint=0;
  
  constructor(private quizService: QuizService, private testService: TestsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tests$ = this.testService.getTests();
    this.question$ = this.quizService.getQuestions()
  }

  getTest() {
    const id = this.route.snapshot.paramMap.get("id");
    this.currentQuizId = id;
  }

}
