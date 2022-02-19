import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NoteEntity } from './model/note.entity';

describe('NotesController', () => {
  let controller: NotesController;
  let service: NotesService;

  const mockRepository = jest.fn(() => ({
    metadata: {
      columns: [],
      relations: [],
    },
  }));

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [
        NotesService,
        { provide: getRepositoryToken(NoteEntity), useClass: mockRepository },
        { provide: getRepositoryToken(NoteEntity), useClass: mockRepository },
      ],
    }).compile();

    service = app.get<NotesService>(NotesService);
    controller = app.get<NotesController>(NotesController);
  });

  describe('getById', () => {
    it('', () => {
      jest.spyOn(service, 'get').mockResolvedValue(new NoteEntity({}));

      expect(controller.getById(1)).resolves.toBeInstanceOf(NoteEntity);
    });
  });
});
