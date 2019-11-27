import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
public state = [
  { state: 'Acre'},
  { state: 'Alagoas'},
  { state: 'Amapa'},
  { state: 'Amazonas'},
  { state: 'Bahia'},
  { state: 'Ceará'},
  { state: 'Distrito Federal'},
  { state: 'Espírito Santo'},
  { state: 'Goiás'},
  { state: 'Maranhão'},
  { state: 'Mato Grosso'},
  { state: 'Mato Grosso do Sul'},
  { state: 'Minas Gerais'},
  { state: 'Pará'},
  { state: 'Paraná'},
  { state: 'Paraíba'},
  { state: 'Pernambuco'},
  { state: 'Piauí'},
  { state: 'Rio de Janeiro'},
  { state: 'Rio Grande do Norte'},
  { state: 'Rio Grande Do Sul'},
  { state: 'Rondônia'},
  { state: 'Roraima'},
  { state: 'Santa Catarina'},
  { state: 'São Paulo'},
  { state: 'Sergipe'},
  { state: 'Tocantins'},
  { state: 'Selecione'},
];

  constructor() { }

  ngOnInit() {
  }

}
