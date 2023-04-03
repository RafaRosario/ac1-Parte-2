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
calcular(){
this.resultado = (this.peso /(this.altura* this.altura))
}
ngOnInit(): void {
  this.form = new FormGroup({
    peso : new FormControl('',[Validators.required, Validators.min(1), Validators.max(500)]),
    altura: new FormControl('', [Validators.required,Validators.min(0.01), Validators.max(3)]),
  });
}
}
