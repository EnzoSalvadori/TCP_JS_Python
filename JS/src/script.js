const mensagem = document.querySelector('#mensagem');
const mensagemAlta = document.querySelector('#mensagemAlta');
const teste = document.querySelector('#teste');

var resposta;

function bin2string(array){
	var result = "";
	for(var i = 0; i < array.length; ++i){
		result+= (String.fromCharCode(array[i]));
	}
	return result;
}

function atualizarAnalise(){
    const { Pool, Client } = require('pg')

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'Arroz',
        password: 'ozne1711',
        port: 5432,
    })

    client.connect()

    client.query('SELECT * FROM analise', (err, res) => {
        console.log(res.rows[0])
        client.end()
    })
}

function ligar(){
    var net = require('net');
    var client = new net.Socket();

    client.connect(5001, '127.0.0.1', function() {
        console.log('Connected');
        client.write("ligar");
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
        resposta = bin2string(data);
        client.write("recebido");
        console.log(resposta);
        alert(resposta);
        client.destroy();
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
};

function desligar(){
    var net = require('net');
    var client = new net.Socket();

    client.connect(5001, '127.0.0.1', function() {
        console.log('Connected');
        client.write("desligar");
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
        resposta = bin2string(data);
        client.write("recebido");
        console.log(resposta);
        alert(resposta);
        client.destroy();
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
};



