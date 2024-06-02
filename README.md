# **thenewstime - Introduction**

## ***Tech, Business or Politics? Ness up to date inforamtions? the thenewstime is ***

![Am I Responsive]()

TheNewsTime is a dynamic news platform designed to keep you updated with the latest and freshest news in Technology, Business, and Politics. Our aim is to provide a seamless and user-friendly experience for accessing current events and important stories from around the globe. 

In today's fast-paced world, staying informed is more crucial than ever. Whether you are a tech enthusiast eager to know the latest advancements, a business professional tracking market trends, or a politically engaged individual following policy changes, TheNewsTime caters to your need for timely and accurate information.

Our platform offers a clean and intuitive interface, making it easy for users to navigate through different news categories. With a focus on quality journalism, we curate news from reliable sources, ensuring that you get a comprehensive view of the most significant happenings.

Key features of TheNewsTime include:

1. **Real-Time News Updates**: Our system continuously updates to bring you the latest news as it happens, so you never miss out on important developments.

2. **Bookmark Feature**: Our bookmark feature allows users to save articles for later reading. This is particularly useful for busy individuals who want to catch up on important stories at their convenience.

3. **User Authentication**: With secure LogIn and SignUp functionalities, we provide a safe environment for users to manage their preferences and access saved articles.

4. **Multi-Platform Access**: Whether you are on a desktop, tablet, or smartphone, TheNewsTime provides a consistent and optimized reading experience across all devices.

We are committed to enhancing our platform and continuously improving user experience. Your feedback is invaluable to us, and we encourage you to share your thoughts and suggestions to help us serve you better.

Join TheNewsTime community today and stay ahead with the freshest news in Technology, Business, and Politics.

View live website here: [thenewsTime]().

<hr>

## **TABLE OF CONTENTS**

- [**Team Goal**](#happy-hackers-team-goal)
- [**Design**](#design)
   * [Colours](#colours)
   * [Typography](#typography)
   * [Wireframes](#wireframes)
   * [Database Schema](#database-schema)
- [**Features**](#features)
  * [Navigation](#navigation)
  * [Footer](#footer)
  * [Home Page](#home-page)
  * [Add Hack Page](#add-hack-page)
  * [Hacks Page](#hacks-page)
  * [Team Page](#team-page)
  * [CRUD Functionality](#crud-functionality)
  * [Love Hacks](#love-hacks)
- [**Testing**](#testing)
- [**Bugs**](#bugs)
- [**Technologies Used**](#technology-used)
- [**Credits**](#credits)
- [**The Team**](#the-team)

<hr>

## **Happy Hackers Team Goal**

- To create a site around the theme of 'happiness'
- To allow users to share personal experience about how they keep happy
- To provide users with suggestions of how to keep happy
- To incorporate css frameworks, such as bootstrap
- To use images, colours, emoticons and sounds to create a happy feel
- To build an interactive site using DJANGO with CRUD functionality
- To provide all team members with an opportunity to contribute

<hr>

## **DESIGN**

### **Colours**
- Research indicated that the happiest colour was yellow, with oranges also featuring.
- We selected a palette of complimentary colours with a happy theme.
- Colours were selected using the coolors color palette generator.
- An image incorporating yellow flowers was used as the background<br><br>

![Coolors Palette](/static/docs/palette.png)

<hr>

### **Typography**
- All fonts were sourced through [Google fonts](https://fonts.google.com/).
- Fonts were selected for their simple and readable design to avoid distracting from the content.
- Roboto Slab and Quicksand were selected.
- Later, Lilita One, was selected for the home page title for impact.

![Fonts](/static/docs/fonts.png)
![Title Font](/static/docs/lilitaonefont.jpg)

<hr>

### **Media**
- [Balsamiq](https://balsamiq.com/) was used for the design of wireframes.
- [Fontawesome](https://fontawesome.com/) was used for the icons on various buttons.
- [DrawSQL](https://drawsql.app/) was used to sketch out the database models at an early stage.
- [Pexels](https://www.pexels.com/) was used to source the background image.

<hr>

### **Wireframes**
Wireframes for different views are linked here:

![Mobile Wireframe](/static/docs/mob-wireframe.jpg)
![Mobile Wireframe](/static/docs/mob-wireframe-2.jpg)

![Desktop Wireframe](/static/docs/desktop-wireframe.jpg)
![Desktop Wireframe](/static/docs/desktop-wireframe-2.jpg)

<hr>

### **Database Schema**

- The database scheme was completed an an early stage, but later ammended to include emoji's

![Database Schema](/static/docs/dataschema1.jpg)

<hr>

## **FEATURES**

### **Navigation**

#### **Desktop Navigation**
- The navigation bar is located at the top of each page on the site.
- The menu contains links for the 'Home Page' (which is also linked via the Brand Logo), the 'Add Hack', 'Hacks', 'Team' page links, along with 'Login' and 'Register' links. 
- Once the user is logged in the menu the 'Register' link is replaced with the 'Logout' page link.
- The navbar is fully responsive and collapses into a burger menu for mobile devices.

![Desktop Nav](/static/docs/navbar.jpg)

#### **Mobile Navigation**
- Presented as a burger menu for design responsiveness.
- Once clicked a dropdown menu appears including all the page links as above.

![Mobile Nav](/static/docs/nav-mob.jpg)

![Mobile Nav Expanded](/static/docs/nav-mob-expanded.jpg)

<hr>

### **Footer**
- Located at the bottom of the page the footer loads text with todays date and a random happy thought.

![Footer](/static/docs/footer.jpg)

<hr>

### **Home Page**
- Upon landing on the homepage the user is presented with the title 'Happy Hacks Generator'.
- Below the title, a message instructs the user to press the button to 'generate happiness'.
- When the button is pressed, a random post (hack) is displayed to the user.
- A button at the left, illustrated with a music note, will play a happy song.
- A button at the right, illustrated with a '+' sign, will take the user to the 'Add Hack' page.

![Home Page](/static/docs/home.jpg)

![Home Page Hack](/static/docs/home-hack.jpg)

<hr>

### **Add Hack Page**
- The Add Event page is essentially a form to complete.
- If the user is not logged in, they will be redirected to login.
- The user can type their 'happy hack' and pick an emoji to illustrate the hack.
- A sound will be played when the user successfully submits a post, along with a happy animation.

![Add Event](/static/docs/add-hack.jpg)

![Add Emoji](/static/docs/add-emoji.jpg)

<hr>

### **Hacks Page**
- The Hacks page displays all the hacks in the order they were last created.
- User can type in the search box or select an emoji to filter posts so they can find suggestions that interest them.

![Hacks Page](/static/docs/hacks.jpg)

<hr>

### **Team Page**
- The team page displays cards for each member.
- Team member main roles in the project are provided.
- Each member has a space to record their own 'Happy Hack'.
- Links are provided for team members' Github and LinkedIn profiles.

![Team Page](/static/docs/team.jpg)

<hr>

### **CRUD Functionality**
- The edit and delete hack page can be accessed via the Hacks page.
- Hacks which the logged in user has created show a button which reveals an 'edit' or 'delete' link.

![CRUD Links](/static/docs/crud.jpg)

<hr>

### **Love Hacks**
- Logged in users can 'love' a hack by pressing the heart symbol displayed on the hack.
- A number displays the number of 'loves' for each hack.

<hr>

## **TESTING**

- Testing and results can be found [here](TESTING.md)
- Manual tests were carried out throughout the process.
- Responsiveness has been checked and adjusted in Chrome Dev Tools and the site has been viewed on mobiles and an mac without issues.

<hr>

## **Bugs**

* Issue - Error when signing up
* Cause - Caused by entering email address
* Resolution - Email address not required, so removed.

<hr>

## **Technologies Used**
* DJANGO
* HTML
* CSS
* Bootstrap
* Javascript
* EmojiMart

<hr>

## **Credits**

- The background image was sourced from [Daniel Space on Pexels](https://www.pexels.com/photo/shallow-focus-photography-of-yellow-flowers-1028542/)

## **The Team**

- The team worked incredibly well and managed to overcome the different time demands, supported junior member with conflict issues and got stuck into the code.
- All members were encouraged to get involved in some way and gain experience in Hackathons and agile practices.
- Regular meetings were held on slack, often to assist others in overcoming problems.