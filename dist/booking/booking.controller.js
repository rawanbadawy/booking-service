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
exports.BookingServiceController = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const create_booking_dto_1 = require("./dto/create-booking.dto");
const update_booking_dto_1 = require("./dto/update-booking.dto");
let BookingServiceController = class BookingServiceController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    createBooking(createBookingDto) {
        return this.bookingService.createBooking(createBookingDto);
    }
    getBookings() {
        return this.bookingService.getBookings();
    }
    getBookingById(id) {
        return this.bookingService.getBookingById(id);
    }
    updateBooking(id, updateBookingDto) {
        return this.bookingService.updateBooking(id, updateBookingDto);
    }
    deleteBooking(id) {
        return this.bookingService.deleteBooking(id);
    }
    getBookingsByPassengerId(passengerId) {
        return this.bookingService.getBookingsByPassengerId(passengerId);
    }
    getBookingsByRideId(rideId) {
        return this.bookingService.getBookingsByRideId(rideId);
    }
};
exports.BookingServiceController = BookingServiceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_booking_dto_1.CreateBookingDto]),
    __metadata("design:returntype", void 0)
], BookingServiceController.prototype, "createBooking", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookingServiceController.prototype, "getBookings", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingServiceController.prototype, "getBookingById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_booking_dto_1.UpdateBookingDto]),
    __metadata("design:returntype", void 0)
], BookingServiceController.prototype, "updateBooking", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingServiceController.prototype, "deleteBooking", null);
__decorate([
    (0, common_1.Get)('passenger/:passengerId'),
    __param(0, (0, common_1.Param)('passengerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingServiceController.prototype, "getBookingsByPassengerId", null);
__decorate([
    (0, common_1.Get)('ride/:rideId'),
    __param(0, (0, common_1.Param)('rideId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingServiceController.prototype, "getBookingsByRideId", null);
exports.BookingServiceController = BookingServiceController = __decorate([
    (0, common_1.Controller)('bookings'),
    __metadata("design:paramtypes", [booking_service_1.BookingServiceService])
], BookingServiceController);
//# sourceMappingURL=booking.controller.js.map