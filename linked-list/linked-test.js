import { LinkedList } from "./linked-list";

const list = new LinkedList();

list.append(2);
list.prepend(1);
list.prepend(0);
list.append(3);
list.append(4);
list.append(5);
list.at(1);
list.pop();
list.getSize();
list.contains(4);
list.find(4);
list.insertAt("Testing", 4);
list.removeAt(4);

console.log(list.toString());
