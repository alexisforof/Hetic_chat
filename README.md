# HETIC_chat

Mise ne pmace d'une application de chat (chatbot)

## Configuration de base
- Intitialiser le dossier serveur (npm init) 
- Créer un fichier pour le serveur 
- Importer les composants express, body-parser, dotenv, ejs, mongoose, path, nodemon (npm i -s) 
- Configurer le fichier server : 

    - Créer une constante pour les imports (attention à dotenv) 
    - Créer une constante pour le serveur (utilisation pour la fonction express) 
    - Configurer les composants
    - Lancer le serveur 

## Configuration des vues client
- Définir le moteur de rendu en ejs
- Définir un dossier "www" comme étant le dossier client
- Créer un fichier "index.html" dans le dossier "www"
    - Créer la routes routes Homepage
    - Créer la route register
    - Créer la route login
    - Créer la route chat

## Création de l'API
- Créer un fichier de routes pour l'API (cf. front.routes)
- Créer une routes /register
- Créer une routes /login

## Création des formulaires resgister/login
- Le formulaire d'inscription contient
    - Email
    - pseudo
    - password (x2)
    - cgu

- Le formumlaire de connexion contient : 
    - Email
    - Password

