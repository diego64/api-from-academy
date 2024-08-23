<p align="center">
  <img src="img.shields.io/badge/node_logo.svg" width="200" alt="Node Logo" /></a>
</p>

<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
    <img src="img.shields.io/badge/nodejs.svg?style=flat&logo=nodejs&logoColor=white" alt="Node">
		<img src="img.shields.io/badge/fastify.svg?style=flat&logo=fastify&logoColor=white" alt="Fastify">
	  <img src="img.shields.io/badge/prisma.svg?style=flat&logo=prisma&logoColor=white" alt="Prisma">
    <img src="img.shields.io/badge/zod.svg?style=flat&logo=zod&logoColor=white" alt="Zod">
    <img src="img.shields.io/badge/vitest.svg?style=flat&logo=vitest&logoColor=white" alt="Vitest">
</p>

## 📍 Overview

The application aims to be an API that allows the user to schedule their day at the gym and a gym to register its unit. Remembering that you need to have `Node.js` and `docker` installed on your machine.

The application has the following rules.

### 🔌 RFs (Functional Requirements)

- [x] It must be possible to register;
- [x] It must be possible to authenticate;
- [x] It must be possible to obtain the profile of a logged-in user;
- [x] It must be possible to obtain the number of check-ins performed by the logged-in user;
- [x] The user must be able to obtain his/her check-in history;
- [x] The user must be able to search for nearby gyms (up to 10km);
- [x] The user must be able to search for gyms by name;
- [x] The user must be able to check-in at a gym;
- [x] It must be possible to validate a user's check-in;
- [x] It must be possible to register a gym;

### 📦 RNs (Business Rules) 

- [x] The user must not be able to register with a duplicate email;
- [x] The user cannot check-in twice on the same day; - [x] The user cannot check in if he/she is not close (100m) to the gym;
- [x] The check-in can only be validated up to 20 minutes after being created;
- [x] The check-in can only be validated by administrators;
- [x] The gym can only be registered by administrators;

### 🧩 NFRs (Non-functional Requirements)

- [x] The user's password must be encrypted;
- [x] The application data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [x] The user must be identified by a JWT (JSON Web Token);

---

## 🗂️ Repository Structure

```sh
└── api-from-academy
    ├── .img.shields.io
    ├── prisma
    ├── src
    ├── .env.example
    ├── .eslintignore
    ├── .eslintrc.json
    ├── docker-compose.yml
    ├── LICENSE
```

---

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the repository:
>
> ```console
> $ git clone https://github.com/diego64/api-from-academy
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd api-from-academy
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```
> 4. Install the database:
> ```console
> $ docker compose up -d
> ```
> 5. Generate the migrantios:
> ```console
> $ npx prisma migrate dev
> ```
> 6. Start the application:
> ```console
> $ npm run start:dev
> ```

### 🧪 Tests

> Run the functional tests using the command below:
> ```console
> $ npm run test
> ```
> Run E2E tests using the command below:
> ```console
> $ npm run test:e2e
> ```

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---