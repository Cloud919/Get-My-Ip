import React, { useEffect } from 'react';
import styled from 'styled-components';
import './Main.css';

const Map = styled.div`
    width: 600px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -300px;
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
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_API_KEY}&autoload=false`;
        document.head.appendChild(script);
        script.onload = () => {
            window.kakao.maps.load(() => {
                let container = document.getElementById('map'),
                options = {
                    center: new window.kakao.maps.LatLng(data.lat, data.lon),
                    level: 3,
                    draggable: true
                };
                const map = new window.kakao.maps.Map(container, options);
                return map;
            });
        }
    })
    return(
        <div className="main">
            <div className="out_box">
                Your IP is {data.query}<br />
                Current country is {data.countryCode}<br />
                <Map id="map" />
            </div>
        </div>
    );
} 

export default Main;