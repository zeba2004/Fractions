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
multiply(other) {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Fraction(numerator, denominator);
  }

const fraction1 = Fraction.fromInput();
const fraction2 = Fraction.fromInput();
const product = fraction1.multiply(fraction2);
console.log(`Product: ${product.numerator}/${product.denominator}`);


