import { useCallback, useContext, useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';
import { LayerContext } from '../components/context/LayerContext';

interface IUseAddMarker {
    activate: boolean;
    doActivate: (act: boolean) => void;
}

// the hook Effect will be activated by the click on the button
const useAddMarker = (selected:boolean): IUseAddMarker => {

// The hook 'useLeaflet' is provided by the react-leaflet library. 
// This hook allow to access to the Leaflet Context and its variables. 
// It is a simple way to access the map and its content.

    const map = useMap();

// the hook useContext is used to access to the previously defined LayerContext.
    const { addPoint, addLocation } = useContext(LayerContext);

// add a state to activate the Event
    const [activate, setActivate] = useState(selected);

    const doActivate = (aState: boolean) => {
        console.log("now is: ", aState? "activate": "desactivated")
        setActivate(aState)
    }

// define the MouseEvent with the useCallback hook 
    const markerEvent = useCallback(
        (e: LeafletMouseEvent) => {
            // if you want to use any event, 
            // be sure that the default is disabled.
            e.originalEvent.preventDefault();
            // create your Marker with the react leaflet component Marker
            addPoint(<Marker position={e.latlng} />);
            addLocation( e.latlng );
            e.originalEvent.stopPropagation();
        }, [addPoint, addLocation]);


    // activate the EventHandler with the useEffect handler
    useEffect(
        () => {
            map?.doubleClickZoom.disable()
            if (activate === true) {
                map?.on('dblclick', markerEvent);
            }
            return () => {
                map?.off('dblclick', markerEvent);
            }
        }, [map, activate, markerEvent]
    )

    return {activate, doActivate}

}

export default useAddMarker;
