import { Injectable } from '@nestjs/common';

@Injectable()
export class ChallengeService {
  isPair(number: number): boolean {
    return number % 2 === 0;
  }

  isPrime(number: number): boolean {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  factorial(number: number): number {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }

  sumN(number: number): number {
    return (number * (number + 1)) / 2;
  }

  factors(number: number): number[] {
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) factors.push(i);
    }
    return factors;
  }

  fibonacci(number: number): number {
    if (number <= 1) return number;
    return this.fibonacci(number - 1) + this.fibonacci(number - 2);
  }
}
