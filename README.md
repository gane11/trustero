## Technologies Used
1. Express
2. SQL
3. Sequelize
4. React
5. Redux
6. CSS3

## Instructions

1. Clone Repository.
2. Create `.env` based on the `.env.example`

**Createing the user**
3. Open `psql` 
4. Run `create user trustero_user with password '12345';`
5. Run `alter user trustero_user createdb;`
6. Run `\q` to close psql.

**Backend setup**
7. open terminal and navigate to backend from the root directory with `cd backend`.
8. Run `npm install` to install backend dependecies.

**Creating and seeding the database**
9. Run `npx sequelize-cli init`
10. Run `npx dotenv sequelize-cli db:create` to create the database.
11. Run `npx dotenv sequelize-cli db:migrate`.
12. Run `npx dotenv sequelize-cli db:seed:all` to seed data.

**Starting the backedn server**
13. Run `npm start` to start the backend server.

**Frontend setup and starting the server**
14. open terminal and navigate to trusterofrontend from the root directory with `cd trusterofrontend`.
15. Run `npm install` to install frontend dependecies.
16. Run `npm start` to start the frontend server.

**TRY IT!**
16. Access [http://localhost:3000/](http://localhost:3000/)

