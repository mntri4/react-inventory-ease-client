<h1>Inventory-Ease-Client</h1>

<h2>Summary</h2>
Application for use by car dealerships and their personnel to track, add, update and delete vehicle inventory.

<h2>Link to live App</h2>

https://react-inventory-ease-client-jfyepprvz.now.sh/

Method:

GET | POST | DELETE | PUT

URL Params

Required:

id=[integer]

Optional:

photo_id=[alphanumeric]

Data Params


Success Response:


Code: 200
Content: { id : 12 }
Error Response:

Code: 401 UNAUTHORIZED
Content: { error : "Log in" }
OR

Code: 422 UNPROCESSABLE ENTRY
Content: { error : "Email Invalid" }
Sample Call:

Notes:
>

<h2>Technologies Used</h2>
<h2>Front End</h2>
<ul>
  <li>React</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>
<h2>Testing</h2>
<ul>
  <li>enzyme</li>
  <li>enzyme-adapter-react-16</li>
  <li>react-test-renderer</li>
  <li>redux-mock-store</li>
</ul>

<h2>Server side repo</h2>

<h2>Technologies used</h2>
<ul>
  <li>Node</li>
  <li>Express Framework</li>
  <li>Passport Authentification</li>
  <li>Jwt Security</li>
</ul>
<h2>Testing</h2>
<ul>
  <li>Chai</li>
  <li>Chai-http</li>
  <li>Mocha</li>
</ul>

<h2>Screen shots</h2>
<h3>Landing Page</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/landing-page.PNG" />

<h3>Sign up form - create a new account:</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/Sign-Up-Page.PNG" />

<h3>Sign in form - sign in to existing account:</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/Sign-In-Page.PNG" />

<h3>Home page: Includes options for search all, search by Id, update and
add new vehicle to inventory.</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/Home-page.PNG" />

<h3>Search Entire Inventory:</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/Search-All.PNG" />

<h3>Search vehicle by Id:</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/Search-Id.PNG" />

<h3>Update vehicle info:</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/Update.PNG" />

<h3>Add new inventory:</h3>
<img src="https://github.com/mntri4/react-inventory-ease-client/blob/master/screen_shots/Add-Inventory.PNG" />
