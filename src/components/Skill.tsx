import Image from 'next/image';
import React from 'react';
import styles from "../styles/skills.module.css";

interface skill {
  image: string;
  title: string;
}

interface props{
  skill: skill;
}

function Skill({skill}:props) {

  return (
    <div className={styles.skillContainer}>
      <Image height={65} width={65} src={skill.image} alt={skill.title} />
      <p>{skill.title}</p>
    </div>
  )
}

export default Skill