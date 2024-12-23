# React Native Movie App

This React Native application is a movie browsing app inspired by Netflix's UI. It includes the following features:

- Splash Screen
- Home Screen
- Search Screen
- Details Screen

## Features

### Splash Screen
- Displays a Netflix Animation.

### Home Screen
- Fetches and displays a list of movies using the API endpoint: `https://api.tvmaze.com/search/shows?q=all`.
- Each movie includes:
  - Thumbnail image
  - Title
  - Summary
- Clicking on any movie redirects to the **Details Screen**.
- A search bar at the top redirects to the **Search Screen** when clicked.

### Search Screen
- Includes a search bar to search for movies.
- Fetches and displays search results using the API endpoint: `https://api.tvmaze.com/search/shows?q=${search_term}`.
- Displays search results in the same format as the **Home Screen**.

### Details Screen
- Displays detailed information about a selected movie:
  - Image
  - Title
  - Summary
  - Other available details from the API response.

### Navigation
- Includes a bottom navigation bar to switch between the **Home Screen** and the **Search Screen**.

## Technologies Used
- React Native CLI
- JavaScript
- Axios (for API requests)

## How to Run the App

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivrajkadam19/quadb_task_1.git
   cd quadb_task_1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   - For Android:
     ```bash
     npx react-native run-android
     ```

## Folder Structure
- **assets/**: Contains the splash screen image and other static assets.
- **components/**: Reusable components for the app.
- **screens/**: Contains all the screen components (Splash, Home, Search, Details).
- **navigation/**: Manages bottom navigation and screen transitions.
- **utils/**: Utility functions (e.g., API requests).

## APIs Used
- Fetch all movies: `https://api.tvmaze.com/search/shows?q=all`
- Search movies: `https://api.tvmaze.com/search/shows?q=${search_term}`

## Screenshots

### Splash Screen
![Splash Screen](./src/assets/screenshots/splash_screen.jpg)

### Home Screen
![Home Screen](./src/assets/screenshots/home_screen.jpg)

### Search Screen
![Search Screen](./src/assets/screenshots/search_screen.jpg)

### Details Screen
![Details Screen](./src/assets/screenshots/details_screen.jpg)

# React Native Movie App

This React Native application is a movie browsing app inspired by Netflix's UI. It includes the following features:

- Splash Screen
- Home Screen
- Search Screen
- Details Screen

## Features

### Splash Screen
- Displays an appropriate image for the theme.

### Home Screen
- Fetches and displays a list of movies using the API endpoint: `https://api.tvmaze.com/search/shows?q=all`.
- Each movie includes:
  - Thumbnail image
  - Title
  - Summary
- Clicking on any movie redirects to the **Details Screen**.
- A search bar at the top redirects to the **Search Screen** when clicked.

### Search Screen
- Includes a search bar to search for movies.
- Fetches and displays search results using the API endpoint: `https://api.tvmaze.com/search/shows?q=${search_term}`.
- Displays search results in the same format as the **Home Screen**.

### Details Screen
- Displays detailed information about a selected movie:
  - Image
  - Title
  - Summary
  - Other available details from the API response.

### Navigation
- Includes a bottom navigation bar to switch between the **Home Screen** and the **Search Screen**.

## Technologies Used
- React Native CLI
- Expo (optional)
- JavaScript
- Axios (for API requests)

## How to Run the App

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```
   - For Expo:
     ```bash
     expo start
     ```

## Folder Structure
- **assets/**: Contains the splash screen image and other static assets.
- **components/**: Reusable components for the app.
- **screens/**: Contains all the screen components (Splash, Home, Search, Details).
- **navigation/**: Manages bottom navigation and screen transitions.
- **utils/**: Utility functions (e.g., API requests).

## APIs Used
- Fetch all movies: `https://api.tvmaze.com/search/shows?q=all`
- Search movies: `https://api.tvmaze.com/search/shows?q=${search_term}`

## Screenshots

<div style="display: flex; flex-direction: row; justify-content: space-around;">
  <img src="./src/assets/screenshots/splash_screen.jpg" alt="Splash Screen" width="200"/>
  <img src="./src/assets/screenshots/home_screen.jpg" alt="Home Screen" width="200"/>
  <img src="./src/assets/screenshots/search_screen.jpg" alt="Search Screen" width="200"/>
  <img src="./src/assets/screenshots/details_screen.jpg" alt="Details Screen" width="200"/>
</div>

## Submission
Submit the project via the form provided:
[Google Form Link](https://docs.google.com/forms/d/e/1FAIpQLSeQ-9PffLbFkzTFfNNv6SqmlyKhV8OT5TJVkPiHBOq9G1-YTQ/viewform)
