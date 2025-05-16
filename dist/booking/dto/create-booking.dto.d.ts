import { BookingStatus } from '../enums/booking-status.enum';
export declare class CreateBookingDto {
    rideId: string;
    passengerId: string;
    status: BookingStatus;
}
