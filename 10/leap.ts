function isLeap(year: number): string {
    let leap: string = "";
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                leap = "Leap year.";
            } else {
                leap = "Not leap year.";
            }
        } else {
            leap = "Leap year.";
        }
    } else {
        leap = "Not leap year.";
    }
    return leap;
}

const leap = isLeap(2020);
console.log(leap);