import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv';

dotenv.config(
  {
    path: process.cwd() + '/.env'
  }
);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env[ "DATABASE_HOST" ],
      port: parseInt( process.env[ "DATABASE_PORT" ] ),
      username: process.env[ "DATABASE_USER" ],
      password: process.env[ "DATABASE_PASSWORD" ],
      database: process.env[ "DATABASE_NAME" ],
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
