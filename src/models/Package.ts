export interface Start {
    location: number[];
}

export interface Package {
    location: number[];
    packageId: number;
}

export interface PackageDTO {
    transactionId: string;
    start: Start;
    packages: Package[];
}

