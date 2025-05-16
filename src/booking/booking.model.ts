import { ObjectType, Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { BookingStatus } from './enums/booking-status.enum';

registerEnumType(BookingStatus, { name: 'BookingStatus' });

@ObjectType()
export class Booking {
  @Field(() => ID)
  id!: string;

  @Field()
  rideId!: string;

  @Field()
  passengerId!: string;

  @Field(() => BookingStatus)
  status!: BookingStatus;

  @Field()
  bookedAt!: Date;
}

@InputType()
export class CreateBookingInput {
  @Field()
  rideId!: string;

  @Field()
  passengerId!: string;

  @Field(() => BookingStatus)
  status!: BookingStatus;

  // ❌ Remove bookedAt from input, it's auto-generated
}

@InputType()
export class UpdateBookingInput {
  @Field({ nullable: true })
  rideId?: string;

  @Field({ nullable: true })
  passengerId?: string;

  @Field(() => BookingStatus, { nullable: true })
  status?: BookingStatus;

  @Field({ nullable: true })
  bookedAt?: Date;
}
