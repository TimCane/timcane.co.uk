import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CVComponent implements OnInit {
  yearsExperience: number = 0;

  ngOnInit(): void {
    this.yearsExperience = new Date().getFullYear() - 2013;
  }
}
