import { ShipmentStep } from "./ShipmentStep";

export interface Shipment {
    amount:   number[];
    skills:   number[];
    pickup:   ShipmentStep;
    delivery: ShipmentStep;
}

