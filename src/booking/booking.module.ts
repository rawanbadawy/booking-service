import { Module } from '@nestjs/common';
import { BookingServiceService } from './booking.service';
import { BookingServiceController } from './booking.controller';
import { BookingResolver } from './booking.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { RabbitService } from '../rabbitmq/rabbit.service'; // Import RabbitMQ Service

@Module({
  controllers: [BookingServiceController],
  providers: [BookingServiceService, BookingResolver, PrismaService, RabbitService],
  exports: [BookingServiceService],
})
export class BookingServiceModule {}
