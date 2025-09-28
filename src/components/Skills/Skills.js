import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import styles from './Skills.module.css'; // 👈 बदला हुआ

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {

    const { theme } = useContext(ThemeContext) || {};

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className={styles.skills} style={{backgroundColor: theme.secondary}}>
            <div className={styles.skillsHeader}> {/* 👈 बदला हुआ */}
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className={styles.skillsContainer}> {/* 👈 बदला हुआ */}
                <div className={styles['skill--scroll']}> {/* 👈 बदला हुआ */}
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className={styles['skill--box']} key={id} style={skillBoxStyle}> {/* 👈 बदला हुआ */}
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills;