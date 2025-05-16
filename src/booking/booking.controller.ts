import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BookingServiceService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
export class BookingServiceController {
  constructor(private readonly bookingService: BookingServiceService) {}

  @Post()
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Get()
  getBookings() {
    return this.bookingService.getBookings();
  }

  @Get(':id')
  getBookingById(@Param('id') id: string) {
    return this.bookingService.getBookingById(id);
  }

  @Patch(':id')
  updateBooking(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.updateBooking(id, updateBookingDto);
  }

  @Delete(':id')
  deleteBooking(@Param('id') id: string) {
    return this.bookingService.deleteBooking(id);
  }

  @Get('passenger/:passengerId')
  getBookingsByPassengerId(@Param('passengerId') passengerId: string) {
    return this.bookingService.getBookingsByPassengerId(passengerId);
  }

  @Get('ride/:rideId')
  getBookingsByRideId(@Param('rideId') rideId: string) {
    return this.bookingService.getBookingsByRideId(rideId);
  }
}
