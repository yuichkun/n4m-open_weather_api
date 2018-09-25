# First of all...
[Congratulations on the release of Max 8!](https://cycling74.com/products/max-features)

And because I'm a big lover of both Max and Node.js, made a simple project that takes advantage of Node.js and some npm packages.

# Setup

1. SignUp and register an app on [OpenWeatherAPI](https://openweathermap.org/)

1. Clone/download this repository.
1. Create an `.env` file in the root directory of the project.
1. Within the `.env` file, set *your* API Key (given by OpenWeatherAPI) to `API_KEY` variable.  
e.g. `API_KEY=2asdfjewaksdflkj61e9c`  
*Above is a gibberish fake ID.*
1. In terminal, `npm install`

# Execution
1. Open up `main.maxpat` and press the `script start` message.
1. Provide an argument to the `search $1` message object with a city name of your choice! 

![sep-26-2018 08-29-22](https://user-images.githubusercontent.com/14039540/46048829-692a3980-c166-11e8-8c5d-3eb0968797c3.gif)

**There you have an API fired inside a Max patch!**
