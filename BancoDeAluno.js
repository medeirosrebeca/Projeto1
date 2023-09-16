const readline = require('readline-sync');

//classe Aluno
class BancoDeAluno {
  constructor() {
    this.Aluno = [];
  }
}

  
// Método para criar um Aluno - CREATE
let nomeAluno = readline.question("Digite seu nome:");
  let telefoneAluno;
  let emailAluno;
  let turmaResultado;

    try {
      telefoneAluno = readline.questionInt("Digite seu telefone:");
      emailAluno = readline.question("Digite seu melhor e-mail:");

        while (true) {
          turmaResultado = readline.questionInt(`Qual sua turma? (1)- Sábado iniciante (2)- Sábado avançado, (3)- Domingo iniciante, (4)- Domingo avançado`);
          if (turmaResultado >= 1 && turmaResultado <= 4) {
            break;
          } else {
            console.log("Opção inválida. Digite um número entre 1 e 4.");
          }
        }
      } catch (error) {
        console.log("Erro ao ler entrada. Certifique-se de que você digitou valores válidos.");
        // Reinicia o loop
      }

      let turmaAluno;
      switch (turmaResultado) {
        case 1:
          turmaAluno = "Sábado iniciante";
          break;
        case 2:
          turmaAluno = "Sábado avançado";
          break;
        case 3:
          turmaAluno = "Domingo iniciante";
          break;
        case 4:
          turmaAluno = "Domingo avançado";
          break;
      }
       matricula++;
       const aluno = {
       matricula: matricula,
       nome: nomeAluno,
       telefone: telefoneAluno,
       email: emailAluno,
       turma: turmaAluno,
       };

       bancoDeAlunos.push(aluno);
       console.log("Cadastro feito com sucesso!");
       readline.keyInPause();
       break;

// Método para listar Aluno - READ
  if (bancoDeAlunos.length === 0) {
    console.log("Nenhum aluno cadastrado.");
  } else {
    console.log("Listando todos os alunos");
    console.log("------------------------");
  for (const a of bancoDeAlunos) {
    console.log(`Matricula: ${a.matricula}`);
    console.log(`Nome: ${a.nome}`);
    console.log(`Telefone: ${a.telefone}`);
    console.log(`E-mail: ${a.email}`);
    console.log(`Turma: ${a.turma}`);
    console.log("------------------------");
  }
  }
  readline.keyInPause();
  break;

//Método para buscar Aluno 
  alunoBusca = readline.questionInt("Digite matricula do aluno: ");
      let alunoEncontrado = false;
      for (const a of bancoDeAlunos) {
        if (a.matricula === alunoBusca) {
          console.log("Resultado da busca");
          console.log("------------------------");
          console.log(`Nome: ${a.nome}`);
          console.log(`Telefone: ${a.telefone}`);
          console.log(`E-mail: ${a.email}`);
          console.log(`Turma: ${a.turma}`);
          console.log("------------------------");
          alunoEncontrado = true;
          break;
        }
      }
      if (!alunoEncontrado) {
        console.log("Aluno não encontrado.");
      }
      readline.keyInPause();
      break;

//Método para alterar um aluno
  alunoBusca = readline.questionInt("Digite matrícula do aluno: ");
  let alunoEncontradoParaAtualizar = false;
    for (const a of bancoDeAlunos) {
      if (a.matricula === alunoBusca) {
        while (true) {
          try {
            let alterarDados = readline.questionInt(`Qual opção você quer alterar: (1) Telefone, (2) E-mail, (3) Turma: `);
            if (alterarDados == 1) {
              a.telefone = readline.questionInt(`Digite o telefone: `);
              break;
            } else if (alterarDados == 2) {
              a.email = readline.question(`Digite o e-mail: `);
              break;
              } else if (alterarDados == 3) {
                a.turma = readline.questionInt(`Digite a turma: (1)- Sábado iniciante (2)- Sábado avançado (3)- Domingo iniciante (4)- Domingo avançado `);
                break;
              } else {
                console.log("Opção inválida. Digite apenas as opções citadas.");
              }
          } catch (e) {
              console.log("Erro ao ler entrada. Certifique-se de que você digitou valores válidos.");
          }
        }
          console.log("Cadastro alterado com sucesso!");
          alunoEncontradoParaAtualizar = true;
          break;
      }
        }
     if (!alunoEncontradoParaAtualizar) {
        console.log("Aluno não encontrado.");
      }
      readline.keyInPause();
      break;

//Método para deletar um Aluno
  alunoBusca = readline.questionInt("Digite matrícula do aluno: ");
  let alunoExcluido = false;
  for (let i = 0; i < bancoDeAlunos.length; i++) {
    if (bancoDeAlunos[i].matricula === alunoBusca) {
      console.log(bancoDeAlunos[i].nome);
      console.log(`Excluído aluno ${bancoDeAlunos[i].nome} do sistema..."`);
      bancoDeAlunos.splice(i, 1);
      alunoExcluido = true;
      break;
    }
  }
  if (!alunoExcluido) {
    console.log("Aluno não encontrado.");
  }
  readline.keyInPause();
  break;

export {BancoDeAluno};