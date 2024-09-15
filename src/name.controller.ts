import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

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

  @Patch()
  updateName(@Body() object: { oldName: string; newName: string }) {
    function del(name: string): boolean {
      return object.oldName !== name;
    }

    const bezOldNameNames = Names.filter(del);
    if (bezOldNameNames.length < Names.length) {
      Names = bezOldNameNames;
      Names.push(object.newName);
      return Names;
    } else return Names;
  }
}
