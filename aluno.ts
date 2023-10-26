class Aluno {

    //atributos:
private _matricula: number;
private _nome: string;
private _email: string;
private _telefone: string;
private _turma: string;

    //construtor
    constructor (matricula: number, nome: string, email: string, telefone: string, turma: string) {
this._matricula = matricula,
this._nome = nome,
this._email = email,
this._telefone = telefone,
this._turma = turma
}

//métodos:

public toString(): string {
    return `Matrícula: ${this._matricula}, Nome do aluno: ${this._nome}, Turma: ${this._turma}`;
}



//get e set:

public get matricula() : number {
    return this._matricula;

}

public get nome() : string {
    return this._nome;
}

public get email() : string {
    return this._nome;
}

public get telefone() : string {
    return this._telefone;
}

public get turma() : string {
    return this._turma;
}

public set matricula(matricula : number) {
    this._matricula = matricula;
}

public set nome(nome : string) {
    this._nome = nome;
}

public set email(email : string) {
    this._email = email;
}

public set telefone(telefone : string) {
    this. _telefone= telefone;
}

public set turma(turma : string) {
    this._turma = turma;
}

}
