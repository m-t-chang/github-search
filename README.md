# github-search

Search box with autocomplete using GitHub Search API

## Assumptions about requirements

-   we are doing a "repository" search with GitHub Search, as opposed to code, commits, issues, etc., because this is the default mode on the GitHub.com search
-   autocomplete box behavior
    -   Sugesstions are displayed in a pop up, which are the result of the query using whatever the user has typed in so far.
    -   The search will execute as soon as the user stops typing, so there's no need to hit Enter to do the search

## How to run the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Future enhancements:

-   Bugfix: autocomplete pop up may not come back if you type something, wait for box to appear, then type something that doesn't exist in the box so it goes away. Expected behavior would be that the box comes back after the new query finishes, but the box never comes back.
-   improve test coverage, e.g. to test autocomplete results, perhaps using snapshots.
-   split it into two components, one for the search and one for results display
-   address the warning about duplicate keys when rendering search results. One solution is to pass a custom function to define the options, because by default MUI uses option.label and there may be duplicates.
-   new feature: user can type in a new search field and view autocomplete hints, without erasing the previous search results. The results below will not change until the user hits Enter or clicks on an autocomplete option.
