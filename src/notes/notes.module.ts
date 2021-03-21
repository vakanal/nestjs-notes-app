import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schemas/note.schema';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Note.name,
        useFactory: async () => {
          const schema = NoteSchema;
          schema.pre('save', () => console.log('Hello from pre save'));
          schema.post('save', () => console.log('Bye from post save'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
