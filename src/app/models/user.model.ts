export class Persona {
    id: number = 0;
    nome: string = "";
    cognome: string = "";
    sesso: string = "";
    dataNascita: string = "";
}

export class PersonaResponse {
    persone: Persona[] = [];
}