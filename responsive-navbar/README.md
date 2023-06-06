# React Application

This is a simple React application with navigation functionality. It consists of two main files: `App.js` and `Navbar.js`.

## App.js

`App.js` serves as the entry point for the React application. It is responsible for setting up the navigation using the `react-router-dom` library. The main structure of the file is as follows:

- Importing necessary React modules and components from `react-router-dom`.
- Importing custom components: `Navbar`, `HomePage`, `CoursesPage`, `DegreesPage`, and `BusinessPage`.
- Defining the main `App` component.
- Setting up the `BrowserRouter` for enabling routing in the app.
- Including the `Navbar` component for navigation.
- Using the `Routes` and `Route` components to define routes for different pages (`HomePage`, `BusinessPage`, `CoursesPage`, and `DegreesPage`).

## Navbar.js

`Navbar.js` is a functional component that represents the navigation bar of the application. It contains:

- Importing the necessary React module for the component.
- Using the `useState` hook to manage the state of the Navbar, specifically whether it is toggled or not.
- Defining a function `handleIcon` that toggles the Navbar state when an icon is clicked.

Note: The actual JSX structure and styling of the Navbar component are expected to be present in the file.

## Getting Started

To run this React application, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Run the application: `npm start`

Open your browser and go to `http://localhost:3000` to view the application.



