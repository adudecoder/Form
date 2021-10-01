document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    let name = document.querySelector('#name').value;
    let cpf = document.querySelector('#cpf').value;
    let email = document.querySelector('#email').value;
    let rg = document.querySelector('#rg').value;
    let op1 = document.querySelector('#op1').value;
    let data = document.querySelector('#data').value;
    let uf = document.querySelector('#uf').value;
    let cidade = document.querySelector('#cidade').value;
    let cep = document.querySelector('#cep').value;
    let bairro = document.querySelector('#bairro').value;
    let rua = document.querySelector('#rua').value;
    let phone = document.querySelector('#phone').value;
    let complemento = document.querySelector('#complemento').value;

    let json = {
        name,
        cpf,
        email,
        rg,
        op1,
        data,
        uf,
        cidade,
        cep,
        bairro,
        rua,
        phone,
        complemento

    };

    console.log(json);

});