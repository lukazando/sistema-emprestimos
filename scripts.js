document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aqui posteriormente implementaremos a autenticação
    console.log('Tentativa de login:', email);
    
    // Redirecionamento temporário
    alert('Sistema em desenvolvimento. Em breve você terá acesso ao painel!');
});
