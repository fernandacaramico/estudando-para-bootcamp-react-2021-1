// *********************** 
// PARTE 1 DA AULA PRATICA -> fazendo componente com javascript 
// *********************** 

// var container = document.getElementById("app");
// var titulo = document.createElement("h1");
// titulo.innerHTML = "Esse título foi feito com Java Scripto *0* "
// container.appendChild(titulo); 

// até em cima, criando elementos sem react, só com JS!

// *********************** 
// PARTE 2 DA AULA PRATICA -> criando com JSX
// *********************** 

/*
var container = document.getElementById("app");

function App() {
    return (
        <React.Fragment>
            <h1>Esse título foi feito em React com JSX</h1>
            <h2>Esse título foi feito em React com JSX</h2>
        </React.Fragment>
    );
}


ReactDOM.render(App(), container);
*/

// CONHECIMENTO NOVO:  componentes seguem o padrão PascalCase
// CONHECIMENTO NOVO: funcoes seguem padrão camelCase
// CONHECIMENTO NOVO: Só posso retornar um elemento JSX por componente


// *********************** 
// PARTE 3 DA AULA PRATICA -> usando props
// *********************** 

/*
var container = document.getElementById("app");

function App(props) {
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>Esse título foi feito em React com JSX</h2>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App,{titulo: "Esse título veio de uma prop"}, null), container);*/


// CONHECIMENTO NOVO: componentes podem receber propriedades

// *********************** 
// PARTE 4 DA AULA PRATICA  -> acessando props de outro jeito
// *********************** 


/*
var container = document.getElementById("app");

function Contador(props) {
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>Esse título foi feito em React com JSX</h2>
        </React.Fragment>
    );
}

function App() {
    return(
        <Contador titulo="React"/>
    )
}


ReactDOM.render(React.createElement(App,null, null), container);

*/



// *********************** 
// PARTE 5 DA AULA PRATICA  
// -> ESTADO!! não da pra mudar valor de variável direto, tem que usar o que seria um get/set
// *********************** 


var container = document.getElementById("app");

function Contador(props) {

    
    /*
    

    let numero = 0
    
    function somar() {
        numero++;
        console.log("somou = ", numero)
    }
    
    function subtrair() {
        numero--;
        console.log("subtraiu = ", numero)
    }
    
    O código dentro dessas chaves não vai funcionar, 
    então usaremos o que está abaixo dela, começando aqui -->*/
    
    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
        console.log(numero)
    }

    function subtrair() {
        setNumero(numero - 1);
        console.log(numero)
    }

    /* <<-- terminando aqui*/

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return(
        <React.Fragment>
        <h1>Vote no seu preferido</h1>
        <Contador titulo="React"/>
        <Contador titulo="Angular"/>
        <Contador titulo="Vue"/>
        </React.Fragment>
    )
}


ReactDOM.render(React.createElement(App,null, null), container);