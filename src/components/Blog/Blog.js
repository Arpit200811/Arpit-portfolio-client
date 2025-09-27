import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'

// SingleBlog ko dynamic import kiya (SSR safe)
const SingleBlog = dynamic(() => import('./SingleBlog/SingleBlog'), { ssr: false });

function Blog() {
    const { theme } = useContext(ThemeContext) || {}

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme?.tertiary || 'black', 
            backgroundColor: theme?.primary || 'white',
            "&:hover": {
                color: theme?.secondary || 'gray', 
                backgroundColor: theme?.primary || 'white',
            }
        },
        viewArr : {
            color: theme?.tertiary || 'black', 
            backgroundColor: theme?.secondary70 || '#ddd',
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme?.tertiary || 'black', 
                backgroundColor: theme?.secondary || 'gray',
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {blogData.length > 0 && (
                <div className="blog" id="blog" style={{backgroundColor: theme?.secondary || 'white'}}>
                    <div className="blog--header">
                        <h1 style={{color: theme?.primary || 'black'}}>Blog</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 3).reverse().map(blog => (
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
                                <a href="/blog">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Blog;
