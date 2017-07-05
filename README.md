### More-Money is a Simple Manager Finance APP made using:

  - react
  - redux
  - webpack
  - nodejs
  - mongodb
  - pm2
  - nodemon

#### This project is split in two folders - backend and frontend

 * Navigate to backend and running this command below
```sh
$ npm install
$ npm run dev - run a nodemon
$ npm run prod - run a pm2
```

* Navigate to folder frontend and running this command below
```sh
$ npm install
npm run dev
```

> Remember of to check if mongodb is running
```sh
$ mongod
```

#### API
* By default app is running on port 3000
* http://localhost:3000/

| Rest                          | Method |      Result          | JSON example |
| ------                        | ------ | -----                |  - | 
| /api/billingCycles            | POST      | create a new billing cycle | - |
| /api/billingCycles            | GET       | get all billing cycles | - |
| /api/billingCycles/:id        | PUT       | update billing cycle | - |
| /api/billingCycles/:id        | DELETE    | remove billing cycle | - |
| /api/billingCycles/summary    | GET       | get summary all billing cycles | {"credit": 7700,"debit": 220}|
| /api/billingCycles?skip=0&limit=2 | GET | pagination | [{...}, {...}] |
| /api/billingCycles/count      | GET | count all billing cycles | {"value": 4}


