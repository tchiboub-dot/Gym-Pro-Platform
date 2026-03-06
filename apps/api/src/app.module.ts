import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { ClassesModule } from './modules/classes/classes.module';
import { ClassSessionsModule } from './modules/class-sessions/class-sessions.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { LeadsModule } from './modules/leads/leads.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '././.env',
    }),
    PrismaModule,
    HealthModule,
    AuthModule,
    UsersModule,
    BookingsModule,
    ClassesModule,
    ClassSessionsModule,
    PaymentsModule,
    LeadsModule,
  ],
})
export class AppModule {}
