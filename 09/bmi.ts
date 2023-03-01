const bmiCalculator = (weight: number, height: number): number => {
    return weight / (height * height);
};

const bmi = bmiCalculator(65, 1.8);
console.log(bmi);
