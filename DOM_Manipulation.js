/**
 * DOM is javascript representaion of a webpage
 * it is Js "window" into contents of a webpage
 * It is just a bunch of objects that you can interact with via ja
 */

 /**
  * in textContent even the script tags appear, but
  * in innerText only text appears, and no content between the script tags appear
  */

  /**
   * innerHTML ,
   * const h1=document.querySelector('h1');
   * h1.innerText='<b>!!!!</b>';
   * this would make the content in h1 as "<b>!!!!</b>"
   * but the samething if we do with innerHTML, it would parse the html tags as well
   * and it would make the content bold and display
   * InnerHtml parses the html tags and displays
   */

// const allLis=document.querySelectorAll('li');

// for(let i=0;i<allLis.length;i++){
//   console.log(allLis[i].innerText);
// }

// for(let li of allLis){
//   li.innerHTML="We are <b>The champions</b>"
// }

//const todo=document.querySelector('#todos .todo');

// todo.style.color='gray';
// todo.style.textDecoration='line-through';
// todo.style.opacity = '50%';

/**
 * Manipulating the classes
 */
// const todo=document.querySelector('#todos .todo');

// todo.classList.toggle('done');

//CREATE ELEMENT

// const newh2=document.createElement('h2');
// newh2.innerText="I like animals";
// newh2.classList.add('special');

// const section=document.querySelector('section');
// ​
// section.appendChild(newh2);

//new image

const newImg=document.createElement('img');
newImg.src='https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80';
newImg.style.width="200px";

document.body.appendChild(newImg);
//new link
const newLink = document.createElement('a');
newLink.innerText='Click me'
newLink.href='https://www.google.com/search?q=click+me&rlz=1C1CHBF_enIN876IN876&sxsrf=ALeKk01Q0Hs151c29S6swGmKvU56oDaooA:1602580863733&tbm=isch&source=iu&ictx=1&fir=-4odH52Wg5X5lM%252CE-M5LK7mUBvVMM%252C_&vet=1&usg=AI4_-kToNfURpJBhxE5SLx-MTHKIFbVKhQ&sa=X&ved=2ahUKEwjH6Oz4nrHsAhUp7XMBHZiOAlYQ9QF6BAgKECc&biw=768&bih=720#imgrc=-4odH52Wg5X5lM'

const firstP = document.querySelector('p');
firstP.appendChild(newLink)

//new 

const parentUL= document.querySelector('ul')
const newLi=document.createElement('li')
newLi.innerText="This is a new LI"
parentUL.appendChild(newLi) // adds at the last of the parent

const firstLI=document.querySelector('li.todo')
parentUL.insertBefore(newLi,firstLI)

const i = document.createElement('i')
i.innerText="Italics"

const firstP1=document.querySelector('p')
//firstP1.insertAdjacentElement('beforebegin',i)
//firstP1.insertAdjacentElement('afterend',i)
//firstP1.insertAdjacentElement('afterbegin',i)
//firstP1.insertAdjacentElement('beforeend',i)

//APPEND AND PREPEND
//firstP1.append(i,newLi)
firstP1.prepend(i,newLi)

/**
 * where as if we would have used appendChild on firstP1 as
 * firstP1.appendChild(i,newLI)
 * then only i is added but newLi is not added
 * but in append, both of them are added,so this is the differece b/w append & appendChild
 */


//REMOVE CHILD 
const LastUL=document.querySelector('section ul')
const removeLI=LastUL.querySelector('.special')

const deleted=LastUL.removeChild(removeLI)

const h1=document.querySelector('h1')
h1.remove()

//EVENTS 

//the thing             event type           code to run
// button               click                change color
//input                 hits return          get search results
//image                 hover                display the image caption


