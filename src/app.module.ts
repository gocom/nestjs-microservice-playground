import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import 'dotenv/config';
import { NoteEntity } from './notes/model/note.entity';

const {
  MYSQL_HOSTNAME,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL_HOSTNAME,
      port: Number(MYSQL_PORT),
      username: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      entities: [NoteEntity],
      synchronize: true,
    }),
    NotesModule,
  ],
})
export class AppModule {}
