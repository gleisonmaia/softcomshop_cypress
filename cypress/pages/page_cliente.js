class page_cliente{
    //Acessa tela de novo cadastro e preenche dados do cliente
    clientefillForm(cliente){
        //visita a pagina de novo cliente
        cy.log(cliente)
        cy.get('a:contains(Vendas e NF-e)').click();
        cy.contains('span[class="nav-label"]', 'Clientes').click();
        cy.get('#btn-novo').click();
        cy.get('#nome').type(cliente.nome)
        cy.get('#btn-salvar').click();
    }

}
//exporta a 'classe' page-cliente como um objeto que ao ser importado já instacia a classe
export default new page_cliente;