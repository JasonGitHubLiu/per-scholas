let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1 DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element.
  // Remember there are a couple of ways to query id. Change the text of the title to something shorter. 
  document.getElementById("main-title").innerHTML = "Welcome to DOM's site";

  // Part 2 Select the body and change the background-color to a new color of your choice.
  document.querySelector("body").style.backgroundColor = "#1f6ea9";

  // Part 3 Select DOM's Favorit Things list and remove the last list item. 
  // var list = document.querySelector("#favorite-things");
  // list.removeChild(list.lastElementChild);

  document.querySelector("#favorite-things li:last-child").remove()

  // Part 4 Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements. 
  titles = document.querySelectorAll(".special-title");
  for (var i = 0; i < titles.length; i++) {
    titles[i].style.fontSize = "2rem";
  }

  // Part 5 Turns out DOM never reaced in Chicago. Access the Past Races list and remove Chicago. 
  races = document.querySelector("#past-races");
  // races = document.querySelector("#side-bar");
  for (var i = 0; i < races.children.length; i++) {
    races.children[i].textContent == "Chicago" ?
      races.children[i].remove() :
      null
  }
  // Part 6 Lets add to DOM's Past Races list. Create a new <li> element, 
  //change the new <li> text to the name of a city, 
  //and append it to the Past Races list.
  let Boston = document.createElement('li')
  Boston.innerHTML = 'Boston'
  races.appendChild(Boston)

  //quicker/shorter code below      
  // races.innerHTML += '<li>Boston</li>'

  // Part 7 Create a new .blog-post corresponding to the new city added in Part 6. 
  // You will have to create a new <div> with class of .blog-post, 
  // a new <h2> with text, and a new <p> with some text. 
  // Think about what order you want to create the elements, 
  // and what order you want to append them in.

  adventures = document.querySelector('.main')
  var newDiv = document.createElement('div')
  newDiv.classList.add('blog-post')
  newDiv.classList.add('purple')
  var newH1 = document.createElement('h1')
  var newP = document.createElement('p')
  newH1.innerHTML = 'Boston'
  newP.innerHTML = 'I want some korean fried chicken'
  newDiv.appendChild(newH1)
  newDiv.appendChild(newP)
  adventures.innerHTML += newDiv.outerHTML

  //innerHTML will grab just the text
  // outerHTML will grab the text and tag

  // Part 8 When you reload the page, the script.js file loads a random DOM quote.
  // Let's play with the included function:
  // Query select the #quote-title ID element and add a click event handler. 
  // That event handler should use the function randomQuote whenever #quote-title 
  // is clicked

  let rQuote = document.querySelector('#quote-title').addEventListener('click', randomQuote)

  // Part 9 Select all .blog-post class elements. 
  // Iterate through the list of .blog-post class elements and apply two event handlers
  // to each node. The first event handler should be listening for mouseout events 
  // while the second handler should be listening for mouseenter events
  // - The mouseout handler should toggle the class .purple
  // - the mouseenter handler should toggle the class .red

  let blogPost = document.querySelectorAll('.blog-post')

  blogPost.forEach(function (postDiv) {
    postDiv.addEventListener('mouseout', function () {
      postDiv.classList.toggle('purple')
      postDiv.classList.toggle('red')
    })

    postDiv.addEventListener('mouseenter', function () {
      postDiv.classList.toggle('purple')
      postDiv.classList.toggle('red')
    })
  })
});
