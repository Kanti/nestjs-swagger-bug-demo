import {Body, Controller, Get} from "@nestjs/common";

import {Message} from "@myworkspace/api-interface";
import {ApiImplicitBody, ApiModelProperty} from "@nestjs/swagger";
import {AppService} from "./app.service";

class Test1Dto {

  readonly abc1: string = '';

  @ApiModelProperty()
  readonly abc2: string = '';
}

class Test2Dto {

  readonly xyz1: string = '';

  @ApiModelProperty()
  readonly xyz2: string = '';
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get("hello")
  getData(): Message {
    return this.appService.getData();
  }

  @Get("test1")
  test1(@Body() test1: Test1Dto): Message {
    return this.appService.getData();
  }

  @Get("test2")
  test2(@Body() test2: Test2Dto): Message {
    return this.appService.getData();
  }

  @Get("aTest1")
  @ApiImplicitBody({
    name: 'test1',
    type: Test1Dto,
  })
  aTest1(@Body() test1: Test1Dto): Message {
    return this.appService.getData();
  }
}
