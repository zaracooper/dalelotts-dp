import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Bootstrap Date Time Picker</h1>
  <h3>By Dalelotts</h3>
  <div class="cnt">
    <dl-date-time-picker
    startView="day"
    maxView="year"
    minView="minute"
    minuteStep="5"
    [(ngModel)]="selectedDate"
  >
  </dl-date-time-picker>
  <hr>
  <p>{{selectedDate}}</p>
</div>
  `,
  styles: [
    `.cnt { width: 50vw  !important; }`,
  ]
})
export class AppComponent {
  title = 'dalelotts-dp';
  selectedDate = '';
}
