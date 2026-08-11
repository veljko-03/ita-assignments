# e-commerce-ita

## What is it?
Assignment done for ITAcademy.
It's an e-commerce web app.

## How to setup?
1. Run `npm i` at the root to install all dependencies
2. Create `.env.local` file at the root of the project:
```
VITE_API_KEY=<your api key>
VITE_AUTH_STORAGE_KEY=<your storage key>
VITE_REGISTER_URL=<api url for registering>
VITE_LOGIN_URL=<api url for logging in>
VITE_PRODUCTS_URL=<api url for fetching products>
VITE_CART_URL=<api url for sending the cart contents>
VITE_USERS_URL=<api url for fetching the list of users>
```
3. Run `npm run dev` at the root to start the development server

## Techs used
- React.js
- Vite.js
- CSS