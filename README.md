# Steps - Setup
1. Create client & server folders
2. In the client folder: `npx create-react-app . --template typescript`
2. Diskutera postgreSQL vs firebase --> Välj postgreSQL
3. In the server folder: `npm init`
4. In the server folder: `npm install express pg cors` (express --> server i node.js, pg --> connect database to server and to run postgreSQL queries, cors --> kommunikation mellan domäner, t.ex. react på localhost/3000 och servern på localhost/8000)
5. /server: `npm i -D typescript @types/express @types/node`
6. /server: `npx tsc --init`
7. /tsconfig.json: Sök fram "outDir:" och ändra till "./dist".
8. /server: `touch index.ts`
9. /server: `npm install dotenv --save`
10. /server: Sätt upp grundstruktur och testa.
11. /server: `npm install nodemon ts-node`
12. /server: `npx nodemon index.ts`
13. /server: Lägg till "database.sql".
14. PG Admin: Create database WKIT_fullstack
15. Lägg till db.ts, importera pool i index.ts
16. Lägg till app route för test
17. Testa med postman - resultat i terminalen
# Steps - Implementation
15. /database.sql: Skapa CREATE TABLE users (...)
16. pgAdmin: Använd "Query tool" för att CREATE TABLE users (...) 
17. Skapa app route POST /users
18. Skapa app route GET /users - Tänk på att åldern måste räknas ut.
19. Kör DELETE FROM users; i pgAdmin för att rensa testdata
20. Gå över till /client och sätt upp react router i App.tsx `npm install react-router-dom`
21. /pages: (SignUp, UserListPage)
22. /components: SignUpForm --> Kom ihåg att lägga till datavalidering och user feedback på slutet.
23. /index.css: center class.
24. /SignUpForm.css: form-control class.
25. Sätt upp http POST request, och använd REACT_APP_HOST.
26. /components: UserList
27. /components: User
28. Sätt upp http GET request, och använd REACT_APP_HOST.
29. /UserList.css: th, td formatting.
30. To calculate age: `npm install moment --save`

















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
