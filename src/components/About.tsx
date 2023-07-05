import React from "react";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CircleStackIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import styles from "../styles/about.module.css";

function About() {
  return (
    <div className={styles.root}>
      <div className={styles.sectionTitle}>
        <h2>About Me:</h2>
      </div>
      <div className={styles.sectionBody}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.sectionExperince}>
        <p>5+</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <GlobeAltIcon />
          <p>WEB</p>
          <p>DEVELOPMENT</p>
        </div>
        <div className={styles.skill}>
          <CircleStackIcon />
          <p>BACKEND</p>
          <p>DEVELOPMENT</p>
        </div>
        <div className={styles.skill}>
          <CpuChipIcon />
          <p>ROBOTICS</p>
          <p>ENGINEER</p>
        </div>
        <div className={styles.skill}>
          <DevicePhoneMobileIcon />
          <p>MOBILE</p>
          <p>DEVELOPMENT</p>
        </div>
      </div>
    </div>
  );
}

export default About;
