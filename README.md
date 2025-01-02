# Missing Error Handling in Express.js POST Request

This repository demonstrates a common error in Express.js applications: missing error handling for invalid user input in a POST request.

The `bug.js` file shows the problematic code, where the server accepts user input without any validation.  The `bugSolution.js` file provides a solution that includes robust error handling.

## Bug

The server is vulnerable to issues caused by incomplete or incorrectly formatted user input.  This can lead to unexpected behavior or crashes, such as when a required field is missing from the request body.

## Solution

The solution involves adding input validation and error handling. This ensures that the server gracefully handles invalid input, providing informative error messages to the client instead of crashing or behaving unpredictably.