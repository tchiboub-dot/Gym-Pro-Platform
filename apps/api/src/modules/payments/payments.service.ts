import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { StripeService } from './stripe.service';
import { CreateCheckoutSessionDto } from '@gympro/shared';

@Injectable()
export class PaymentsService {
  constructor(
    private prisma: PrismaService,
    private stripeService: StripeService,
  ) {}

  async createCheckoutSession(userId: string, dto: CreateCheckoutSessionDto) {
    const plan = await this.prisma.plan.findUnique({
      where: { id: dto.planId },
    });

    if (!plan || !plan.stripePriceId) {
      throw new Error('Invalid plan');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: {
          where: { status: 'ACTIVE' },
          take: 1,
        },
      },
    });

    const session = await this.stripeService.createCheckoutSession({
      priceId: plan.stripePriceId,
      customerId: user.subscriptions[0]?.stripeCustomerId,
      successUrl: dto.successUrl,
      cancelUrl: dto.cancelUrl,
      metadata: {
        userId,
        planId: dto.planId,
        gymLocationId: user.gymLocationId,
      },
    });

    return { sessionId: session.id, url: session.url };
  }

  async createCustomerPortal(userId: string, returnUrl: string) {
    const subscription = await this.prisma.subscription.findFirst({
      where: { userId, stripeCustomerId: { not: null } },
    });

    if (!subscription?.stripeCustomerId) {
      throw new Error('No active subscription');
    }

    const session = await this.stripeService.createCustomerPortalSession(
      subscription.stripeCustomerId,
      returnUrl,
    );

    return { url: session.url };
  }

  async handleWebhook(event: any) {
    // TODO: Implement webhook handlers (checkout.session.completed, etc.)
    console.log('Webhook received:', event.type);
    
    // Store webhook event for idempotency
    await this.prisma.webhookEvent.upsert({
      where: {
        provider_eventId: {
          provider: 'stripe',
          eventId: event.id,
        },
      },
      create: {
        provider: 'stripe',
        eventId: event.id,
        eventType: event.type,
        payload: event,
        status: 'received',
      },
      update: {},
    });

    return { received: true };
  }
}
