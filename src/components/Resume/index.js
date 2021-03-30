// downliad
//front end back end

import React from 'react';

function Resume() {
    return (
        <section className="my-5">
            <h1 id="resume">Resume</h1>            
            <div>
                <p>Downloadable <a href="resume.com">Resume Link</a></p>
            </div>
            <h2>Front End</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>
            <h2>Back End</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
            </ul>
        </section>
    );
}

export default Resume;