const readline = require('readline-sync');

let gerador_matricula = 2;

const aluno1 = {
  matricula: 1,
  nome: "Ana Melo",
  telefone: "81 99999-0596",
  email: "aluna@aluno.com",
  senha: "1234",
  turma: "sábado iniciante",
};
const aluno2 = {
  matricula: 2,
  nome: "João Soares",
  telefone: "81 98888-0596",
  email: "aluno@aluno.com",
  senha: "5678",
  turma: "domingo iniciante",
};

const alunos = [aluno1, aluno2];
let loop = true;
let alunoBusca;


// MENU DO ALUNO
while (loop) {
	console.log('\n********** ÁREA DO ALUNO: **********');
	console.log('\nOPÇÃO:');
	console.log('1. Cadastrar acesso:');
	console.log('2. Exibir dados cadastrados:');
	console.log('3. Buscar um instrumento:');
	console.log('4. Alterar cadastro:');
	console.log('5. Excluir cadastro:');
	console.log('0. Sair');
	console.log('*******************************************');
	const opcao = readline.questionInt('Escolha uma opção: ');

    switch (opcao) {
        
        //OPÇAO 1. CREATE - (O ALUNO CADASTRAR SEUS DADOS NO SISTEMA)
        case 1:
        let nomeAluno = readline.question("Digite seu nome:");
        let telefoneAluno = readline.question("Digite seu telefone de contato (preferência o do Whatsapp):");
        let turmaAluno = readline.questionInt(`Qual sua turma: (1)- Sábado iniciante, (2)- Sábado avançado, (3)- Domingo iniciante, (4)- Domingo avançado `);
        let emailAluno = readline.question("Digite seu melhor e-mail:");
        let senhaAluno = readline.question("Crie uma senha com 4 números:");
        gerador_matricula++;
        const aluno = {
        matricula: gerador_matricula,
        nome: nomeAluno,
        telefone: telefoneAluno,
        email: emailAluno,
        senha: senhaAluno,
        turma: turmaAluno,
        };
        alunos.push(aluno);
        console.log("Aluno cadastrado com sucesso!");
        readline.keyInPause();
        break;

        // OPÇAO 2. READ - (O ALUNO VISUALIZAR SEU CADASTRO NO SISTEMA)
        case 2:
        alunoBusca = readline.question("Digite seu e-mail:");
        for (const a of alunos) {
            if (a.email === alunoBusca) {
            console.log("Resultado da busca");
            console.log("------------------------");
            console.log(`Matricula: ${a.matricula}`);
            console.log(`Nome: ${a.nome}`);
            console.log(`Telefone: ${a.telefone}`);
            console.log(`E-mail: ${a.email}`);
            console.log(`Turma: ${a.turma}`);   
            }
        }
          readline.keyInPause();
          break;

        // OPÇAO 4. UPDATE - (O ALUNO ALTERAR SEU CADASTRO NO SISTEMA)  
        case 4:
            alunoBusca = readline.questionInt("Digite seu e-mail: ");
          for (const a of alunos) {
            if (a.email === alunoBusca) {
              console.log(a.nome);
              for (let i = 0; i < a.telefone.length; i++) {
                a.telefone[i] = readline.questionInt(`Digite o telefone ${i + 1}: `);
                a.email[i] = readline.question(`Digite o e-mail ${i + 1}: `);
                a.senha[i] = readline.questionInt(`Digite uma nova senha ${i + 1}: `);
                }
            }
          }
          console.log("Cadastro alterado com sucesso!");
          readline.keyInPause();
          break;

        // OPÇAO 5. DELETE - (O ALUNO APAGAR SEU CADASTRO NO SISTEMA)  
        case 5:
            alunoBusca = readline.questionInt("Matricula do aluno que deseja alterar: ");
          for (const a of alunos) {
            if (a.matricula === alunoBusca) {
              console.log(a.nome);
              console.log(`Excluido aluno ${a.nome} do sistema..."`);
              alunos.splice(a, 1);
            }
          }
          console.log("Aluno excluído com sucesso!");
          readline.keyInPause();
          break;
         
        // OPÇÃO 0. SAIR DO SISTEMA  
        case 0:
          console.log("Saindo do sistema...");
          loop = false;
          break;
        default:
          console.log("Opção invalida!");
          break;
      }
    }