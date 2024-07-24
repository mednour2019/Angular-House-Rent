import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/models/contrat';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { DialogExampleComponent} from 'src/app/components/dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableDataSource, _MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { contratService } from 'src/app/services/contrat.services';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {
  Contrats:Contrat[]=[];
  c:Contrat =new Contrat(null!,null!,null!,null!,null!,null!,null!);
   deb:Date;
   fin:Date;
   ndeb:Date;
   


  constructor(public fb:FormBuilder,public contratService:contratService,public router:Router,public dialog:MatDialog,@Inject(DOCUMENT) private document: Document) 
  { 
    (async()=>
    {
      
     await this.getAll();
    

    }
      )
  }

  ngOnInit(): void {
    console.log("zzzzzz",this.getAll())
  }
  async getAll() : Promise <Array<Contrat>> {
    return new Promise ((resolve,reject)=> {
      this.contratService.getAll ().subscribe((res : any ) =>{
        this.Contrats = res;
        console.log(" jghgh",this.Contrats)
        /*for(var i = 1; i <= this.Contrats.length; i++){
        //const format = 'dd/MM/yyyy';
        //const myDate =  this.Contrats[i].datedebut;
        //const locale = 'fr';
       // const formattedDate = formatDate(myDate, format, locale);
        //let newDate = new Date(formattedDate);
        //this.Contrats[i].datedebut=newDate;
        //console.log(" ena",formattedDate)
       
      
          
          
       }*/
       
        resolve(this.Contrats);
      },(error=>{
          alert("error");
          reject("error on get all Contrats");
        })
      );
    });
  }
  visualiseLink(i:number){
    console.log(" thabet",this.Contrats[i].id)
    this.router.navigate(['/visualizeContrat/'+this.Contrats[i].id]);
  }

}
