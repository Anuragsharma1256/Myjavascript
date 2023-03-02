
//Destructive Assigment
//1.
// remove first element from places array and print the remaining array
let array = ['kochi','gurgaon','jaipur','pune'];

let first = arr.shift();
console.log(arr);

//result = ['gurgaon', 'jaipur', 'pune']

//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

var arr = ['kochi','kochi', 'hyderabad', 'Shimla', 'Srinagar'];

var count = arr.unshift('delhi')

console.log(arr);

// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]

const morePlacesArray = ['Agra','Mumbai','Goa','Chennai','Pune','Hyderabad','Shimal','Srinagar'];

const CombinedArray = ['Delhi','Gurgaon','Jaipur','Patna','jaisalmer'];

const CombinedArray = morePlacesArray.slice(0, morePlacesArray.length - 3).contact (Place.slice(3));

console.log(CombinedArray);


const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]

  
// 4.
// destructure and store pincode into a variable named myPincode
     
Const  { address: { pincode: myPincode}} = mydata
// 5.
// destructure and store second like into a vaiable named myLike
const { likes: [,mylike] } =myData

console.log(mylike); //output:"Eating food"

