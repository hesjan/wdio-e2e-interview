Interview task
====================
##Description

- Currently implemented tests are running in chrome 81.
- Tests are using browser with resolution 1600 x 1200. Definitely they should be written also for other resolutions because application is responsive.
- Tests are using data from production so after some time products could become no longer available.

## Libraries
- WebdriverIO v6 with selenium-standalone service
- Mocha
- Page Object model
- Prettier
- Chai
- Spec reporter

## Preconditions
- Tests requires following libraries/tools to be installed in your computer:
  - `Node.js` version 10 or higher
  - `npm` version 6 or higher
  - `Chrome` browser version 81 (if you have different version - before running you have to change chromedriver version that will be downloaded before running tests - at the top of wdio.conf.js file)
## How to Start

**Clone the project**

**Install**

```npm install```

**Run Tests**

```npm test```

**Run Only Order Tests**

```npm test:order```

**Run Only Search Tests**

```npm test:search```

