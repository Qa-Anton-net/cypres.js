describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //кликнули
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //авторизовались
        cy.get('#exitMessageButton > .exitIcon') //есть крестик
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#mail').type('german@dolniov.ru'); //ввели логин неверный
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //кликнули
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // не авторизовались
        cy.get('#exitMessageButton > .exitIcon') //есть крестик
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин 
        cy.get('#pass').type('iLoveqastudio'); //ввели пароль неверный
        cy.get('#loginButton').click(); //кликнули
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // не авторизовались
        cy.get('#exitMessageButton > .exitIcon') //есть крестик
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
    })
    it('востановление', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').click(); //кликнули
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввели логин
        cy.get('#restoreEmailButton').click(); //кликнули
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверили
        cy.get('#exitMessageButton > .exitIcon'); // крестик
        cy.get('#messageHeader').should('be.visible');
    })
     it('Логин без @', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без@
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //кликнули
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // не авторизовались
        cy.get('#exitMessageButton > .exitIcon') //есть крестик
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
    })
    it('Ввели GerMan@Dolnikov.ru', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //кликнули
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //авторизовались
        cy.get('#exitMessageButton > .exitIcon') //есть крестик
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
    })
    
})