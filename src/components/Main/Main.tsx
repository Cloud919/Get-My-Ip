import React, { useEffect } from 'react';
import './Main.css';

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
                    level: 3
                };
                const map = new window.kakao.maps.Map(container, options);
                return map;
            });
        }
    })
    return(
        <div className="main">
            <div className="main_text">
                Your IP is<br />
                <span className="ip">{data.query}</span><br />
                Current country is <span className="">{data.countryCode}</span><br />
                <span id="kakaoAddr" />
            </div>
            <div id="map" />
        </div>
    );
} 

export default Main;