function lifeInWeeks(age: number): void {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;
  
    console.log(
      `You have ${days} days, ${weeks} weeks, and ${months} months left.`
    );
}

lifeInWeeks(56);