"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let RabbitService = class RabbitService {
    // Emit event to RabbitMQ
    emit(event, message) {
        return this.client.emit(event, message);
    }
    // Send a message (for example, if you want to send notifications)
    sendMessage(message) {
        return this.client.emit('message_sent', message);
    }
};
exports.RabbitService = RabbitService;
__decorate([
    (0, microservices_1.Client)({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'], // RabbitMQ URL, change it if necessary
            queue: 'booking_queue', // Name of the queue
            queueOptions: {
                durable: true, // Ensure the queue survives restarts
            },
        },
    }),
    __metadata("design:type", microservices_1.ClientProxy)
], RabbitService.prototype, "client", void 0);
exports.RabbitService = RabbitService = __decorate([
    (0, common_1.Injectable)()
], RabbitService);
//# sourceMappingURL=rabbit.service.js.map