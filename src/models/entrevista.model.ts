import { ICandidato } from "./candidato.model";
import { IVaga } from "./vaga.model";

    export interface IEntrevista {
        id: number;
        observacoes: string;
        vagaId: number;
        candidatoId: number;

        vaga?: any;
        candidato?: ICandidato;
    }

