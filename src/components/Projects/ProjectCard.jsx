import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";


export const ProjectCard = ({project: { title, imageSrc, desc, skills, demo, source }}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={getImageUrl(imageSrc)} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{desc}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li className={styles.skill} key={id}>{skill}</li>
                    )
                })}
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    )
}