import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { ReadNoteDto } from './dto/read-note.dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note, NoteDocument } from './schemas/note.schema';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<NoteDocument>,
  ) {}

  async findAll(): Promise<ReadNoteDto[]> {
    const notes: Note[] = await this.noteModel.find().exec();

    return notes.map((note: Note) => plainToClass(ReadNoteDto, note));
  }

  async create(createNoteDto: CreateNoteDto): Promise<ReadNoteDto> {
    const createdNote = new this.noteModel(createNoteDto);
    const totalNotes: number = await this.noteModel.countDocuments();
    createdNote.id = totalNotes + 1;
    const savedNote: Note = await createdNote.save();

    return plainToClass(ReadNoteDto, savedNote);
  }
}
