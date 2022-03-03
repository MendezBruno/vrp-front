import axios from 'axios';
import { LatLng } from 'leaflet';
import React, { useState } from 'react';
import { Package } from '../../models/Package';

export interface ILayerContex {
    points: any[],
    addPoint: (aPoint: any ) => void,
    createRoute: (points: any[]) => void,
    addLocation: (latlng: any) => void,

}

const defaultContex: ILayerContex = {
    points: [new LatLng(0,0)],
    addPoint: (aPoint: any ) => {},
    createRoute: (points: any[]) => {},
    addLocation: (latlng: any) => {}
}

const LayerContext = React.createContext<ILayerContex>(defaultContex);

const LayerContextProvider = ({ children }: any) => {
    // const defaultLatLng: any[] =  [[48.865572, 2.283523]];
    const [points, setPoint] = useState<any>([]);
    const [locations, setLocation] = useState<any>([]);

    const [route, setRoute] = useState<any>(null);
    const addPoint = (point: any) => { 
        setPoint([points, ...[point]])
        console.log(points);
    }

    const addLocation = (latlng: any) => {
        setLocation([locations, ...[latlng]])
        console.log(locations);
    }

    const createRoute = async () => {
        const aPackages: Package[] = []
        locations.forEach( (location: any) => {
            aPackages.push({ packageId: Math.random()*10000, location: location  })
        })
        const start: Package | undefined = aPackages.shift()
        const packageDTO = {
            transactionId: (Math.random()*10000).toString(),
            start: start,
            packages: aPackages
        }
        try {
            const { data } = await axios.post('http://localhost:5000/orsm/v2/trip', packageDTO);
            console.log("route response: ",data);
            setRoute(data);
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
        addPoint,
        addLocation,
        createRoute
    }
    return (
        <LayerContext.Provider value={defaultValue}>
            {children}
        </LayerContext.Provider>
    )
}

export { LayerContext, LayerContextProvider };
