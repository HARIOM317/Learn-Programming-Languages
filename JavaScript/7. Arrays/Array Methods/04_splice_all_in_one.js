// splice() - Changes the contents of an array by removing, replacing, or adding elements. It modifies the original array.

let items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
console.log(items);

// Task-1 : Remove first 2 items
items.splice(0, 2); // start from index 0 and delete 2 items
console.log("After removing first two items :", items);

// ______________________________________________________

// Task-2 : Remove item of index 2 and 3
items.splice(2, 2); // start from index 2 and delete 2 items
console.log("After removing two items after index 1 :", items);

// ______________________________________________________

// Task-3 : Update "item7" to "item5"
items.splice(2, 1, "item5"); // start from index 2 and delete 1 item then insert new item "item5"
console.log("After updating 'item7' to 'item5' :", items);

// ______________________________________________________

// Task-4 : add "item1" and "item2" at the start of array
items.splice(0, 0, "item1", "item2"); // start from index 0 and delete o item then insert new items "item1" and "item2"
console.log("After adding 'item1' and 'item2' at the start :", items);
