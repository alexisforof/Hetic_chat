/* 
Imports
*/
    // Import de dotenv pour inmporter le port de .env
    require('dotenv').config();

    // Import des modules NPM
    const express = require('express');
    const ejs = require('ejs');
    const path = require('path');
    const bodyParser = require('body-parser');

//

/* 
Configuration
*/
    // Affectation du module express dans la variable server
    const server = express();
    // Affectation du module dotenv dans la variable port
    const port = process.env.PORT;


    class ServerClass {
        init(){

            //Config du dossier client
            server.set('views', __dirname + '/www');
            server.use(express.static(path.join(__dirname, 'www')));


            // Config du moteur de rendu
            server.set('view engine', 'ejs');

            // Lancer le server
            this.launch();
            
        }

        launch(){

            // Lancer le serveur
            // Fonction permettant d'afficher dans la console au démarage sur server
            // Le serveur écoute sur le port 4242
            server.listen(port, () => {
                console.log(`"Ecoute sur le port : "${port}`);
            });
            
        }
    }
    
//

/* 
Démarage du serveur
*/

    new ServerClass().init();

//