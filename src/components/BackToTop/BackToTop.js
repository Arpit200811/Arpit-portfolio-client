import React, { useState, useContext, useEffect } from 'react'; // 👈 useEffect को इम्पोर्ट किया
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './BackToTop.module.css'; // 👈 बदला हुआ

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext) || {};

    // 👇 यह पूरा हिस्सा बदला गया है
    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            } else if (scrolled <= 300) {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisible);

        // कंपोनेंट हटने पर listener को साफ करें (memory leak से बचने के लिए)
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '3rem',
            color: theme.tertiary,
        },
    }));

    const classes = useStyles();

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className={styles.backToTop} // 👈 बदला हुआ
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className={classes.icon} />
            </button>
        </div>
    );
}

export default BackToTop;