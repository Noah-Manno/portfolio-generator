const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Write yourself a short bio.',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'What is your Github URL?',
            name: 'gitHub',
        },
    ])
    .then((response) => 
    fs.writeFile('index.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${response.name}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
    
        <!-- NAVBAR -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">${response.name}, from ${response.location}</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" href="${response.linkedIn}">LinkedIn</a>
                  <a class="nav-link" href="${response.gitHub}">Github</a>
                </div>
              </div>
            </div>
          </nav>
    
          <!-- CARDS -->
          <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${response.name}</h5>
                  <p class="card-text">${response.bio}</p>
                  <a href="${response.linkedIn}" class="btn btn-primary">Checkout my LinkedIn</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">My Skills</h5>
                  <p class="card-text">Some of my skills include: Css, Html, Javascript, Node, API Integration</p>
                  <a href="${response.gitHub}" class="btn btn-primary">See My Projects!</a>
                </div>
              </div>
            </div>
          </div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
    </html>
    `, (err) =>
    err ? console.error(err) : console.log(`Great Job, ${response.name}! Your portfolio has been created. Open up the index.html file to see it!`))
)