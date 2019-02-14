/* 
Import
*/
    // Déclaration et affectation du module express
    const express = require('express');
    // Déclaration et affectation de la fonction Router()
    const frontRouteur = express.Router();
//

/* 
Définition
*/
    // index.ejs
    frontRouteur.get('/', (req, res) => {
        // Envoyer le fichier index dans la réponse
        res.render('index');
    });
//

/* 
Exports
*/
    module.exports = frontRouteur;
//