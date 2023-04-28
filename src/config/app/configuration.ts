import { config as dotEnvConf } from 'dotenv';

dotEnvConf();

export type DirectoConfig = typeof config;

const config = {
  port: process.env.PORT || 4000,
};

export default () => config;
