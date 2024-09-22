import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          // TODO: Should properaly connect to database without using admin
          uri: `mongodb://${configService.get('MONGO_INITDB_ROOT_USERNAME')}:${configService.get('MONGO_INITDB_ROOT_PASSWORD')}@localhost:27017/${configService.get('MONGO_DB_NAME')}?authSource=admin`,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
