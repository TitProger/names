import { Body, Controller, Delete, Get, Post } from '@nestjs/common';

class NameDto {
  name: string;
}

let Names = ['Tit', 'Ramil'];

@Controller('names')
export class NameController {
  @Get()
  getName() {
    return Names;
  }

  @Post()
  saveName(@Body() object: NameDto) {
    Names.push(object.name);
    return Names;
  }

  @Delete()
  deleteName(@Body() object: { name: string }) {
    Names = Names.filter((name) => {
      return name !== object.name;
    });
    return Names;
  }
}
