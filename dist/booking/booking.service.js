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
exports.BookingServiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const rabbit_service_1 = require("../rabbitmq/rabbit.service");
let BookingServiceService = class BookingServiceService {
    constructor(prisma, rabbitMQService) {
        this.prisma = prisma;
        this.rabbitMQService = rabbitMQService;
    }
    async createBooking(createBookingDto) {
        const currentDate = new Date();
        const bookingData = {
            ...createBookingDto,
            bookedAt: currentDate,
        };
        const booking = await this.prisma.booking.create({
            data: bookingData,
        });
        await this.rabbitMQService.emit('booking.created', {
            rideId: booking.rideId,
            passengerId: booking.passengerId,
            bookedAt: booking.bookedAt,
        });
        return booking;
    }
    async getBookings() {
        return await this.prisma.booking.findMany();
    }
    async getBookingById(id) {
        return await this.prisma.booking.findUnique({ where: { id } });
    }
    async updateBooking(id, updateBookingDto) {
        return await this.prisma.booking.update({
            where: { id },
            data: updateBookingDto,
        });
    }
    async deleteBooking(id) {
        return await this.prisma.booking.delete({ where: { id } });
    }
    async getBookingsByPassengerId(passengerId) {
        return await this.prisma.booking.findMany({ where: { passengerId } });
    }
    async getBookingsByRideId(rideId) {
        return await this.prisma.booking.findMany({ where: { rideId } });
    }
};
exports.BookingServiceService = BookingServiceService;
exports.BookingServiceService = BookingServiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        rabbit_service_1.RabbitService])
], BookingServiceService);
//# sourceMappingURL=booking.service.js.map