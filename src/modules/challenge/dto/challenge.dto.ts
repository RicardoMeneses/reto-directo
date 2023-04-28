import { IsNotEmpty, IsNumber } from 'class-validator';

export class ChallengeDto {
  @IsNotEmpty()
  @IsNumber()
  number: number;
}
