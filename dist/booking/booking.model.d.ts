import { BookingStatus } from './enums/booking-status.enum';
export declare class Booking {
    id: string;
    rideId: string;
    passengerId: string;
    status: BookingStatus;
    bookedAt: Date;
}
export declare class CreateBookingInput {
    rideId: string;
    passengerId: string;
    status: BookingStatus;
}
export declare class UpdateBookingInput {
    rideId?: string;
    passengerId?: string;
    status?: BookingStatus;
    bookedAt?: Date;
}
