Download latest stable version of Node from here:   
https://nodejs.org/en/  

Check if node is installed:  
node -v  

Execute these on cmd on your empty project folder:  
npm init -y  
npm install --save electron  
npm install --save react react-dom  
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react css-loader style-loader sass-loader sass webpack webpack-cli  
npm install --save-dev electron-reload  
npm install react-router-dom --save

// setup is complete, delete all folders in the project folder except the node_modules folder  
// copy the files here in the repository to the same place where the node_modules folder resides


To start the project:  
npm run watch  
npm start  

