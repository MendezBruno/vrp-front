import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import  'leaflet-routing-machine';
import 'leaflet-gpx'

interface IuseRoutingDisplay {
    activate: boolean;
    doActivate: (act: boolean) => void;
}

const leafletMachineControl = L.Routing.control({
    router: L.Routing.osrmv1({
        serviceUrl: `http://127.0.0.1:5000/route/v1`
    }),
    showAlternatives: true,
    fitSelectedRoutes: false,
    show: false,
    routeWhileDragging: true,
    waypoints: [
        L.latLng(-34.72468364086567, -58.26092720031738),
        L.latLng(-34.28, -58.26)
    ],
})

// the hook Effect will be activated by the click on the button
const useRoutingDisplay = (): any => {

// The hook 'useLeaflet' is provided by the react-leaflet library. 
// This hook allow to access to the Leaflet Context and its variables. 
// It is a simple way to access the map and its content.
    //const [display, setDisplay] = useState(false);
    //const [leafletMachineControl, setLeafletMachineControl] = useState(defaultLeafletMachineControl)
    const map = useMap();
    
    const displayRoute = (aState: boolean) => {
        console.log("now is: ", aState? "activate": "desactivated")
        //setDisplay(aState)
        leafletMachineControl.addTo(map)
    }


    // activate the EventHandler with the useEffect handler
    useEffect(
        () => {
             //   leafletMachineControl.remove()

        }, [map]
    )

    return {displayRoute}

// add a state to activate the Event
  

}

export default useRoutingDisplay;
