// Type bellow function to accept string or number, and return the same type.
function returnStringOrNumber(value) {
  return value;
}

// str should be string
const str = returnStringOrNumber("hello");

// numb should be number
const numb = returnStringOrNumber(123);

// expect error
const obj = returnStringOrNumber({});
