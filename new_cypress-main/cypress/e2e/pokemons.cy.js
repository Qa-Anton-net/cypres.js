describe('покупка аватара', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://pokemonbattle.ru/'); //зашли на сайт
        cy.get('#k_email').type ('логин'); //ввели логин
        cy.get('#k_password').type('пароль'); //ввели пароль
        cy.get('.MuiButton-root').click(); // кликнули
        cy.get('.header_card_trainer_id_num').contains('34057'); //авторизовались
        cy.get('.header_card_trainer').click(); //зашли в карточку
       cy.get('.single_page_body_content_title_icons_name').contains('Антон'); //проверили
        cy.get('.single_page_body_content_title_icons_name').should('be.visible'); //текст виден
       cy.get('.k_mobile > :nth-child(5)').click(); //провалились в аватары
       cy.wait (2000)
       cy.get('.pokemon__title').contains('Магазин'); //проверили
       cy.get('.pokemon__title').contains('Магазин').should('be.visible'); // текст виден
      cy.get(':nth-child(4) > .shop__button').click(); //нажали купить
       cy.get('.payment_form_card_form_title').contains ('Карта');
        cy.get('.payment_form_card_form_title').contains ('Карта').should ('be.visible'); // текст виден
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type ('4276500000000727'); //ввели карту
        cy.wait (1000);
        cy.get(':nth-child(1) > .style_1_base_input').type ('1234'); //ввели срок дейтвия
        cy.wait (1000);
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type ('125'); // ввели код
        cy.wait (1000);
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type ('anton'); //ввели имя
        cy.wait (1000);
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click (); //нажали купить
        cy.get('.payment_form_3ds_title').contains ('Подтверждение покупки'); //проверили
        cy.get('.style_1_base_input').type (56456); //ввели код подтверждения
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //нажали купить
        cy.get('.payment_status_top_title').contains ('Покупка прошла успешно'); //проверили
        cy.get('.payment_status_top_title').contains ('Покупка прошла успешно').should ('be.visible'); //текст виден
       
     })
})