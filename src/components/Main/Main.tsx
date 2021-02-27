import React, { useEffect } from 'react';
import styled from 'styled-components';
import './Main.css';

const Wrapper = styled.div`
    width: 500px;
    height: 400px;
`;

interface dataProps {
    data: any;
}

declare global {
    interface Window {
        kakao: any;
    }
}


const Main: React.FC<dataProps> = props => {
    let data = props.data;
    data= JSON.parse(data);
    useEffect(() => {
        let container = document.getElementById('map'),
         options = {
            center: new window.kakao.maps.LatLng(data.lat, data.lon),
            level: 3,
            draggable: false
        };
        let map = new window.kakao.maps.Map(container, options);
        return map;
    })
    return(
    <div className="main">
        Your IP is {data.query}<br />
        Current country is {data.countryCode}<br />
        <Wrapper id="map" />
    </div>
    );
} 

export default Main; 



/* export default class Main extends React.Component {
    render(){
        const data = this.props.data;
        return (
            <div className="main">
                Your IP is 127.0.0.1<br />
                Current country is KR<br />
                <Wrapper id="Map"></Wrapper>
            </div>
        );
    }
} */