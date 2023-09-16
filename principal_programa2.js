import {menuAdministrador} from '' 

import readline from 'readline-sync';


// administradores autorizados a acessar o sistema - TESTE
const administradoresAutorizados = [
  { nome: 'admin1', senha: 'senha1' },
  { nome: 'admin2', senha: 'senha2' },
];


// Função para o menu principal
function menuPrincipal() {
  if (!autenticarAdmin()) {
    console.log('Encerrando o programa.');
    process.exit(0); // encerrar o programa se a autenticação de adm falhar
  }

  while (true) {
    console.log('\n********** YALU **********');
    console.log('\nOPÇÃO:');
    console.log('1. Administrador');
    console.log('2. Alunos');
    console.log('3. Instrumentos');
    console.log('4. Empréstimos');
    console.log('5. Manutenção');
    console.log('0. Sair');
    console.log('*******************************************');
    const opcaoPrincipal = readline.questionInt('Escolha uma opção: ');

    switch (opcaoPrincipal) {
      case 1:
        menuAdministrador(); // chamar o menu do ADM
        break;
      case 2:
        menuAluno() // chamar o menu Alunos
        break;
      case 3:
        // Implementar as opções para Instrumentos
        break;
      case 4:
        // Implementar as opções para Empréstimos
        break;
      case 5:
        // Implementar as opções para Manutenção
        break;
      case 0:
        console.log('\nEncerrando o programa.');
        process.exit(0); // Encerra o programa
        break;
      default:
        console.log('\nOpção inválida. Por favor, escolha uma opção válida.');
        break;
    }
  }
}

// Programa chamando o menu principal
menuPrincipal();

// Função para autenticar um ADM
function autenticarAdmin() {
  console.log('\n** Autenticação do Administrador **');
  const nomeUsuario = readline.question('Digite o nome de usuário: ');
  const senha = readline.question('Digite a senha: ');

  // Verificando se as credenciais correspondem a um admin autorizado
  const adminAutorizado = administradoresAutorizados.find(admin => admin.nome === nomeUsuario && admin.senha === senha);

  if (adminAutorizado) {
    console.log('Autenticação bem-sucedida. Acesso permitido.');
    return true;
  } else {
    console.log('Credenciais inválidas. Acesso negado.');
    return false;
  }
}


