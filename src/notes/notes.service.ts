import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {NoteEntity} from "./model/note.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NoteEntity)
    private usersRepository: Repository<NoteEntity>,
  ) {}

  get(id: number): Promise<NoteEntity> {
    return this.usersRepository.findOne(id);
  }

  getList(): Promise<NoteEntity[]> {
    return this.usersRepository.find();
  }

  delete(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  save(entity: NoteEntity): Promise<NoteEntity> {
    return this.usersRepository.save(entity);
  }
}
