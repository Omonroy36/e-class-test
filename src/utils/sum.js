function sum(array) {
  let result = 0;
  for (const num of array) {
    if (num % 2 === 0 && num > 20) {
      result += 20;
    } else {
      result += num;
    }
  }
  return (callback) => {
    callback(result);
  };
}

sum([1, 2, 3, 22])((result) => console.log(result + 20)); //Expected to be 46

module.exports = {
  sum,
};
