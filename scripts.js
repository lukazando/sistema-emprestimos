document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulação básica de autenticação
    if (email && password) {
        // Em um sistema real, aqui seria feita a validação com backend
        localStorage.setItem('userLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Por favor, preencha todos os campos');
    }
});

// Verificação de login (adicionar no início do arquivo)
function checkLogin() {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    const currentPage = window.location.pathname;
    
    if (isLoggedIn && currentPage.includes('index.html')) {
        window.location.href = 'dashboard.html';
    } else if (!isLoggedIn && currentPage.includes('dashboard.html')) {
        window.location.href = 'index.html';
    }
}

// Executar verificação ao carregar a página
checkLogin();
