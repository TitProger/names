import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { Controler } from './app.controller';
import {NameController} from './name.controller';


@Module({
  imports: [],
  controllers: [Controler, NameController], 
})
export class AppModule {}
