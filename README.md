# Exmaple pages using TypeScript, React & Redux with RTK

This example project was made to test and showcase React with Redux and RTK, using CSS styled-components.

There are 3 pages:
1. Home page - The home page displays posts from [JSONPlaceHolder](https://jsonplaceholder.typicode.com/posts), with Add, Edit and Delete functionality. The A/E/D does not actually modify the data on the server, but does effect the change in the redux store which in turn gets displayed on the Home Page.

2. Universities page - The universities page displays a list of universities (default Canada) from [Universities @ hipolabs](http://universities.hipolabs.com/), with a country selector dropdown [RestCountries](https://restcountries.eu).

3. Postal Code Lookup - This page accepts a postal code, and displays the area details. [Zippopotam](https://api.zippopotam.us/us)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
