import { Inject, Module } from '@nestjs/common';
import {
  ConfigurableModuleClass,
  MY_MODULE_OPTIONS_TOKEN,
} from './my-custom-module.module.definition';

@Module({})
export class MyCustomModuleModule extends ConfigurableModuleClass {
  constructor(@Inject(MY_MODULE_OPTIONS_TOKEN) private options) {
    console.log(options);
    super();
  }
}
