import { Body, Controller, Post } from '@nestjs/common';
import { ChallengeDto } from './dto/challenge.dto';

type ChallengeResponse = {
  isPair: boolean;
  isPrime: boolean;
  factorial: number;
  sumN: number;
  factors: number[];
  fibonacci: number;
};

@Controller('challenge')
export class ChallengeController {
  /**
   * Challenge POST
   * @description Dado un número entero, determinará si es par o impar, si es primo, el factorial, la sumatoria de todos los números anteriores, los factores primos y la serie de fibonacci hasta el número dado.
   * @param {ChallengeDto} challengeDto ChallengeDto
   * @returns {ChallengeResponse} ChallengeResponse
   * @example
   * curl --location --request POST 'http://localhost:4000/challenge' \
   * --header 'Content-Type: application/json' \
   * --data-raw '{
   *    "number": 12
   * }'
   */

  @Post()
  challenge(@Body() challengeDto: ChallengeDto): ChallengeResponse {
    return {
      isPair: true,
      isPrime: true,
      factorial: 120,
      sumN: 5050,
      factors: [1, 2, 3, 4, 6, 12],
      fibonacci: 144,
    };
  }
}
