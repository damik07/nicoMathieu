import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  habilidadesList:any= [
    {id: 1, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/1.PNG"},
    {id: 2, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/2.PNG"},
    {id: 3, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/3.PNG"},
    {id: 4, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/4.PNG"},
    {id: 5, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/5.PNG"},
    {id: 6, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/6.PNG"},
    {id: 7, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/7.PNG"},
    {id: 8, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/8.PNG"},
    {id: 9, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/9.PNG"},
    {id: 10, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/10.PNG"},
    {id: 11, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/11.PNG"},
    {id: 12, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/12.PNG"},
    {id: 13, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/13.PNG"},
    {id: 14, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/14.PNG"},
    {id: 15, src:"https://cdn.jsdelivr.net/gh/damik07/nicoMathieu@main/src/assets/img/15.PNG"}
  ];

  constructor() { }

  ngOnInit() {
  }

}