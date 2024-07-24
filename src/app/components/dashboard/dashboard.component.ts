import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  linkConcierge:{ path: string, text: string }[]=[
    {
      path:"['/concierge1']",
      text:"concierge1"
    },
    {
      path:"['/concierge2']",
      text:"concierge2"
    },
  ]
  linkLocateur:{ path: string, text: string }[]=[
    {
      path:"['/locateur1']",
      text:"locateur1"
    },
    {
      path:"['/locateur2']",
      text:"locateur2"
    },
  ]
  linkLocataire:{ path: string, text: string }[]=[
    {
      path:"['/locataire1']",
      text:"locataire1"
    },
    {
      path:"['/locataire2']",
      text:"locataire2"
    },
  ]
  links:{ path: string, text: string }[]=[];
  constructor() { }

  ngOnInit(): void {
    switch (localStorage.getItem("type")){
      case "locateur": this.links=this.linkLocateur;break;
      case "locataire": this.links=this.linkLocataire;break;
      case "concierge": this.links=this.linkConcierge;
    }
  }

}

export class Link{
  constructor(
    public path:string,
    public text:string
  ){

  }
}

