import { Body, Controller, Post } from '@nestjs/common';
import { ChallengeDto } from './dto/challenge.dto';
import { ChallengeService } from './challenge.service';

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
  constructor(private challengeService: ChallengeService) {}

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
    const { number } = challengeDto;
    return {
      isPair: this.challengeService.isPair(number),
      isPrime: this.challengeService.isPrime(number),
      factorial: this.challengeService.factorial(number),
      sumN: this.challengeService.sumN(number),
      factors: this.challengeService.factors(number),
      fibonacci: this.challengeService.fibonacci(number),
    };
  }
}
