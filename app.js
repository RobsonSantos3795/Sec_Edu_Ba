// =======================================================
// Configuração do Firebase
// =======================================================

// !!! SUBSTITUA PELAS SUAS PRÓPRIAS CHAVES DO FIREBASE !!!
const firebaseConfig = {
    apiKey: "AIzaSyDvCA52LjPlPfb9k_9jB_zqy2O7Pzh7Uhk",
    authDomain: "credenciais-1bdde.firebaseapp.com",
    databaseURL: "https://credenciais-1bdde-default-rtdb.firebaseio.com",
    projectId: "credenciais-1bdde",
    storageBucket: "credenciais-1bdde.firebasestorage.app",
    messagingSenderId: "1024663683463",
    appId: "1:1024663683463:web:b34e279dfc5049c6f39322"
  };

// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

// =======================================================
// Funções de Autenticação
// (Mantidas do código anterior)
// =======================================================

function fazerCadastro() {
    // ... (Código da função fazerCadastro do passo anterior)
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;
    const mensagemElemento = document.getElementById('cadastro-mensagem');

    mensagemElemento.textContent = "Carregando...";

    auth.createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            mensagemElemento.style.color = 'green';
            mensagemElemento.textContent = "Cadastro realizado com sucesso! Redirecionando para o login...";
            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = "Erro no cadastro. Verifique os dados.";

            if (errorCode === 'auth/email-already-in-use') {
                errorMessage = "E-mail já está em uso.";
            } else if (errorCode === 'auth/invalid-email') {
                errorMessage = "Formato de e-mail inválido.";
            } else if (errorCode === 'auth/weak-password') {
                errorMessage = "A senha deve ter pelo menos 6 caracteres.";
            }

            mensagemElemento.style.color = 'red';
            mensagemElemento.textContent = errorMessage;
            console.error(error);
        });
}


function fazerLogin() {
    // ... (Código da função fazerLogin do passo anterior)
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;
    const mensagemElemento = document.getElementById('login-mensagem');

    mensagemElemento.textContent = "Verificando credenciais...";

    auth.signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            window.location.href = "pagina-protegida.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = "Erro ao fazer login. Credenciais inválidas.";

            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                errorMessage = "E-mail ou senha incorretos.";
            }

            mensagemElemento.style.color = 'red';
            mensagemElemento.textContent = errorMessage;
            console.error(error);
        });
}


function fazerLogout() {
    // ... (Código da função fazerLogout do passo anterior)
    auth.signOut().then(() => {
        window.location.href = "index.html";
    }).catch((error) => {
        console.error("Erro ao fazer logout:", error);
    });
}


// =======================================================
// Proteção de Rota
// =======================================================

auth.onAuthStateChanged((user) => {
    const path = window.location.pathname;
    const isProtectedPage = path.includes('pagina-protegida.html');
    const isLoginPage = path.includes('index.html') || path === '/';
    const userInfoElement = document.getElementById('user-info'); // NOVO: Referência ao elemento de info

    if (user) {
        // Usuário LOGADO
        if (isProtectedPage) {
            // Se estiver na página protegida, exibe as informações do usuário
            if (userInfoElement) {
                userInfoElement.textContent = `Logado como: ${user.email}`;
            }
        } else if (isLoginPage || path.includes('cadastro.html')) {
            // Se tentar acessar login/cadastro logado, redireciona para o painel
            window.location.href = "pagina-protegida.html";
        }
    } else {
        // Usuário DESLOGADO
        if (isProtectedPage) {
            // SE tentar acessar a página protegida sem login, REDIRECIONA
            alert("Você está deslogado!");
            window.location.href = "index.html";
        }
        // Se estiver em login ou cadastro, permanece lá
    }
});