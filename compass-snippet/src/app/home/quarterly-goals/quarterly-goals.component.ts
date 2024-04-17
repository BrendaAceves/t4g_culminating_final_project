import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarterly-goals',
  templateUrl: './quarterly-goals.component.html',
  styleUrls: ['./quarterly-goals.component.scss']
})
export class QuarterlyGoalsComponent implements OnInit {
  @Input() goal1 = '';
  @Input() goal2 = '';
  @Input() goal3 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
