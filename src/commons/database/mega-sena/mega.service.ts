import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mega, MegaSenaData } from './mega.schema';

@Injectable()
export class MegaService {
  constructor(
    @InjectModel(Mega.name) private megaSenaModel: Model<MegaSenaData>,
  ) {}

  async createMegaSenaData(megaSenaData: Mega): Promise<Mega> {
    const newMegaSenaData = new this.megaSenaModel(megaSenaData);
    return newMegaSenaData.save();
  }
}
