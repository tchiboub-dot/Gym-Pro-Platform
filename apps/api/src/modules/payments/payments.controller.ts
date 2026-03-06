import { Controller, Post, Body, UseGuards, Request, RawBodyRequest, Req } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateCheckoutSessionDto } from '@gympro/shared';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('checkout-session')
  @UseGuards(JwtAuthGuard)
  async createCheckoutSession(@Request() req, @Body() dto: CreateCheckoutSessionDto) {
    return this.paymentsService.createCheckoutSession(req.user.id, dto);
  }

  @Post('customer-portal')
  @UseGuards(JwtAuthGuard)
  async createCustomerPortal(@Request() req, @Body() body: { returnUrl: string }) {
    return this.paymentsService.createCustomerPortal(req.user.id, body.returnUrl);
  }

  @Post('webhooks/stripe')
  async handleStripeWebhook(@Req() req: RawBodyRequest<Request>) {
    // TODO: Verify signature from raw body
    const event = req.body;
    return this.paymentsService.handleWebhook(event);
  }
}
