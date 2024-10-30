## This POS with react still in working progress
###### Anyway, we gonna add some important command line little by litter as FYI.


##### Steps for Project Structures

- npx create-react-app pos-system
- cd pos-system

- git init
- git remote add origin https://github.com/YOUR_USERNAME/pos-system.git  (Replace your username)

- mkdir -p src/{components,pages,services,hooks,utils,styles}
- touch src/services/{api.js,productService.js,orderService.js,customerService.js}
- touch src/hooks/{useCart.js,useOrder.js,useAuth.js}
- touch src/utils/{format.js,validators.js}
- touch src/styles/{variables.css,globals.css}

- git add .
- git commit -m "your initial message for first commit"

- git branch -M main
- git push -u origin main

##### We use the Auth0 for Authentication Process (you can use other tools like clerk as you prefer )

- npm install @auth0/auth0-react  (install the auth0 and set your application setting in Auth0)

- In your src folder create authConfig.js and add this
- domain: "yourdomain.jp.auth0.com",  // Auth0 Domain
- clientId: "yourAuth0_client_id", // Auth0 Client ID
- redirectUri: window.location.origin,  // Redirect URL after login (default)
