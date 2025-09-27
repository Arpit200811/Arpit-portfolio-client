// import React from 'react'
// import Head from 'next/head'

// import { 
//   Navbar, 
//   Footer, 
//   Landing, 
//   About, 
//   Skills, 
//   Testimonials, 
//   Blog, 
//   Education, 
//   Experience, 
//   Projects, 
//   Services, 
//   Achievement,
//   Contacts 
// } from '../../components'

// import { headerData } from '../../data/headerData'

// const Main = () => {
//     return (
//         <div>
//             <Head>
//                 <title>{headerData.name} - Portfolio</title>
//             </Head>

//             <Navbar />        
//             <Landing />
//             <About />
//             <Education />
//             <Skills />
//             <Experience />
//             <Projects />
//             <Achievement />
//             <Services />
//             <Testimonials />
//             <Blog />
//             <Contacts />
//             <Footer />
//         </div>
//     )
// }

// export default Main
// src/pages/Main/Main.js
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// SSR-safe components
import { 
  Navbar, 
  Footer, 
  About, 
  Skills, 
  Testimonials, 
  Education, 
  Experience, 
  Services, 
  Achievement 
} from '../../components'
import { headerData } from '../../data/headerData'
const BlogComponent = dynamic(() => import('../../components/Blog/Blog'), { ssr: false })
const Landing = dynamic(() => import('../../components/Landing/Landing'), { ssr: false })
const Projects = dynamic(() => import('../../components/Projects/Projects'), { ssr: false })
const Contacts = dynamic(() => import('../../components/Contacts/Contacts'), { ssr: false })

const Main = () => {
    return (
        <div>
            <Head>
                <title>{headerData.name} - Portfolio</title>
            </Head>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects/>         
            <Achievement />
            <Services />
            <Testimonials />
            <BlogComponent />
            <Contacts />     
             <Footer />
        </div>
    )
}

export default Main
