import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './models/create-message.dto';
// import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('List messages');
  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
