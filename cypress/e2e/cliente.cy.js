///<reference types ='Cypress'/>
//importa a classe page_cliente que tem as funcoes
import pglogin from '../pages/page_login'
import pgcliente from '../pages/page_cliente'
import fcuser from '../factories/user'
import fccliente from '../factories/cliente'

describe('Tela de cliente', ()=>{

    it('cadastrando novo cliente', () =>{
        //realizando login
        var usuario = new fcuser.user()
        pglogin.loginfillForm(usuario);
        var cliente = new fccliente.cliente();
        pgcliente.clientefillForm(cliente);
    })
})