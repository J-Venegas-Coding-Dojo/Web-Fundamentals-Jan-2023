
// primitive data types:



// string/number/boolean




// composite/collection  data types, or data structures:



// These can contain any number of any data type and can mix and match data types
//(in JS)

var array = [1,2,3,4,5]

var secondArray =[[1,2,3],[4,5,6],[3,2,1]]

var a = [1,"2","abacus"]

var b = {
    "name": "Example McExampleface", 
    "email": "example@example.com",
    
}

var c = true;

var d = {
    "thing1": a, 
    "thing2": b, 
    "thing3": [a, b, c]
}

// console.log(array.length)
// console.log(array[4])
// console.log(array[array.length-1])
// console.log(typeof a[1]);
// console.log(typeof a[2]);
// console.log(typeof a);
// console.log(Array.isArray(a));
// console.log(typeof b);
// console.log(typeof b.name);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof d.thing1);
// console.log(typeof d.thing1[2]);
// console.log(typeof d.thing2);
// console.log(typeof d.thing3);
// console.log(typeof d.thing3[3]);
// console.log(typeof d.thing3[2]);

// console.log(d);






// Add and Remove from an array
//push() ---> this will add to the END of the erray
//pop() ---> remove and return the last element in the array



//How do I change the value of a given index in the array?

// myArr[2] = "whatever I want"
// console.log(myArr)








// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);


// for (i=0; i<10; i++){

// }






// var arr= ["a","b","c","d","e"]
// var temparr=[]
// for(var i=arr.length-1; i>=0; i--){
//     temparr.push(arr[i])
// }
// arr = temparr
// console.log(arr)


// function reverseArray(arr){
//     var temp;
//     for (let index =0; index < arr.length/2; index++){
//         temp = arr[index];
//         arr[index] = arr[arr.length-index-1];
//         arr[arr.length-index-1] = temp
//     }
//     return arr
// }
// console.log(reverseArray(["a","b","c","d","e"]))





// function reverseArray2(arr){
//     var temp;
//     start = 0;
//     end = arr.length/2;
//     while (start < end){
//         temp =arr[start];
//         arr[start] = arr[arr.length-start-1];
//         arr[arr.length-start-1] =temp;
//         start += 1;
//     }
//     return arr
// }