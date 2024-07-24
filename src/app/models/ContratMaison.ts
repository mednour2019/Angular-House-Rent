import { Immeuble } from "./immeuble";

export class ContratMaison {
    constructor(
        public id: number,
        public description:string,
        public nb_chambre:number,
        public type:string, 
        public ismeuble: string,
        public prix:number,
        public remisepromo :number,
        public etat: string,
        public datefin: Date,
        public immeuble: Immeuble,


    ) {

    }
}