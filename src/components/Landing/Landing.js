import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link as ScrollLink } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./Landing.module.css"; // 👈 बदला हुआ: CSS मॉड्यूल को 'styles' में इम्पोर्ट किया
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    // ... आपका useStyles का कोड जैसा था वैसा ही रहेगा ...
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={styles.landing}> {/* 👈 बदला हुआ */}
      <div className={styles["landing--container"]}> {/* 👈 बदला हुआ */}
        <div
          className={styles["landing--container-left"]} // 👈 बदला हुआ
          style={{ backgroundColor: theme.primary }}
        >
          <div className={styles["lcl--content"]}> {/* 👈 बदला हुआ */}
            {socialsData.linkedIn && (
              <a
                href={socialsData.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  className={styles["landing--social"]} // 👈 बदला हुआ
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className={styles["landing--social"]} // 👈 बदला हुआ
                  style={{ color: theme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className={styles["landing--social"]} // 👈 बदला हुआ
                  style={{ color: theme.secondary }}
                  aria-label="Twitter"
                />
              </a>
            )}
            {socialsData.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                <FaYoutube
                  className={styles["landing--social"]} // 👈 बदला हुआ
                  style={{ color: theme.secondary }}
                  aria-label="YouTube"
                />
              </a>
            )}
            {socialsData.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                <FaBlogger
                  className={styles["landing--social"]} // 👈 बदला हुआ
                  style={{ color: theme.secondary }}
                  aria-label="Blogger"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          className={styles["landing--img"]} // 👈 बदला हुआ
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className={styles["landing--container-right"]} // 👈 बदला हुआ
          style={{ backgroundColor: theme.secondary }}
        >
          <div className={styles["lcr--content"]} style={{ color: theme.tertiary }}> {/* 👈 बदला हुआ */}
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className={styles["lcr-buttonContainer"]}> {/* 👈 बदला हुआ */}
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.resumeBtn}
                >
                  Download CV
                </a>
              )}
              <ScrollLink
                to="contacts"
                smooth={true}
                duration={800}
                offset={-70}
              >
                <Button className={classes.contactBtn}>Contact</Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;