// Menu data structure
//Below, is what we had from part 1
// var menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];

var menuLinks = [
    { text: 'about', href: '/about' },
    {
      text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
      ]
    },
    {
      text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
      ]
    },
    {
      text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
      ]
    },
  ];
  // Task 1.0
  // Set the background color od mailEl of the value stored in the --main-bg stored in the CSS custom property. 
  let mainEl = document.querySelector('main')
  mainEl.style.backgroundColor = 'var(--main-bg)'
  // console.log(mainEl)
  
  // Set the content of mainEl to <h1>SEI Rocks!</h1>
  const h1 = document.createElement('h1')
  h1.textContent = 'SEI Rocks!'
  mainEl.appendChild(h1)
  
  //Add a class of flex-ctr to mainEl 
  mainEl.classList.add('flex-ctr')
  // console.log(mainEl)
  
  // Task 2.0: Select and create the <nav id="top-menu"></nav> element in a variable named topMenuEl 
  let topMenuEl = document.querySelector('#top-menu')
  
  // console.log(topMenuEl)
  
  
  // Task 2.1: Set the height topMenuEl element to 100%
  
  topMenuEl.style.height = '100%';
  
  // Task 2.2: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  
  // Task 2.3: Add a class of flex-around to topMenuEl
  
  topMenuEl.classList.add('flex-around')
  
  // Task 3.0: Copy the following data structure to the top of script.js -- DONE! 
  
  // Task 3.1: Iterate over the entire menuLinks array and for each "link" object:
  //Create an <a> element.
  // On the new element, add an href attribute with its value set to the href property of the "link" object
  // Set the new element's content to the value of the text property of the "link" object
  //Append the new element to the topMenuEl element
  
  for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement('a')
    a.setAttribute('href', menuLinks[i].href)
    a.textContent = menuLinks[i].text // new element content to value 
    a.classList.add('active')
    // adding the active class to each anchor tag to check if we were actually removing it below
    // console.log(a)
    topMenuEl.appendChild(a) //append the new element to the topMenuEl
  }
  
  // Task 4.0: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl// 
  
  const subMenuEl = document.querySelector('#sub-menu')
  
  // Task 4.1: Set the height of the subMenuEl element to be 100%
  subMenuEl.style.height = '100%'
  
  
  // Task 4.2: Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
  // console.log(subMenuEl)
  
  
  //Task 4.3: Add the class of flex-around to the subMenuEl element.
  
  subMenuEl.classList.add('flex-around')
  
  // Task 4.4: Set the CSS postion property of subMenuEl to the value of absolute.
  
  subMenuEl.style.postion = 'absolute'
  
  
  // Task 4.5: Set the CSS top property of subMenuEl to the value of 0.
  
  subMenuEl.style.top = 0
  
  // Task 5.0: Update the menuLinks array in script.js to this:
  
  // var menuLinks = [
  //   {text: 'about', href: '/about'},
  //   {text: 'catalog', href: '#', subLinks: [
  //     {text: 'all', href: '/catalog/all'},
  //     {text: 'top selling', href: '/catalog/top'},
  //     {text: 'search', href: '/catalog/search'},
  //   ]},
  //   {text: 'orders', href: '#' , subLinks: [
  //     {text: 'new', href: '/orders/new'},
  //     {text: 'pending', href: '/orders/pending'},
  //     {text: 'history', href: '/orders/history'},
  //   ]},
  //   {text: 'account', href: '#', subLinks: [
  //     {text: 'profile', href: '/account/profile'},
  //     {text: 'sign out', href: '/account/signout'},
  //   ]},
  // ];
  
  // Task 5.1: Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks. Declare a global showingSubMenu variable and initialize it to false. 
  
  // “The main difference between children and childNodes property is that children work upon elements and childNodes on nodes including non-element nodes like text and comment nodes.”
  
  // let topMenuLinks = topMenuEl.childNodes
  
  let topMenuLinks = document.querySelectorAll('a')
    console.log(topMenuLinks)
    var showingSubMenu = false
  
  // Task 5.2: Attach a delegated 'click' event listener to topMenuEl.
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  // The second line of code function should immediately return if the element clicked was not an <a> element.
  // console.log the content of the <a> to verify the handler is working.
  
  
  
  // topMenuEl.addEventListener('click', function(event) {
  //   event.preventDefault()
  //   // console.dir(event.target)
  //   if (event.target.localName != 'a') {
  //     // if it is not <a> quit the function
  //     return
  //   } else {
  //     // if it is <a> print text content of it to the console
  //     console.log(event.target.textContent)
  
  //hai's code
  topMenuEl.addEventListener('click', handleClick)
    
    function handleClick(event) {
      // preventDefault()
      if(event.target.tagName == 'A') {
        console.log(event.target.textContent) 
      } else {
        return
      }
  
      
      // Task 5.3: Next, in the event listener, if the clicked <a> link has a class of active: 
      // 1. Remove the active class from the clicked <a> element.
      // 2. Set the showingSubMenu to false.
      // 3. Set the CSS top property of subMenuEl to 0
      // 4. return to exit the handler
  
      if (event.target.classList.contains('active')) {
        // then check if it has the class name of active
        //then do this... and quit the function
        event.target.classList.remove('active')
  
        showingSubMenu = false
        subMenuEl.style.top = 0
        // console.log(event.target)
        return
      }
    }
    // Task 5.4: Next, the event listener should remove a class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
  
    // if it does not have a class of active it will remove it
    topMenuLinks.forEach(element => {
      element.classList.remove('active')
    });
  
    // Task 5.5: Next, the event listener should add a class name of active to the <a> element that was clicked.
    event.target.classList.add('active')
  
    // Task 5.6: Set showingSubMenu to true if the clocked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT). otherwise, set it to false.
  let subLinks;
    menuLinks.forEach(link => {
        if (event.target.text === link.text) {
          if(link.hasOwnProperty('subLinks'))
      showingSubMenu = true
          linkCopy = link
          
          subLinks = link.subLinks
          // console.log(subLinks)
    } else {
      showingSubMenu = false
          // console.log(showingSubMenu)
    }
    
    })
  
  
    
    // Task 5.7:
  if(showingSubMenu === true){
    buildSubMenu(subLinks)
    subMenuEl.style.top = '100%'
  }
    else{
    subMenuEl.style.top = '0'  
    }
  
    
  // Task 5.8
  function buildSubMenu (arg){
    // subMenuEl = ''
    arg.forEach(element => {
     let element1 = document.createElement('a')
        element1.href = element.href
      element1.textContent = element.text
      subMenuEl.appendChild(element1)
    });
  
    
  }
  
  
  
  
  
  
      // my code
  // topMenuEl.addEventListener('click', handleClick)
  // function handleClick(event) {
  //   console.log(event.target.innerHTML)
  // }
  
  
  // for (let i = 0; i < menuLinks.length; i++) {
  //   const a = document.createElement('a')
  //   a.setAttribute('href', menuLinks[i].href)
  //   a.textContent = menuLinks[i].text // new element content to value 
  //   a.classList.add('active')
  //   // adding the active class to each anchor tag to check if we were actually removing it below
  //   // console.log(a)
  //   topMenuEl.appendChild(a) //append the new element to the topMenuEl
  // }
  
  
  
  
  
  
  
  