import { Module } from '@nestjs/common';
import { DirectoConfigModule } from './config/app/config.module';
import { ChallengeModule } from './modules/challenge/challenge.module';

@Module({
  imports: [DirectoConfigModule.forRoot(), ChallengeModule],
})
export class AppModule {}
