const numbers={
  100:"one hundred",
  16:"sixteen"
}
/*
if numbers are keys
we need to get the key value pair as 
numbers[100]
if the keys are strings, we can get the key value pair as
numbers.hundred (for example)

 it is converted into 
const numbers={
  "100":"one hundred",
  "16":"sixteen"
}
*/

const palette={
  red:"#eb4d4d",
  yellow:"#f9ca24",
  blue: "#30336b"
}

/* to print the "eb4d4d"  we use " palette["red"] "
where as "palette[red]" doesnt work 
*/

//Adding and updating objects
const userReviews={};

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith78 = 3.5;

userReviews['queenBee49'] +=2;

userReviews.mrSmith78++;

//nested arrays and objects

const student={
  firstName : 'David',
  lastName:'Jones',
  strengths:['Music','Art'],
  exams:{
    midterm:92,
    final:88
  }
}

const avg=(student.exams.midterm + student.exams.final)/2;
student.strengths[1]; //Art

const shoppingCart=[
  {
    product:'Jenga Classic',
    price:6.4,
    quantity:1
  },
  {
    product:'echo Dot',
    price:5,
    quantity:2
  },
  {
    product:'Jenga Classic',
    price:6.4,
    quantity:1
  }
] 

//objects and reference types
// const palette={
//   red:"#eb4d4d",
//   yellow:"#f9ca24",
//   blue: "#30336b"
// };

const palette2 = palette;
palette2.green = '#ebf876'

//we use const, when we want reference.
//this decleration of objects is same as arrays.


//Array and object equality
let nums=[1,2,3];
let mystery=[1,2,3];

// nums === mystery false
// nums == mystery false 
//here we are comparing the addresses , so they are not at all same.

//but if we have
let moreNums = nums;
//and we compare moreNums === nums (true)

const user = {
  username:'Cherry',
  email:'garcia@gmail.com',
  notifications : []
}

// if(user.notifications === []){
//   //this doesnt work due to comparision of
//   // equality to an empty array.
// }
//but we need to do like
if(!user.notifications.length){
  console.log('no new  notifications');
}

//For...of

let subreddits = ['soccer','popheads','cringe','books'];

for(let sub of subreddits){
  if( sub == 'soccer'){
    console.log(sub);
  }
}
//comparing for...of  and for loops

const magicSquare = [
  [2,7,6],
  [9,5,1],
  [4,3,8]
];

  //for loop
for(let i=0;i<magicSquare.length;i++){
  let row = magicSquare[i];
  let sum=0;
  for(let j=0;j<row.length;j++){
    console.log(row[j]);
    sum+=row[j];
  }
}
 //for of loop
for(let row of magicSquare){
  let sum=0;
  for(let num of row){
    sum+=num;
  }
}

//disadvantage
const words1=['mail','milk','batch','black'];
const words2=['box','shake','tub','berry'];

for(let i=0;i<words1.length;i++){
  console.log(`${words1[i]} ${words2[i]}`);
}

//for of with objects
const movieReviews = {
  Arrival:9.5,
  Alien :9,
  Amelie:8,
  'In Briges':8
}

//here we cant use movieReviews[1] to get Alien

//not iterable
// for(let x of movieReviews){
//   console.log(x);
// }

for(let movie of Object.keys(movieReviews)){
  console.log(movie); //Arrival,Alien...
  console.log(movie, movieReviews[movie]); //Arrival 9.5,Alien 9....
}
let sumOfRatings=0;
for(let movie of Object.keys(movieReviews)){
  sumOfRatings+=movieReviews[movie];

}

/** 
 * for...in
 *  the difference between the for..of and for..in is that
 * in for...of we iterate over the actual values in a string or array
 * in for...in we iterate over the values, the properties of the objects
 **/
const jeopardyWinnings={
  regularPlay:2522700,
  watsonChallenge:300000,
  tournamentOfChampions:500000
}

for(let prop in jeopardyWinnings){
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}

/** 
 * if we try to do 
 * for(let k in [88,99,77,66]){
 *  console.log(k);
 * }
 * we would get 0 1 2 3
 * we are looping over the properties, we are not iterating over the values
 */

//funciton
function  grumpus(){
  console.log('hi');
  console.log('hello');
}
grumpus();

//function with return values and arguments
function add(x,y){
  return x+y;
}

//function with more return values
function isPurple(color){
  if(color.toLowerCase() === 'purple'){
    return true;
  }else{
    return false;
  }
}

//function password validator
function isValidPassword(username,password){
  if(password.length<8 || password.indexOf(username)!== -1 || password.indexOf(' ') !== -1){
    return false;
  }
  return true;
}

//function panagram validator
function isValidPanagram(inputString){
  isValid=true;
  // var charCode= 'a'.charCodeAt(0);
  // for(i=0;i<26;i++){
  //   charCode+=i;
  //   var next=String.fromCharCode(charCode);
  //   isValid = isValid && (inputString.toLowerCase().indexOf(next)!== -1);
  // }
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    isValid = isValid && (inputString.toLowerCase().indexOf(char)!== -1 )
  }
  return isValid;
}

//funciton getting a card
function getCard(){
  var rollCardNumber = Math.floor(Math.random()*13);
  const cardNumberArray=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  var rollCardSuit = Math.floor(Math.random()*4);
  const cardSuitArray=["Clubs","Spades","Hearts","Diamonds"];

  const cardOnDesk={
    value:cardNumberArray[rollCardNumber],
    suit:cardSuitArray[rollCardSuit]
  }
  return cardOnDesk;

}

/*

//block scope
let animals=['grizzly','bear','panda'];
var i=10;
for(var i=0;i<animals.length;i++){
  console.log(i,animals[i]);
}
//because we used var i=0 in the loop, it still exists.
//it is not going to abound by these loop
console.log(i); //it still  prints 3

*/ 

//instead we can use the below one

let animals=['grizzly','bear','panda'];
var i=10; //let i=10; also works
//if we didnt declare here, in the console.log(i) after loop will generate an error
for(let i=0;i<animals.length;i++){
  console.log(i,animals[i]);
}

//now the i present in the loop, is scoped 
console.log(i); //prints 10

/**
 * CONCLUSION
 * let and const are scoped to the block,
 * where as var is not scoped
 */

function doubleArr(arr){
  const result=[];
  for(let num of arr){
    let double = num*2;
    result.push(double);
  }
  return result;
}

//lexical scope
function outer(){
  let hero = "Black Panther";

  function inner(){
    let cryForHelp = `${hero},please save me`;
    console.log(cryForHelp);
  }

  inner();
}

/**
 * here the "inner()" funciton has the access to hero, 
 * but obiously we dont have access for the hero outside of the "outer()" function
 */

//FUNCITON EXPRESSIONS

/**
 * we can store a funciton in a variable because
 * js funcitons are objects.
 * we can put them in an array too
 * we can pass them as arguments too
 */


const square = function (num){
  return num*num;
}

const product = function multiply(x,y){
  return x*y;
}

/**
 * here funciton should be called as product 
 * but not as multiply
 */



function add(x,y){
  return x+y;
}

const subtract = function(x,y){
  return x-y;
}

function multiply(x,y){
  return x*y;
}

const divide = function(x,y){
  return x/y;
}

const operations = [add,subtract,multiply,divide];

for(let func of operations){
  let result = func(30,5);
  console.log(result);
}

const thing={
  doSomething:multiply
}

//HIGHER ORDER FUNCTIONS
/**
 * they can acccept funcitons or arguments
 * return a function
 */

function callTwice(func){
  func();
  func();
}
function laugh(){
  return "hahaha";
}
callTwice(laugh);

//RETURNING FUNCITONS
function makesBetweenFunc(min,max){
  return function(val){
    return val>=min && val<=min;
  }
}

const inAgeRange = makesBetweenFunc(18,100);

inAgeRange(17);
inAgeRange(68);

function multiplyBy(num){
  return function(x){
    return x*num;
  }
}

const triple = multiplyBy(3);

//CALL BACKS

function sendAlert(){
  alert(" ");
}

//setTimeout(sendAlert,5000);

const btn=document.querySelector('button');
//btn.addEventListener('click',sendAlert);

//FOR EACH
const numbers1=[9,8,7,6,5,4,3,2,1];

numbers1.forEach(function(n){
  console.log(n*n)
})

function printTriple(n){
  console.log(n*3);
}

numbers1.forEach(printTriple);

numbers1.forEach(function(num,index){
  console.log(index,num);
})

const books=[
  {
    title:'Good Omens',
    authors:['Terry Practchett','Niel Gaiman'],
    rating:4.25
  },
  {
    title:'Good Omens',
    authors:['Terry Practchett','Niel Gaiman'],
    rating:4.25
  },
  {
    title:'Good Omens',
    authors:['Terry Practchett','Niel Gaiman'],
    rating:4.25
  },
  {
    title:'Good Omens',
    authors:['Terry Practchett','Niel Gaiman'],
    rating:4.25
  }
]

books.forEach(function(book){
  console.log(book.rating*2);
})

//map returns a new value
const doubles=numbers1.map(function(num){
  return num*2;
})


const numDetail=numbers1.map(function(n){
  return {
    value:n,
    isEven:n%2 === 0
  }
})

//ARROW FUNCTIONS
const square1 = n => {
  return n*n;
}

//rewwrite this as
const square2 = n => (n*n);

const doubles2= numbers1.map(function(n){
  return n*2;
})

const doubles4= numbers1.map(n => {
  return n*2;
})

const doubles3 = numbers1.map(n => n*2);

//Find -it returns only one element, and it returns the 
//first element that matches the condition.

let movies1=[
  "The Fantastic Mr.Fox",
  "Mr. and Mrs. Smith",
  "Mrs.Doubtfire",
  "Mr. Deeds"
]

const movieResult = movies1.find(movie => {
  return movie.includes('Mrs');
})
console.log(movieResult);

const goodBook = books.find(b => b.rating >=4.1);
console.log(goodBook);

//FILTER-it adds the elements only when the particular
//condition is met

const nums1=[9,8,7,6,5,4,3,2,1];
const odds=nums1.filter(n => n%2 != 0);
console.log(odds);

//EVERY and SOME 
//boolean methods that return true or false

const  words=["dog","dig","log","bag","wag"];

const wordsResult=words.every(word => word.length == 3);
console.log(wordsResult);

//SORT
//it sorts by the strings rather than sorting by value
const prices=[400.5,3000,99.99,35.99,12.00,9500];
// prices.sort();

prices.sort((a,b) => a-b);

books.sort((a,b) => a.rating-b.rating);

//REDUCE
//it takes array of values, and reduces into a single value

[3,5,7,9,11].reduce((accumulator,currentValue) => {
  return accumulator + currentValue;
});

const product1=nums1.reduce((total,curVal) => {
  return total*curVal;
});

const grades=[87,64,96,92,88,99,73,70,64];

const maxGrade = grades.reduce((max,currentValue) => {
  return currentValue>max ? currentValue : max
})

//we can aslo add an initial value by
//passing value in callback
nums1.reduce((accumulator,currentValue) => {
  return accumulator+currentValue;
},100);

const votes=['y','y','n','y','n','y','n','n','y'];
const votesResults = votes.reduce((tally,val) => {
  // if(tally[val]){
  //   tally[val]++;
  // }else{
  //   tally[val]=1;
  // }
  // return tally;
  tally[val] = (tally[val] || 0) + 1;
  return tally;
  
},{});


const GroupedBooks = books.reduce((groupedBooks,book) => {
  const key=Math.floor(book.rating);
  if(!groupedBooks[key]){
    groupedBooks[key]=[];
  }else{
    groupedBooks[key].push(book);
  };
  return groupedBooks;
},{});


//default parameters
function multiply1(x=1,y=1){
  return x*y;
}

//SPREAD

//for functional calls
//it expands an interable
//it expands to another destination.
// it expands into list of arguments

const numbers3=[3,4,88,2,1,54,96];

Math.max(numbers3); //returns Nan

Math.max(...numbers3);//it is equal to passing th numbers as
//Math.max(3,4,88,2,1,54,96);

function giveMeFour(a,b,c,d){
  console.log('a',a);
  console.log('b',b);
  console.log('c',c);
  console.log('d',d);
}

const colors=['red','orange','yellow','green'];

//if we pass const str='GOAT' , as giveMeFout(...str)
//it prints G O A T

//SPREAD for ARRAY

//it creates a new array using an exisiting array
//also spreads the elements from one array into a new array

const nums3=[1,2,3];
const nums4=[4,5,6];

[...nums3,...nums4];
//[1,2,3,4,5,6];

['a','b',...nums3];
//['a','b',1,2,3];

[..."abcdefg"];
//['a','b','c','d','e','f'];

//SPREAD for OBJECTS
const feline={
  legs:4,
  family:'felidae'
};

const canine={
  furry:true,
  family:'caninae'
};

const dog={
  ...canine,
  isPet:true,
  adorable:true
}

/*
{
  furry: true, 
  family: "caninae", 
  isPet: true, 
  adorable: true
}
*/

const dog2={
  ...dog,
  isPet:false
}

//REST 
//instead of spreading data into objects, it instead collects them down

//without rest
//when we want to pass undefined arguments for calculating the sum of the arguments
// we can do this way by using ARGUMENTS object
//we cannot apply reduce on arguments, since 
//arguments is not an array, it is array like object
//but we can turn it into array by

//const argsArray=[..arguments]

function sumAll(){
  let total=0;
  for(let i=0;i<arguments.length;i++){
    total+=arguments[i];
  }
  return total;
}

sumAll(8,4,3,2); //17
sumAll(1,2);//3

//here nums5 will be  a new array that will be passed , and it is created with the name nums5
//it is array, it is not array like object
//it also collects the remaining arguments
function sum3(...nums5){
  console.log(nums5);
  return nums5.reduce((total,curVal) => {
    return total+curVal;
  })
}

//here we cannot change the order of the ...titles, but  the order of the first and last can be changed
function fullName(first,last,...titles){
  console.log('first',first);
  console.log('last',last);
  console.log('titles',titles);
}

//DESTRUCTURING ARRAYS

const raceResults=['eliud kipchoge','feyisa lelisa','Galen Rupp'];

const [gold,silver,bronze] = raceResults;
gold; //'eliud kipchoge'
silver;//'feyisa lelisa'
bronze;//'Galen Rupp'

const [fastest,...everyoneElse] = raceResults;
fastest;//'eliud kipchoge'
everyoneElse;//['feyisa lelisa','Galen Rupp']

//object desctructuring
const runner={
  first:"Eluid",
  last:"kipchoge",
  country:"kenya",
  title:"elder of the order of the golden heart of kenya"
}

const {first,last} = runner;

const {time} = runner; //it is undefined, it doesnt throw error.

const {country: nation,title:honorofic} = runner;
//nation = "kenya", honorofic="elder of..."

//const {first,last,...other} = runner;
//first is "eluid", last:"kipchoge", others:{country:"kenya",title:"elder of.."}

//NESTED DESTRUCUTRING

const results1=[
  {
    first:"Eluid",
    last:"Kipchoge",
    country:"Kenya"
  },
  {
    first:"Feysia",
    last:"lilesa",
    country:"Ethopia"
  },
  {
    first:'Galen',
    last:'Rupp',
    country:'United States'
  }
]

//leaving the first object
//const [{first:goldWinner},{country}] = results1;

const [,silverMedal] = results1;
const {country} = silverMedal;


/**
 * here we are destructuring the arguments of the function, and we are only destructuring two, 
 *and we dont caree about other arguments like "country"
 */
const fullName1=({first,last}) => {
  return `${first} ${last}`
}

const runner1={
  first:"Eluid",
  last:"Kipchooge",
  country:"Kenya"
}
fullName1(runner1); //Eliud kipchoge


const response=[
  'http/1.1',
  '200 ok',
  'application/json'
]

function parseResponse([protocol,statusCode,contentType]){
  console.log(`Status :${statusCode}`)
}

//shorthand properties
const getStats=(arr)=>{
  const max=Math.max(...arr);
  const min=Math.min(...arr);
  const sum=arr.reduce((sum,r) => sum+r);
  const avg=sum/arr.length;

  // return {
  //   max:max,
  //   min:min,
  //   sum:sum,
  //   avg:avg
  // }
  //we can also write as

  return {
    max,
    min,
    sum,
    avg
  }
}

const reviews=[4.5,5.0,3.4,2.8,3.5,4.0,3.5];

const stats=getStats(reviews);

//computed properties
const role='host';
const person='Jools holland';

/**wihtout computed properties */ 
// const team={
//   role:person
// }
//if we want a dynamic key
//team[role]=person;

/**
 * but with computed properties, it will work as writen in const team
 */

  const team={
    [role]:person
  } 

/**without computed properties */
const team1={
  [role]:person,
  [1+6+9]:'sixteen'
}

// function addProp(obj,k,y){
//   const copy={
//     ...obj
//   };
//   copy[k]=y;
//   return copy;
// }

// const addProp = (obj,k,v)=>{
//   return {
//     ...obj,
//     [k]:v
//   }
// }

//it can be done in one line like
const addProp = (obj,k,v) => ({...obj,[k]:v})

const res=addProp(team1,'happy',':)');

/**
 * we can add functions as properties on obkjects.
 * they are called methods
 */

const math={
  multiply:function(x,y){
    return x*y;
  },
  divide:function(x,y){
    return x/y;
  },
  square:function(x){
    return x*x;
  }
}

//shorthand
const math1={
  blah:'hi!',
  multiply(x,y){
    return x*y;
  },
  divide(x,y){
    return x/y;
  },
  square:function(x){
    return x*x;
  }
}

function sayHi(){
  console.log("hi");
  console.log(this);
}

//here this funcitons is added to window object
//when you declare something with var like var color="red", that variable is added in window
//but when you declare variable with const or let, in the window it is not added.

//this is a reference to a object, and the object represents the current execution scope.

const person1={
  first:'Cherilyn',
  last:'Sarkisian',
  nickName:'Cher',
  fullName(){
    const {nickName}=this;
    console.log(`${this.first} ${this.last} ${nickName}`);
  }
}
//here "this" is referencing to the oject, unlike sayHi is referencing the global execution

const person2={
  first:'Cherilyn',
  last:'Sarkisian',
  nickName:'Cher',
  fullName(){
    const {nickName}=this;
    console.log(`${this.first} ${this.last} ${nickName}`);
  },
  printBio(){
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh:()=>{
    console.log(this);
  }
}

const printBio=person2.printBio;

/**
 * in the case of arrow funcitons , example laugh,if we use "console.log(this)" we get window
 * but in case of normal funciton, we get the function.
 */

const annoyer={
  phrases:["literally","cray cray","I cant even","Totes!","YOLO","Cant Stop,wont stop"],
  pickPhrase(){
    const {phrases}=this;
    const indx=Math.floor(Math.random()*phrases.length)
    return phrases[indx]
  },
  start(){
    this.timerId=setInterval(()=>{
      console.log(this.pickPhrase())
    },3000)
  },
  stop(){
    clearInterval(this.timerId);
  }
}

//practice

// function makeDeck(){
//   const deck=[];
//   const suits1=['hearts','diamonds','spades','clubs'];
//   const values1='A,2,3,4,5,6,7,8,9,10,1J,Q,K';
//   for(let value of values1.split(',')){
//     for(let suit of suits1){
//       deck.push({
//         value,
//         suit
//       })
//     }
//   }
//   return deck;
// }

// function drawCard(deck){
//   return deck.pop();
// }
// const myDeck=makeDeck();
// const card1=drawCard(myDeck);

const myDeck={
  deck:[],
  drawnCards:[],
  suits1:['hearts','diamonds','spades','clubs'],
  values1:'A,2,3,4,5,6,7,8,9,10,1J,Q,K',
  initializeDeck(){
    const {suits1,values1,deck}=this;
    for(let value of values1.split(',')){
      for(let suit of suits1){
        deck.push({
          value,
          suit
        })
      }
    }
  return deck;
  },
  drawCard(){
    const card= this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards){
    const cards=[];
    for(let i=0;i<numCards;i++){
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle(){
    const {deck}=this;
    //loop over array backwards
    for(let i=deck.length-1;i>0;i--){
      //pick randome index before current element
      let j=Math.floor(Math.random()*(i+1));
      //swap
      [deck[i],deck[j]]=[deck[j],deck[i]];
    }
  }
  
}

const makeDeck=()=>{
  return{
    deck:[],
    drawnCards:[],
    suits1:['hearts','diamonds','spades','clubs'],
    values1:'A,2,3,4,5,6,7,8,9,10,1J,Q,K',
    initializeDeck(){
      const {suits1,values1,deck}=this;
      for(let value of values1.split(',')){
        for(let suit of suits1){
          deck.push({
            value,
            suit
          })
        }
      }
    return deck;
    },
    drawCard(){
      const card= this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards){
      const cards=[];
      for(let i=0;i<numCards;i++){
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle(){
      const {deck}=this;
      //loop over array backwards
      for(let i=deck.length-1;i>0;i--){
        //pick randome index before current element
        let j=Math.floor(Math.random()*(i+1));
        //swap
        [deck[i],deck[j]]=[deck[j],deck[i]];
      }
    }
    
  }
}

const myDeck1=makeDeck();

const deck2=makeDeck();
deck2.initializeDeck();








