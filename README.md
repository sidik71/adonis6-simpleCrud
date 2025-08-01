# Accounting CRUD App

A simple CRUD (Create, Read, Update, Delete) web application built using [AdonisJS v6](https://adonisjs.com/) with PostgreSQL 17.5 as the database and Bootstrap for the UI.

## 🚀 Features

- Create, view, update, delete accounting records
- Search, sort, pagination (via DataTables)
- CSRF protection
- Responsive UI using Bootstrap 5

## 🛠️ Tech Stack

- **Backend**: AdonisJS v6 (Node.js)
- **Database**: PostgreSQL
- **Frontend**: Bootstrap 5 + DataTables
- **Templating**: Edge.js

## 📦 Installation

```bash
git clone https://github.com/username/adonis6-simpleCrud.git
cd adonis6-simpleCrud
npm install
```

## ⚙️ Setup
- Copy .env.example paste .env

- Setup database credentials .env

## ▶️ Run migration:

```bash
node ace migration:run
```

## ▶️ Run App
```bash
node ace serve --watch
```
Open browser: http://localhost:3333
