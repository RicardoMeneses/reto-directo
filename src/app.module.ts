import { Module } from '@nestjs/common';
import { DirectoConfigModule } from './config/app/config.module';

@Module({
  imports: [DirectoConfigModule.forRoot()],
})
export class AppModule {}
