import React from "react"
import Typical from 'react-typical'
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Abdelrahman Mohammad
                </h1>
                <p className={styles.description}>
                    I am a 
                </p>
                <Typical className={styles.description} loop={Infinity} wrapper="b"
                        steps={[
                            'Software Engineer',
                            5000,
                            'Developer',
                            5000,
                            'Computer Scientist',
                            5000,
                            'Wisconsin Badger! 🦡',
                            5000,
                        ]}
                    />
                <a className={styles.contactBtn} href="mailto:AbdelrahmanMohammad89@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}