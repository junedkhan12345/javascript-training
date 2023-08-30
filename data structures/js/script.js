// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(2);
// set.add(1);
// set.add(3);
// set.add(4);
// console.log(set);

// const set = new Set();
// set.add("A");
// set.add("B");
// set.add("A");
// set.add("C");
// set.add("A");
// set.add("D");
// console.log(set);
// console.log(set.size);
// // set.clear();
// console.log(set);
// console.log(set.has(1));
// console.log(set.has("B"));
// set.delete("A");
// console.log(set);
// console.log(set.entries());
// for(let value of set){
//     console.log(value);
// }
// set.forEach((value)=>{
//     console.log(value);
// });

// // console.log(set[10]);  //index a support  nahi hai

//set se array me conwerd 
// const set = new Set();
// set.add("A");
// set.add("B");
// set.add("A");
// set.add("C");
// set.add("A");
// set.add("D");
// console.log(set);
// let arr = [...set]; //set to array
// console.log(arr);
// console.log(arr[2]);






//array to set 
// let arr =[1,2,3,2,4,3,5,6,7,1,7,8,2,5];
// const set = new Set(arr);
// console.log(set);


// let arr1 = [1,2,6,4,7,3,8,3,5,2,1,2];
// let arr2 = [];
// for(let value of arr1){
//     if(arr2.includes(value)){
//         continue;
//     }else{
//         arr2.push(value);
//     }
// }
// console.log(arr2);


//DATASTRUCTURE MAP
// const map = new Map();
// map.set(1,100);
// map.set("instName","UCC");
// map.set("city","jaipur");
// map.set("roll",123);
// map.set("marks",[1,2,3,4,5]);
// console.log(map);
// console.log(map.get(1));
// console.log(map.get("roll"));
// console.log(map.get("city"));
// console.log(map.has(100));       //false 
// console.log(map.has("state"));     //false
// console.log(map.has("instName"));  //true



const map = new Map();
map.set(1,100);
map.set("instName","UCC");
map.set("city","jaipur");
map.set("roll",123);
map.set("marks",[1,2,3,4,5]);
map.set("city","delhi");
map.set("state","delhi");
// map.clear();
console.log(map);
for(let value of map){
    console.log(value);
    console.log(value[0],value[1]);
}

//map to array
console.log([...map]);


map.forEach((value, keys)=>{
    console.log(value, keys);
});

let obj={}; 
map.forEach((value, keys)=>{
    obj[keys] = value;
});
console.log(obj);


