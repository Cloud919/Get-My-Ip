import React from 'react';
import './Main.css';

type GreetingProps = {
    data: any
}

const Main: React.FC<GreetingProps> = ({data}) => (
    <div className="main">Your IP is {data.query}</div>
);

export default Main;