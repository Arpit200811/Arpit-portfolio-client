import React from 'react';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import styles from './SingleBlog.module.css'; // 👈 बदला हुआ

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <Fade bottom>
            <a className={styles.singleBlog} key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.primary400}}>
                <div className={styles['singleBlog--image']} style={{backgroundColor: theme.secondary}}>
                    <img src={image ? image : placeholder} alt={title} />
                </div>
                <div className={styles['singleBlog--body']}>
                    <p style={{color: theme.tertiary}}>{date}</p>
                    <h3 style={{color: theme.secondary}}>{title}</h3>
                    <h6 style={{color: theme.secondary}}>{desc}</h6>
                </div>
            </a>
        </Fade>
    )
}

export default SingleBlog;