import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  get(): string {
    return '';
  }

  getList() {
    return [];
  }

  delete(): boolean {
    return true;
  }

  save(): boolean {
    return true;
  }
}
