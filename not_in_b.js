function foo(a, b) {
  //1.create a result array
  // create a store as false;
  //2.loop through a
  //.loop through b and compare a[i] = b[j]
  //if a[i] === b[j] , change store to true

  //if store is true, push it in result
  //make the store false
  //3. Return the result;
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let store = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) store = true;
    }
    if (!store) result.push(a[i]);
  }
  return result;
}

console.log(foo([1, 2, 3, 5], [1, 3, 8]));
console.log(foo([], [1, 3, 8]));
