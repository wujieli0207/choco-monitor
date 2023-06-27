import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { enableSwagger } from 'app.environment';
import { SwaggerConstants } from 'common/constant/server.enum';

export function initSwagger(app: INestApplication) {
  if (!enableSwagger) return;

  const options = new DocumentBuilder()
    .setTitle(SwaggerConstants.Title)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
