import React from 'react';
import github from '../../assets/footer/github.png';
import linkedin from '../../assets/footer/linkedin.png';

function Footer() {
    return (
        <footer style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="https://github.com/RaeStichter">
                            <img src={github} style={{ width: "15%" }} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/raeann-stichter-34015181/">
                            <img src={linkedin} style={{ width: "15%" }} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;