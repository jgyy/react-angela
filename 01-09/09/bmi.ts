const bmiCalculator2 = (weight: number, height: number): number => {
    return weight / (height * height);
};

const bmi = bmiCalculator2(65, 1.8);
console.log(bmi);
