import React from 'react';
import './Main.css';

type MainProps = {
    data: any
}

const Main = ({data}: MainProps) => (
    <div className="main">
        Your IP is {data.query}<br />
        Current country is {data.country}
    </div>
);

export default Main;