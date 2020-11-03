import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import Button from '@material-ui/core/Button';
import CertificateIcon from "../public/images/certificate.svg";
import timeLineStyles from './timeLine.module.css'

const TimeLineEducation = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2018 - present"
                dateClassName={timeLineStyles.colorBlack}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 style={{ fontSize: "24px" }} className="vertical-timeline-element-title">Bachelor of Engineering - BE, Electrical and Electronics Engineering</h3>
                <br />
                <h4 style={{ fontWeight: "500" }} className="vertical-timeline-element-subtitle">K. N. Toosi University of Technology, Tehran, Iran</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<CertificateIcon />}
            >
                <h3 style={{ fontSize: "24px" }} className="vertical-timeline-element-title">Next.js</h3>
                <h4 style={{ fontWeight: "500" }} className="vertical-timeline-element-subtitle">Udemy</h4>
                <br />
                <div>
                    <Button
                        key={null} // eslint-disable-line react/no-array-index-key
                        variant="outlined"
                        color="default"
                        target="_blank"
                        href={"https://www.udemy.com/certificate/UC-7c92d6b5-3af6-4558-9349-207b3db25053/"}
                    >
                            SEE CREDENTIAL
                    </Button>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<CertificateIcon />}
            >
                <h3 style={{ fontSize: "24px" }} className="vertical-timeline-element-title">React - The Complete Guide with React Hook Redux 2020 in 4hr</h3>
                <h4 style={{ fontWeight: "500" }} className="vertical-timeline-element-subtitle">Udemy</h4>
                <br />
                <div>
                    <Button
                        key={null} // eslint-disable-line react/no-array-index-key
                        variant="outlined"
                        color="default"
                        target="_blank"
                        href={"https://www.udemy.com/certificate/UC-e488ed0a-9064-40ec-9e21-30d9fa9fece9/"}
                    >
                            SEE CREDENTIAL
                    </Button>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<CertificateIcon />}
            >
                <h3 style={{ fontSize: "24px" }} className="vertical-timeline-element-title">HTML, CSS, & JavaScript - Certification Course for Beginners</h3>
                <h4 style={{ fontWeight: "500" }} className="vertical-timeline-element-subtitle">Udemy</h4>
                <br />
                <div>
                    <Button
                        key={null} // eslint-disable-line react/no-array-index-key
                        variant="outlined"
                        color="default"
                        target="_blank"
                        href={"https://www.udemy.com/certificate/UC-f95ebfd0-0d82-4bc8-b2f0-cc0ef1338d13/"}
                    >
                            SEE CREDENTIAL
                    </Button>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Mar 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<CertificateIcon />}
            >
                <h3 style={{ fontSize: "24px" }} className="vertical-timeline-element-title">C++ Programming Course</h3>
                <h4 style={{ fontWeight: "500" }} className="vertical-timeline-element-subtitle">IEEE</h4>
                <br />
                    Credential ID: KNTU-ACM-19NrxF-0022938672
                <br />
                <div>
                <br />
                    <Button
                        key={null} // eslint-disable-line react/no-array-index-key
                        variant="outlined"
                        color="default"
                        target="_blank"
                        href={"http://kntu.acm.org/certificates"}
                    >
                            SEE CREDENTIAL
                    </Button>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2014 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 style={{ fontSize: "24px" }} className="vertical-timeline-element-title">Salam Tajrish Highscool</h3>
                <h4 style={{ fontWeight: "500" }} className="vertical-timeline-element-subtitle">Tehran, Iran</h4>
                <br />
                    Diploma in Physics and Mathematics Discipline
                <br />
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default TimeLineEducation;