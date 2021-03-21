import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import { ReadNoteDto } from './dto/read-note.dto';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(): Promise<ReadNoteDto[]> {
    return this.notesService.findAll();
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto): Promise<ReadNoteDto> {
    return this.notesService.create(createNoteDto);
  }
}
