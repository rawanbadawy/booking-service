import { IsUUID, IsEnum, IsDate, IsOptional } from 'class-validator';
import { BookingStatus } from '../enums/booking-status.enum';

export class UpdateBookingDto {
  @IsUUID()
  @IsOptional()
  rideId?: string;

  @IsUUID()
  @IsOptional()
  passengerId?: string;

  @IsEnum(BookingStatus)
  @IsOptional()
  status?: BookingStatus;

  @IsDate()
  @IsOptional()
  bookedAt?: Date;
}
