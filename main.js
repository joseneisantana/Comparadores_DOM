
document.getElementById('meuFormulario').addEventListener('submit',function(e){
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagemElement = document.getElementById('mensagem')
    
    /* estrutura condicional*/
    if (campoB > campoA){
        document.getElementById('mensagem').textContent =" VÁLIDO! O campo(B) è maior que o campo (A)";
        mensagemElement.className = "valido"
    } else{
        document.getElementById('mensagem').textContent =" INVALIDO !  O campo(B) deve ser maior que  o campo(A)";
        mensagemElement.className = "invalido"
    }
})