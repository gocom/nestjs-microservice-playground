import {Controller, Get, Post, Delete, Param, Body, HttpException, HttpStatus} from '@nestjs/common';
import { NotesService } from './notes.service';
import {ApiBadRequestResponse, ApiOkResponse, ApiParam, ApiTags} from "@nestjs/swagger";
import {CreateNoteDto} from "./dto/create-note.dto";
import {NoteEntity} from "./model/note.entity";

@Controller('notes')
@ApiTags('notes')
export class NotesController {
  constructor(
      private readonly notesService: NotesService
  ) {}

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Note identifier',
    type: Number
  })
  async getById(@Param('id') id: number): Promise<NoteEntity> {
    return this.notesService.get(id);
  }

  @Get()
  getList(): Promise<NoteEntity[]> {
    return this.notesService.getList();
  }

  @Post()
  async save(@Body() createNoteDto: CreateNoteDto): Promise<NoteEntity> {
    return this.notesService.save(
      new NoteEntity(
        createNoteDto
      )
    );
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Note identifier to be deleted.',
    type: Number
  })
  @ApiOkResponse({ description: 'The note was successfully deleted.'})
  @ApiBadRequestResponse({ description: 'Note could not be deleted.'})
  async delete(@Param('id') id: number): Promise<void> {
    const result = await this.notesService.delete(id);

    if (result.affected === 0) {
      throw new HttpException(
        `Could not delete note '${id}'. Maybe it does not exist.`,
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
