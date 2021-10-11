<h1 align="center">Project Catwalk</h2>

## Contributors

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/69761087?s=88&amp;v=4" width="44" height="44" alt="@bkern98">

**Ben Kern**<br>
[GitHub](https://github.com/bkern98) • [LinkedIn](https://www.linkedin.com/in/benjamin-kern-4a7371184/)

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/23545273?s=88&amp;v=4" width="44" height="44" alt="@UnlikelyHero">

**Don Vida**<br>
[GitHub](https://github.com/UnlikelyHero) • [LinkedIn](https://www.linkedin.com/in/donald-vida/)

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/84642987?s=88&amp;v=4" width="44" height="44" alt="@itsme-kristin">

**Kristin Gadgil**<br>
[GitHub](https://github.com/itsme-kristin) • [LinkedIn](https://www.linkedin.com/in/kristingadgil/)

## Table of Contents
 - [About this project](#about)
 - [Workflow](#workflow)
 - [Installation](#install)
 - [Technologies](#technologies)
 - [Packages](#packages)
 - [Product Overview (Don V.)](#overview)
 - [Related Products & Outfit List (Kristin G.)](#products)
 - [Ratings and Reviews (Ben K.)](#reviews)

## About this project<a name="about"></a>

<img src="./client/data/gifs/FinalProjectOverview.gif" alt="project overview" width="450"/>

**Description of the Project**

>Our team of software engineers was tasked with building a product detail page for a fashion website, BDKloset. We were given three weeks to implement our client's user story, laid out to us in a business document. The product detail page is comprised of three main widgets - further details can be found below.


**Objectives**

>Deliver a fully functional web application that meets the specifications and requirements outlined by project stakeholders. Work together on a single code base by dividing up the work among team members but working collaboratively to produce a single front end application. Integrate the front end with the existing API for the product, and demonstrate a working application at the end of the project timeline.

**Support**

>Issues and Feedback can be reported through our GitHub Repository: [ProjectCatwalk Issues](https://github.com/HR-TeamBrie-FEC/ProjectCatwalk/issues)

## Workflow <a name="workflow"></a>
Our team used Agile workflow for this sprint.
- [Trello](https://trello.com/b/8S1rf86v) for ticket management using the Kanban template.
- [GitHub](https://github.com/HR-TeamBrie-FEC/ProjectCatwalk) for source code versioning and Management
- [VSCode](https://code.visualstudio.com/) for source code editing

## Installation <a name="install"></a>

ProjectCatwalk requires both NodeJs and npm to run

1. Download the repo using git
```
git clone https://github.com/HR-TeamBrie-FEC/ProjectCatwalk.git
```
2. Install dependencies
```
npm install
```
3. Create a `config.js` file in the root directory, store your GitHub token like so:
```
module.exports = {
  TOKEN: 'YOUR TOKEN HERE',
};
```
* Note, this file is ignored in .gitignore but is required in order to pull data from the API.

4. Run the Webpack compiler
```
npm run build
```

5. Run the App
```
npm start
```

## Technologies <a name="technologies"></a>
- [NodeJS](https://nodejs.org/en/)
- [Axios](https://www.npmjs.com/package/axios)
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Express ](https://expressjs.com/)

## Additional Packages <a name="packages"></a>
- [Material UI](https://mui.com/)
- [Moment.js](https://momentjs.com/docs/)
- [Formik](https://www.npmjs.com/package/formik)
- [Compression](https://www.npmjs.com/package/compression)
- [react-inner-image-zoom](https://www.npmjs.com/package/react-inner-image-zoom) by [laurenashpole](https://github.com/laurenashpole/react-inner-image-zoom)
- [react-items-carousel](https://www.npmjs.com/package/react-items-carousel) by [kareemaly](https://github.com/kareemaly/react-items-carousel)
- [react-share](https://www.npmjs.com/package/react-share) by [nygardk](https://github.com/nygardk/react-share)
- [yup](https://www.npmjs.com/package/yup) by [jquense](https://github.com/jquense/yup)

## Product Overview (Don V.) <a name="overview"></a>

**Image Gallery Features**
* *Default Gallery View*: A visual component that provides a way to browse the available photos for each product style. Using the arrows available on either side of the view or clicking the thumbnails indexed on the left of the gallery will allow you to peruse through the photos. Clicking on the view will open an Expanded view of the Image Gallery
* *Expanded View*: A visual component that is opened by clicking on the default view of the Image Gallery. The component spans across the entire browser width and provides a larger view of the selected photo. Navigation controls at the top of the photo will allow you to continue browsing through photos without having to leave the view. Clicking on the larger photo will allow you to view a "zoomed-in" portion of the photo at its maximum size. Moving your mouse while zoomed in will pan the photo until the mouse leaves the photo frame, or moves over the navigation controls.

**Product DetailsFeatures**
* *Style Selector*: Each product comes in a varied amount of styles. The style selector lists visual thumbnails of each available style and allows you to click on the desired style to update the image gallery and stock selection.
* *Add To Cart*: The Add to Cart form lists the available sizes available for the currently selected style. Selecting a Size allows you to select the available quantity of the product you'd like to order in that size, as well as enabling the Add to Cart button to finalize the sale. For Styles where there are no available stock, the Size and Quantity selection is not displayed and the disabled "Add to Cart" button displays "Out of Stock" instead.

## Related Products & Outfit List (Kristin G.) <a name="products"></a>
**Related Products List Features**
* *Related Products List*: A carousel that displays four related product cards at a time and changes when the main product is changed. It has arrows that show up if more than four cards are provided that allow you to scroll through the list.
* *Product Card*: A card that displays the default image for the product, the category, the name of the product, the price, and the average rating. Clicking on a product card will change the main product featured on the page.
* *Comparison Modal*: When you click on the star icon located at the top of a product card, a comparison modal will appear comparing the product card's features to the main product's features.

**Outfit List Features**
* *Outfit List*: A carousel that displays three outfit cards at a time and is manipulated by the user. It has arrows that show up if more than three cards are chosen that allow you to scroll through the list.
* *Outfit Card*: The appearance of this card is very similar to the product card in the related products list. Instead of a star in the top right corner, it has an "x". When the "x" is clicked, the outfit card will be deleted from the outfit list.
* *Add Outfit Button*: Clicking on this button will add an outfit card for the main product into your outfit list carousel.

## Ratings and Reviews (Ben K.) <a name="reviews"></a>
**Ratings and Reviews Features**
* *Review List*: A list that displays two review tiles at a time. Clicking the More Reviews button will cause an additional two tiles to display until all reviews have been rendered. Once the list reaches a specified height, the user will be able to scroll through the list without moving down the entire webpage. The list can also be sorted by most relevant, most recent, or most helpful.
* *Ratings Breakdown*: For each product, the reviews are broken down by the rating given on a scale between one and five stars. The number of reviews for a each rating is displayed next to a sliding bar that visually represents the percentage of reviews of that rating. Clicking on one of the ratings will filter the review list to show only the reviews with that rating. Clicking on additional ratings will add on to the filters and clicking on one of the added filters will remove it. Once a filter is added, there will be a button to remove all filters rather than having to remove them one at a time.
* *Product Breakdown*: Each product has a set of characteristics with average ratings from all of the reviews. A bar displays what that average rating is on a scale from one to five with the meaning of the highest and lowest ratings displayed below.
* *New Review Form*: Clicking on the Write A Review button opens a modal with a form for users to write a new review for the current product. The user can submit a rating, a summary, a review body, a recommendation, characteristic ratings, photos, a name, and an email. Upon submitting the review, the user's inputs will be validated and appropriate error messages will display if the input is invalid.
