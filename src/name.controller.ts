import { Body, Controller, Get, Post } from '@nestjs/common';

const Names = ['Tit', 'Ramil'];
const newNames = [];
@Controller('names')
export class NameController {
  @Get()
  getName() {
    return Names;
  }

  @Post()
  saveName(@Body() object: any) {
    Names.push(object.name);
    return Names;

    // Names.push(name);
    // console.log(name);
  }
}
