// destructing array
const [starterPlease, mainPlease] = restaurant.order(2, 0);
console.log(starterPlease, mainPlease);
//destructing objects
const { name: restName, categories: menu, locaton: place } = restaurant;
console.log(restName, menu, place);

const { yeshua = [], mainMenu: fast = [] } = restaurant;
console.log(yeshua, fast);

let [first, second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

//array destructive

// const arr = [1, 2, 3];
// const a = [0];
// const b = [1];
// const c = [2];
// const [f, l, m] = arr;
// console.log(f, l, m);
