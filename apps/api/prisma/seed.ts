import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create default gym location
  const gymLocation = await prisma.gymLocation.upsert({
    where: { id: 'default-gym-id' },
    update: {},
    create: {
      id: 'default-gym-id',
      name: 'Gym Pro - Centre Ville',
      email: 'contact@gympro.com',
      phone: '+33 1 23 45 67 89',
      address: '123 Rue du Sport',
      city: 'Paris',
      postalCode: '75001',
      country: 'France',
      timezone: 'Europe/Paris',
      currency: 'EUR',
      isActive: true,
    },
  });
  console.log('✅ Gym location created:', gymLocation.name);

  // Create plans
  const plans = await Promise.all([
    prisma.plan.upsert({
      where: { id: 'plan-basic' },
      update: {},
      create: {
        id: 'plan-basic',
        name: 'Basic',
        description: '1 cours par semaine',
        priceMonthly: 29.99,
        priceYearly: 299.99,
        stripePriceId: 'price_basic_monthly',
        maxBookingsPerMonth: 4,
        allowClassBooking: true,
        allowCoachBooking: false,
        features: [
          'Accès salle de sport',
          '4 cours collectifs / mois',
          'Application mobile',
        ],
        isActive: true,
        gymLocationId: gymLocation.id,
      },
    }),
    prisma.plan.upsert({
      where: { id: 'plan-standard' },
      update: {},
      create: {
        id: 'plan-standard',
        name: 'Standard',
        description: '2 cours par semaine',
        priceMonthly: 49.99,
        priceYearly: 499.99,
        stripePriceId: 'price_standard_monthly',
        maxBookingsPerMonth: 8,
        allowClassBooking: true,
        allowCoachBooking: false,
        features: [
          'Tout du plan Basic',
          '8 cours collectifs / mois',
          'Réservation prioritaire',
        ],
        isActive: true,
        gymLocationId: gymLocation.id,
      },
    }),
    prisma.plan.upsert({
      where: { id: 'plan-premium' },
      update: {},
      create: {
        id: 'plan-premium',
        name: 'Premium',
        description: 'Cours illimités + Coaching',
        priceMonthly: 79.99,
        priceYearly: 799.99,
        stripePriceId: 'price_premium_monthly',
        maxBookingsPerMonth: 999,
        allowClassBooking: true,
        allowCoachBooking: true,
        features: [
          'Tout du plan Standard',
          'Cours illimités',
          'Coaching personnalisé',
          'Accès invité',
        ],
        isActive: true,
        gymLocationId: gymLocation.id,
      },
    }),
  ]);
  console.log('✅ Plans created:', plans.length);

  // Create users
  const hashedPassword = await bcrypt.hash('Password123!', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@gympro.com' },
    update: {},
    create: {
      email: 'admin@gympro.com',
      passwordHash: hashedPassword,
      firstName: 'Admin',
      lastName: 'System',
      role: 'ADMIN',
      isEmailVerified: true,
      gymLocationId: gymLocation.id,
    },
  });

  const manager = await prisma.user.upsert({
    where: { email: 'manager@gympro.com' },
    update: {},
    create: {
      email: 'manager@gympro.com',
      passwordHash: hashedPassword,
      firstName: 'Marie',
      lastName: 'Manager',
      role: 'MANAGER',
      isEmailVerified: true,
      gymLocationId: gymLocation.id,
    },
  });

  const coach = await prisma.user.upsert({
    where: { email: 'coach@gympro.com' },
    update: {},
    create: {
      email: 'coach@gympro.com',
      passwordHash: hashedPassword,
      firstName: 'Sarah',
      lastName: 'Coach',
      role: 'COACH',
      isEmailVerified: true,
      bio: 'Certifiée HIIT et CrossFit avec 5 ans d\'expérience',
      gymLocationId: gymLocation.id,
    },
  });

  const member1 = await prisma.user.upsert({
    where: { email: 'member1@gympro.com' },
    update: {},
    create: {
      email: 'member1@gympro.com',
      passwordHash: hashedPassword,
      firstName: 'Jean',
      lastName: 'Dupont',
      role: 'MEMBER',
      isEmailVerified: true,
      gymLocationId: gymLocation.id,
    },
  });

  const member2 = await prisma.user.upsert({
    where: { email: 'member2@gympro.com' },
    update: {},
    create: {
      email: 'member2@gympro.com',
      passwordHash: hashedPassword,
      firstName: 'Sophie',
      lastName: 'Martin',
      role: 'MEMBER',
      isEmailVerified: true,
      gymLocationId: gymLocation.id,
    },
  });

  console.log('✅ Users created:', [admin, manager, coach, member1, member2].length);

  // Create classes
  const classHIIT = await prisma.class.upsert({
    where: { id: 'class-hiit' },
    update: {},
    create: {
      id: 'class-hiit',
      name: 'HIIT 45',
      description: 'Entraînement haute intensité de 45 minutes pour brûler un maximum de calories',
      durationMinutes: 45,
      level: 'INTERMEDIATE',
      maxCapacity: 20,
      isActive: true,
      gymLocationId: gymLocation.id,
      coachId: coach.id,
    },
  });

  const classYoga = await prisma.class.upsert({
    where: { id: 'class-yoga' },
    update: {},
    create: {
      id: 'class-yoga',
      name: 'Yoga Flow',
      description: 'Yoga dynamique pour la flexibilité et la relaxation',
      durationMinutes: 60,
      level: 'BEGINNER',
      maxCapacity: 15,
      isActive: true,
      gymLocationId: gymLocation.id,
      coachId: coach.id,
    },
  });

  const classCrossFit = await prisma.class.upsert({
    where: { id: 'class-crossfit' },
    update: {},
    create: {
      id: 'class-crossfit',
      name: 'CrossFit WOD',
      description: 'Workout of the Day - Force, endurance et technique',
      durationMinutes: 60,
      level: 'ADVANCED',
      maxCapacity: 12,
      isActive: true,
      gymLocationId: gymLocation.id,
      coachId: coach.id,
    },
  });

  console.log('✅ Classes created:', [classHIIT, classYoga, classCrossFit].length);

  // Create class sessions for next 2 weeks
  const sessions = [];
  const today = new Date();
  
  for (let day = 0; day < 14; day++) {
    const date = new Date(today);
    date.setDate(date.getDate() + day);
    
    // Morning HIIT at 7:00
    const morningSession = await prisma.classSession.create({
      data: {
        classId: classHIIT.id,
        startsAt: new Date(date.setHours(7, 0, 0, 0)),
        endsAt: new Date(date.setHours(7, 45, 0, 0)),
        maxCapacity: 20,
        bookedCount: 0,
        gymLocationId: gymLocation.id,
        coachId: coach.id,
      },
    });
    sessions.push(morningSession);

    // Evening Yoga at 18:00
    const eveningSession = await prisma.classSession.create({
      data: {
        classId: classYoga.id,
        startsAt: new Date(date.setHours(18, 0, 0, 0)),
        endsAt: new Date(date.setHours(19, 0, 0, 0)),
        maxCapacity: 15,
        bookedCount: 0,
        gymLocationId: gymLocation.id,
        coachId: coach.id,
      },
    });
    sessions.push(eveningSession);
  }

  console.log('✅ Class sessions created:', sessions.length);

  console.log('🎉 Seed completed successfully!');
  console.log('\n📋 Test accounts:');
  console.log('Admin:   admin@gympro.com / Password123!');
  console.log('Manager: manager@gympro.com / Password123!');
  console.log('Coach:   coach@gympro.com / Password123!');
  console.log('Member1: member1@gympro.com / Password123!');
  console.log('Member2: member2@gympro.com / Password123!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
