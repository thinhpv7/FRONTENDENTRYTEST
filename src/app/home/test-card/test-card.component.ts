import { Tests } from 'src/app/models/tests';
import { TestsService } from 'src/app/services/tests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {

  constructor(private testsService: TestsService) { }

  tests: Tests[];
  selectedTests: Tests;

  ngOnInit() {
    this.testsService.getTests().subscribe(data => {
      this.tests = data;
      console.log(data);
    })
  }
  onSelect(tests: Tests): void {
    this.selectedTests = tests;
  }

}
