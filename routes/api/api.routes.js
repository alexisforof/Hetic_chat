/* 
Import
*/
// Déclaration et affectation du module express
const express = require('express');
// Déclaration et affectation de la fonction Router()
const router = express.Router();
//

/* 
Définition
*/
class ApiRouterClass{
    routes(){
        router.post('/register', (req, res) => {
            res.json('register');
        });

        router.post('/login', (req, res) => {
            res.json('login');
        });
    }

    init(){
        this.routes();
        return router
    }
}

//

/* 
Exports
*/
module.exports = ApiRouterClass;
//