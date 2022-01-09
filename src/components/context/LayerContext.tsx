import { LatLng } from 'leaflet';
import React, { useState } from 'react';

export interface ILayerContex {
    points: any[],
    addPoint: (aPoint: any ) => void
}

const defaultContex: ILayerContex = {
    points: [new LatLng(0,0)],
    addPoint: (aPoint: any ) => {}
}

const LayerContext = React.createContext<ILayerContex>(defaultContex);

const LayerContextProvider = ({ children }: any) => {
    const defaultLatLng: any[] =  [[48.865572, 2.283523]];
    const [points, setPoint] = useState<any>(defaultLatLng);
    const addPoint = (point: any) => { 
        setPoint([points, ...[point]])
        console.log(points);
    }
    const defaultValue = {
        points,
        addPoint
    }
    return (
        <LayerContext.Provider value={defaultValue}>
            {children}
        </LayerContext.Provider>
    )
}

export { LayerContext, LayerContextProvider };
