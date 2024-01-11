class hashMap {
  constructor() {
    this.table = new Array(16);
    this.size = 0;
  }

  // hash takes a value and produces a hash code with it
  hash(stringKey, tableSize) {
    let hashNumber = 0;

    for (let i = 0; i < stringKey.length; i++) {
      hashNumber = (17 * hashNumber + stringKey.charCodeAt(i)) % tableSize;
    }

    return hashNumber;
  }

  // Resize the total amount of bucket (array indexes) based on the load factor
  resize() {
    const newTable = new Array(this.table.length * 2);

    this.table.forEach((item) => {
      if (item) {
        item.forEach(({ key, value }) => {
          const index = this.hash(key, newTable.length);
          if (newTable[index]) {
            newTable[index].push({ key, value });
          } else {
            newTable[index] = [{ key, value }];
          }
        });
      }
    });

    this.table = newTable;
  }

  // set takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.
  set(key, value) {
    const loadFactor = this.size / this.table.length;

    if (loadFactor > 0.75) {
      this.resize();
    }

    const index = this.hash(key, this.table.length);

    if (this.table[index]) {
      this.table[index].push({ key, value });
    } else {
      this.table[index] = [{ key, value }];
    }

    this.size++;
  }

  // get takes one argument as a key and returns the value that is assigned to this key. If key is not found, return null.
  get(key) {
    const index = this.hash(key, this.table.length);
    const getItem = [];

    if (!this.table[index]) {
      return null;
    }

    this.table[index].find((item) => {
      if (item.key === key) {
        getItem.push(item);
      }
    });

    if (getItem.length === 1) {
      return getItem[0].value;
    } else if (getItem.length >= 1) {
      return getItem;
    }

    return null;
  }

  // has takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    return this.get(key) ? true : false;
  }

  // remove takes a key as argument and removes it from the hash table.
  remove(key) {
    const index = this.hash(key, this.table.length);
    let table = this.table[index];

    if (!table || !this.has(key)) {
      console.log("Key Doesn't Exist!");
      return null;
    }

    this.table[index] = [];

    for (let i = 0; i < table.length; i++) {
      if (table[i].key !== key) {
        this.table[index].push(table[i]);
        this.size--;
      }
    }

    console.log("Key Successfully Removed");
    return this;
  }

  // length returns the number of stored keys in the hash map.
  length() {
    const table = this.table;
    let count = 0;

    table.forEach((item) => {
      count += item.length;
    });

    return `Total amount of stored keys : ${count}`;
  }

  // removes all entries in the hash map.
  clear() {
    this.table = new Array(16);
    this.size = 0;
    return this;
  }

  // returns an array containing all the keys inside the hash map.
  keys() {
    const table = this.table;
    const keyArray = [];

    if (this.size === 0) {
      console.log("Table is currently empty");
      return null;
    }

    table.forEach((item) => {
      item.forEach((keyItem) => {
        keyArray.push(keyItem.key);
      });
    });

    return keyArray;
  }

  //  returns an array containing all the values.
  values() {
    const table = this.table;
    const itemArray = [];

    if (this.size === 0) {
      console.log("Table is currently empty");
      return null;
    }

    table.forEach((item) => {
      item.forEach((valueItem) => {
        itemArray.push(valueItem.value);
      });
    });

    return itemArray;
  }

  // returns an array that contains each key, value pair.
  entries() {
    const table = this.table;
    const hashArray = [];

    if (this.size === 0) {
      console.log("Table is currently empty");
      return null;
    }

    table.forEach((item) => {
      item.forEach((hashItem) => {
        hashArray.push(hashItem);
      });
    });

    return hashArray;
  }
}

const myTableOne = new hashMap();

myTableOne.set("dob", "Hello");
myTableOne.set("lastName", "yow");
myTableOne.set("lastName", "yows");
myTableOne.set("dob", "Nice");
myTableOne.set("lastName", "yow");
console.log(myTableOne);
