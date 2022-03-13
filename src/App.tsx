import React from 'react';
import './App.css';
import './react-leaflet.css';

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { LayerContextProvider } from './components/context/LayerContext';
import LeafletMap from './components/LeafletMap';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const App = () => {
  // return (
  //     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  //       <TileLayer
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //     <Marker position={[51.505, -0.09]}>
  //       <Popup>
  //         A pretty CSS3 popup. <br /> Easily customizable.
  //       </Popup>
  //     </Marker>
  //   </MapContainer>
  // );


  return (
    <LayerContextProvider>
        <LeafletMap />
    </LayerContextProvider>
  )
}

export default App;
