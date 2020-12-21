let num  = prompt("Введите ваше число:");
function oddOrEven(number) {
    return ( num & 1 ) ? "Нечетное" : "Четное";
  }
alert(`Ваше число ` + oddOrEven(num));