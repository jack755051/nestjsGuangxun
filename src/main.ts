import { NestFactory } from "@nestjs/core";
import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 在網址前加上後綴
  app.setGlobalPrefix("api");
  //阻止CORS跨網域
  app.enableCors();
  setupSwagger(app);
  await app.listen(3000);
}

function setupSwagger(app: INestApplication) {
  const builder = new DocumentBuilder();
  const config = builder.setTitle("Guangxun").setDescription("提供api給Guangxun專案").setVersion("1.0").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
}

bootstrap();
