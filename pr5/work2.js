function sumInput() {
    let numbers = [];
    
    while (true) {
      let input = prompt("Введіть число:");
      if (input === null || input.trim() === '') break;
      let number = Number(input);
      if (isNaN(number)) {
        alert("Будь ласка, введіть числове значення.");
        continue;
      }
  
      numbers.push(number);
    }
    let sum = numbers.reduce((acc, current) => acc + current, 0);
    return sum;
  }
  alert("Сума введених чисел: " + sumInput());
  