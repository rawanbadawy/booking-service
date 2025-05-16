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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const booking_service_1 = require("./booking.service");
const booking_model_1 = require("./booking.model");
let BookingResolver = class BookingResolver {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async getBookings() {
        return this.bookingService.getBookings();
    }
    async getBookingById(id) {
        return this.bookingService.getBookingById(id);
    }
    async getBookingsByPassengerId(passengerId) {
        return this.bookingService.getBookingsByPassengerId(passengerId);
    }
    async getBookingsByRideId(rideId) {
        return this.bookingService.getBookingsByRideId(rideId);
    }
    async createBooking(data) {
        return this.bookingService.createBooking(data);
    }
    async updateBooking(id, data) {
        return this.bookingService.updateBooking(id, data);
    }
    async deleteBooking(id) {
        return this.bookingService.deleteBooking(id);
    }
};
exports.BookingResolver = BookingResolver;
__decorate([
    (0, graphql_1.Query)(() => [booking_model_1.Booking]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "getBookings", null);
__decorate([
    (0, graphql_1.Query)(() => booking_model_1.Booking, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "getBookingById", null);
__decorate([
    (0, graphql_1.Query)(() => [booking_model_1.Booking]),
    __param(0, (0, graphql_1.Args)('passengerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "getBookingsByPassengerId", null);
__decorate([
    (0, graphql_1.Query)(() => [booking_model_1.Booking]),
    __param(0, (0, graphql_1.Args)('rideId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "getBookingsByRideId", null);
__decorate([
    (0, graphql_1.Mutation)(() => booking_model_1.Booking),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_model_1.CreateBookingInput]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "createBooking", null);
__decorate([
    (0, graphql_1.Mutation)(() => booking_model_1.Booking),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, booking_model_1.UpdateBookingInput]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "updateBooking", null);
__decorate([
    (0, graphql_1.Mutation)(() => booking_model_1.Booking),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "deleteBooking", null);
exports.BookingResolver = BookingResolver = __decorate([
    (0, graphql_1.Resolver)(() => booking_model_1.Booking),
    __metadata("design:paramtypes", [booking_service_1.BookingServiceService])
], BookingResolver);
//# sourceMappingURL=booking.resolver.js.map