import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DotsProgress from "./dotProgress";
import styles from "./languageAndHobbies.module.css";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const LanguagesAndHobbies = () => {
  return (
    <div style={{ paddingBottom: "80px" }}>
      <div
        className={styles.container}
        style={{
          textAlign: "center",
          paddingBottom: "150px",
        }}
      >
        <div
          className={styles.heading}
          style={{
            textAlign: "center",
            paddingBottom: "45px",
          }}
        >
          <h2
            style={{
              margin: "0",
              color: "#ff4081",
              fontSize: "34px",
              textTransform: "none",
            }}
          >
            Languages
          </h2>
          <p
            style={{
              fontFamily: "Open Sans,sans-serif",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: "400",
              paddingBottom: "70px",
              margin: "0",
            }}
          >
            I speak
          </p>
        </div>

        <div className={styles.ResumeLanguagesAndHobbiesBlocklanguages}>
          <div className={styles.ResumeLanguagesAndHobbiesBlocklanguage}>
            <div
              className={
                styles.ResumeLanguagesAndHobbiesBlocklanguageTitleAndLevel
              }
            >
              <span
                className={styles.ResumeLanguagesAndHobbiesBlocklanguageTitle}
              >
                Persian
              </span>
              <br />
              <span
                className={styles.ResumeLanguagesAndHobbiesBlocklanguageLevel}
              >
                Native
              </span>
            </div>
            <DotsProgress maxNumberOfDots={10} numberOfActiveDots={10} />
          </div>
          <div className={styles.ResumeLanguagesAndHobbiesBlocklanguage}>
            <div
              className={
                styles.ResumeLanguagesAndHobbiesBlocklanguageTitleAndLevel
              }
            >
              <span
                className={styles.ResumeLanguagesAndHobbiesBlocklanguageTitle}
              >
                English
              </span>
              <br />
              <span
                className={styles.ResumeLanguagesAndHobbiesBlocklanguageLevel}
              >
                Elementary proficiency
              </span>
            </div>
            <DotsProgress maxNumberOfDots={10} numberOfActiveDots={6} />
          </div>
        </div>
      </div>

      <div id={styles.Resumehobbies}>
        <div
          className={styles.heading}
          style={{
            textAlign: "center",
            paddingBottom: "45px",
          }}
        >
          <h2
            style={{
              margin: "0",
              color: "#ff4081",
              fontSize: "34px",
              textTransform: "none",
            }}
          >
            Interests
          </h2>
          <p
            style={{
              fontFamily: "Open Sans,sans-serif",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: "400",
              paddingBottom: "22px",
              margin: "0",
            }}
          >
            What I like
          </p>
        </div>
      </div>

      <div className={styles.ResumeLanguagesAndHobbiesBlockhobbies}>
        <div className={styles.ResumeLanguagesAndHobbiesBlockhobbycontainer}>
          <div className={styles.ResumeLanguagesAndHobbiesBlockhobby}>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyfront}
              style={{ backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <SportsEsportsIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
                <h4 style={{ color: "#ffffff" }}>Game</h4>
              </CardContent>
            </Card>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyback}
              style={{ color: "#ffffff", backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <div
                  className={
                    styles.ResumeLanguagesAndHobbiesBlockhobbybackdescription
                  }
                >
                  Playing Video games like Fifa
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={styles.ResumeLanguagesAndHobbiesBlockhobbycontainer}>
          <div className={styles.ResumeLanguagesAndHobbiesBlockhobby}>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyfront}
              style={{ backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <SportsSoccerIcon fontSize="large" style={{ color: "white" }} />
                <h4 style={{ color: "#ffffff" }}>Soccer</h4>
              </CardContent>
            </Card>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyback}
              style={{ color: "#ffffff", backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <div
                  className={
                    styles.ResumeLanguagesAndHobbiesBlockhobbybackdescription
                  }
                >
                  Playing soccer with my friends
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={styles.ResumeLanguagesAndHobbiesBlockhobbycontainer}>
          <div className={styles.ResumeLanguagesAndHobbiesBlockhobby}>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyfront}
              style={{ backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <AirplanemodeActiveIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
                <h4 style={{ color: "#ffffff" }}>Trips</h4>
              </CardContent>
            </Card>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyback}
              style={{ color: "#ffffff", backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <div
                  className={
                    styles.ResumeLanguagesAndHobbiesBlockhobbybackdescription
                  }
                >
                  Alone or with groups.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={styles.ResumeLanguagesAndHobbiesBlockhobbycontainer}>
          <div className={styles.ResumeLanguagesAndHobbiesBlockhobby}>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyfront}
              style={{ backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <RestaurantIcon fontSize="large" style={{ color: "white" }} />
                <h4 style={{ color: "#ffffff" }}>Eating</h4>
              </CardContent>
            </Card>
            <Card
              className={styles.ResumeLanguagesAndHobbiesBlockhobbyback}
              style={{ color: "#ffffff", backgroundColor: "rgb(33, 150, 243)" }}
            >
              <CardContent>
                <div
                  className={
                    styles.ResumeLanguagesAndHobbiesBlockhobbybackdescription
                  }
                >
                  I Love eating delicious food.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesAndHobbies;
