import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const base64Password = configService.get<string>('passDataBase');
        if (!base64Password) {
          throw new Error('Database password is not set in .env file.');
        }
        // Decodificar a senha de base64 e remover o ponto-e-vírgula.
        const password = Buffer.from(base64Password, 'base64')
          .toString('utf-8')
          .replace(/;$/, '');

        // Construir a URI de conexão usando a senha decodificada.
        const uri = `mongodb+srv://gilbertosleite:${password}@environment-variables.su6dhvg.mongodb.net/?retryWrites=true&w=majority`;

        return { uri };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService],
})
export class AppModule {}
