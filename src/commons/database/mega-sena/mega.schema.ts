import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MegaSenaData = Mega & Document;

@Schema()
export class Mega {
  @Prop({ required: true })
  concurso: number;

  @Prop({ required: true })
  dataDoSorteio: string;

  @Prop({ required: true })
  bola1: number;

  @Prop({ required: true })
  bola2: number;

  @Prop({ required: true })
  bola3: number;

  @Prop({ required: true })
  bola4: number;

  @Prop({ required: true })
  bola5: number;

  @Prop({ required: true })
  Bola6: number;

  @Prop({ required: true })
  ganhadores6Acertos: number;

  @Prop({ required: true })
  ganhadores5Acertos: number;

  @Prop({ required: true })
  ganhadores4Acertos: number;
}

export const MegaSchema = SchemaFactory.createForClass(Mega);
