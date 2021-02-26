import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <a href="./" className="logo">Get My IP</a>
                <div className="header-right">
                    <a href="./">Home</a>
                    <a href="https://github.com/Cloud919" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        );
    }
}