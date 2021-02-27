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

declare var kakao: any;


const Main: React.FC<dataProps> = props => {
    let data = props.data;
    data= JSON.parse(data);
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_API_KEY}&autoload=false`;
        document.head.appendChild(script);
        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById('map'),
                options = {
                    center: new kakao.maps.LatLng(data.lat, data.lon),
                    level: 3,
                    draggable: false
                };
                const map = new kakao.maps.Map(container, options);
                return map;
            });
        }
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