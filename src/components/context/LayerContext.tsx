import axios from 'axios';
import { LatLng } from 'leaflet';
import React, { useState } from 'react';
import { Package, Start } from '../../models/Package';

export interface ILayerContex {
    points: any[],
    locations: [],
    route: any,
    addPoint: (aPoint: any ) => void,
    createRoute: (points: any[]) => void,
    addLocation: (latlng: any) => void,

}

const defaultContex: ILayerContex = {
    points: [new LatLng(0,0)],
    locations: [],
    route: {},
    addPoint: (aPoint: any ) => {},
    createRoute: (points: any[]) => {},
    addLocation: (latlng: any) => {}
}

const LayerContext = React.createContext<ILayerContex>(defaultContex);

const LayerContextProvider = ({ children }: any) => {
    const defaultLatLng: any[] =  [[48.865572, 2.283523]];
    const [points, setPoint] = useState<any>([]);
    const [locations, setLocation] = useState<any>([]);
    const [route, setRoute] = useState<any>(null);
    
    const addPoint = (point: any) => { 
        setPoint([...points, [point]])
        console.log(points);
    }

    const addLocation = (latlng: LatLng) => {
        setLocation([...locations, [latlng.lng, latlng.lat]])
        console.log(locations);
    }

    const createRoute = async () => {
        const aPackages: Package[] = []
        locations.forEach( (location: any) => {
            aPackages.push({ packageId: Math.round(Math.random()*10000), location: location  })
        })
        const start: Start | undefined = { location: aPackages.shift()?.location}
        const packageDTO = {
            transactionId: (Math.round(Math.random()*10000)).toString(),
            start: start,
            packages: aPackages
        }
        try {  
            const { data } = await axios.post('http://127.0.0.1:5001/orsm/v2/trip?info=false&steps=false', packageDTO)
            console.log("route response: ", data);
            setRoute(data.route);
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
              console.log("Axios error: ", error);
            } else {
              console.log("Another error: ", error);
            }
        }

        
    }
    const defaultValue = {
        points,
        locations,
        route,
        addPoint,
        addLocation,
        createRoute,
        
    }
    return (
        <LayerContext.Provider value={defaultValue}>
            {children}
        </LayerContext.Provider>
    )
}

export { LayerContext, LayerContextProvider };
