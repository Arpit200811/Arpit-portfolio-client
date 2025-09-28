import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './Education.module.css'; // 👈 बदला हुआ
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData';

function Education() {

    const { theme } = useContext(ThemeContext) || {};
    return (
        <div className={styles.education} id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className={styles['education-body']}> {/* 👈 बदला हुआ */}
                <div className={styles['education-description']}> {/* 👈 बदला हुआ */}
                    <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className={styles['education-image']}> {/* 👈 बदला हुआ */}
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education;