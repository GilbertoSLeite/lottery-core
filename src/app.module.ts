import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MegaSenaController } from './mega-sena/interface-adapters/controllers/mega-sena.controller';
import { QuinaController } from './quina/quina.controller';
import { LotofacilController } from './lotofacil/lotofacil.controller';
import { DiaSorteController } from './dia-sorte/dia-sorte.controller';
import { MilionariaController } from './milionaria/milionaria.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    MegaSenaController,
    QuinaController,
    LotofacilController,
    DiaSorteController,
    MilionariaController,
  ],
  providers: [AppService],
})
export class AppModule {}
