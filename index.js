function hasValidPrice(product) {
    if (!product) return false;
    if (!(product.price) || !(product.price >= 0) || !(typeof product== "object")) return false;
    if (!(typeof product.price == "number")) return false;
    return true;
  }	

  //console.log(hasValidPrice({ "product": "Milk", price: 1.50 }));
  //console.log(hasValidPrice({ "product": "Cheese", price: -1 })	);
  //console.log(hasValidPrice());


  function flatten(arr) {
    arr = arr.reduce((element1, element2)=> element1.concat(element2), []);
    return arr.map(item => Array.isArray(item)).includes(true) ? flatten(arr): arr;
  }

console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([[1], [2], [3], [4]]));
console.log(flatten([["a", "b"], ["c", "d"]]));
console.log(flatten([[true, false], [false, false]]));
console.log(flatten([[true, false], [false, false], [[true]]]));

  function clone(arr) {
    // const newArr = [];
    // newArr.push(arr, [...arr]);
    // return newArr;
    return [...arr, [...arr]];
  }

//   console.log(clone([1, 1]));
//   console.log(clone([1, 2, 3]));
//   console.log(clone(["x", "y"]));
//   console.log(clone([true, false, true]));