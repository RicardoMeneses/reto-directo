import { Injectable } from '@nestjs/common';

@Injectable()
export class ChallengeService {
  // Validación si un número es par
  isPair(number: number): boolean {
    return number % 2 === 0;
  }

  // Validación si un número es primo
  isPrime(number: number): boolean {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  // Función para calcular el factorial de un número
  factorial(number: number): number {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }

  // Función para calcular la sumatoria de todos los números anteriores
  sumN(number: number): number {
    return (number * (number + 1)) / 2;
  }

  // Función para calcular los factores de un número
  factors(number: number): number[] {
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) factors.push(i);
    }
    return factors;
  }

  // Función para calcular la serie de fibonacci hasta el número dado
  fibonacci(number: number): number {
    if (number <= 1) return number;
    return this.fibonacci(number - 1) + this.fibonacci(number - 2);
  }
}
