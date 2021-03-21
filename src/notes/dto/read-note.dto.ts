import { IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadNoteDto {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  content: string;

  @Expose()
  @IsDate()
  date: Date;

  @Expose()
  @IsBoolean()
  important: boolean;
}
