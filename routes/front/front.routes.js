/* 
Import
*/
    // Déclaration et affectation du module express
    const express = require('express');
    // Déclaration et affectation de la fonction Router()
    const Router = express.Router();
//

/* 
Définition
*/
    // index.ejs
    Router.get('/', (req, res) => {
        // Envoyer le fichier index dans la réponse
        res.render('index');
    });

     // chat.ejs
     Router.get('/chat', (req, res) => {
        // Envoyer le fichier chat dans la réponse
        res.render('chat');
    });

     // login.ejs
     Router.get('/login', (req, res) => {
        // Envoyer le fichier login dans la réponse
        res.render('login');
    });

     // register.ejs
     Router.get('/register', (req, res) => {
        // Envoyer le fichier register dans la réponse
        res.render('register');
    });
//

/* 
Exports
*/
    module.exports = Router;
//