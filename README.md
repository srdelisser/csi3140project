# CookBook

> A Vue.js project making use of Firebase's Firestore DB, and the firestorePlugin from Vuefire

## Team members :

| **Member Name**           | **Student ID** | **Email(s)**                  |
| :------------------------ | :------------- | :-----------------------------|
| Axel El Bakhti            | 8890998        | aelba103@uottawa.ca           |
| Simone Delisser           | 8753903        | sdeli009@uottawa.ca           |
| Anushka Paliwal           | 8269429        | apali035@uottawa.ca           |

## Project description :

We will be creating a recipe website where an user can create an account. 
They will be able to add their own recipes to their "cookbook" and pictures.
They will also be able to save recipes from other users on the site to their "cookbook".

## Colour Scheme (suggestion):

I think we could use these colours for the website based off of arriva denmark
- 004d73 - a dark blue
- 00334e - a navy blue 
- 007fbd - a royal blue (currently using for buttons)
- dbebfa - a sky blue (currently the background color for all the pages)
Other colours that can be used
- 848a8c - a grey

## Tasks :
I've brainstromed some basic pages that we can inculded in our webiste feel free to update and add to this
I've started out the html files, and currently looking at furthering the home page and the recipe page atm
for the CSS part i think that needs to be in a separate file not to sure how to do that rn, but if you guys understand please and to the readme and update!

we can also make branches to work on different parts, but for now i dont think we need to 
I hope you guys are okay with this so far! -Simone
- Home Page (Simone's attempting rn)
    - generic welcome to website page with description
    - login/create account button can go to new page
    - A slider with 3 random recipes (will be completely in d3 in the front-end part)
- Recipe page
    - image of food
    - ingredients
    - directions
    - link back to home page
    - link to "my account"
    - "upvote" button As Axel suggested
- Account Page (Simone's attempting rn)
    - new Recipe button
    - view my recipes button
    - back to home page
    - show account detials i guess
- Make/Sumbit Recipe Page
    - textboxes to input ingredients/image/directions
    - submit button
    - cancel/back to home button
    - after submitting a page/popup that has the option to "add another recipes" or "go to your recipes" button

## Installation Instructions

```
# initial installation of vue
npm install -g @vue/cli
```

```
# initial installation of vue router
npm install vue-router --save
```

```
# initial installation of vuefire
npm install firebase vuefire
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
 
