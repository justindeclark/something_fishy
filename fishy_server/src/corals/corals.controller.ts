import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CoralsService } from './corals.service';
import { Coral } from './corals.schema';

@Controller('corals')
export class CoralsController {
  constructor(private readonly coralsService: CoralsService) {}

  @Post()
  async create(@Body() createCoralDto: Partial<Coral>): Promise<Coral> {
    return this.coralsService.create(createCoralDto);
  }

  @Get()
  async findAll(): Promise<Coral[]> {
    return this.coralsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Coral> {
    return this.coralsService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCoralDto: Partial<Coral>,
  ): Promise<Coral> {
    return this.coralsService.update(id, updateCoralDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Coral> {
    return this.coralsService.delete(id);
  }
}
