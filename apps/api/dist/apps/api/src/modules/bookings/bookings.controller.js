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
import { Body, Controller, Delete, Headers, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BookingsService } from "./bookings.service.js";
let BookingsController = class BookingsController {
    bookingsService;
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
    }
    async create(body, gymLocationId = "default-location", userId = "demo-member") {
        return this.bookingsService.createBooking({
            gymLocationId,
            userId,
            classSessionId: body.classSessionId,
            idempotencyKey: body.idempotencyKey
        });
    }
    async cancel(bookingId) {
        return this.bookingsService.cancelBooking(bookingId);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, Headers("x-gym-location-id")),
    __param(2, Headers("x-user-id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "create", null);
__decorate([
    Delete(":bookingId"),
    __param(0, Param("bookingId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "cancel", null);
BookingsController = __decorate([
    ApiTags("bookings"),
    Controller("bookings"),
    __metadata("design:paramtypes", [BookingsService])
], BookingsController);
export { BookingsController };
//# sourceMappingURL=bookings.controller.js.map