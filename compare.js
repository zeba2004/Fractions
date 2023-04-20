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

  compareTo(other) {
    const commonDenominator = this.denominator * other.denominator;
    const thisNumerator = this.numerator * other.denominator;
    const otherNumerator = other.numerator * this.denominator;
if (thisNumerator < otherNumerator) {
      return -1;
    } else if (thisNumerator > otherNumerator) {
      return 1;
    } else {
      return 0;
    }
  }
}

const fraction1 = Fraction.fromInput();
const fraction2 = Fraction.fromInput();

const comparison = fraction1.compareTo(fraction2);
if (comparison < 0) {
  console.log("Fraction 1 is less than Fraction 2");
} else if (comparison > 0) {
  console.log("Fraction 1 is greater than Fraction 2");
} else {
  console.log("Fraction 1 is equal to Fraction 2");
}
