export declare class HealthController {
    healthz(): {
        status: string;
        service: string;
    };
    readyz(): {
        status: string;
    };
}
