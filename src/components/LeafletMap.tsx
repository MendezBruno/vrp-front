import React, { useContext } from 'react';
import { LayerGroup, MapContainer, TileLayer, useMap } from 'react-leaflet';
import { LayerContext } from './context/LayerContext';
import '../react-leaflet.css';

import L from 'leaflet';
import  'leaflet-routing-machine'


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import LongMenu from './Menu';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap: React.FC = () => {
  const { points } = useContext(LayerContext);
  const zoom:number = 8;

  return (
    
    <MapContainer center={[-34.72468364086567, -58.26092720031738]} zoom={zoom} scrollWheelZoom={false}>
      <LongMenu points={points}></LongMenu>
      
      <LayerGroup>
        { points.map( point => point) } 
      </LayerGroup> 
      <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
   )
}

export default LeafletMap