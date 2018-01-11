# PROJECT Blogging-App

## Requirements

For development, you will only need Node.js installed on your environement. My environment is OS X 10.13.2.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.9.1

    $ npm --version
    5.5.1

    $ mongo --version
    2.6.7

## Install

    $ git clone https://github.com/mwen2/Blogging.git
    $ cd blogging
    $ npm install

## Start & watch

### MongoDB
    $ cd /your directory/mongodb
    $ mkdir db
    $ ./bin/mongod --dbpath db/

### blogging
    $ cd blogging
    $ node app.js

---

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.

### JavaScript

- [Node.js](https://nodejs.org/en/) for package management and server-side rendering.
- [Express](https://expressjs.com/) for an easy back-end JS server framework.
- [React](http://facebook.github.io/react) is used for UI views.
- [React Router](https://www.npmjs.com/package/react-router) for routing.

### Bootstrap

- [Bootstrap](https://getbootstrap.com/) is contains HTML- and CSS-based design templates for typography, forms, buttons, navigations and other interface components.

### MongoDB

- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/general?jmp=search&utm_source=google&utm_campaign=Americas-US-MongoDB-to-Atlas-Brand-Alpha&utm_keyword=mongodb&utm_device=c&utm_network=g&utm_medium=cpc&utm_creative=229921764935&utm_matchtype=e&_bt=229921764935&_bk=mongodb&_bm=e&_bn=g&gclid=Cj0KCQiAkNfSBRCSARIsAL-u3X8SwZ_gA8vf4aSW3BOXHR3LBsCUJtjzNV41_zWiJSNflTBDiqnzvosaAl-iEALw_wcB) is used as our database.

## Functions

### sign up/sign in

Users could sign up firstly, and then click "sign in".

### Home

Users could look through all the blogs here.

### Add

Users can add post, here is title and subject which only could be text. And user can choose the tags.

### profile.

Where users could update their password.

## Tag

Add types of Tag.
