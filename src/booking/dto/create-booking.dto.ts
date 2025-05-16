import { IsUUID, IsEnum } from 'class-validator';
import { BookingStatus } from '../enums/booking-status.enum';

export class CreateBookingDto {
  @IsUUID()
  rideId!: string;

  @IsUUID()
  passengerId!: string;

  @IsEnum(BookingStatus)
  status!: BookingStatus;
}
