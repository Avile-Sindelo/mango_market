[![Node.js CI](https://github.com/Avile-Sindelo/mango_market/actions/workflows/node.js.yml/badge.svg)](https://github.com/Avile-Sindelo/mango_market/actions/workflows/node.js.yml)


# The mango market

The Mango market stalls are regularly running mango specials. Help your friend Vusi to purchase mangos  on special for his fruit and veg shop. With the factory function in `mango-shopper.js` create a web application that will help Vusi to see which mangos are on special.

Use the sql script in `sql/tables.sql` to create the required tables in your local database.

Check out `test/mango-shopper.test.js` to see how to use the supplied Factory Function.

## Factory Function & Queries

For the backend functionality, the queries in mango-shopper.js should be implemented to support the frontend features. Each function in mango-shopper.js should have corresponding SQL queries for database interactions.

##  Create these screens:

* Create a screen where new mango deals can be added: A deal has a price and qty. It's created at a given shop. Shops should be selected from a dropdown. Qty and price should not be blank. And a shop must be selected before a deal is added.

* Create a screen that shows a list of all the shops. Use the pre-populated shops in the `data.sql` file.

* Create a screen that shows all the mango deals for a given shop - link to this screen from the shop list screen above. Show deals in the format `qty for price`. For example `3 for R18`, `5 for R27`

* Create a screen where a new shop can be added. Add a link to this screen from the Shop list screen.

* Show a list of the top 5 mango deals - this should be your landing page. Use deal format. Add some mango pictures or ways to show deal details visually.

* Allow a user to enter how much money they have to get a recommendation of where to go and buy their mangos. Show the deals, the shop name, and the `unit_price` for each deal.

## Get going

To get going:

* Fork & Clone this repo
* Install the dependencies
* Run the app

## Other things

<!-- * Deploy your app to [Render](https://dashboard.render.com) - share the link with us -->
* Ensure your app is responsive.
* Create a color scheme with some elements of green using: https://coolors.co/
* Create a paper prototype for your screens - plan your screens. Add this to your repo in GitHub.
* Work in Thin Slices, completing one challenge at a time.
* Use ExpressJS and Handlebars we started the app for you in `index.js`.

Fork and clone this repo. 
Commit to GitHub regularly.

## Share this with us via email

* Your paper prototype - do this first. In the first hour of working on your app. Add photos of the prototypes to your repo. Use prototypes to clarify your thinking with the mentors.
* The GitHub repo for your project and deployed link from [Render](https://dashboard.render.com).

## Work submission 

Check your EMAIL for the links to submit your GitHub Pages URL and the URL to your GitHub repository on feedback.projectcodex.co. 

## Loadshedding

If you are working remotely and you are experiencing load shedding please let us know in advance. 

## Planning

Spend the first 30 minutes of your assessment on planning. Read through all the different scenarios & create a Kanban Board with the tasks you think you need to complete. Email a link to your Kanban board to `mentors@projectcodex.co`. Create pseudo code using code comments to help you think through what you need to do. 

## Ask

**Ask** for **help** - via slack in the `#awd-assessments` or email `mentors@projectcodex.co`.

**Ask** at any time you would like help or clarity.

## Be done by 16h30

And make sure you submit your final links by latest 16h30.

Enjoy! :tada:
