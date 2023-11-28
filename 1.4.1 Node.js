
Node.js File System (5 points):

● Write a Node.js script that reads a JSON file containing user data,
manipulates the data to include the total number of posts each user
has created, and writes the modified data back to a new JSON file.


  npm install lodash

js:

const fs = require('fs');
const _ = require('lodash');

// Read the JSON file
const readJsonFile = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Error reading JSON file: ${error.message}`);
    process.exit(1);
  }
};

// Write data to a new JSON file
const writeJsonFile = (filePath, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf8');
    console.log(`Data written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing JSON file: ${error.message}`);
    process.exit(1);
  }
};

// Manipulate user data to include the total number of posts each user has created
const manipulateUserData = (userData) => {
  const manipulatedData = _.cloneDeep(userData);

  // Assuming the structure of user data is an array of objects with 'posts' property
  manipulatedData.forEach((user) => {
    const totalPosts = _.get(user, 'posts.length', 0);
    _.set(user, 'totalPosts', totalPosts);
  });

  return manipulatedData;
};

// File paths
const inputFilePath = 'input.json'; // Replace with your input file path
const outputFilePath = 'output.json'; // Replace with your desired output file path

// Read user data from the input JSON file
const userData = readJsonFile(inputFilePath);

// Manipulate the user data
const manipulatedUserData = manipulateUserData(userData);

// Write the manipulated data to a new JSON file
writeJsonFile(outputFilePath, manipulatedUserData);



...................................................................................................................................................................................


  
Explanation:

File Reading and Writing:
The script defines functions readJsonFile and writeJsonFile to read and write JSON files, respectively.
  
Data Manipulation:
The function manipulateUserData uses Lodash to clone the user data and adds a new property totalPosts for each user, representing the total number of posts.
  
File Paths:
Specify the paths for the input and output JSON files (inputFilePath and outputFilePath).
  
Script Execution:
The script reads user data from the input file, manipulates the data, and then writes

