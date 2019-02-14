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
class FrontRouterClass{
    routes(){
        Router.get('/', (req, res) => {
            res.render('index');
        });
    
        Router.get('/register', (req, res) => {
            res.render('register');
        });
    
        Router.get('/login', (req, res) => {
            res.render('login');
        });
    
        Router.get('/chat', (req, res) => {
            res.render('chat');
        });
    }

    init(){
        this.routes();
        return Router
    }
}

//

/* 
Exports
*/
module.exports = FrontRouterClass;
//