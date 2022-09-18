const addMe = [1, 2, 3, 4, 5];

function FOR(num) {
  let add = 0;
  for (let i = 0; i < num.length; i++) {
    add += num[i];
  }
  return add;
}

console.log(FOR(addMe));

function WHILE(num) {
  let add = 0;
  let i = 0;
  while (i < num.length) {
    add += num[i];
    i++;
  }
  return add;
}

console.log(WHILE(addMe));

function RECURSION(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + RECURSION(num.slice(1, num.length));
}

console.log(RECURSION(addMe));

const ans = (nums) => _.reduce(nums, function (memo, num) { return memo + num; }, 0);

console.log(ans(addMe));
