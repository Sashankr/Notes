import React from 'react'
import Fade from 'react-reveal/Fade';

import '../styles/Landing.css'
import StickNotes from '../assets/sticky-notes.png'

const Landing = () => {
    return (
        <div className='landing'>
            <Fade top>
                <section>
                    <h1 className='landing__title'>Notes</h1>
                    <h2 className='landing__subtitle'>An app built with React to help you take notes online</h2>
                    <p className='landing__article'>All your online notes in one place.</p>
                </section>
            </Fade>

            <Fade bottom>
                <aside className='landing__image'>
                    <img src={StickNotes} alt="sticky-notes" />
                </aside>
            </Fade>
        </div>
    )
}

export default Landing