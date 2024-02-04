import { Component, Input, OnInit } from '@angular/core';
import { MONTHS } from 'src/app/shared/constants/months';

@Component({
  selector: 'tc-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss'],
})
export class ExperienceBlockComponent implements OnInit {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) company: string = '';
  @Input({ required: true }) start: string = '';
  @Input({ required: true }) end: string = '';
  @Input() priorRoles: string[] = [];
  @Input() summary: string = '';
  @Input() responsibilities: string[] = [];

  startFormatted: string = '';
  endFormatted: string = '';

  ngOnInit(): void {
    this.startFormatted = this.format(this.start);
    this.endFormatted = this.format(this.end);
  }

  format(date: string) {
    let month = null;
    let year = null;
    let formatted = null;

    if (date == 'present') {
      var today = new Date();

      month = today.getMonth() + 1;
      year = today.getFullYear();
      formatted = `Present`;
    } else {
      var dateSplit = date.split('/');

      month = Number(dateSplit[0]);
      year = dateSplit[1];
      formatted = `${MONTHS[month - 1]} ${year}`;
    }

    return formatted;
  }
}
