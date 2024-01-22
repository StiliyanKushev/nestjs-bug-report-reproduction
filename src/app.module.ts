import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyCustomModuleModule } from './my-custom-module/my-custom-module.module';

@Module({
  imports: [
    MyCustomModuleModule.register({ baseUrl: 'https://google1.com' }),
    MyCustomModuleModule.register({ baseUrl: 'https://google2.com' }),
    MyCustomModuleModule.register({ baseUrl: 'https://google3.com' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
