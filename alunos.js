const readline = require('readline-sync');

// class aluno{
//   constructor(login, senha, turma) {
//   this.login = this.login;
//   this.senha = this.senha;
//   }
// }


let cadastroDeMatricula = 2;
const aluno1 = {
  login: "aluna@aluno.com",
  senha: "1234",
  matricula: 1,
  nome: "Ana Marinho",
  telefone: "81 98888-9997",
  turma: "Sábado iniciante",
};
const aluno2 = {
  login: "aluno@aluno.com",
  senha: "5678",
  matricula: 2,
  nome: "João Soares",
  telefone: "81 99999-9998",
  turma: "Domingo iniciante",
};

const alunos = [aluno1, aluno2];



// MENU DO ALUNO
let loop = true;
let alunoBusca;
while (loop) {
	console.log('\n********** ÁREA DO ALUNO: **********');
	console.log('\nOPÇÃO:');
	console.log('1. Cadastrar acesso:');
	console.log('2. Exibir informações cadastradas:');
	console.log('3. Buscar um instrumento:');
	console.log('4. Alterar cadastro:');
	console.log('5. Excluir cadastro:');
	console.log('0. Sair');
	console.log('*******************************************');
	const opcao = readline.questionInt('Escolha uma opção: ');

    switch (opcao) {
        
        //OPÇAO 1. CREATE - (O ALUNO CADASTRAR SEUS ACESSO NO SISTEMA)
        case 1:
        let emailAluno = readline.question("Digite seu melhor e-mail:");
        let senhaAluno = readline.question("Crie uma senha com 4 números:");
        cadastroDeMatricula++;
        const aluno = {
        login: emailAluno,
        senha: senhaAluno,
        };
        alunos.push(aluno);
        console.log("Cadastro feito com sucesso!");
        readline.keyInPause();
        break;

        // OPÇAO 2. READ - (O ALUNO VISUALIZAR SEU CADASTRO NO SISTEMA)
        case 2:
        alunoBusca = readline.question("Digite seu e-mail:");
        for (const a of alunos) {
            if (a.login === alunoBusca) {
            console.log("Resultado da busca");
            console.log("------------------------");
            console.log(`Matricula: ${a.matricula}`);
            console.log(`Nome: ${a.nome}`);
            console.log(`Telefone: ${a.telefone}`);
            console.log(`E-mail: ${a.login}`);
            console.log(`Turma: ${a.turma}`);   
            }
        }
        
          readline.keyInPause();
          break;
        
        // OPÇAO 3. BUSCAR UM INSTRUMENTO - (O ALUNO SABER SE O INSTRUMENTO ESTA DISPONÍVEL)

        // OPÇAO 4. UPDATE - (O ALUNO ALTERAR SEU CADASTRO NO SISTEMA)  
        case 4:
            alunoBusca = readline.question("Digite seu e-mail: ");
          for (const a of alunos) {
            if (a.login === alunoBusca) {
            while (true) {
              try {
                let alterarDados = readline.questionInt(`Qual opção você quer alterar: (1) Telefone, (2) E-mail, (3) Senha: `);
                if (alterarDados == 1) {
                  a.telefone = readline.questionInt(`Digite o telefone: `);
                }
                else if (alterarDados == 2) {
                  a.login = readline.question(`Digite o e-mail: `);
                }
                else if (alterarDados == 3) {
                  a.senha = readline.questionInt(`Digite uma nova senha com 4 números: `);
                }
              } catch (e){ 
                console.log("Digite apenas as opções citadas. "); 
              }

              try {
                let finalizarAlteracao = readlineSync.question('Deseja finalizar a alteração? Digite S para Encerrar a Eleição ou N para Continuar a Eleição:');
        if (finalizarAlteracao != 'S'){
            throw Error ('Digite novamente:');
        }

        if (finalizarAlteracao = 'S'){
          console.log("Cadastro alterado com sucesso!");
              } 
            } catch (e) {
              console.log('Digite qual opção novamente:');   
          } 
          } 
        }
       } readline.keyInPause();
        break;
        

        // OPÇAO 5. DELETE - (O ALUNO EXCLUIR SEU CADASTRO NO SISTEMA)  
        case 5:
            alunoBusca = readline.questionInt("Digite seu e-mail: ");
          for (const a of alunos) {
            if (a.login === alunoBusca) {
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