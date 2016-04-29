# Week 2 Assignment

### Objectives
* Make the standard portfolio site you coded last week responsive
* Create a unique and sophisticated portfolio using Bootstrap

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Week 2 Mantra

Week 1 you learned a lot of html/css, github and heroku
Week 2 you'll learn an easier way to manage the html/css along with some more github stuff
Week 3 we'll start JavaScript, and weeks 1+2 get used a lot less

There is no need to panic over week 1's material. Because you'll have 23 weeks to digest it and get good at it. 

Again, Week 1 doesn't build over the next 23 weeks. Stay calm. You'll have plenty of time to get better at it.

### Instructions
1. Create a new repository, name it `Portfolio`
2. Add the README.md to this repository
3. git clone this repository onto your machine
4. `cd` into your local copy of the repository
5. Create the folders `assignment1` and `assignment2`
6. Copy the contents (index.html, portfolio.html, assets, composer.json, etc) of `Basic-Portfolio` aka the first HW and paste the mentioned files into `assignment1`
  + Note: Be sure not to include any dot files (e.g .git, .gitignore for example) from the `Basic-Portfolio` repo.


### Assignment One Instructions
1. Inside your `assignment1` folder, find your `style.css` file, it may be in `assets/css`. At the bottom of `styles.css` you will write your media queries.
  + Use three `@media screen` tags with a `max-width` of `980px`, `768px`, and `640px`.
    + You use `980px` because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before it cuts off the content.
    `768px` is about the width of a tablet and `640px` is about the width of a phone in landscape
2. Make the layout match the following screenshots:
  + `index.html` - [980px](Images/980-index.jpg), [768px](Images/768-index.jpg), [640px](Images/640-index.jpg)
  + `portfolio.html` - [980px](Images/980-portfolio.jpg), [768px](Images/768-portfolio.jpg), [640px](Images/640-portfolio.jpg)
  + `contact.html` - [980px](Images/980-contact.jpg), [768px](Images/768-contact.jpg), [640px](Images/640-contact.jpg)
3. Make the position of the header `static` (the default positioning) when the screen is `640px` wide. You want to do this because the header design takes up a lot of room which is undesirable on small screens.
4. Be sure to include the `viewport` tag in all your html files.
5. *Pro-tip: Use the Chrome extensions [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) and [Browser Width](https://chrome.google.com/webstore/detail/browser-width/mlnegepkjlccabakompdmbcmdieaideh) to see the browser dimensions in Chrome.*

### Assignment Two Instructions
1. Find a Bootstrap theme that you like (or make your own!). There are plenty of free options available, or you can pay for one if you choose. Here are a few site where you can find themes.
  + [Wrap Bootstrap](https://wrapbootstrap.com/themes/portfolios)
  + [Boots Watch](https://bootswatch.com/)
  + [Start Bootstrap](http://startbootstrap.com/template-categories/portfolios/)
  + [Theme Forest](http://themeforest.net/tags/bootstrap)
  + [Bootstrap Skins](https://www.bootstrapskins.com/)
  + [Blacktie](http://blacktie.co/tag/portfolio/)
2. After you find a theme you like. Inside your `assignment2` folder. Create `index.html`, `portfolio.html`, `contact.html`.
3. Install the bootstrap theme and add your portfolio content.
  + Be sure to leave space for your future projects that you will be coding during the course.
4. Create the `index.php` and `composer.json` inside `assignment2`
  + Make sure you have `<?php include_once("yourFileNameHere"); ?>` and `{}` for those files.
5. Deploy your new Bootstrap Powered Portfolio to Heroku

### Bootcampspot Instructions
1. Submit the link to your `Portfolio` repository
2. Submit the link to your Heroku site in the same input field as step 1
3. You should see both links are submitted in bootcampspot.


### BONUS
1. Make CSS3 animations
