// Constantes e variáveis globais
const STORAGE_KEY = 'clientes';

// Classes
class Cliente {
    constructor(nome, telefone, valor, parcelas) {
        this.nome = nome;
        this.telefone = telefone;
        this.valor = parseFloat(valor);
        this.parcelas = parseInt(parcelas);
        this.data = new Date().toISOString();
        this.status = 'Ativo';
        this.parcelasPagas = [];
    }
}

// Funções do Modal
function abrirModalNovoCliente() {
    document.getElementById('modalNovoCliente').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modalNovoCliente').style.display = 'none';
    document.getElementById('formNovoCliente').reset();
}

// Funções de manipulação de dados
function salvarCliente(cliente) {
    const clientes = getClientes();
    clientes.push(cliente);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));
}

function getClientes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function calcularTotais() {
    const clientes = getClientes();
    const totalCl
