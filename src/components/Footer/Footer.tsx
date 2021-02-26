import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <div className="footer_inner">
                    <div className="footer_icon">
                        <a href="https://github.com/Cloud919" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        <a href="mailto:mswn0919@kakao.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                    </div>
                </div>
            </div>
        );
    }
}