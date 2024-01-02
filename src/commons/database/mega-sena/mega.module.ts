import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mega, MegaSchema } from './mega.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Mega.name,
        schema: MegaSchema,
      },
    ]),
  ],
})
export class MegaModule {}
