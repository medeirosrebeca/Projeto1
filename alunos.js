const readline = require('readline-sync');

// const aluno1 = {
//   matricula: 1,
//   nome: "Ana Marinho",
//   telefone: "81 98888-9997",
//   email: "aluna@aluno.com",
//   turma: "Sábado iniciante",
// };

const bancoDeAlunos = [];

// MENU DO ALUNO
let loop = true;
let alunoBusca;
let matricula = 0;

while (loop) {
	console.log('\n********** ÁREA DO ALUNO: **********');
	console.log('\nOPÇÃO:');
	console.log('1. Cadastro de aluno:');
	console.log('2. Exibir cadastro do aluno:');
	console.log('3. Buscar um aluno:');
	console.log('4. Alterar cadastro do aluno:');
	console.log('5. Excluir cadastro do aluno:');
	console.log('0. Sair');
	console.log('*******************************************');
	const opcao = readline.questionInt('Escolha uma opção: ');

    switch (opcao) {
    //OPÇAO 1. CREATE - (CADASTRO DO ALUNO NO SISTEMA)
    case 1:
    let nomeAluno = readline.question("Digite seu nome:");
    let telefoneAluno = readline.questionInt("Digite seu telefone:");
    let emailAluno = readline.question("Digite seu melhor e-mail:");
    let turmaResultado = readline.questionInt(`Qual sua turma? (1)- Sábado iniciante (2)- Sábado avançado, (3)- Domingo iniciante, (4)- Domingo avançado`);
    
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
      default:
        turmaAluno ="Opção inválida";
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

    // OPÇAO 2. READ - (VISUALIZAR O CADASTRO DO ALUNO NO SISTEMA)
    case 2:
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
    readline.keyInPause();
    break;  

    // OPÇAO 3. BUSCAR - (BUSCA UM ALUNO DO SISTEMA)
    case 3:
    alunoBusca = readline.questionInt("Digite matricula do aluno: ");
      for (const a of bancoDeAlunos) {
        if (a.matricula === alunoBusca) {
          console.log("Resultado da busca");
          console.log("------------------------");
          console.log(`Nome: ${a.nome}`);
          console.log(`Telefone: ${a.telefone}`);
          console.log(`E-mail: ${a.email}`);
          console.log(`Turma: ${a.turma}`);  
          console.log("------------------------"); 
        }
      }
    readline.keyInPause();
    break;
        
    // OPÇAO 4. UPDATE - (ALTERAR INFORMAÇOES DO CADASTRO NO SISTEMA)  
    case 4:
      alunoBusca = readline.questionInt("Digite matrícula do aluno: ");
        for (const a of bancoDeAlunos) {
          if (a.matricula === alunoBusca) {
          while (true) {
            try {
              let alterarDados = readline.questionInt(`Qual opção você quer alterar: (1) Telefone, (2) E-mail, (3) Turma: `);
              if (alterarDados == 1) {
                a.telefone = readline.questionInt(`Digite o telefone: `);
                break;
              }
              else if (alterarDados == 2) {
                a.email = readline.question(`Digite o e-mail: `);
                break;
              }
              else if (alterarDados == 3) {
                a.turma = readline.questionInt(`Digite a turma: (1)- Sábado iniciante (2)- Sábado avançado (3)- Domingo iniciante (4)- Domingo avançado `);
                break;
              } else if (alterarDados != 1 && alterarDados != 2 && alterarDados != 3){
                throw Error ("Opção inválida");
              }
            } catch (e){ 
              console.log("Digite apenas as opções citadas. "); 
              }
          }
              console.log("Cadastro alterado com sucesso!"); 
          } 
        }
      readline.keyInPause();
      break;
       
      // OPÇAO 5. DELETE - (EXCLUIR O ALUNO DO CADASTRO NO SISTEMA)  
      case 5:
      alunoBusca = readline.questionInt("Digite matrícula do aluno: ");
        for (const a of bancoDeAlunos) {
          if (a.matricula === alunoBusca) {
            console.log(a.nome);
            console.log(`Excluido aluno ${a.nome} do sistema..."`);
            bancoDeAlunos.splice(a, 1);
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