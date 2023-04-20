class Fraction:
    def __init__(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator

    def __str__(self):
        return f"{self.numerator}/{self.denominator}"

    def subtract(self, other):
        if isinstance(other, Fraction):
            num = self.numerator * other.denominator - self.denominator * other.numerator
            denom = self.denominator * other.denominator
            return Fraction(num, denom)
        else:
            raise ValueError("Invalid operand for subtraction.")

