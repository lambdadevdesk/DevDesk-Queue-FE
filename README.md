# DevDesk-Queue-Front-End

Application URL: https://suspicious-yalow-77c7a7.netlify.com
API URL: https://devdeskqueue-be.herokuapp.com/api/

## Project Description 
Students at Lambda School need a place where they can escalate their concerns and receive help. This app allows an admin to manage help desk tickets that come in from Lambda School Students. It also allows students to submit a help desk ticket, categorize it and post it to the help channel.


        // Table of Contents \\

# Installation

# Usage

# Contributing

# Credits

# License


# Installation

    In the `devdesk` directory run `npm install` or `yarn install` to install the necessary dependencies to run your localhost dev server.

    From there you can run `npm start` or `yarn start` to launch your local development server.

# Usage

    The local development server should launch at localhost://3000 and should be responsive to any edits you make in ypur code editor.

    The code utilizes Redux to connect to the API that is deployed on heroku. To gain access to the private routes that are locked on the API. You can use the hardcoded user accounts located on the server.
```
    Admin User:
            Username: admin
            Password: testadmin123

            Logging in as the Admin will allow you to perform a set of actions that are not allowed from the student side of the application. 
            
            Admin Privileges:
                    Creating a ticket
                    Claiming a ticket to solve
                    Returning a ticket to the list with an unclaimed status
                    Resolving/Closing a ticket
                    Unresolving/Opening a ticket
                    Deletling a ticket

            Username: student
            Password: testStudent123

            Logging in as the Student will allow you to perform a set of actions that different than the Admin.

            Student Privileges:
                    Creating a ticket
                    Editing a ticket
                    Deleting a ticket
    
    
    ***NOTICE***
    
    The hardcoded user accounts may be changed at any time. Any changes made will be noted in this ReadMe file. 
```
# Contributing

    Please feel free to contribute to the project through Pull Requests. There is a great possibility that the original development team will no longer be maintaining the code base after 05/06/2019. The current frontend managers will be updated in this ReadMe.

# Credits
```
    Seun O - Front End Engineer
    Mychal Hall - Front End Engineer
```

# License

    MIT License

Copyright (c) [2019] [DevDeskFrontEnd]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
