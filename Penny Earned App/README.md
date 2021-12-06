## Description

The Penny Earned application hopes to help its users to plan out their savings and aim for those nice extras in life. The app will allow users to create savings goals, add savings to their goals and work towards achieving them. Users will be provided easy to see progress towards their goals and work with others to achieve shared goals.

------------------------------
## Introduction
------------------------------

This is the .Net Core Application. Its currently ran on .Net 5, with Plans to upgrade to .Net 6.

This full stack application includes a React Frontend and a .Net Core Backend. We will be using 
Microsoft SQL Server Management Studio 18. 

## FrontEnd Infomation
The Frontend can be found in the ClientApp folder. It already includes a node module if you have git 
cloned the solution correctly. The Node module will be insiabl but its there dont worry, you can see 
this by selecting the 'show all files' button on the top of the solution explorer.

------------------------------
## To Start
------------------------------

1. Install Required Programs

Install Microsoft SQL Server Management Studio 18 (MSS), and SQL Server 2019. 
You can follow this guide to both - https://www.sqlshack.com/sql-server-2019-overview-and-installation/. 

You will need Visual Studio 2019/2022 or another IDE of your choice along with terminal support (or command line). 
For clarity the instructions below will assume you are using Visual Studio 2019/2022, but the steps should be similar 
if your using something else. 

Heres the Link - https://devblogs.microsoft.com/visualstudio/visual-studio-2022-now-available/

2. Setting up Database

Once you have set up MSS you can create a database. Please name the Database "PennyEarnedDatabase". 
This will be important to keep in line with the connection string already in the program.

Ensuring that the "PennyEarnedDatabase" database is selected. 
Now we want to create and populate the database with tables and data. We can find this within Microsoft teams. In 
the files section for PennyEarned Pod under the "Data/sql server scripts". Please download both scripts - 
"Creating Tables.sql" and "Adding Values.sql".

Lastely drag both scripts into Microsoft SQL Server Management Studio 18. 
Then run the scripts in order, "Creating Tables.sql" then "Adding Values.sql".

3. Clone the Project

4. Run the FrontEnd - instructions below

5. Run the Backend - instructions below

------------------------------
## To Start the Frontend
------------------------------

1) Open the ClientApp in your IDE. Found in (../Penny Earned App/ClientApp)
2) Open a terminal window (or a cmdline window).
3) Enter `npm start` to start the application.
4) Once the terminal shows it is ready navigate to `http://localhost:3000/` in your browser.

------------------------------
## To Start the Backend
------------------------------

1) Run the application on IIS Express


Any Questions just ask. My email is "Ahmed.Rahman@fdmgroup.com" or message me on teams