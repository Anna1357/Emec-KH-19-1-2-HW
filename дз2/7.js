let USB  = prompt("Введите объем вашей флешки в Гб: ");
var file = 820;
alert(`В флешку помещается ${Math.floor((USB * 1024) / file)} файлов `);