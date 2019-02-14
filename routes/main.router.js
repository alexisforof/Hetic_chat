/* 
Imports
*/
    const {Router} = require('express');

    const frontRouter = require('./front/front.routes')
//

/* 
Configuration
*/
    const mainRouter = Router();
    
    mainRouter.use('/', frontRouter)
//

/* 
Exports
*/
    module.exports = mainRouter;
//