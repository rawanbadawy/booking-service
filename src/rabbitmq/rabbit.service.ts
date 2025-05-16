import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class RabbitService {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'], // RabbitMQ URL, change it if necessary
      queue: 'booking_queue',          // Name of the queue
      queueOptions: {
        durable: true,                 // Ensure the queue survives restarts
      },
    },
  })
  private client!: ClientProxy;

  // Emit event to RabbitMQ
  emit(event: string, message: any) {
    return this.client.emit(event, message);
  }

  // Send a message (for example, if you want to send notifications)
  sendMessage(message: string) {
    return this.client.emit('message_sent', message);
  }
}
