import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

describe('NotesController', () => {
  let controller: NotesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    controller = app.get<NotesController>(NotesController);
  });

  describe('getById', () => {
    it('', () => {
      expect(controller.getById(1)).toBe('');
    });
  });
});
