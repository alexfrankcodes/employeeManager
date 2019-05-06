# Employee Manager (CMPE 172)

## Scripts

The following are development scripts included in package.json to run all/part of the application.

### Full

`npm run dev`

### Front-End

`npm run client`

### Back-End

`npm run server`

#### Note 1 ####
In order to run on your own system, you need to download and install https://github.com/datacharmer/test_db and then run the following command in MySQL workbench: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '_password_'` and also change mysqlPassword to your password in production.json. Other MySQL settings must match those in the pool created in /db/index.js

#### Note 2 #### 
I had trouble integrating Github SSO with our own authentication system. In retrospect, I should have used Passport.js for all authentication. I did try adding it and following this information: http://www.passportjs.org/packages/passport-github2/ but unfortunately, could not get it to cooperate with our app.

