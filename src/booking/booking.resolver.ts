import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookingServiceService } from './booking.service';
import { Booking, CreateBookingInput, UpdateBookingInput } from './booking.model';

@Resolver(() => Booking)
export class BookingResolver {
  constructor(private readonly bookingService: BookingServiceService) { }

  @Query(() => [Booking])
  async getBookings() {
    return this.bookingService.getBookings();
  }

  @Query(() => Booking, { nullable: true })
  async getBookingById(@Args('id') id: string) {
    return this.bookingService.getBookingById(id);
  }

  @Query(() => [Booking])
  async getBookingsByPassengerId(@Args('passengerId') passengerId: string) {
    return this.bookingService.getBookingsByPassengerId(passengerId);
  }

  @Query(() => [Booking])
  async getBookingsByRideId(@Args('rideId') rideId: string) {
    return this.bookingService.getBookingsByRideId(rideId);
  }

  @Mutation(() => Booking)
  async createBooking(@Args('data') data: CreateBookingInput) {
    return this.bookingService.createBooking(data);
  }

  @Mutation(() => Booking)
  async updateBooking(@Args('id') id: string, @Args('data') data: UpdateBookingInput) {
    return this.bookingService.updateBooking(id, data);
  }

  @Mutation(() => Booking)
  async deleteBooking(@Args('id') id: string) {
    return this.bookingService.deleteBooking(id);
  }
}
