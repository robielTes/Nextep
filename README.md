# Nextep
MOB1 - Applications mobiles avec un framework hybride

This project is a simple mobile application to learn how to create a mobile application with React Native and Expo.

Installation
https://github.com/XCarrel/mockapi.git
cd mockapi
npm install
Usage
Prepare the project
Copy the file config.example.ts to config.ts and fill in values.

cp config.example.ts config.ts
Additional preparations for using local back-end
If the back-end is not available on the internet, you can use a local back-end.

Get the back-end
This is a simple Laravel api project. So clone and install it.

ghttps://github.com/robielcpnv/mockapi.git
cd mockapi
composer install
npm install

Copy the .env file and change the necessary values. Principally the database name, username and user password.

cp .env.example .env
Run the database migrations

php artisan key:generate

php artisan migrate

php artisan storage:link

# Get the IP address of your machine
ipconfig

# Run the server with the IP address
php artisan serve --host=<IP address>
Get you image name
You also need to have an image for the user. For this step, you first need to create an account to this server at http://<IP address>:8001/register.


From the database directly
After the account created, go to the table users and get the column picture. The value is the name of the image with his extension.

Using http client
Or you can use a http client, login to the server and get the user information that will contain the image name. But for this you need to get first the token at the route /api/rfc/mytoken.

POST /api/nxp//mytoken
Content-Type: application/json

{
    "username": "<email>",
    "password": "<password>"
}
And then you can get the image name at the route /api/rfc/me. Don't forget to add the bearer token in the header.

GET /api/nxp/profile
Authorization: Bearer <token>
The response :

{
  "id": 5,
	"email": "leo95@example.net",
	"username": "Estefania Reichel I",
	"firstname": "Felix",
	"lastname": "Bruen",
	"picture": "zMxYgTwFfzQDD1QhBkjgnEGLXLoFwENdS4omoUiS.jpg",
	"creation_date": "2022-06-20T14:36:27.000000Z",
	"last_logged_date": null,
	"wallet_address": null,
	"two_factor_auth": 0,
	"description": null
}
Store an  image 
Store an image in the server with the picture name at storage/app/public/pics/<picture name>.

Link the storage :
Commands
Start a local dev server for the app :

npm start
Opens your app in Expo Go on a connected Android device :

npm run android
Opens your app in Expo Go in a currently running iOS simulator on your computer :

npm run ios
Opens your app in a web browser :

npm run web
Create native iOS and Android project files :

Learn more: https://docs.expo.dev/workflow/customizing/.

npm run eject
Sources
React Native
Expo
React Navigation
