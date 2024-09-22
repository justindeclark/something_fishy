// src/corals/corals.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coral, CoralSchema } from './corals.schema';
import { CoralsService } from './corals.service';
import { CoralsController } from './corals.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coral.name, schema: CoralSchema }]),
  ],
  controllers: [CoralsController],
  providers: [CoralsService],
})
export class CoralsModule {}
