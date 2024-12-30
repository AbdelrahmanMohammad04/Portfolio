import React from "react";
import styles from './About.module.css'
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl("about/aboutImage.png")} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")}/>
                        <div className={styles.aboutItemText}>
                            <h3>Systems Engineer</h3>
                            <p>I have experience in low level and systems programming</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")}/>
                        <div className={styles.aboutItemText}>
                            <h3>Software Engineer</h3>
                            <p>I have experience in backend development</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")}/>
                        <div className={styles.aboutItemText}>
                            <h3>Site Reliability Engineer</h3>
                            <p>I have experience in site reliability</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}