import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hello',
        protoPath: join(__dirname, '../src/proto/hello.proto'),
        // Optionally specify the URL; default is localhost:5000
        // url: 'localhost:4000',
      },
    },
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen();
  console.log('gRPC Server is running...');
}
bootstrap();
