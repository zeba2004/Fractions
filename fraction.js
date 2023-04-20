class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(other) {
    const resultNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const resultDenominator = this.denominator * other.denominator;
    return new Fraction(resultNumerator, resultDenominator);
  }
}
