import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">Work Experience</h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#222831", color: "#00ADB5" }}
              contentArrowStyle={{ borderRight: "7px solid  deeppink" }}
              date="2022 - present"
              iconStyle={{ background: "#6206c4", color: "white" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                XYZ PVT LTD.
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#222831", color: "#00ADB5" }}
              contentArrowStyle={{ borderRight: "7px solid  deeppink" }}
              date="2019 - 2021"
              iconStyle={{ background: "#6206c4", color: "white" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Back-end Developer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                ABC Startup
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
