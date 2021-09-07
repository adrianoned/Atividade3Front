import { ITecnologia } from "./tecnologia.model";

    export interface ICandidato {
        id: number;
        nome: string;
        dataNascimento: Date;
        tecnologias?: ITecnologia[];
    }

