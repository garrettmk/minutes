# Minutes

![Tests](https://github.com/garrettmk/minutes/workflows/Run%20tests/badge.svg)
![Deploy to GitHub Pages](https://github.com/garrettmk/minutes/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
## [Click here to open Minutes](https://garrettmk.github.io/minutes)

Minutes is a simple timer app, similar to the timer function in iOS: you tell it how long to run, and you get a reminder when it's finished. I've deliberately kept it very simple, because the purpose of the project was really to gain experience with some of the tools listed below. Specifically, I wanted to get comfortable writing tests for React components and hooks, and to try out Chromatic.

Tech used:
* [Typescript](http://www.typescriptlang.org)
* [React](http://reactjs.org)
* [styled-components](http://www.styled-components)
* [robot](https://thisrobot.life), a lightweight state machine library
* [Storybook](http://storybook.js.org) for component prototyping
* [testing-library](http://www.testing-library.com) for testing React components & hooks
* [Chromatic](http://www.chromatic.com) for visual regression testing
* [Cypress](http://cypress.io) for end-to-end tests
* Automatically tested, built and deployed using GitHub Actions and GitHub Pages

It also gave me an excuse to do some animation with an HTML5 canvas using `requestAnimationFrame()`, and to play around with the `Audio` API a bit.