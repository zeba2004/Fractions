const prompt=require('prompt-sync')();
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  static fromInput() {
    const numerator = parseInt(prompt("Enter numerator:"));
    const denominator = parseInt(prompt("Enter denominator:"));
    return new Fraction(numerator, denominator);
  }

  divide(other) {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Fraction(numerator, denominator);
  }
}

const fraction1 = Fraction.fromInput();
const fraction2 = Fraction.fromInput();

const quotient = fraction1.divide(fraction2);
console.log(`Quotient: ${quotient.numerator}/${quotient.denominator}`);
