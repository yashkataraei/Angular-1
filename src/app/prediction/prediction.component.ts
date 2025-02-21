import { Component } from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {
  comptitions = true;
  matches = false;
  question = false;

  openMatches() {

    this.comptitions = false;
    this.matches = true;
  }

  closeMatches() {
    this.matches = false;
    this.comptitions = true;
  }

  openQuestions() {
    this.matches = false;
    this.question = true;
  }

  closeQuestions() {
    this.question = false;
    this.matches = true;
  }
}
