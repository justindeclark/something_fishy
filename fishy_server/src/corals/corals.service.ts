import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coral } from './corals.schema';

@Injectable()
export class CoralsService {
  constructor(@InjectModel(Coral.name) private coralModel: Model<Coral>) {}

  async create(createCoralDto: Partial<Coral>): Promise<Coral> {
    const newCoral = new this.coralModel(createCoralDto);
    return newCoral.save();
  }

  async findAll(): Promise<Coral[]> {
    return this.coralModel.find().exec();
  }

  async findById(id: string): Promise<Coral> {
    return this.coralModel.findById(id).exec();
  }

  async update(id: string, updateCoralDto: Partial<Coral>): Promise<Coral> {
    return this.coralModel
      .findByIdAndUpdate(id, updateCoralDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Coral> {
    return this.coralModel.findByIdAndDelete(id).exec();
  }
}
