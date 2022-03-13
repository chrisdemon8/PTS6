# Front-end Projet Tutoré  

## membres
- TRAMOY Florian
- CHALOPIN Alexy  
- SALICE Jean-Michaël 
- PÉTRÉ Christophe
  

# Les différentes build

## Version de node 
- 16.14.0  


## Build webpack 

### Attention webpack cli compatible uniquement avec node : 
- ^12.22.0 || ^14.17.0 || >=16

### Commande pour build le bundle.js 
 
- `npm run webpack:build`
- Afin d'utiliser le bundle qui se trouve dans le dossier dist il faut lancer un localhost pour lire index.html qui permet de lire le site build avec webpack
- juste une version de build pas de dev pour l'instant (à voir si utile)
 


## Build ionic capacitor 

### Attention webpack cli compatible uniquement avec node : 
- ^12.22.0 || ^14.17.0 || >=16

### Commande pour lancer l'application sur android

Build le code du site 
- `npm run build`

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
  