import React, { useContext } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import "./Blog.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { blogData } from "../../data/blogData";
import SingleBlog from "./SingleBlog/SingleBlog";

function Blog() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      border: "none",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      fontWeight: 500,
      borderRadius: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70 || theme.secondary,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {blogData.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>

          <div className="blog--body">
            <div className="blog--bodyContainer">
              {blogData
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <SingleBlog
                    theme={theme}
                    title={blog.title}
                    desc={blog.description}
                    date={blog.date}
                    image={blog.image}
                    url={blog.url}
                    key={blog.id}
                    id={blog.id}
                  />
                ))}
            </div>

            {blogData.length > 3 && (
              <div className="blog--viewAll">
                <Link href="/blog" passHref>
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;
