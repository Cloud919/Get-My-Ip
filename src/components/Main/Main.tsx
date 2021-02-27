import React, { useState, useEffect } from 'react';
import './Main.css';

interface dataProps {
    data: any;
}

interface  addressProps {
    address: any;
}

declare global {
    interface Window {
        kakao: any;
    }
}

const Main: React.FC<dataProps> = props => {
    const [ address, setAddress ] = useState<addressProps>({address: null});
    let data = props.data;
    let mapAddress = address.address || 'Loading...';
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
                const markerPosition  = new window.kakao.maps.LatLng(data.lat, data.lon);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
                const iwContent = `<div style="padding:2px;">${mapAddress} <br><a href="https://map.kakao.com/link/map/${mapAddress},${data.lat},${data.lon}" style="color:blue" target="_blank">큰지도보기</a><br><br></div>`,
                      iwPosition = new window.kakao.maps.LatLng(data.lat, data.lon);
                const infowindow = new window.kakao.maps.InfoWindow({
                    position : iwPosition, 
                    content : iwContent 
                });
                infowindow.open(map, marker); 
                searchAddrFromCoords(map.getCenter(), displayCenterInfo);
                function searchAddrFromCoords(coords: any, callback: any) {
                    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
                }
                function displayCenterInfo(result: any, status: string) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const infoDiv = document.getElementById('kakaoAddr');
                        for(let i = 0; i < result.length; i++) {
                            if (result[i].region_type === 'H') {
                                if (infoDiv) {
                                    if (!address.address) {
                                        setAddress({address: result[i].address_name});
                                        break;
                                    }
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
        <div className="main_page">
            <div className="main_text">
                <span className="ip_country">{data.query}</span><br />
                You are in <span className="ip_country">{data.country}</span><br />
                <span id="kakaoAddr">Loading...</span>
            </div>
            <div id="map" />
        </div>
    );
} 

export default Main;