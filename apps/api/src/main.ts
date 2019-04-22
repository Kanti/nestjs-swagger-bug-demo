/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const swaggerOptions = new DocumentBuilder()
    .setTitle('BugDemo')
    .setDescription("Bug Demo Description")
    .setVersion('1.0')
    .setBasePath('api')
    .setSchemes('http')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('swagger', app, swaggerDocument);


  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
