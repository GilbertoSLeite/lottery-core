import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesModule } from './entities/entities.module';
import { UseCasesModule } from './use-cases/use-cases.module';
import { InterfaceAdaptersModule } from './interface-adapters/interface-adapters.module';
import { FrameworksModule } from './frameworks/frameworks.module';

@Module({
  imports: [
    EntitiesModule,
    UseCasesModule,
    InterfaceAdaptersModule,
    FrameworksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
