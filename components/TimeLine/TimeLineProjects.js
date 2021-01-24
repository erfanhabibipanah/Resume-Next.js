import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Button from "@material-ui/core/Button";
import WordpressIcon from "../../public/images/svg/wordpress.svg";
import ReactIcon from "../../public/images/svg/react.svg";
import NextIcon from "../../public/images/svg/nextjs.svg";

const TimeLineProjects = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Jan 2021"
        iconStyle={{ background: "rgb(97, 218, 251)", color: "#fff" }}
        icon={<ReactIcon />}
      >
        <h3
          style={{ fontSize: "24px" }}
          className="vertical-timeline-element-title"
        >
          Twitter Clone
        </h3>
        <h4
          style={{ fontWeight: "500" }}
          className="vertical-timeline-element-subtitle"
        >
          React Project
        </h4>
        <br />
        Twitter Clone using React.
        <br />
        <br />
        <div>
          <Button
            key={null} // eslint-disable-line react/no-array-index-key
            variant="outlined"
            color="default"
            target="_blank"
            href={"https://twitter-clone.erfanhabibipanah.vercel.app/"}
          >
            VISIT WEBSITE
          </Button>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education sm:fixed"
        date="Nov 2020"
        iconStyle={{ background: "rgb(250, 250, 250)", color: "#fff" }}
        icon={<NextIcon />}
      >
        <h3
          style={{ fontSize: "24px" }}
          className="vertical-timeline-element-title"
        >
          Next.js Resume
        </h3>
        <h4
          style={{ fontWeight: "500" }}
          className="vertical-timeline-element-subtitle"
        >
          Next.js Project
        </h4>
        <br />
        My resume in English, developed with Next.js. With a score of 100/100 on
        PageSpeed Insights (mobile & desktop).
        <br />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Oct 2020"
        iconStyle={{ background: "rgb(97, 218, 251)", color: "#fff" }}
        icon={<ReactIcon />}
      >
        <h3
          style={{ fontSize: "24px" }}
          className="vertical-timeline-element-title"
        >
          TODO App
        </h3>
        <h4
          style={{ fontWeight: "500" }}
          className="vertical-timeline-element-subtitle"
        >
          React Project
        </h4>
        <br />
        TODO List using React.
        <br />
        <br />
        <div>
          <Button
            key={null} // eslint-disable-line react/no-array-index-key
            variant="outlined"
            color="default"
            target="_blank"
            href={"https://todo-app.erfanhabibipanah.vercel.app/"}
          >
            VISIT WEBSITE
          </Button>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Nov 2019 - Feb 2020"
        iconStyle={{ background: "rgb(33, 117, 155)", color: "#fff" }}
        icon={<WordpressIcon />}
      >
        <h3
          style={{ fontSize: "24px" }}
          className="vertical-timeline-element-title"
        >
          7-Sang Site
        </h3>
        <h4
          style={{ fontWeight: "500" }}
          className="vertical-timeline-element-subtitle"
        >
          WordPress Project
        </h4>
        <br />
        Showcase website of the 7-sang group built with WordPress in Farsi.
        <br />
        <br />
        <div>
          <Button
            key={null} // eslint-disable-line react/no-array-index-key
            variant="outlined"
            color="default"
            target="_blank"
            href={"https://www.7-sang.ir"}
          >
            VISIT WEBSITE
          </Button>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLineProjects;
