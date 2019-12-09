import { Answer } from './../../models/answer';
import { Observable } from 'rxjs';
import { Tests } from './../../models/tests';
import { Question } from './../../models/question';
import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {
  //Quiz = Question , Subject = Tests
  currentPage = 0;
  currentQuizId: string;
  currentQuiz: Question;
  Questions: Question[];
  Question: String;
  Answers: Answer[];
  Timer: Date;
  test: Tests;
  PAns: { [key: string]: string; } = {};
  length: number;
  sumpoint = 0;

  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTest();
    this.Timer = new Date();
    this.quizService.getTests().subscribe(data => {
      // console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == this.currentQuizId) {
          this.test = data[i];
          break;
        }
      }
      // console.log(this.test);
    });

  }

  getTest() {
    const id = this.route.snapshot.paramMap.get("id");
    this.currentQuizId = id;
    this.quizService.getQuestions().subscribe(quizs => {
      this.Questions = quizs;
      this.currentQuiz = this.Questions[this.currentPage];
      this.Question = this.currentQuiz.questionContent;
      this.Answers = this.currentQuiz.questionAnswerList;
      console.log(this.Answers);
      this.length = quizs.length;
    });
  }

  async myFunction() {
    var time_spent = document.getElementById('demo').innerText;
    var container = document.getElementsByClassName('cont')[0];
    container.innerHTML = "";
    container.setAttribute("style", "text-align:center; width: 100%; padding: 150px;");
    var H3 = <HTMLHeadingElement>document.createElement("h3");
    H3.innerHTML = this.test.testTitle;
    var Result = <HTMLHeadingElement>document.createElement("h3");
    Result.innerHTML = "Result";
    var res = <HTMLParagraphElement>document.createElement("p");
    res.innerHTML = this.sumpoint + "/" + this.Questions.length;
    var Timer = <HTMLHeadingElement>document.createElement("h3");
    Timer.innerHTML = "Time spent";
    var time = <HTMLParagraphElement>document.createElement("p");
    time.innerHTML = time_spent;
    var Home = <HTMLElement>document.createElement("a");
    Home.setAttribute("style", "border: 1px solid gray; background-color: black; color: white; padding: 10px; border-radius: 5px");
    Home.setAttribute("href", "home");
    Home.innerHTML = "Home";

    container.appendChild(H3);
    container.appendChild(Result);
    container.appendChild(res);
    container.appendChild(Timer);
    container.appendChild(time);
    container.appendChild(Home);
  }

  async selectAns() {
    var board = document.getElementsByClassName('board');
    board[this.currentPage].setAttribute("style", "background-color:gray");
    board[this.currentPage].setAttribute("disabled", "disabled");
  }

  async navQuiz(i) {
    var cQ = <HTMLParagraphElement>document.getElementById("Quiz");
    var Az = <HTMLFormElement>document.getElementById("Ans");
    var nQ = <HTMLHeadingElement>document.getElementById("nQ");
    var point = <HTMLSpanElement>document.getElementById("point");
    var board = document.getElementsByClassName('board');
    var Opt = Az.children;
    if (board[i].getAttribute("disabled") == "disabled") {
      return;
    }
    for (var k = 0; k < Opt.length; k++) {
      var para = <HTMLInputElement>Opt[k].children[0];
      if (para.checked) {
        var key = this.currentQuiz.id.toString();
        var AnsID = this.currentQuiz['AnswerId'].toString();
        // console.log(this.currentQuiz);
        var value = para.value.toString();
        this.PAns[key] = value;
        if (para.value.toString() == AnsID) {
          this.sumpoint++;
          point.innerHTML = this.sumpoint + "/" + this.Questions.length;
        }
      }
    }
    this.currentPage = i;

    this.currentQuiz = this.Questions[i];
    this.Answers = this.currentQuiz.questionAnswerList;
    var ans = Array.of(this.Answers);
    var res = <HTMLFormElement>document.createElement("form");
    res.id = "Ans";
    for (var k = 0; k < ans.length; k++) {
      var div = <HTMLDivElement>document.createElement("div");
      var para = <HTMLInputElement>document.createElement("input");
      var key = this.currentQuiz.id.toString();
      para.type = "radio";
      para.value = ans[k]['Id'];
      if (this.PAns[key] != undefined) {
        para.checked = (this.PAns[key] == this.Answers[k]['Id']);
      }
      if (para.checked) {
        para.id = "checked";
      }
      div.appendChild(para);
      div.textContent = ans[k]['Text'];
      res.appendChild(div);
    }
    cQ.innerHTML = this.currentQuiz.questionContent;
    nQ.innerHTML = "Câu hỏi số " + (i + 1);
    Az = res;
  }
}
