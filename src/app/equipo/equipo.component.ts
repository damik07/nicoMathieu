import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  habilidadesList:any= [
    {id: 1, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/1.png"},
    {id: 2, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/2.png"},
    {id: 3, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/3.png"},
    {id: 4, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/4.png"},
    {id: 5, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/5.png"},
    {id: 6, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/6.png"},
    {id: 7, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/7.png"},
    {id: 8, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/8.png"},
    {id: 9, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/9.png"},
    {id: 10, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/10.png"},
    {id: 11, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/11.png"},
    {id: 12, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/12.png"},
    {id: 13, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/13.png"},
    {id: 14, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/14.png"},
    {id: 15, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/15.png"}
  ];

  constructor() { }

  ngOnInit() {
  }

}