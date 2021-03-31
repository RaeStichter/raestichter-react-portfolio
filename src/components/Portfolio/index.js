import React, { useState } from 'react';
import ProjectList from '../ProjectList';

function Portfolio() {

    const [projects] = useState([
        {
          name: 'Paranormal Tourism',
          photo: 'paranormal',
          type: 'Full Stack',
          deployLink: 'https://paranormal-tourism.herokuapp.com/',
          githubLink: 'https://github.com/RaeStichter/paranormal-tourism',
        },
        {
          name: 'Covid Tracker',
          photo: 'covid',
          type: 'JavaScript, API',
          deployLink: 'https://raestichter.github.io/covid-tracker/',
          githubLink: 'https://github.com/RaeStichter/covid-tracker',
        },
        {
            name: 'Weather Dashboard',
            photo: 'weather',
            type: 'JavaScript',
            deployLink: 'https://raestichter.github.io/weather-dashboard/',
            githubLink: 'https://github.com/RaeStichter/weather-dashboard',
        },
        {
            name: 'Budget Tracker',
            photo: 'budget',
            type: 'PWA, MongoDB, Express, Node.js, JavaScript',
            deployLink: 'https://warm-badlands-82966.herokuapp.com/',
            githubLink: 'https://github.com/RaeStichter/budget-tracker',
        },
        {
            name: 'Note Taker App',
            photo: 'notes',
            type: 'JavaScript',
            deployLink: 'https://aqueous-beyond-57005.herokuapp.com/',
            githubLink: 'https://github.com/RaeStichter/note-taker',
        },
        {
            name: 'Password Generator',
            photo: 'lock',
            type: 'JavaScript',
            deployLink: 'https://raestichter.github.io/password-generator/',
            githubLink: 'https://github.com/RaeStichter/password-generator',
        },
    
      ]);

    //const { name, description } = currentCategory;
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="flex-row">
                {projects.map((image) => (
                    <ProjectList
                        name={image.name}
                        src={require(`../../assets/projectImages/${image.photo}.jpg`).default}
                        alt={image.name}
                        key={image.name}
                        type={image.type}
                        deployLink={image.deployLink}
                        githubLink={image.githubLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;