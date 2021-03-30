import React from 'react';
import github from '../../assets/footer/github.png';
import linkedin from '../../assets/footer/linkedin.png';

function Footer() {
    return (
        <footer className="site-info">
            <nav>
                <ul className="social-links">
                    <li>
                        <a href="https://github.com/RaeStichter">
                            <img src={github} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/raeann-stichter-34015181/">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;