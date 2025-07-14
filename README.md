# WeatherApp

![GitHub repo size](https://img.shields.io/github/repo-size/per5ect/weatherapp)

Deploy link:
https://wetherapp-weatherfy.netlify.app/

## Description

**WeatherApp** is a Node.js-powered application that allows users to search for any city and view its current weather conditions, complete with a dynamic background image sourced from Unsplash. Fetching data from the OpenWeather API, WeatherApp delivers a visually engaging and informative experience for weather checking.

## Features

- 🌤️ Search weather by city name
- 📍 View temperature, humidity, wind speed, and weather description
- 🖼️ Dynamic city-based background images from Unsplash
- 📊 User-friendly error handling for invalid searches
- 🔄 Refresh weather data in real-time
- 🎨 Clean and modern UI

## Technologies Used

- [JavaScript (Node.js)](https://nodejs.org/)
- [OpenWeather API](https://openweathermap.org/api)
- [Unsplash API](https://unsplash.com/documentation)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Usage

- Enter a city name in the search field and submit.
- The app will display current weather details and fetch a relevant city image.
- The data is updated every minute.


<img width="1434" height="681" alt="image" src="https://github.com/user-attachments/assets/d2ee1c6a-bfdd-493f-a3b7-27206c840d4e" />
<img width="1431" height="690" alt="image" src="https://github.com/user-attachments/assets/4f810e40-3196-4442-a47a-91c89a216647" />
<img width="1433" height="684" alt="image" src="https://github.com/user-attachments/assets/08eb7709-fbce-466c-a149-51d738519fe4" />



## Project Structure

```
per5ect-weatherapp/
├── index.html                 <!-- Main HTML file, entry point for the app UI -->
├── package.json               <!-- Project metadata, dependencies, and scripts for npm -->
├── scripts/
│   └── createEnv.js           // Script to automate creation of .env file for API keys
└── src/
    ├── imageApiService.js     // Gets city images from Unsplash API
    ├── index.js               // Main JavaScript entry: initializes and runs the app
    ├── weatherApiService.js   // Fetches weather data from OpenWeather API
    ├── weatherWidgetService.js// Logic for rendering and updating the weather widget
    ├── constants/
    │   ├── api.js             // Stores API endpoints and related constants
    │   ├── settings.js        // App configuration (default city, units, etc.)
    │   └── time.js            // Time-related constants and helpers
    ├── helpers/
    │   ├── baseFetch.js       // General-purpose HTTP request utility
    │   ├── formatTemperature.js// Formats temperature values for display
    │   └── mappers.js         // Maps raw API data to UI-friendly formats
    └── styles/
        ├── base.css           /* Base/global styles */
        ├── index.css          /* Main page/app styles */
        └── weather-widget.css /* Weather widget component styles */

```
