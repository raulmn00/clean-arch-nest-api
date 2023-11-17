import { Module } from '@nestjs/common';
import { AnimalsController } from '../presentation/animals.controller';
import { AnimalsService } from '../domain/animals/animals.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService],
  imports: [PrismaModule],
})
export class AnimalsModule {}
