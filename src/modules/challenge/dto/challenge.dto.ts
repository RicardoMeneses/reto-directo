import { IsNotEmpty, IsNumber } from 'class-validator';

export class ChallengeDto {
  @IsNotEmpty()
  //validacion numero entero
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'El numero debe ser entero' })
  number: number;
}
