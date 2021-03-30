import React from 'react';
import coverImage from "../../assets/cover/portfolio-pic.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About me</h1>
            <img src={coverImage} className="my-2" style={{ width: "15%" }} alt="cover" />
            <div>
                I am a Quality Engineer working in Research and Development in the Medical Device Industry.
                My aim is to enhance my current capabilities working in engineering with that of a full stack developer.
            </div>
        </section>
    );
}

export default About;