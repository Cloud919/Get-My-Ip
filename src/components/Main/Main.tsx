import React from 'react';

type GreetingProps = {
    data: any
}

const Main: React.FC<GreetingProps> = ({data}) => (
    <div>Your IP is {data.query}</div>
);

export default Main;