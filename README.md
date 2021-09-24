# <strong>Wiindy-The-Weather-App</strong>

 Take a glance at **[Wiindy-The Weather App](https://wiindy.netlify.app/)**

It is a website which allows the users to access the weather information for an area with just one webpage.

**[My Portfolio](https://nikhil-rawal-portfolio.netlify.app/)**

<br/>

# About the project

- Problem
  <br/>
  Individuals can get weather information at their tips. But there are a lot of parameters which are not provided by a lot of websites and sources.

- Solution
  <br/>
  A website than can give power to users to get detailed information regarding a website by just a single search.

- Objective
  <br/>
  Provide people a tool that will give them freedom to access weather details of a location just by a single page.

- My Role
  <br/>
  Research, design and create a website that will solve this problem that individual face.

<br/>

## Technologies Used

<a href="https://reactjs.org/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/react-native.png"/> </a>
<a href="https://react-icons.github.io/react-icons/" target="_blank"> <img src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" width="50" height="50"/> </a>
<a href="https://www.npmjs.com/package/axios" target="_blank"> <img src="https://user-images.githubusercontent.com/8939680/57233883-20344080-6fe5-11e9-8169-1eeb4c782683.png" width="110" height="45"/> </a>
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/html-5.png"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/css3.png"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://img.icons8.com/color/48/000000/javascript.png"/> </a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="scss" width="43" height="45"/> </a>

- React JS: Front end library used for making this very single page application. Wiindy – The Weather App.
    - Functional Components: Functional components are just simple functions which are used to pass data and props, and export data from one component to another while working with react.
    - React Props: React props are used in this project to pass data among components which define their on-screen values, and styles such as size, colour etc.
    - useState Hook: useState hook is used to store the initial state/value and changed/updated state/value of data.
    - useEffect Hook: useEffect hook is used to verify if the data/component has been changed, and if the data is added to the variable.
    - useContext Hook: useContext is used to pass data among components which can be accessed throughout the component hierarchy without passing data through the props.
<br/>
<br/>

- React Icons (react-icons.github.io): Icons utilized as ES6 imports for the project. I used React Icons because they offer various icons for free, and most importantly, we can import those icons only which are needed by us as ES6 imports.
<br/>
<br/>

- Axios: Axios is a library used to make requests to the API, return data from API, and do something when data is received. I used axios in addition to async await method to make the API request to Openweathermap and Accuweather endpoints Asynchronously.
    - Axios.Get: This command performs HTTP request.
    - Axios.Spread: This command is used to spread the array of received arguments into multiple arguments.
    - Axios.All: This command is used to make concurrent HTTP requests.

<br/>

- HTML/CSS/Javascript
  
<br/>

- SASS 
    - Skeleton CSS: A pseudonym for the animation used in pre-loading the content.
    - Nesting: A feature of SASS where elements can be nested inside one another in order to justify which child belongs to which parent.
    - Variables: A variable can be made by using $-Dollar sign which can be of any name. This variable can be then used over and over again in different parts of the document to apply styles to different elements. (It needs to be at least a parent of element where the style is going to apply)

<br/>

# Research
I have used applications and API in order to get the weather details of a location directly. There is no competition between the products.

## Application and Endpoints

- Openweathermap <a href="https://openweathermap.org/" target="_blank"> <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" width="250" height="50"/> </a>
  <br/>
  Real time and historical World weather data API. Retrieve instant, accurate weather information for any location in the world in lightweight JSON format.
    - Parameters Used
        - Name of City
        - Country
        - Latitude (Degrees)
        - Longitude (Degrees)
        - Current Temperature (Celsius)
        - Feels Like (Celsius)
        - Cloud Cover (Percentage)
        - Humidity (Percentage)
        - UV Index (Degree)
        - Visibility (Kilometres)
        - Wind Direction (Degrees)
        - Wind Speed (Kilometres per Hour)
        - Atmospheric Pressure (Millibars)
        - Precipitation (Millimetres)

<br/>

- Accuweather <a href="https://www.accuweather.com/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/AccuWeather_Logo.svg/3000px-AccuWeather_Logo.svg.png" width="250" height="34"/> </a>
  <br/>
  Get your accurate live forecast and severe weather alerts with Accuweather. The superior accuracy you can count on.

  - Parameters Used
    - 12 Hour Forecast (Celsius)
    - 5 Days Forecast (Celsius)


  
<br/>

## Conclusion
  These applications/websites contain interactions/information that we can use for our website to show the retrieved accessed weather information.



<br/>

# Prototype

**<a href="https://www.figma.com/proto/kqaGULFKOveEHlku11Kzld/Wiindy-The-Weather-App?node-id=80%3A342&scaling=contain&page-id=0%3A1&starting-point-node-id=80%3A342" target="_blank">Wiindy- The Weather App - Figma Prototype <img src="https://brandeps.com/logo-download/F/Figma-logo-vector-01.svg" width="35" height="35"/></a>**




<br/>

# Application Flow

**<a href="https://www.figma.com/proto/cbMa3JoZT4MGhAADd4p6Rg/Wiindy-Application-Flow-Diagram?node-id=4%3A2&scaling=min-zoom&page-id=0%3A1" target="_blank">Wiindy- The Weather App - Figma Prototype <img src="https://brandeps.com/logo-download/F/Figma-logo-vector-01.svg" width="35" height="35"/></a>**
