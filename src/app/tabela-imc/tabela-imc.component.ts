import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tabela-imc',
  templateUrl: './tabela-imc.component.html',
  styleUrls: ['./tabela-imc.component.css']
})
export class TabelaIMCComponent {
form: FormGroup;
peso: number;
altura: number;
resultado: number;
texto: String;
calcular(){
this.resultado = (this.peso /(this.altura* this.altura))

if (this.resultado <18.5){
  this.texto = "abaixo do peso normal";
}
else if (this.resultado >= 18.5 && this.resultado <=24.9){
  this.texto = "peso normal";
}
else if (this.resultado >= 25 && this.resultado <=29.9){
  this.texto = "Excesso de peso";
}
else if (this.resultado >= 30 && this.resultado <=34.9){
  this.texto = "Obesidade classe 1";
}
else if (this.resultado >= 35 && this.resultado <=39.9){
  this.texto = "Obesidade classe 2";
}
else if (this.resultado >=40){
  this.texto = "Obesidade classe 3";
}
}
ngOnInit(): void {
  this.form = new FormGroup({
    peso : new FormControl('',[Validators.required, Validators.min(1), Validators.max(500)]),
    altura: new FormControl('', [Validators.required,Validators.min(0.01), Validators.max(3)]),
  });
}
}
