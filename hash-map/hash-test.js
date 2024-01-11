import { hashMap } from "./hash-map.js";
import { hashMapSet } from "./hash-set.js";

// Hash Map Using Key and Value Pair
const myTableOne = new hashMap();

myTableOne.resize();
console.log(myTableOne);
myTableOne.set("dob", "Hello");
myTableOne.set("dob", "Nice");
myTableOne.resize();
console.log(myTableOne);
myTableOne.set("lastName", "yow");
myTableOne.set("lastName", "yows");
myTableOne.set("age", 12);
myTableOne.set("age", 12);
myTableOne.set("lastName", "yows");
myTableOne.set("lastName", "yows");
console.log(myTableOne);
console.log(myTableOne.get("lastName"));
console.log(myTableOne.has("lastName"));
myTableOne.remove("lastName");
console.log(myTableOne);
console.log(myTableOne.length());
console.log(myTableOne.keys());
console.log(myTableOne.values());
console.log(myTableOne.entries());

// Hash Map Using Key Only

const myTableTwo = new hashMapSet();

myTableTwo.resize();
console.log(myTableTwo);
myTableTwo.set("dob");
myTableTwo.set("dob");
myTableTwo.set("lastName");
myTableTwo.set("lastName");
myTableTwo.set("lastName");
myTableTwo.set("lastName");
myTableTwo.set("age");
myTableTwo.set("dob");
console.log(myTableTwo.get("lastName"));
console.log(myTableTwo.has("lastName"));
myTableTwo.remove("lastName");
console.log(myTableTwo.length());
console.log(myTableTwo.entries());
