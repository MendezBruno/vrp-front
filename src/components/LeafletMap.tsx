import React, { useContext } from 'react';
import { LatLngTuple } from 'leaflet';
import { LayerGroup, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LayerContext } from './context/LayerContext';
import '../react-leaflet.css';



import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import AddMarkerButton from './AddButtonMarker';
import LongMenu from './Menu';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap: React.FC = () => {
  const { points } = useContext(LayerContext);
  const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
  const zoom:number = 8;
  
  return (
    
    <MapContainer center={[48.865572, 2.283523]} zoom={8} scrollWheelZoom={false}>
      {/* <AddMarkerButton/> */}
      <LongMenu></LongMenu>
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