#First Full Stack Application
My goal for this program is for me to finally connect the front-end to the back-end and begin creating my own Full Stack Apps, but first I must get as best of an understanding I can of the process and setup of it all. This will be a simple program but it will set the foundation for my Full Stack learning and creation.

<h2>June 10, 2020</h2>
<h3>5:30pm - 7:30pm</h3>
Finally figured out what kind of project I wanted to create, this is going to be a NFL refernece application, depending how much I add to this but the first process I will be attempting to create is the Quarterbacks portion. So to this I started by making the Schema Model for the QBs which has the properties: name, passing yards, passing touchdowns, win loss record, teams, and jersey numbers. After, I went and created the method requests for the 'qbs' route of my API.<br>
Within this I created a GET for all QBs in the database, a PATCH to updated a specific QB by their id in the database, a DELETE to remove a specific QB by it's id from the database, and a POST to add a new QB to the database. All are working good and I have added some QBs to my database already.

<h2>June 9, 2020</h2>
<h3>6:00pm - 8:30pm</h3>
Intialized my express server and added middleware to use the morgan package and another to ensure that the data being sent to this server is parsed using Express's json middleware method that takes care of that for me. I setup a simple home/root route by creating a new folder and creating router requests from express's Router method. I exported this file so I could use it in my app.js. Then I simply added a get request to the homeRouter file and served static files that i'll actually create more in later.