//Vou criar uma factory function para fazer uma calculadora simples

function calcCreator(){
    return{//Perceba que estou criando um objeto no 'return'
        display: document.querySelector('.display'),//Atributo que lê onde está o elemento com classe 'display'

        start(){//Função que inicia outra função
            this.btnClick();
        },

        btnClick(){//Criando função para captar eventos
           
            document.addEventListener('click', function(event){//Click
                const element = event.target;//Criando constante que capta os targets do evento

                if(element.classList.contains('btn-num')){//Se o evento for em algum elemento com class 'btn-num', inciar {}

                    this.btnToDisplay(element.innerText);//"element.innerText" representa o conteúdo de texto q está dentro dos botões no HTML (numeros, caracteres etc.)
                }

                if(element.classList.contains('btn-clear')){
                    this.clearDisplay();//Se a condição acima for verdadeira, ativar função "clearDisplay"
                };

                if(element.classList.contains('btn-delete')){
                    this.removeOne();
                };

                if(element.classList.contains('btn-equal')){
                    this.result();
                };
                

            }.bind(this)/**
             * O ".bind(this)" mostra para o programa que eu não quero
             * q o "this" q estiver dentro da função "btnClick" esteja 
             * referenciando elementos pertencentes ao "document" (que
             * foi citado no "addEventListener") e sim a elementos
             *  externos à função (nesse caso, o escopo externo da 
             * function "calcCreator")*/
            );
        },

        btnToDisplay(valuee){//Função com parâmetro "valuee" que usarei para enviar o innerText dos btns para o display
            this.display.value += valuee;//O "value" (valor) do atributo "display" será concatenado no parâmetro "valuee"
        },
        
        clearDisplay(){//Função q remove innerText em display
            this.display.value = '';//'' = vazio
        },

        removeOne(){//Função para remover 1 item do display
            this.display.value = this.display.value.slice(0, -1);/*O valor do display é igual a: valor do display + ferramenta "slice(0, -1)", que quer dizer: -1 item string*/
        },

        result(){//Função para calcular e exibir valores no displays
            let result = this.display.value;//Criando variavel para captar value de 'display'

            try{//Criando 'try' e 'catch' para caso o programa imprima algum erro
                result = eval(result);//Variável result é igual à função 'eval' (função essa que apresenta perigo ao código, uma vez que ela permite qualquer usuário externo inserir um código JS dentro do programa, porém nesse caso a calculadora é ilustrativa e de cunho educacional)

                if(!result){//Se não existe conta possível na função eval
                    alert('Conta inválida');//Alerta
                    this.display.value = '';//Limpar display
                    return};//Terminar if
                
                this.display.value = result;//Se existir, value de display = 'result'

            } catch(error){//Catch error e fazer:
                alert('Conta inválida');//Alerta
                this.display.value = '';//Limpar display
                return;//Terminar catch
            }    
        },
    };
}

const calculator = calcCreator();
calculator.start();//Iniciar método 'start' na função 'CalcCreator'