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

  add(other) {
    const commonDenominator = this.denominator * other.denominator;
    const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
    return new Fraction(numerator, commonDenominator);
  }

  subtract(other) {
    const commonDenominator = this.denominator * other.denominator;
    const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
    return new Fraction(numerator, commonDenominator);
  }

  multiply(other) {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Fraction(numerator, denominator);
  }

  divide(other) {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Fraction(numerator, denominator);
  }

  compare(other) {
    const commonDenominator = this.denominator * other.denominator;
    const thisNumerator = this.numerator * other.denominator;
    const otherNumerator = other.numerator * this.denominator;
    if (thisNumerator > otherNumerator) {
      return 1;
    } else if (thisNumerator < otherNumerator) {
      return -1;
    } else {
      return 0;
    }
  }
}

const fraction1 = Fraction.fromInput();
const fraction2 = Fraction.fromInput();

const sum = fraction1.add(fraction2);
console.log(`Sum: ${sum.numerator}/${sum.denominator}`);

const difference = fraction1.subtract(fraction2);
console.log(`Difference: ${difference.numerator}/${difference.denominator}`);

const product = fraction1.multiply(fraction2);
console.log(`Product: ${product.numerator}/${product.denominator}`);

const quotient = fraction1.divide(fraction2);
console.log(`Quotient: ${quotient.numerator}/${quotient.denominator}`);

const comparison = fraction1.compare(fraction2);
if (comparison === 1) {
  console.log(`${fraction1.numerator}/${fraction1.denominator} is greater than ${fraction2.numerator}/${fraction2.denominator}`);
} else if (comparison === -1) {
  console.log(`${fraction1.numerator}/${fraction1.denominator} is less than ${fraction2.numerator}/${fraction2.denominator}`);
} else {
  console.log(`${fraction1.numerator}/${fraction1.denominator} is equal to ${fraction2.numerator}/${fraction2.denominator}`);
}
