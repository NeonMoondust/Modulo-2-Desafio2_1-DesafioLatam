let button_table = document.getElementById('btn-table');
let button_console = document.getElementById('btn-console');
let div_table = document.getElementById('tabla-resultados');
let row, element;
let givenNumber, toShow;
let factorialDiv_aux = null;

function console_display(number) {
    for(let i = 1; i <= number; i++){
        console.log(`${i} x ${number} = ${i*number}`);
    }
    for(let i = 1; i <= number; i++){
        toShow = 1;
        for(let j = 1; j <= i; j++){
            toShow *= j;
        }
        console.log(`Factorial de ${i} es: ${toShow}`);
    }
}

function table_display(number) {
    document.getElementById("tablas-title").classList.remove('d-none');
    document.getElementById("factoriales-title").classList.remove('d-none');
    while(div_table.firstChild){
        div_table.removeChild(div_table.firstChild);
    }
    div_table.className = "tabla-resultados container text-center";
    for(let i = 1; i <= number; i++){
        createBox("div", "row", '', '', 'container', div_table);
        createBox("div", "col text-center box-numeros", i, '', 'row', div_table);
        createBox("div", "col text-center box-simbolos", 'x', '', 'row', div_table);
        createBox("div", "col text-center box-numeros", number, '', 'row', div_table);
        createBox("div", "col text-center box-simbolos", '=', '', 'row', div_table);
        createBox("div", "col text-center box-numeros", i*number, '', 'row', div_table);
    }
    if(factorialDiv_aux != null){
        while(factorialDiv_aux.firstChild){
            factorialDiv_aux.removeChild(factorialDiv_aux.firstChild);
        }
        factorialDiv_aux.remove();
    }
    let div_factorialTable = document.createElement("div");
    div_factorialTable.className = "tabla-resultados container text-center";
    factorialDiv_aux = div_factorialTable;
    div_table.parentNode.insertBefore(div_factorialTable, document.getElementById('factoriales-title').nextSibling);
    for(let i = 1; i <= number; i++){
        toShow = 1;
        for(let j = 1; j <= i; j++){
            toShow *= j;
        }
        createBox("div", "row", '', '', 'container', div_factorialTable);
        createBox("div", "col text-center box-numeros", `Factorial de ${i} es:`, '', 'row', div_factorialTable);
        createBox("div", "col text-center box-numeros", toShow, '', 'row', div_factorialTable);
    }
}

function getData(toCall) {
    givenNumber = prompt('Ingresar un numero del 1 al 20 para ser multiplicado', 1);
    if(!validation(givenNumber)){return (getData(toCall));}
    switch(toCall){
        case 'table':
            table_display(givenNumber);
            break;
        case 'console':
            console_display(givenNumber);
            break;
        default:
            alert(`Something went wrong. Pressed Button [${toCall}].`)
            break;
    }
}

function validation(toValidate) {
    if(!isNaN(toValidate)){
        if(toValidate > 0 && toValidate <= 20){
            return true;
        }
    }else{
        alert('No es un Numero valido');
        console.log('No es un Numero valido');
        return false;
    }
    alert('Numero fuera del rango!');
    console.log('Numero fuera del rango!');
    return false;
}

function createBox(type, nameClass, content, id, parent, div) {
    switch(parent){
        case 'container':
            element = div.appendChild(document.createElement(type));
            row = element;
            break;
        case 'row':
            element = row.appendChild(document.createElement(type));
            break;
    }
    element.className = nameClass;
    element.textContent = content;
    element.id = id;
}

button_table.onclick = () => getData('table');
button_console.onclick = () => getData('console');