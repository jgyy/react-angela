function bmiCalculator(weight: number, height: number): string {
    const bmi = weight / (height * height);
    let interpretation: string = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

const bmiC = bmiCalculator(65, 1.8);
console.log(bmiC);