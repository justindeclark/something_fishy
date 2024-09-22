// src/corals/coral.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Coral extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  color: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CoralSchema = SchemaFactory.createForClass(Coral);
