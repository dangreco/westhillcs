# Westhill CS

### Getting Started

You'll need **Node.js** and the **Gatsby CLI** in order to work on a development version of this website.

1. Install Node.js

I recommend using **nvm** to install Node.js:

To install or update nvm, you can use the install script using cURL:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
or Wget:
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

2. Install the Gatsby CLI

Install the Gatsby CLI using npm:

```
npm i -g gatsby-cli
```

### Starting the Development Server

To start the dev server, first ensure you are in the root directory of the project. Then enter the following:

```
gatsby develop
```

The development server will (most likely) be hosted at **localhost:8000/**, but check the server logs via the terminal to ensure this.

### Project Structure

- **./src/components**: Contains all of the "widgets" to be reused on the webite.
- **./src/data**: Contains all of the table data for the website.
- **./src/images**: This directory contains every image to be used throughout the website.
- **./src/pages**: The actual web pages -- the url is taken from the file name (e.g. "localhost:8000/info" routes to "./src/pages/info.js"). 
Subdirectories will be processed as sub-pages (e.g. "localhost:8000/courses/csa" routes to "./src/pages/courses/csa.js").
- **./src/globals.js**: This file contains every global variable to be used throughout the website (e.g. colors, shadows, etc.)

### Creating a New Component

React components can be made as simply as follows:
```javascript
import React from 'react'

class ComponentName extends React.Component {
    
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return (
            <div>
                <p>{ this.props.dataVariableName }</p>
            </div>
        )
    }
    
}

export default ComponentName;
```

### Creating a New Page

To create a new page at the website root, simply create a new file in the **pages** directory with the file name corresponding to the proper route (see **Project Structure** for more details on this).

**All** pages (**not** widgets/basic components) must have the following render setup:

```javascript
(
    <Layout>
        <SEO title="Page Title" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
        
            /* This is where you put the page content! */
            
        </Content>
    </Layout>
)
```
For further clarification, reference any of the existing pages.


### Building

To build this project into its production state, run the following command:
```
gatsby build
```
This will create a build directory containing static HTML, JavaScript, and CSS files. 
This can then be uploaded to the webserver.


### Style Guidlines

Just follow these general rules for consistency:

```javascript
/* Proper spacing before and after assignment operator */
let x = 10;

/* Proper spacing on deconstruction */
let { width, height } = size;

/* Function brackets start on the next line. */
function f() 
{
  
}

/* Use only multiline comments -- single line looks messy! */
```