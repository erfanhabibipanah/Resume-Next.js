import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import WordpressIcon from "../public/images/wordpress.svg";
import ReactIcon from "../public/images/react.svg"

const TimeLineSite = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(97, 218, 251)', color: '#fff' }}
                icon={<ReactIcon />}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Nov 2019 - Feb 2020"
                iconStyle={{ background: 'rgb(33, 117, 155)', color: '#fff' }}
                icon={<WordpressIcon />}
            >
                <h3 className="vertical-timeline-element-title">7-Sang Site</h3>
                <h4 className="vertical-timeline-element-subtitle">WordPress Project</h4>
                <p>
                    Showcase website of the 7-sang group built with WordPress in Farsi.
                </p>
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
}

export default TimeLineSite;