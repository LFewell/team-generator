

const htmlTemplate = (answers) => {
    
  
  const headHTML =
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <title>Team Profile Generator</title>
      </head>
    
      <body>
        <header>
          <h4>Team Profiles</h4>
        </header>`

        let bodyHTML = `
         <div class="row">
         <div class="col s12 m6">
           <div class="card blue-grey darken-1">
             <div class="card-content white-text">
               <span class="card-title">${answers.position} ${answers.name}</span>
               <p></p>
             </div>
             <div class="card-action">
               <p>${answers.email}</p>
               <p>${answers.office}</p>
             </div>
           </div>
         </div>
       </div>`;


        
        return headHTML + bodyHTML;
}

module.exports = htmlTemplate;