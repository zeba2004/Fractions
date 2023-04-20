const prompt = require('prompt-sync')();

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
  }
  
  const fraction1 = Fraction.fromInput();
  const fraction2 = Fraction.fromInput();
  
  const sum = fraction1.add(fraction2);
  console.log(`Sum: ${sum.numerator}/${sum.denominator}`);
  
