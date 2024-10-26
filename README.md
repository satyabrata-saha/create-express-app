<a id="readme-top"></a>
# create-express-app

create express app with **_Folder Structure_**
<br>
this use express for routeing and ejs for frontend

## You can use this repo as starting point

**_- Use Git Bash -_**

1. clone the repository

    ```bash
    git clone https://github.com/satyabrata-saha/create-express-app.git
    ```
2. navigate to created folder

    ```bash
    cd create-express-app
    ```
3. install all the packages

    ```bash
    npm install
    ```
4. make sure in package.json because this use ES modules
    ```json
    "type": "module"
    ```
5. run the besic app

    ```bash
    npm run dev
    ```
<br>

Website run on [http://localhost:3000/](http://localhost:3000/)


* you can update all the packages by using this

    ```bash
    npm update --save
    ```
<br>

## steps

1. create a new folder for your project
    ```bash
    mkdir app-name
    ```

2. navigate to the folder
    ```bash
    cd app-name
    ```

3. npm initialize by default
    ```bash
    npm init -y
    ```

4. install some packages
    ```bash
    npm install express ejs body-parser dotenv
    ```

5. install some dev packages
    ```bash
    npm install --save-dev nodemon prettier
    ```
6. create some file
    ```bash
    touch .env .gitignore Readme.md
    ```
7. create some folder
    ```bash
    mkdir public views src
    ```
8. navigate to src by cd (change directory)
    ```bash
    cd src
    ```
9. create some folder
    ```bash
    mkdir controllers db middlewares models routes utils
    ```
10. create some file
    ```bash
    touch app.js constant.js index.js
    ```
11. run the express app
    ```bash
    touch app.js constant.js index.js
    ```

## one commend
all that in one commend
```bash
mkdir app-name && cd app-name && npm init -y &&
npm install express ejs body-parser dotenv && npm install --save-dev nodemon prettier &&
touch .env .gitignore Readme.md && mkdir public src && cd src &&
mkdir controllers db middlewares models routes utils &&
touch app.js constant.js index.js
```

## me

Satyabrata Saha
<br>
x.com - [@satya_saha_](https://x.com/satya_saha_)
<br>
email- hello.satyabrata.saha@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>


