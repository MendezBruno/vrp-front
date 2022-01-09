export interface Job {
    id:            number;
    service:       number;
    amount:        number[];
    location:      number[];
    skills:        number[];
    time_windows?: Array<number[]>;
}