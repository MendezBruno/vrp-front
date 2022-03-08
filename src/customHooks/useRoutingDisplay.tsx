import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import  'leaflet-routing-machine'

interface IuseRoutingDisplay {
    activate: boolean;
    doActivate: (act: boolean) => void;
}

const displayControl = L.Routing.control({
    waypoints: [
        L.latLng(-34.72468364086567, -58.26092720031738),
        L.latLng(-34.28, -58.26)
    ],
    routeWhileDragging: true
})

// the hook Effect will be activated by the click on the button
const useRoutingDisplay = (): any => {

// The hook 'useLeaflet' is provided by the react-leaflet library. 
// This hook allow to access to the Leaflet Context and its variables. 
// It is a simple way to access the map and its content.

    const map = useMap();
    displayControl.addTo(map)
// the hook useContext is used to access to the previously defined LayerContext.
    // const { } = useContext(LayerContext);

// add a state to activate the Event
  

}

export default useRoutingDisplay;
