import "reflect-metadata";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import { AppModule } from "./main/app.module.js";
async function bootstrap() {
    const app = await NestFactory.create(AppModule, { bufferLogs: true });
    app.setGlobalPrefix("v1");
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: "1"
    });
    app.use(helmet({
        contentSecurityPolicy: false
    }));
    app.enableCors({
        origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
        credentials: false
    });
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    const swaggerConfig = new DocumentBuilder()
        .setTitle("Gym Pro Platform API")
        .setDescription("Gym operations, bookings, subscriptions and payments API")
        .setVersion("1.0.0")
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("v1/docs", app, document);
    await app.listen(process.env.PORT ? Number(process.env.PORT) : 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map