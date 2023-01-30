// Menu data structure
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
// Set the background color of mailEl of the value stored in the --main-bg stored in the CSS custom property. 
let mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
console.log(mainEl)

// Set the content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

//Add a class of flex-ctr to mainEl 
mainEl.classList.add('flex-ctr')
console.log(mainEl)

// Task 2.0: Select and create the <nav id="top-menu"></nav> element in a variable named topMenuEl 
let topMenuEl = document.querySelector('#top-menu')

// Task 2.1: Set the height topMenuEl element to 100%
topMenuEl.style.height = '100%';

// Task 2.2: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3: Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around')

//   Task 3.1: Iterate over the entire menuLinks array and for each "link" object:
//   Create an <a> element.
for (let i = 0; i < menuLinks.length; i++) {

    // Create an <a> element
    let aEl = document.createElement('a');
    //On the new element, add an href attribute with its value set to the href property of the "link" object.
    aEl.setAttribute('href', menuLinks[i].href)
    // console.log(aEl)
    // Set the new element's content to the value of the text property of the "link" object.
    // console.log(menuLinks[i])
    aEl.innerText = menuLinks[i].text
    console.log(aEl.innerText)
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(aEl);
    // console.log(topMenuEl)
}

// Task 4.0: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl// 
let subMenuEl = document.querySelector('#sub-menu');

// Task 4.1: Set the height of the subMenuEl element to be 100%
subMenuEl.style.height = '100%'

// Task 4.2: Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//Task 4.3: Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')

// Task 4.4: Set the CSS postion property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5: Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0

// Task 5.1: Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks. Declare a global showingSubMenu variable and initialize it to false. 
let topMenuLinks = document.querySelectorAll('a');
var showingSubMenu = false;
console.dir(topMenuLinks)

// Task 5.2: Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code function should immediately return if the element clicked was not an <a> element.
topMenuEl.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName != 'A') { // !bang operator = not
        return
    }
    console.log(event)
    // Task 5.3: Next, in the event listener, if the clicked <a> link has a class of active: 
    // 1. Remove the active class from the clicked <a> element.
    // 2. Set the showingSubMenu to false.
    // 3. Set the CSS top property of subMenuEl to 0
    // 4. return to exit the handler
    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active')
        showingSubMenu = false;
        subMenuEl.style.top = '0'
        return
    }

    // Task 5.4: Next, the event listener should remove a class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
    topMenuLinks.forEach((event) => {
        event.classList.remove('active')
    });

    // Task 5.5: Next, the event listener should add a class name of active to the <a> element that was clicked.
    event.target.classList.add('active');

    // Task 5.6: Set showingSubMenu to true if the clocked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT). otherwise, set it to false.
    menuLinks.forEach(link => {
        if (event.target.text == link.text) {
            if (link.hasOwnProperty('subLinks')) {
                showingSubMenu = true;
                linkCopy = link;
                // to replace the H1 SEI Rocks with the mainmenu names
                // mainEl.innerHTML = "<h1>" + event.target.text + "</h1>"
            } else {
                showingSubMenu = false;
                // Task 6.4: If the ABOUT link is clicked, an <h1>about</h1> should be displayed
                mainEl.innerHTML = "<h1>about</h1>"
            }
        }
    })

    //Task 5.7: Next in the event listener... If showingSubMenu is true: 
    // 1. Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
    // 2. Set the CSS top property of subMenuEl to 100%  
    // Otherwise (showingSubMenu is false):
    // 1. Set the CSS top property of SubMenuEl to 0.
    if (showingSubMenu) {
        buildSubMenu(linkCopy)
        subMenuEl.style.top = '100%'
    } else {
        subMenuEl.style.top = 0
    }

    // Task 5.8: Code the buildSubMenu function so that if:
    // 1. Clears the contents of subMenuEl.
    // 2. Iterates over the subLinks array passed as an argument: and for each "link" object:
    // - Create an <a> element.
    // - On the new element, add an href attribute with its value set to the href property of the "link" object.
    // - Set the new element's content to the value of the text property of the "link" object
    // - Append the new element to the subMenuEl element.
    function buildSubMenu(text) {
        subMenuEl.innerHTML = '';
        text.subLinks.forEach(link => {
            let element1 = document.createElement('a')
            element1.setAttribute('href', link.href)
            element1.innerHTML = link.text
            subMenuEl.appendChild(element1)
        })
    }
})

// Task 6.0: Attach a delegated 'click' event listener to subMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code function should immediately return if the element clicked was not an <a> element.
// console.log() the content of the <a> to verify the handler is working.
subMenuEl.addEventListener('click', function (event1) {
    event1.preventDefault();
    if (event1.target.tagName != 'A') { // !bang operator = not
        return
    }
    console.log(event1.target.innerHTML)

    // Task 6.1: Next, the event listener should:
    // 1. Set the showingSubMenu to false.
    // 2. Set the CSS top property of subMenuEl to 0

    //  if (event1.target.classList.contains('active')) {
    showingSubMenu = false;
    subMenuEl.style.top = '0'


    //              NEED TO ASK FOR HELP FOR TASK 6.2
    // Task 6.2: Remove the class name of active from each <a> element in topMenuLinks 
            // - whether the active class exists or not
            // var topMenuLinks = subMenuEl.getElementsByTagName("a");

            for (var i = 0; i < topMenuLinks.length; i++) {
              topMenuLinks[i].classList.remove("active");
              // this is how u check if its still active
            //   console.log(topMenuLinks[i].classList.contains('active'))
            }
            
            // console.log(topMenuLinks)


// Task 6.3: Update the contents of mainEl to the contents of the <a> element 
// within an <h1>, clicked within subMenuEl. 
   mainEl.innerHTML= '<h1>' + event1.target.innerHTML + '</h1>'

});