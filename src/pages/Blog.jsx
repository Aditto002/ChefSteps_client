import React from 'react'
import { Button, Container } from 'react-bootstrap'
import html2pdf from 'html2pdf.js';
 
const handleSavePDF=()=> {
  const input = document.getElementById('pdf-content');
  html2pdf(input);
  
}

function Blog() {
  return (
    <Container >
        <div id="pdf-content">
      <div className='border-bottom bg-secondary text-white p-4 rounded m-4' >
        <h3>1.Tell us the differences between uncontrolled and controlled components.</h3>
        <h4>Answer :</h4>
        <p>In an uncontrolled component, the DOM handles the form data by itself in the component. Whereas in a controlled component, the state is used to handle the form data within the component.In React, components are the building blocks of an application that perform specific tasks or functions. These components can be classified into two types: controlled and uncontrolled components.Uncontrolled components are components whose state is not managed by React. The state of these components is managed by the browser's DOM. Examples of uncontrolled components include HTML input elements like text input, checkboxes, and radio buttons.</p>
      </div>
      <div className='border-bottom bg-secondary text-white p-4 rounded m-4'>
        <h3>2.How to validate React props using PropTypes.</h3>
        <h4>Answer :</h4>
        <p>n React, PropTypes is a built-in library that allows you to define the data type and shape of your component's props. Using PropTypes, you can validate the data that is passed into your component and ensure that it is of the expected type.<br></br>

         Here's how you can use PropTypes to validate your React props: <br />

       1.First, import PropTypes from the 'prop-types' library <br />
       2.Next, define your component and its props, including their expected data types. <br />
       3.Finally, you can use your component and pass in the props. If the props do not match the expected data types, PropTypes will throw a warning in the console.</p>
      </div>
      <div className='border-bottom bg-secondary text-white p-4 rounded m-4'>
        <h3>3.Tell us the difference between nodejs and express js.</h3>
        <h4>Answer :</h4>
        <p>Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript. Express.js, on the other hand, is a web framework built on top of Node.js that provides additional features and functionality for building web applications.Node.js provides a platform for running JavaScript code outside of the browser, while Express.js provides a framework for building web applications using Node.js.

        Node.js provides a set of core modules that can be used to build server-side applications, while Express.js provides additional features like middleware, routing, and templating engines to make building web applications easier.
         Node.js can be used to build a wide range of applications, including desktop applications and command-line tools, while Express.js is primarily used for building web applications.</p>
      </div>
      <div className='border-bottom bg-secondary text-white p-4 rounded m-4'>
        <h3>4.What is a custom hook, and why will you create a custom hook.</h3>
        <h4>Answer :</h4>
        <p>In React, a custom hook is a JavaScript function that starts with the prefix use and uses one or more built-in hooks or other custom hooks. Custom hooks allow you to extract logic from your components and reuse it across multiple components.
        Custom hooks can be used to encapsulate complex or repetitive logic that is used across multiple components. By defining this logic in a custom hook, you can reduce code duplication and improve the readability and maintainability of your code.Reusing Stateful Logic: If you have multiple components that use the same stateful logic, you can create a custom hook to encapsulate that logic. For example, you could create a custom hook that handles form validation logic or manages the state of a modal window.</p>
      </div>
      
    </div>
      
      <Button className='mb-5' onClick={handleSavePDF} variant="info">Save as PDF</Button>
      </Container>
    
  )
}

export default Blog