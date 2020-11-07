import React from "react";
import styles from "./dotProgress.module.css";

const DotsProgress = ({ maxNumberOfDots, numberOfActiveDots }) => (
  <div className={styles.dotsprogress}>
    {[...Array(maxNumberOfDots)].map((x, i) => (
      <div
        className={`${styles.dotsprogressdot} ${
          numberOfActiveDots > i ? styles.dotsprogressdotactive : ""
        }`}
      />
    ))}
  </div>
);

export default DotsProgress;
