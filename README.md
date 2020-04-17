# _Super Galactic Age Calculator_

#### By _**Matt Stroud**_
##### _Last Updated April 17, 2020_

## Description

_This is an Epicodus individual project to demonstrate Test Driven Development(TDD)._  
_The application is designed with object oriented programming._  
_Users input their age and will be provided with statistics regarding their age and life expectancy on different planets._

## Technology
* JavaScript & jQuery
* Webpack
* Node Package Manager
* Jest
* Bootstrap
* HTML & CSS

## Specs

| Application Specs                                          | Input                        | Output |
|:--------------------------------------------------------------|:-----------------------------|-------:|
| Accept user input as age on Earth.                            | 32                           | 32     |
| Determine user's age in Mercury years.                        | 32                           | 133    |
| Determine user's age in Venus years.                          | 32                           | 51     |
| Determine user's age in Mars years.                           | 32                           | 17     |
| Determine user's age in Jupiter years.                        | 32                           | 2      |
| Determine user's life expectancy on each planet.              | 32, Male, Non-smoker (Venus) | 122    |
| Determine years user has left to live on each planet.         | 32, Male, Non-smoker (Venus) | 71     |
| Determine by how many years user has surpassed life expectancy. | 75, Male, Smoker (Earth)     | 9      |

## Stretch Goals
* Add UI to application.
* Determine user's next birthdate on each planet.

## Known Bugs
* N/ A


## Setup/Installation Requirements

* Clone this repository.
```
git clone https://github.com/mlstroud/super-galactic
```
* Install the required dependencies and plugins.
```
npm install
```
* Build the project and start the development server.
```
npm run start
```
* _Note: If you are on Mac, open the package.json file and make the following change before running the above command:_  
```
npm run build & webpack-dev-server --open --mode development
```
**change to**
```
npm run build; webpack-dev-server --open --mode development
```

## View Online

* N/A

### License

This software is licensed under the MIT license.

Copyright (c) 2020 **Matt Stroud**