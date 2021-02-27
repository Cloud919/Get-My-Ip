import React from 'react';
import './Main.css';

const MAP_API_KEY: string = process.env.REACT_APP_MAP_API_KEY || "Wrong API Key Value";

type MainProps = {
    data: any
}

const Main = ({data}: MainProps) => (
    <div className="main">
        Your IP is {data.query}<br />
        Current country is {data.countryCode}<br />
    </div>
);

export default Main;