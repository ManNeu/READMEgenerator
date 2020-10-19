const inquirer = require("inquirer");
const fs = require("fs");
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "what is the title of your project?"
        },
        {
            type: "input",
            name: "content",
            message: "what is the content of your project?"
        },
        {
            type: "input",
            name: "installation",
            message: "show the method of installation."
        },
        {
            type: "input",
            name: "test",
            message: "any test done?"
        },
        {
            type: "input",
            name: "userStory",
            message: "Whats the purpose of the project?"
        },
        {
            type: "input",
            name: "builtWith",
            message: "how is the project built?"
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Whats your github username?"
        },
        {
            type: "input",
            name: "githubLink",
            message: "provide the github link of the project"
        },

        {
            type: "input",
            name: "author",
            message: "Provide the name of the author"
        },
        {
            type: "input",
            name: "email",
            message: "What's the email address of author?"
        },
        {
            type: "input",
            name: "acknowledgement",
            message: "who do you acknowledge for accomplishing the project?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "choose a license from following",
            choices: [
                "MIT",
                "Apache 2.0",
                "ISC"
            ]
        }


    ])
    .then(answers => {
        const { title, content, installation, test, userStory, builtWith, githubUsername, githubLink, author, email, acknowledgement, license } = answers;




        const READMEfile = `# ${title}
## Table of Contents

- [content] (#content)
- [Installation] (#intallation)
- [userStory] (#userstory)
- [Author] (#author)
- [email] (#email)


 ### Content
${content}

### Installation
${installation}

### User Story
${userStory}

### Built With
${builtWith}

### Github Username
${githubUsername}

### Github Link
${githubLink}

### Author
${author}

### email
${email}

### Acknowledgement
${acknowledgement}

### License
${license}`



        fs.writeFile("README.md", READMEfile, error => {
            if (error) {
                console.log(error);

            } else {
                console.log("all done");

            }


        });
    });
