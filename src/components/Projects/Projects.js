import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'

// SingleProject ko dynamic import kiya (SSR safe)
const SingleProject = dynamic(() => import('./SingleProject/SingleProject'), { ssr: false });

function Projects() {
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
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme?.secondary || 'white'}}>
                    <div className="projects--header">
                        <h1 style={{color: theme?.primary || 'black'}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 
                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <a href="/projects">
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

export default Projects;
