import { Module } from '@nestjs/common';
import { NameController } from './name.controller';

@Module({
  imports: [],
  controllers: [NameController],
})
export class AppModule {}
