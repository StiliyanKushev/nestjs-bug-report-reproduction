import { ConfigurableModuleBuilder } from '@nestjs/common';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN: MY_MODULE_OPTIONS_TOKEN,
} = new ConfigurableModuleBuilder<{
  baseUrl?: string;
}>().build();
