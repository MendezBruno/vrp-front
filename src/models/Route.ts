import { Package, Start } from "./Package";

    export interface Geojson {
        coordinates: number[][];
        type: string;
    }

    export interface Route {
        transactionId: string;
        start: Start;
        geojson: Geojson;
        packages: Package[];
        distance: number;
        duration: number;
        trip?: any;
    }

