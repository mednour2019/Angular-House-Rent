import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Personne } from "../models/personne";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
  })
  export class PersonneService{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/personne/getAll")
      }
      public getType(email:string){
        return this.http.get("http://localhost:8888/personne/getType/"+email,{responseType:"text"})
      }
      public  add(p:Personne){
        return this.http.post("http://localhost:8888/personne/add",p,{responseType:"text"});
      }
        public login(user:User){
          return this.http.post("http://localhost:8888/personne/login",user)
        }
      public getById(id:number){
        return this.http.get("http://localhost:8888/personne/getById/"+id);
      }
      
      public  update(p:Personne){
        return this.http.post("http://localhost:8888/personne/update",p,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/personne/deleteById/"+id);
      }

      public  delete(p:Personne){
        return this.http.post("http://localhost:8888/personne/delete",p,{responseType:"text"});
      }
  }