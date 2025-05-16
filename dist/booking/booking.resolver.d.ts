import { BookingServiceService } from './booking.service';
import { CreateBookingInput, UpdateBookingInput } from './booking.model';
export declare class BookingResolver {
    private readonly bookingService;
    constructor(bookingService: BookingServiceService);
    getBookings(): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    }[]>;
    getBookingById(id: string): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    } | null>;
    getBookingsByPassengerId(passengerId: string): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    }[]>;
    getBookingsByRideId(rideId: string): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    }[]>;
    createBooking(data: CreateBookingInput): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    }>;
    updateBooking(id: string, data: UpdateBookingInput): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    }>;
    deleteBooking(id: string): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    }>;
}
