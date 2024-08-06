import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Config } from './config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AnswerModule } from './answer/answer.module';
import { StatModule } from './stat/stat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env[Config.MONGO_HOST]}:${process.env[Config.MONGO_PORT]}/${process.env[Config.MONGO_DATABASE]}`,
    ),
    QuestionModule,
    UserModule,
    AuthModule,
    AnswerModule,
    StatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
