import {BancoDeAluno} from '.BancoDeAluno.js';

import readline from "readline-sync";


// Função do MENU ALUNO
function menuAluno() {
  const bancoDeAluno = new BancoDeAluno();

  while (true) {
    console.log('\n********** ÁREA DO ALUNO: **********');
    console.log('1. Cadastro de aluno:');
    console.log('2. Exibir cadastro do aluno:');
    console.log('3. Buscar um aluno:');
    console.log('4. Alterar cadastro do aluno:');
    console.log('5. Excluir cadastro do aluno:');
    console.log('0. Sair');
    console.log('*******************************************');
    const opcaoAluno = readline.questionInt('Escolha uma opção: ');
    
    switch (opcaoAluno) {
      case 1:
        bancoDeAluno.cadastrarAluno();
        break;
      case 2:
        bancoDeAluno.exibirAluno();
        break;
      case 3:
        const matriculaBusca = readline.questionInt('Digite a matrícula do aluno que deseja buscar: ');
        bancoDeAluno.buscarAlunoPorMatricula(matriculaBusca); // Passar a matricula para o método de busca
        break;
      case 4:
        bancoDeAluno.alterarAluno();
        break;
      case 5:
        bancoDeAluno.deletarAluno();
        break;
      case 0:
        console.log('Voltando ao menu principal.');
        return; // retornar ao menu principal
      default:
        console.log('Opção inválida.');
        break;
    }
  }
}

export {menuAluno};