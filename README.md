# Rock, Paper, Scissors

Rock, Paper, Scissors is a classic game, that is recognisable by everyone young and old. Given the timeline to complete the Javascript module, and external personal factors, it seemed like the best project to undertake and achieve. There are a number of variations of the game, but I opted to keep it as Rock, Paper, Scissors with a modern neon theme.

![Responsive screenshot](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/responsive-screenshot.JPG) ![GitHub contributors](https://img.shields.io/github/contributors/rahcancode/pp2-rockpaperscissors) ![GitHub language count](https://img.shields.io/github/languages/count/rahcancode/pp2-rockpaperscissors) ![GitHub top language](https://img.shields.io/github/languages/top/rahcancode/pp2-rockpaperscissors) ![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Frahcancode.github.io%2Fpp2-rockpaperscissors%2F)
## Features 

![Color Palette](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/colour-pallette.JPG)

From an accessability point of view, I opted for a dark neon theme. I wanted the buttons to stand out, and kept the text and buttons simple in black and white, with some highlights of neon colour on hover. The game achieves a score of 100% with Lighthouse for accesability using these colours.

- __Overview__

![Hero Image: Game Name](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/hero-image-500.png)

There is no dedicated navigation bar, as the game has button elements with pop-up modals for "How to play", "Reset", and "Leaderboard" features.

- __Game Area__

![Game Area](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/game-area.JPG)

The Game Area consists of 5 sections: 
1. A how to play button, which opens a modal for the instructions

![How to play modal](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/play-modal.JPG)

2. The game buttons themselves, which are the standard Rock, Paper, Scissors options

![Game Buttons](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/buttons.JPG)

3. A message section that details the choice you took vs the computer, and if you have won or lost, which reads "Lets Play!" by default

![Message section: Win](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/win.JPG)
![Message section: Lose](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/lose.JPG)

4. A score section

![Score section](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/score.JPG)

5. A reset button 

- __Leaderboard__

When a game is completed, best of 3 games (regardless of win or lose by the player), a modal will open prompting you to enter a username. This contains blank space validation, with an alert that will tell you to enter a username to continue if nothing is entered into the box. Once a username is input correctly, it will update the leaderboard from the bottom, with the most recent player taking the bottom slot of 5 and moving the oldest players off the list.

![Username modal](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/leaderboard.JPG)
![Leaderboard](https://github.com/rahcancode/pp1-your-village/blob/main/media/newsletter.png)

### Features Left to Implement

- I would prefer the blank space validation error to appear in the username modal, instead of having a browser alert. Given how the modal is coded in the HTML file, and the time constraints of the project, I didn't have the scope to do this.
- I would also like to add a coloured highlight behind each of the game buttons, that corresponds to the colour of the image (pink for rock, blue for paper, yellow for scissors)

## Testing 

Lighthouse scored the website the following for desktop:

![Desktop score](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/performance-desktop.JPG)

Lighthouse score the website the following for mobile:

![Mobile score](https://github.com/rahcancode/pp2-rockpaperscissors/blob/main/media/performance-mobile.JPG)
### Validator Testing 

- HTML
  - 3 errors and 3 warnings were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Frahcancode.github.io%2Fpp2-rockpaperscissors%2F)
  - These related to changing a `<section>` to a `<div>`, a few stray tags, and an empty heading
  - No other errors were found when passing through the validator after these were resolved

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frahcancode.github.io%2Fpp2-rockpaperscissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JavaScript
- When running the JavaScript through the official [JSHint validator](https://jshint.com/) there were 37 warnings generated
- Based on feedback from other Code Institute students on Slack, adding `/* jshint esversion: 6 */` at the top of the script.js file resolved these warnings, as JSHint wasn't configured to ES6

### Unfixed Bugs

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab. 
  - In the left-hand menu, choose Pages.
  - Under Build and deployment, from the source section drop-down menu, select the Main Branch.
  - Click Save.
  - Once the main branch has been selected and you have clicked save, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://rahcancode.github.io/pp2-rockpaperscissors/
## Credits 
### Content 

- The video run through's for the Love Maths project were used as key reference points when first building the outline of the website
- Instructions on different HTML and CSS elements were referenced from [W3Schools](https://www.w3schools.com/)
- The icons in the score section, reset button and leaderboard were taken from [Font Awesome](https://fontawesome.com/)
- I referenced [7 Ways To Code Rock Paper Scissors in JavaScript](https://betterprogramming.pub/7-ways-to-code-rock-paper-scissors-in-javascript-4189a5e7e535) when coding the game play itself
### Media

- Rock, Paper, Scissors assets are from [Vecteezy.com](https://www.vecteezy.com/vector-art/691497-rock-paper-scissors-neon-icons)
- I used my own [Canva account](https://www.canva.com/design/DAFX3MvwCpI/cZYk6Gs3occ-ZLJXsp6yaA/view?utm_content=DAFX3MvwCpI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) to create the hero image

## Acknowledgements

- My husband: For allowing me the time and space to crush this project on such a short deadline
- Daisy for helping me find the simple solution to what seemed like a complex problem (margin: 0 auto doesn't always work)
- Bim for helping me code the leaderboard during the final mile, but mostly for checking-in with me and giving me tons of encouragement
- My mentor Jubril: Thank you for having the faith in me to get this done, and for your encouraging words and positive attitude throughout

