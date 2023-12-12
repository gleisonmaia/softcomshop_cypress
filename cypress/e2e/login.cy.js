///<reference types ='Cypress'/>
//importa a classe page_login que tem as funcoes
import pglogin from '../pages/page_login'
import fcuser from '../factories/user'

describe('Tela de login', ()=>{

    it('realizar login com usuario valido', () =>{
        //instanciando objeto com as informações para login
        var usuario = new fcuser.user()
        //validando o login
        pglogin.loginfillForm(usuario);
        //verificando se logou pelo url
        cy.url().should('equal', 'https://empresamodelo.softcomshop.com.br/home')
    })

    it('realizar login com usuario invalido', ()=>{
        //instanciando objeto com as informações para login
        var usuario = new fcuser.userinvalido()
        //validando o login
        pglogin.loginfillForm(usuario)
        //verificando a mensagem de erro
        cy.get('#login-erro').contains('Email ou senha não foram encontrado(s) em nosso sistema.')
    })
})