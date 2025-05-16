"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServiceModule = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const booking_controller_1 = require("./booking.controller");
const booking_resolver_1 = require("./booking.resolver");
const prisma_service_1 = require("../prisma/prisma.service");
const rabbit_service_1 = require("../rabbitmq/rabbit.service"); // Import RabbitMQ Service
let BookingServiceModule = class BookingServiceModule {
};
exports.BookingServiceModule = BookingServiceModule;
exports.BookingServiceModule = BookingServiceModule = __decorate([
    (0, common_1.Module)({
        controllers: [booking_controller_1.BookingServiceController],
        providers: [booking_service_1.BookingServiceService, booking_resolver_1.BookingResolver, prisma_service_1.PrismaService, rabbit_service_1.RabbitService],
        exports: [booking_service_1.BookingServiceService],
    })
], BookingServiceModule);
//# sourceMappingURL=booking.module.js.map