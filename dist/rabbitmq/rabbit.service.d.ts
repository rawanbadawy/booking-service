export declare class RabbitService {
    private client;
    emit(event: string, message: any): import("rxjs").Observable<any>;
    sendMessage(message: string): import("rxjs").Observable<any>;
}
