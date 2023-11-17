import { Controller, Get } from '@nestjs/common';
import { AnimalsService } from '../domain/animals/animals.service';

@Controller('/animals')
export class AnimalsController {
  constructor(private readonly animalService: AnimalsService) {}

  @Get()
  findAll() {
    return this.animalService.findAll();
  }
}
