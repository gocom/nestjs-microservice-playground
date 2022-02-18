import {Controller, Get, Post, Delete, Param, Body, HttpException, HttpStatus} from '@nestjs/common';
import { NotesService } from './notes.service';
import {ApiBadRequestResponse, ApiBody, ApiOkResponse, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateNoteDto} from "./dto/create-note.dto";

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
  getById(@Param('id') id: number): string {
    return this.notesService.get();
  }

  @Get()
  getList(): string {
    return '';
  }

  @Post()
  save(@Body() createNoteDto: CreateNoteDto): boolean {
    return true;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The note was successfully deleted.'})
  @ApiBadRequestResponse({ description: 'Note could not be deleted.'})
  delete(@Param('id') id: number): boolean {
    throw new HttpException(
        `Could not delete note '${id}'.`,
        HttpStatus.BAD_REQUEST
    );
  }
}
