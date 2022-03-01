# github-search

Search box with autocomplete using GitHub Search API

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Requirements

Using the Github search API (https://developer.github.com/v3/search/), implement an autocomplete search box using ReactJS. The solution should include tests. Please document how to execute the solution and have the submission in a public Github repo.

The React app should have the following:

-   A web page that has a search form
-   The list of results based on the search input

## DEV NOTES

To do list:

-   get GitHub Search API working in Postman
-   basic page layout, use Material UI

Assume:

-   doing a "repository" search with GitHub Search, as opposed to code, commits, issues, etc., because this is the default mode on the GitHub.com search
-   autocomplete box behavior
    -   options are displayed in a pop up. These are the result of the query using whatever the user has typed in so far.
    -   hitting enter will execute the search, and display the results below
    -   user can type in a new search field and view autocomplete hints. The results below will not change until the user hits Enter or clicks on an autocomplete option.

Future enhancements:

-   autocomplete pop up may not come back if you type something, wait for box to appear, then type something that doesn't exist in the box so it goes away. Expected behavior would be that the box comes back after the new query finishes, but the box never comes back.
-   improve test coverage, e.g. to test autocomplete results, perhaps using snapshots.
-   split it into two components, one for the search and one for results display

## How to execute the solution

1. npm install
2. npm start
3. npm test
