class page_login{
    //preenche os campos da tela e realiza login
    loginfillForm(loginus){
        //visita a pagina raiz
        cy.visit('/')
        //preenche o login

        cy.log(loginus)

        cy.get('#login-email').type(loginus.email)
        //preenche a senha
        cy.get('#login-senha').type(loginus.senha)
        //confirmando o login
        cy.get('#login-acessar').click()
    }

   //função que clica no botão confirmar cadastro
    submit(){
    cy.get('form button[type="submit"]').click();
    }
}
//exporta a 'classe' page-login como um objeto que ao ser importado já instacia a classe
export default new page_login;