import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { RabbitService } from '../rabbitmq/rabbit.service';
export declare class BookingServiceService {
    private readonly prisma;
    private readonly rabbitMQService;
    constructor(prisma: PrismaService, rabbitMQService: RabbitService);
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
