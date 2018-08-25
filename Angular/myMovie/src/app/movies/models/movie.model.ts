export class Movie {
    // public genero: string[];
    // public title:string;
    // public overview:string;
    // public runtime: number;
    // public poster_path:string;
    // public backgroundImage_path:string;
    // public movieDB_id:number;
    // public vote_average:number;

    constructor(
        public _id:string,
        public poster_path:string,
        public title:string,
        public overview?:string,
        public original_title?:string,
        
        public backdrop_path?:string,
        public movieDB_id?:number,
        public vote_average?:number,
    ){}
}