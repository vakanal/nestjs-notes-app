import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  content: string;

  @Prop({ default: new Date() })
  date: Date;

  @Prop({ default: false })
  important: boolean;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
