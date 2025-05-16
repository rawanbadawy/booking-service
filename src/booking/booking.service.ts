import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { RabbitService } from '../rabbitmq/rabbit.service';

@Injectable()
export class BookingServiceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rabbitMQService: RabbitService,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto) {
    const currentDate = new Date();

    const bookingData = {
      ...createBookingDto,
      bookedAt: currentDate,
    };

    const booking = await this.prisma.booking.create({
      data: bookingData,
    });

    await this.rabbitMQService.emit('booking.created', {
      rideId: booking.rideId,
      passengerId: booking.passengerId,
      bookedAt: booking.bookedAt,
    });

    return booking;
  }

  async getBookings() {
    return await this.prisma.booking.findMany();
  }

  async getBookingById(id: string) {
    return await this.prisma.booking.findUnique({ where: { id } });
  }

  async updateBooking(id: string, updateBookingDto: UpdateBookingDto) {
    return await this.prisma.booking.update({
      where: { id },
      data: updateBookingDto,
    });
  }

  async deleteBooking(id: string) {
    return await this.prisma.booking.delete({ where: { id } });
  }

  async getBookingsByPassengerId(passengerId: string) {
    return await this.prisma.booking.findMany({ where: { passengerId } });
  }

  async getBookingsByRideId(rideId: string) {
    return await this.prisma.booking.findMany({ where: { rideId } });
  }
}
