

# Simple Counter
![deploy](https://github.com/lippielip/simple_counter/workflows/deploy/badge.svg)
![test](https://github.com/lippielip/simple_counter/workflows/test/badge.svg)

Simple Counter aims to collect the most data possible from a single button click and amalgamate it into comprehensive statistics. The project is bootstrapped with create-react-app and uses their standard npm scripts.

## Installing
For the latest stable version:
```
git clone https://github.com/lippielip/simple_counter.git
```
For the dev Branch:
```
git clone https://github.com/lippielip/simple_counter.git
git checkout dev
```
Navigate into project folder and install dependencies:
```
npm install
```
Create a `.env` file in the project root directory with values:
```sh
REACT_APP_API_KEY= your Firebase API_KEY
REACT_APP_AUTH_DOMAIN = your Firebase AUTH_DOMAIN
REACT_APP_DATABASE_URL = your Firebase DATABASE_URL
REACT_APP_PROJECT_ID = your Firebase PROJECT_ID
REACT_APP_STORAGE_BUCKET = your Firebase STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID = your Firebase MESSAGING_SENDER_ID
REACT_APP_APP_ID = your Firebase APP_ID
```

## Running
You should now be able to run the application with:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
