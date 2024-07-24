import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/models/contrat';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { contratService } from 'src/app/services/contrat.services';
import { Locateur } from 'src/app/models/locateur';
import { locataire } from 'src/app/models/locataire';
import { maison } from 'src/app/models/maison';


@Component({
  selector: 'app-visualise-contrat',
  templateUrl: './visualise-contrat.component.html',
  styleUrls: ['./visualise-contrat.component.css']
})
export class VisualiseContratComponent implements OnInit {
  private sub:any;
  private id:any;
  c:Contrat=new Contrat(null!,null!,null!,null!,null!,null!,null!);
  l:Locateur=new Locateur(null!,null!,null!,null!,null!,null!,null!,null!,null!)
  lo:locataire=new locataire(null!,null!,null!,null!,null!,null!,null!,null!,null!,null!)
  m:maison=new maison (null!,null!,null!,null!,null!,null!,null!,null!,null!)
  fname:string;
  lname:string;
  cin:string;

  constructor(private route: ActivatedRoute,public contratService:contratService,public router:Router) 
  { 
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    })
    console.log(this.id);
    (async()=>
    {
      await this.getById(this.id)
    })();
  }

  ngOnInit(): void {
  }
  async getById(i:number) : Promise <Contrat> {
    return new Promise ((resolve,reject)=> {
      this.contratService.getById (i).subscribe((res : any ) =>{
        this.c = res;
        this.fname=this.c.locataire.firstname;
        this.lname=this.c.locataire.lastname;
        this.cin=this.c.locataire.cin;
        resolve(this.c);
      },(error=>{
          alert("error");
          reject("error on get contrat");
        })
      );
    });
  }
}
