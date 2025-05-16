import { Module } from '@nestjs/common';
import { BookingServiceModule } from './booking/booking.module';  // Import the Booking module
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    BookingServiceModule, 
    CqrsModule, // Import the Booking service module
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
