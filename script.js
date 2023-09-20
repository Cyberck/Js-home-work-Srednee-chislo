

var a = +prompt('Enter the first number!', '');
var b = +prompt('Enter the second number!', '');
var c = +prompt('Enter the third number!', '');

if (a > b && a < c) {
  alert('Average number ' + a)
} else if (b > a && b < c) {
  alert('Average number ' + b) 
} else if (c > a && c > b) {
  alert('Average number ' + c)
} else {
  alert('Something is wrong!')
};







