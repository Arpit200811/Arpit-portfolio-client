import React, { useContext } from 'react';
import styles from './About.module.css'; // 👈 बदला हुआ
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

function About() {
    const { theme } = useContext(ThemeContext) || {};
    return (
        <div className={styles.about} id="about" style={{backgroundColor: theme.secondary}}>
            <div className={styles['line-styling']}> {/* 👈 बदला हुआ */}
              <div className={styles['style-circle']} style={{backgroundColor: theme.primary}}></div> {/* 👈 बदला हुआ */}
              <div className={styles['style-circle']} style={{backgroundColor: theme.primary}}></div> {/* 👈 बदला हुआ */}
              <div className={styles['style-line']} style={{backgroundColor: theme.primary}}></div> {/* 👈 बदला हुआ */}
            </div>
            <div className={styles['about-body']}> {/* 👈 बदला हुआ */}
                <div className={styles['about-description']}> {/* 👈 बदला हुआ */}
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className={styles['about-img']}> {/* 👈 बदला हुआ */}
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default About;