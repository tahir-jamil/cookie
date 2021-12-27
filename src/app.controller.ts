import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor() {}
  @Get('get')
  get(@Req() request: Request, @Res() response: Response) {
    // response.send("working")
    response.send(request.cookies);

    // or console.log(request.signedCookies);
    // or console.log(request.signedCookies);
  }

  @Get('set')
  set(@Res() response: Response) {
    response.cookie('key', 'value', {sameSite: 'none', domain: ".localhost", secure: true});
    response.send('cookie set');
  }
}
