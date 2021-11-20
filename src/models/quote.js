const path = require('path');
const fs = require('fs');

const quote = {
    all: ()=>{
        const directory = path.resolve(__dirname, '../data', 'quotes.json');
        const file = fs.readFileSync(directory, 'utf8');
        const convert = JSON.parse(file);
        return convert;
    },
    //Sobreescribe el array de usuarios
    write:(quoteList)=>{
        const directory = path.resolve(__dirname, '../data/quotes.json');
        let newQuoteList = JSON.stringify(quoteList,null,2);
        fs.writeFileSync(directory, newQuoteList);
        return true
    },
    create: (newData)=>{
        console.log(newData);

        //Esta sería la lógica si pudiera recuperar los datos de checkboxes del form

        let quotes = quote.all();
        let newId = quotes.length > 0 ? quotes[quotes.length-1].id + 1 : 1

        let newQuote = [{
            id: newId,
            cita: newData.cita,
            color_id: newData.color_id,
            check: req.body.input == undefined ? false : true 
            //Con el dato boleano luego puedo acceder a la base de datos updateada y hacer una lógica matematica para determinar lo siguiente
            //Si del total de las citas true (elegidas) - recorriendo el array - la cantidad seleccionada de rojas (por ejemplo) es mayor que amarillas, azules y azules oscuro, la boleta será roja
            //La misma expresion por cada color respectivamente
            //Sin no ocurre ninguno de estos casos (no selecciona ninguna o hay empate) el color será blanco.
            // Donde resolveria esto es el archivo en public/js/ballot.js
        }]
        if(quote.write(newQuote) == true){
            return true
        }
    }
};

module.exports = quote;