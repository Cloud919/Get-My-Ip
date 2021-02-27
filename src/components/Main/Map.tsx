import React from 'react';
import styled from 'styled-components';

export default class Map extends React.Component {
    render(){
        return <Wrapper id="Maps" />
    }
}

const Wrapper = styled.div`
    width: 500px;
    height: 400px;
`;