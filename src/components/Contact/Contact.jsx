import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Reach me at any of these links!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} />
                    <a href="mailto:abdelrahmanmohammad89@gmail.com">AbdelrahmanMohammad89@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} />
                    <a href="https://www.linkedin.com/in/amohammad04/">linkedin.com/amohammad04</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} />
                    <a href="https://github.com/AbdelrahmanMohammad04">github.com/AbdelrahmanMohammad04</a>
                </li>
            </ul>
        </footer>
    )
}