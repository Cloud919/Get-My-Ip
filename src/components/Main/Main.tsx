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
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_API_KEY}&autoload=false&libraries=services`;
        document.head.appendChild(script);
        script.onload = () => {
            window.kakao.maps.load(() => {
                let container = document.getElementById('map'),
                options = {
                    center: new window.kakao.maps.LatLng(data.lat, data.lon),
                    level: 5
                };
                const map = new window.kakao.maps.Map(container, options);
                const geocoder = new window.kakao.maps.services.Geocoder();
                searchAddrFromCoords(map.getCenter(), displayCenterInfo);
                function searchAddrFromCoords(coords: any, callback: any) {
                    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
                }
                function displayCenterInfo(result: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const infoDiv = document.getElementById('kakaoAddr');
                
                        for(let i = 0; i < result.length; i++) {
                            if (result[i].region_type === 'H') {
                                if (infoDiv) {
                                    infoDiv.innerHTML = result[i].address_name;
                                    break;
                                }
                            }
                        }
                    }    
                }
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
                Location <span id="kakaoAddr">Failed to Load</span>
            </div>
            <div id="map" />
        </div>
    );
} 

export default Main;