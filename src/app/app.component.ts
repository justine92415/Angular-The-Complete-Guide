import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails = false;
  logs: number[] = [];

  display() {
    this.displayDetails = !this.displayDetails;
    this.logs.push(this.logs.length + 1);
  }
}
