import { BookingStatus } from '../enums/booking-status.enum';
export declare class UpdateBookingDto {
    rideId?: string;
    passengerId?: string;
    status?: BookingStatus;
    bookedAt?: Date;
}
