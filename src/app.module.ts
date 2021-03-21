import configuration from '../config/configuration';
import { ConfigEnum } from 'config/configuration.enum';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: ['.development.env'],
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(ConfigEnum.DB_URI),
      }),
      inject: [ConfigService],
    }),
    NotesModule,
  ],
})
export class AppModule {}
