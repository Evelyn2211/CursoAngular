import { Component } from '@angular/core';


@Component ({
    selector: 'fruta',
    template:`
    <h2>{{Componente}}</h2>
    <p>{{listado}}</p>
    `
})
export class frutaComponent{
 public Componente='Componente';
 public listado='Naranja,Manzana';
}

 
