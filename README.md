# knowledgehub
 library management system


# Dmmy data service

1. Install the  json-server from npm

	**npm install json-server -g**

2. Create a folder json-server and place the **db.json** file there.
	It is present in the **public** folder of the application.

3. Run the below command from the json-server folder
	
	**json-server --watch db.json --port <yourPort>**

4. Now you can test all the apis :
	http://localhost:9000/employees
	http://localhost:9000/employees/supra

	Njoy coding!!!


# Server.js 

1. This acts as an intercepter and generates the Json web token for the sessions to be validated.

2. Place the server.js in the required path where json-server is present.
   Install the required dependencies and issue the command to start
   **node server.js**
