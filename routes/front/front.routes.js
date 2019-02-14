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
class FrontRouterClass{
    routes(){
        router.get('/', (req, res) => {
            res.render('index');
        });
    
        router.get('/register', (req, res) => {
            res.render('register');
        });
    
        router.get('/login', (req, res) => {
            res.render('login');
        });
    
        router.get('/chat', (req, res) => {
            res.render('chat');
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
module.exports = FrontRouterClass;
//