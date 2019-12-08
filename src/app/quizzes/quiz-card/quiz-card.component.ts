import { TestsService } from 'src/app/services/tests.service';
import { QuestionService } from 'src/app/services/question.service';
import { Tests } from './../../models/tests';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  question$: Observable<any>;
  answer$: Observable<any>;
  tests$: Observable<any>;
  test: Tests[];
  selectedTest: Tests;
  constructor(private quizService: QuizService, private router: Router, private questionService: QuestionService,
              private testsService: TestsService) { }

  ngOnInit() {
    this.question$ = this.questionService.getQuestions();
    // this.answer$ = this.quizService.getAnswer();
    this.tests$ = this.testsService.getTests();
    this.tests$.subscribe(data => {
      const a = data;
      console.log(a);
    })
  }

  onClick(test: Tests): void {
    this.selectedTest = test; 
  }

}
