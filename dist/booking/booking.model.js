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
exports.UpdateBookingInput = exports.CreateBookingInput = exports.Booking = void 0;
const graphql_1 = require("@nestjs/graphql");
const booking_status_enum_1 = require("./enums/booking-status.enum");
(0, graphql_1.registerEnumType)(booking_status_enum_1.BookingStatus, { name: 'BookingStatus' });
let Booking = class Booking {
};
exports.Booking = Booking;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Booking.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Booking.prototype, "rideId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Booking.prototype, "passengerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => booking_status_enum_1.BookingStatus),
    __metadata("design:type", String)
], Booking.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Booking.prototype, "bookedAt", void 0);
exports.Booking = Booking = __decorate([
    (0, graphql_1.ObjectType)()
], Booking);
let CreateBookingInput = class CreateBookingInput {
};
exports.CreateBookingInput = CreateBookingInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "rideId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "passengerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => booking_status_enum_1.BookingStatus),
    __metadata("design:type", String)
], CreateBookingInput.prototype, "status", void 0);
exports.CreateBookingInput = CreateBookingInput = __decorate([
    (0, graphql_1.InputType)()
], CreateBookingInput);
let UpdateBookingInput = class UpdateBookingInput {
};
exports.UpdateBookingInput = UpdateBookingInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateBookingInput.prototype, "rideId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateBookingInput.prototype, "passengerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => booking_status_enum_1.BookingStatus, { nullable: true }),
    __metadata("design:type", String)
], UpdateBookingInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateBookingInput.prototype, "bookedAt", void 0);
exports.UpdateBookingInput = UpdateBookingInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateBookingInput);
//# sourceMappingURL=booking.model.js.map