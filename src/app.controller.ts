import { Controller, Delete, Get, Patch } from "@nestjs/common";

let t=0

@Controller()
export class Controler {

  // @Get()    // ПОЛУЧИТЬ
  // @Delete() // УДАЛИТЬ
  // @Post()   // СОХРАНИТЬ
  // @Patch()  // ИЗМЕНЕНИЕ
  getNambers () {
    t=t+2;

    return t
  }
}