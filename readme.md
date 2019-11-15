# WebShop Server

## This is the server for a full stack Web Shop project using React/Redux for the front end and Node.js(Express/Sequelize) for this back end

Related repo: https://github.com/LPascholatti/webshop-client

## Endpoints

'/products'
'/products/:id'
'/comments'
'/user'

## JSON Objects

```
{
    "createdAt": "2019-11-13T17:45:13.827Z",
    "description": "Tasty, fresh and healthy",
    "email": "lucas@yandex.ru",
    "id": 44,
    "imageURL": "https://vinmec-prod.s3.amazonaws.com/images/20190719_102004_523972_chuoi.max-800x800.jpg",
    "name": "Banana",
    "price": "3.50",
    "sellerAddress": "Rua das Bananas 23",
    "updatedAt": "2019-11-13T17:45:13.827Z"
}
```

## Authentication/Authorization/JWT

To log in and authorize it is currently using JWT. A 'login' request is sending back the logged user's name, email and address, which are used to sell products and make comments.