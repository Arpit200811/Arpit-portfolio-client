import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AiOutlineHome } from 'react-icons/ai'

import styles from './BlogPage.module.css'
import { SingleBlog } from './../../components'
import { ThemeContext } from '../../contexts/ThemeContext'
import { blogData } from '../../data/blogData'
import { headerData } from '../../data/headerData'

const BlogPage = () => {
    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext) || {}

    const filteredArticles = blogData.filter((blog) => {
        const content = blog.title + blog.description + blog.date
        return content.toLowerCase().includes(search.toLowerCase())
    })

    const useStyles = makeStyles((t) => ({
        search: {
            color: theme.tertiary,
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.secondary,
            boxShadow:
                theme.type === 'dark'
                    ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060'
                    : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80,
            },
            [t.breakpoints.down('sm')]: {
                width: '350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow:
                theme.type === 'dark'
                    ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050'
                    : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }))

    const classes = useStyles()

    return (
        <div className={styles.blogPage} style={{ backgroundColor: theme.secondary }}>
            <Head>
                <title>{headerData.name} | Blog</title>
            </Head>

            <div className={styles.blogPageHeader} style={{ backgroundColor: theme.primary }}>
                <Link href="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Blogs</h1>
            </div>

            <div className={styles.blogPageContainer}>
                <div className={styles.blogSearch}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search blog..."
                        className={classes.search}
                    />
                </div>

                <div className={styles.blogsContainer}>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        className={styles.blogGrid}
                    >
                        {filteredArticles.reverse().map((blog) => (
                            <SingleBlog
                                key={blog.id}
                                theme={theme}
                                title={blog.title}
                                desc={blog.description}
                                date={blog.date}
                                image={blog.image}
                                url={blog.url}
                                id={blog.id}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
