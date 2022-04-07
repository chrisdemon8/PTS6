# Front-end Projet Tutoré  

## Lien projet
- https://trello.com/b/gjoJPKgH/projettutgestioncabinetavocat
- https://github.com/chrisdemon8/PTS6

## membres
- TRAMOY Florian
- CHALOPIN Alexy  
- SALICE Jean-Michaël 
- PÉTRÉ Christophe
  
# Prérequis pour faire fonctionner le projet 

## Clone du projet

- Ayant fait l'erreur (non corrigé car présence de l'historique des commit) de ne créer que un seul repo git pour le back et le front il faut clone le projet deux fois dans une dossier front et un dossier back puis changer la branch pour le front `git checkout front-end` et le back `git checkout back-end-florian`
- Une fois les deux dossiers initialisés il faut faire pour le front un `npm i` et pour le back un `composer i`

## Faire un virtualhost 
- Virtualhost pour faire tourner le back-end ( > PHP 8) 
- Virtualhost qui pointe sur le dossier back que vous avez créer avant
- Nom du virtual host pour call l'api : pts6.local ( nom du virtual host changeable il faut modifier les fichiers src/components/request/callapiCase  et callapiClient, variable prefixURL pour le build par défaut)
- Importer le code sql (racide du projet bddAvocado.sql) du back-end dans un server sql (credential et et nom de la base de données à changé dans le fichier src/app/controller/connexion/connexion.php)


- Pour le front il suffit de lire les étapes suivantes en fonction du build

# Les différentes build

## Version de node 
- 16.14.0  


## Build webpack 

### Attention webpack cli compatible uniquement avec node : 
- ^12.22.0 || ^14.17.0 || >=16

### Pour lancer en mode dev web 
- `npm run start:web` 

### Commande pour build le bundle.js 
 
- `npm run build:web`
- Afin d'utiliser le bundle qui se trouve dans le dossier dist il faut lancer un localhost pour lire index.html qui permet de lire le site build avec webpack
- juste une version de build pas de dev pour l'instant (à voir si utile)
 


## Build ionic capacitor 

### Attention webpack cli compatible uniquement avec node : 
- ^12.22.0 || ^14.17.0 || >=16

### Commande pour lancer l'application sur android

Build le code du site 
- `npm run build:mobile`

Créer la build android depuis le build du site 
- `npx cap add android`

Avoir android studio sur son pc et lancer 
- `npx cap open android`
 

## Build electron 

- `npm run electron:dev`

Runs the Electron app in the development mode.

The Electron app will reload if you make edits in the `electron` directory.<br>
You will also see any lint errors in the console.

- `npm run electron:build`

Builds the Electron app package for production to the `dist` folder.

Your Electron app is ready to be distributed!

## Project directory structure

```bash
my-app/
├── package.json
│
## render process
├── tsconfig.json
├── public/
├── src/
│
## main process
├── electron/
│   ├── main.ts
│   └── tsconfig.json
│
## build output
├── build/
│   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   │
│   └── electron/
│      └── main.js
│
## distribution packges
└── dist/
    ├── mac/
    │   └── my-app.app
    └── my-app-0.1.0.dmg
```
  

## Lien utile pour les build 

# ionic capacitor 
- `https://capacitorjs.com/solution/react`

# webpack
- `https://webpack.js.org/loaders/css-loader/`
- `https://webpack.js.org/guides/getting-started/`
- `https://webpack.js.org/guides/typescript/`

# electron 
- `https://github.com/yhirose/react-typescript-electron-sample-with-create-react-app-and-electron-builder`