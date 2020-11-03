import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import skillStyles from './skill.module.css';
import JavascriptIcon from "../public/images/javascript.svg";
import WordpressIcon from "../public/images/wordpress.svg";
import ReactIcon from "../public/images/react.svg";
import OtherIcon from '../public/images/code.svg';

const Skill = () => {
    return (
        <div className={skillStyles.container}>
            <div style={{
                textAlign: "center",
                paddingBottom: "45px",
            }}>
                <h2 style={{
                    margin: "0",
                    color: "#ff4081",
                    fontSize: "34px",
                    textTransform: "none"
                }}>
                    Skills
                </h2>
                <p style={{
                    fontFamily: "Open Sans,sans-serif",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "400",
                    paddingBottom: "70px",
                    margin: "0",
                }}
                >I can say i’m quite good at
                </p>
            </div>
            <div className={skillStyles.ResumeSkillsBlockskills} style={{ padding: "16px 24px 24px 24px", paddingBottom: "100px", justifyContent: "space-between", flexWrap: "wrap", display: "flex" }}>
                <Card style={{ padding: "16px 24px 24px 24px" }}>
                    <CardContent>
                        <Avatar
                        style={{
                            color: "rgb(33, 117, 155)",
                            backgroundColor: "rgb(33, 117, 155)",
                            width: 100,
                            height: 100,
                            margin: '0 auto',
                        }}
                        >
                        <WordpressIcon />
                        </Avatar>
                        <br />
                        <h3
                        style={{color: "rgb(33, 117, 155)"}}
                        >
                            Wordpress
                        </h3>
                        <br />
                        <div>Theme</div>
                        <div>Plugins</div>
                    </CardContent>
                </Card>
                <Card style={{ padding: "16px 24px 24px 24px" }}>
                    <CardContent>
                        <Avatar
                        style={{
                            color: "rgb(241, 222, 60)",
                            backgroundColor: "rgb(241, 222, 60)",
                            width: 100,
                            height: 100,
                            margin: '0 auto',
                        }}
                        >
                        <JavascriptIcon />
                        </Avatar>
                        <br />
                        <h3
                        style={{color: "rgb(241, 222, 60)"}}
                        >
                            Javascript
                        </h3>
                        <br />
                        <div>React</div>
                        <div>ES6</div>
                    </CardContent>
                </Card>
                <Card style={{ padding: "16px 24px 24px 24px" }}>
                    <CardContent>
                        <Avatar
                        style={{
                            color: "rgb(97, 218, 251)",
                            backgroundColor: "rgb(97, 218, 251)",
                            width: 100,
                            height: 100,
                            margin: '0 auto',
                        }}
                        >
                        <ReactIcon />
                        </Avatar>
                        <br />
                        <h3
                        style={{color: "rgb(97, 218, 251)"}}
                        >
                            React
                        </h3>
                        <br />
                        <div>React.js</div>
                        <div>Next.js</div>
                    </CardContent>
                </Card>
                <Card style={{ padding: "16px 24px 24px 24px" }} >
                    <CardContent>
                        <Avatar
                        style={{
                            backgroundColor: "rgb(227, 76, 38)",
                            width: 100,
                            height: 100,
                            margin: '0 auto',
                        }}
                        >
                        <OtherIcon />
                        </Avatar>
                        <br />
                        <h3
                        style={{color: "rgb(227, 76, 38)"}}
                        >
                            Other
                        </h3>
                        <br />
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Python</div>
                    </CardContent>
                    </Card>
                <Card style={{ padding: "16px 24px 24px 24px", display:"none" }} />
            </div>
        </div>

    );
}

export default Skill;