import React from "react";
import styles from "../styles/skills.module.css";
import Skill from "./Skill";

interface skill {
  title: string;
  image: string;
}

interface SkillObject {
  category: string;
  skills: Array<skill>;
}

const skillData: Array<SkillObject> = [
  {
    category: "Languages",
    skills: [
      { title: "Javascript", image: "javascript.svg" },
      { title: "Typescript", image: "typescript-icon.svg" },
      { title: "Java", image: "java.svg" },
      { title: "Kotlin", image: "kotlin-icon.svg" },
      { title: "Python", image: "python.svg" },
      { title: "Bash", image: "bash-icon.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { title: "React", image: "react.svg" },
      { title: "Redux", image: "redux.svg" },
      { title: "NextJS", image: "nextjs-icon.svg" },
      { title: "electron", image: "electron.svg" },
      { title: "Sass", image: "sass.svg" },
      { title: "TailwindCSS", image: "tailwindcss-icon.svg" },
      { title: "Bootstrap", image: "bootstrap.svg" },
      { title: "MaterialUI", image: "material-ui.svg" },
      { title: "Jest", image: "jest.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { title: "Nodejs", image: "nodejs.svg" },
      { title: "Spring Boot", image: "spring.svg" },
      { title: "Flask", image: "flask.svg" },
      { title: "MySql", image: "mysql.svg" },
      { title: "MongoDB", image: "mongodb.svg" },
    ],
  },
  {
    category: "Tools and etc",
    skills: [
      { title: "Git", image: "git-icon.svg" },
      { title: "Vercel", image: "vercel.svg" },
      { title: "xCode", image: "xcode.svg" },
      { title: "Android Studio", image: "android-icon.svg" },
      { title: "NVM", image: "nvm.svg" },
      { title: "Linux", image: "linux-tux.svg" },
      { title: "Figma", image: "figma.svg" },
    ],
  },
];

function Skills() {
  return (
    <div className={styles.root}>
      {skillData.map((skill, i) => {
        return (
          <div className={styles.categoryContainer} key={i}>
            <h2>{skill.category}</h2>
            <div className={styles.skillsContainer}>
              {skill.skills.map((item, j) => {
                return <Skill key={j} skill={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
