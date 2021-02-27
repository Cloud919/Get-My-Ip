import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <nav className="header_main">
                <div className="header_title">
                    <i><FontAwesomeIcon icon={faGithub} size="lg" /></i>
                    <a href="./">Get My IP</a>
                </div>
                <ul className="header_menu">
                    <li><a href="./">Home</a></li>
                    <li><a href="https://github.com/Cloud919">Github</a></li>
                </ul>
            </nav>
        );
    }
}