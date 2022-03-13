import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { Route } from '../models/Route';
import { Package } from '../models/Package';

interface IuseRoutingDisplay {
    activate: boolean;
    doActivate: (act: boolean) => void;
}

// L.latLng(-34.72468364086567, -58.26092720031738),
// L.latLng(-34.28, -58.26)

let leafletMachineControl = L.Routing.control({
    router: L.Routing.osrmv1({
        serviceUrl: `http://127.0.0.1:5000/route/v1`
    }),
    showAlternatives: true,
    fitSelectedRoutes: false,
    show: false,
    routeWhileDragging: true,
    waypoints: [
        
    ],
})

// the hook Effect will be activated by the click on the button
const useRoutingDisplay = (): any => {

// The hook 'useLeaflet' is provided by the react-leaflet library. 
// This hook allow to access to the Leaflet Context and its variables. 
// It is a simple way to access the map and its content.
    const [waypoints, setWaypoints] = useState<any[]>([]);
    //const [leafletMachineControl, setLeafletMachineControl] = useState(defaultLeafletMachineControl)
    const map = useMap();
    
    
    const displayRoute = (route: Route) => {
        console.log("Voy a graficar la ruta: ", route)
        let auxWaypoint: any [] = []
        route.packages.forEach( (aPackage: Package) => {
            auxWaypoint.push(L.latLng(aPackage.location[1], aPackage.location[0]))
        }) 
        setWaypoints([...auxWaypoint])
    }


    // activate the EventHandler with the useEffect handler
    useEffect(
        () => {
             //   leafletMachineControl.remove()
            if (waypoints.length) {
                leafletMachineControl = L.Routing.control({
                    router: L.Routing.osrmv1({
                        serviceUrl: `http://127.0.0.1:5000/route/v1`
                    }),
                    showAlternatives: true,
                    fitSelectedRoutes: false,
                    show: true,
                    routeWhileDragging: true,
                    waypoints: waypoints,
                })
                leafletMachineControl.addTo(map)
            } else {
                leafletMachineControl.remove()
            }
            
        }, [map, waypoints]
    )

    return {displayRoute}

// add a state to activate the Event
  

}

export default useRoutingDisplay;
