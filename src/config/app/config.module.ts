import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';

import configuration from './configuration';

@Module({})
export class DirectoConfigModule {
  static forRoot(config?: ConfigModuleOptions): DynamicModule {
    let extraConfig = [];
    if (config) {
      extraConfig = [...config.load];
    }
    return {
      module: DirectoConfigModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env', '.env.development'],
          load: [configuration, ...extraConfig],
        }),
      ],
    };
  }
}
