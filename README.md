# First <small><small><small><small><small>SIMPLE</small></small></small></small></small> Full Stack Application
My goal for this program is for me to finally connect the front-end to the back-end and begin creating my own Full Stack Apps, but first I must get as best of an understanding I can of the process and setup of it all. This will be a simple program but it will set the foundation for my Full Stack learning and creation.

## Project Updates
<h3>June 13, 2020</h3>
<h4>4:30pm - 6:30pm</h4>
Began creating the DOM for the qbs route; created a heading, a search bar that allows the user to search through players by name, a display div below that displays all the qbs in the database (only have 3 docuements in my quarterbacks collection but once I add more I'll implement a clickable page like system or a scrollable div but not the page). Created the API request to get the players from the database and display them to the DOM in the players div.<br>

Ideas:
- Thinking about implementing a sort/filter and adding another route that will be for each individual player so they will have their own page which could display more info on them.

<h3>June 12, 2020</h3>
<h4>8:00pm - 9:30pm</h4>
Created another GET request for the qbs route because I realized I wanted to send static HTML for my HomePage and I was running a GET request for all the QBs on the page to display them on the DOM from the HTML's JS file but I also want a designated page for each position so I created another GET request for the all players request and that route is now /'qbs/all' and all positions will follow that now. Created "stand in" HTML and JS files until I create the DOM for the domain, but this was just to test and once working properly I decided to create another position Model which was the halfbacks position.<br>
This model contains properties: name, teams, rushing yards, rushing attempts, and touchdowns. Then I created the route for this domain which has the same requests as the QBs (all positions will have the same requests). Then I required and wrote a use method for this route name in my index JS file. Then within the homeStatic folder of my public folder that I went and added code that would create the halfback tab in the nav bar and made the data display to the DOM the same as the QBs does (all tabs will do this).<br>
Lastly, just thinking ahead and added a 'View All' href link that will take the user to the domain of that position. This page will contain all the players for that position and allow the user to filter through and compare players.

<h3>June 11, 2020</h3>
<h4>5:30pm - 8:30pm</h4>
Added another GET request to the qbs route to get an indiviudal QBs statistics. Also started creating the frontend of this applications home page which I want to have a clickable navigation bar that will display positions and a user can click on one and it will create a display below so the user can (either scroll or click through pages) to view each players statistics for that position. So far, I've created the heading for the homepage, the nav bar that for now only has a Quarterbacks tab and as I add positions I will add them to the nav bar. Then once the Quarterbacks tab is clicked a div is created below with the data from the collection of QBs in my Database and display them nicely with name, win loss record, passing yards and touchdowns, and current/previous teams.

<h3>June 10, 2020</h3>
<h4>5:30pm - 7:30pm</h4>
Finally figured out what kind of project I wanted to create, this is going to be a NFL refernece application, depending how much I add to this but the first process I will be attempting to create is the Quarterbacks portion. So to this I started by making the Schema Model for the QBs which has the properties: name, passing yards, passing touchdowns, win loss record, teams, and jersey numbers. After, I went and created the method requests for the 'qbs' route of my API.<br>
Within this I created a GET for all QBs in the database, a PATCH to updated a specific QB by their id in the database, a DELETE to remove a specific QB by it's id from the database, and a POST to add a new QB to the database. All are working good and I have added some QBs to my database already.

<h3>June 9, 2020</h3>
<h4>6:00pm - 8:30pm</h4>
Intialized my express server and added middleware to use the morgan package and another to ensure that the data being sent to this server is parsed using Express's json middleware method that takes care of that for me. I setup a simple home/root route by creating a new folder and creating router requests from express's Router method. I exported this file so I could use it in my app.js. Then I simply added a get request to the homeRouter file and served static files that i'll actually create more in later.