const selecao1 = document.getElementById('selecao1')
const selecao2 = document.getElementById('selecao2')
const paragrafo = document.getElementById('paragrafo')

const verifica = () =>{
    if(selecao1.checked){
        paragrafo.innerHTML = '<p id="paragrafo">Apaixonado por tecnologia e inovação, com foco em desenvolvimento web. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.</p>'
    }else if(selecao2.checked){
        paragrafo.innerHTML = `<div class="paragrafos">
                <p>
                    <strong>Universidade</strong>: UNIPÊ <br> <strong>Periodo</strong>: 4 <br> 
                    <strong>Inglês</strong>: básico 
                </p>
                <p>
                    <strong>Cidade</strong>: João Pessoa - PB <br> <strong>Conclusão</strong>: 2027<br> <strong>Idade</strong>: 19
                </p>
            </div>`
    }
}

selecao1.addEventListener('change', verifica);
selecao2.addEventListener('change', verifica);

// Executa ao carregar a página para definir o texto inicial
verifica();