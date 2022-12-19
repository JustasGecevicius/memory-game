# Memory Game

## Description

This game was my first app created with React. It is a single page application. Its main purpose was to teach me how to use useState and useEffect. With useState I was following variables like clickedItems, badClicks, currentScore and bestScore. The purpose of the game is to click each picture once and only once. Clicking twice would result in a loss. After each click the element are shuffled, therefore the user has to remember which elements have already been clicked

## Technologies used

### `React`

I started the project using create-react-app, removed most of the default code that came with the app and started my project with a clean slate. I chose React because after consulting with a few industry professionals and looking at the local trends it seemed like this was the most popular technology at the moment

### `HTML/JSX/CSS/Javascript`

When it comes to the basics of Web Dev this project helped me to solidify the principles of object manipulation, tracking state and user inputs

## Problems I Encountered

### Tracking of element locations

Since the array elements were constantly shuffled after each click I could not use the array indexes as a reliable indicator of which picture was clicked. I had to create a seperate object that was static and had IDs of each picture and then from that object create the shuffled array and DOM elements with the same IDs.

## Final Remarks

There are still a few functionalities I want to add, like user login and authentication which would allow for the highschore to be tracked or simple animations when the elements are clicked and shuffled, but this is more or less a finished website. If you have any suggestions feel free to contact me through my Portfolio website here => https://justasgecevicius.github.io/Portfolio-Website

This Project is for educational purposes only and is not meant to infringe on or use any copyright material for monetary purposes.  
