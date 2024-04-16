import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  @Input() userName: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
