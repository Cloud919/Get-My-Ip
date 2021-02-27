import React from 'react';
import styled from 'styled-components';
import './Main.css';

const Wrapper = styled.div`
    width: 400px;
`;

type MainProps = {
    data: any
}

const Main = ({data}: MainProps) => (
    <div className="main">
        Your IP is {data.query}<br />
        Current country is {data.countryCode}<br />
        <Wrapper id="Map"></Wrapper>
    </div>
);

export default Main;