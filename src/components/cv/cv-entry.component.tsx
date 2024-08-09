import React, { type ReactNode } from "react";
import { Duration } from "./duration.component";

interface Props {
  title: string;
  company: string;
  start?: string;
  end?: string;
  priorRoles: string[];
  children: React.ReactNode;
}

export class CVEntry extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-4">
        <div>
          <h3 className="uppercase mb-0 font-normal">
            <strong className="text-[#fe7f2d] font-bold">{this.props.title}</strong>,{" "}
            {this.props.company}
          </h3>
          <div className="mt-0 mb-4">
            <strong>
              <Duration start={this.props.start} end={this.props.end} />
            </strong>
          </div>
          {this.props.priorRoles && this.props.priorRoles.length > 0 && (
            <p className="my-4">
              <strong>Prior Roles:</strong>
              <span>{this.props.priorRoles.join(", ")}.</span>
            </p>
          )}
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}