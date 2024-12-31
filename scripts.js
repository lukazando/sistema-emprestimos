// Constantes para autenticação
const USERS = {
    'admin@sistema.com': {
        password: 'admin123',
        name: 'Administrador'
    }
};

// Função para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para validar senha
function validatePassword(password) {
    return password.length >= 6;
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // Validações
    if (!email || !password) {
        alert('Por favor, preencha todos os campos');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido');
        return;
    }

    if (!validatePassword(password)) {
        alert('A senha deve ter pelo menos 6 caracteres');
        return;
    }

    // Verificar credenciais
    const user = USERS[email];
    if (user && user.password === password) {
        // Guardar informações do usuário
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userEmail', email);
        
        // Redirecionar para o dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Email ou senha incorretos');
    }
});

// Verificação de login (adicionar no início do arquivo)
function checkLogin() {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    const currentPage = window.location.pathname;
    
    if (isLoggedIn && currentPage.endsWith('index.html')) {
        window.location.href = 'dashboard.html';
    } else if (!isLoggedIn && currentPage.endsWith('dashboard.html')) {
        window.location.href = 'index.html';
    }
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

// Executar verificação ao carregar a página
document.addEventListener('DOMContentLoaded', checkLogin);
