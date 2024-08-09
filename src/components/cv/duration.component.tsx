import React from "react";

interface Props {
  start: string;
  end: string;
}

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export class Duration extends React.Component<Props> {
  start?: string;
  end?: string;

  constructor(props: Props) {
    super(props);

    this.start = props.start;
    this.end = props.end;
  }

  getValue(date: string) {
    let month = null;
    let year = null;
    let formatted = null;

    if (date == "present") {
      var today = new Date();

      month = today.getMonth() + 1;
      year = today.getFullYear();
      formatted = `Present`;
    } else {
      var dateSplit = date.split("/");

      month = dateSplit[0];
      year = dateSplit[1];
      formatted = `${months[month - 1]} ${year}`;
    }

    return formatted;
  }

  render() {
    return (
      this.props.start && this.props.end && 
      <span>
        {this.getValue(this.start)} - {this.getValue(this.end)}
      </span>
    );
  }
}
