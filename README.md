# create-express-app

create express app with folder structure

## You can use this repo as starting point

**_- Use Git Bash -_**

```bash
git clone https://github.com/satyabrata-saha/create-express-app.git
```

```bash
cd create-express-app
```

```bash
npm install
```

```bash
npm run dev
```

website run on [http://localhost:3000/](http://localhost:3000/)

you can update all the packages by using this

```bash
npm update --save
```

## steps

```bash
mkdir app-name
```

```bash
cd app-name
```

```bash
npm init -y
```

```bash
npm install express ejs body-parser dotenv
```

```bash
npm install --save-dev nodemon prettier
```

```bash
touch .env .gitignore Readme.md
```

```bash
mkdir public views src
```

```bash
cd src
```

```bash
mkdir controllers db middlewares models routes utils
```

```bash
touch app.js constant.js index.js
```

## one commend

```bash
mkdir app-name && cd app-name && npm init -y &&
npm install express ejs body-parser dotenv && npm install --save-dev nodemon &&
touch .env .gitignore Readme.md && mkdir public src && cd src &&
mkdir controllers db middlewares models routes utils &&
touch app.js constant.js index.js
```
