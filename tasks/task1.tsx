// type getProperty function
function getProperty(obj, key) {
  return obj[key];
}

// test0
const input0 = {
  name: "Antoni",
  age: 12,
};

const output0 = getProperty(input0, "name");

// test1
const input1 = {
  x: 20,
  y: 12,
};

const output1 = getProperty(input1, "x");
