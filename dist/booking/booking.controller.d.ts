import { BookingServiceService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingServiceController {
    private readonly bookingService;
    constructor(bookingService: BookingServiceService);
    createBooking(createBookingDto: CreateBookingDto): Promise<{
        rideId: string;
        passengerId: string;
        status: string;
        bookedAt: Date;
        id: string;
    }>;
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
    updateBooking(id: string, updateBookingDto: UpdateBookingDto): Promise<{
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
}
