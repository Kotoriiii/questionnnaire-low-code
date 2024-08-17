import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Config } from './config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AnswerModule } from './answer/answer.module';
import { StatModule } from './stat/stat.module';
import { HealthzModule } from './healthz/healthz.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        process.env[Config.MODE] === 'development'
          ? '.env.development'
          : '.env.production',
      ],
    }),
    MongooseModule.forRoot(process.env[Config.MONGO_URL]),
    QuestionModule,
    UserModule,
    AuthModule,
    AnswerModule,
    StatModule,
    HealthzModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
