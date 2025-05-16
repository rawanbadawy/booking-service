"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const booking_service_1 = require("../booking/booking.service");
describe('BookingServiceService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [booking_service_1.BookingServiceService],
        }).compile();
        service = module.get(booking_service_1.BookingServiceService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=booking.service.specs.js.map