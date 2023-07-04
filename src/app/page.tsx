import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h2>Hello, I'm</h2>
          <h1>Sardorbek Omonkulov</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={styles.buttons}>
            <button className={styles.buttonAboutMe}>About Me</button>
            <button className={styles.buttonResume}>Download Resume</button>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Hero />
        </div>
      </div>
    </div>
  );
}
