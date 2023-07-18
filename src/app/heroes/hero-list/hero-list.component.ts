import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  public heroeList        : string[] = ['Spiderman', 'Hulk', 'Thor', 'IronMan'];
  public deletedHeroe     : string | undefined = "";
  public deletedHeroeList : string[] = [];
  

  public deleteLastHeroe(heroeName: string, heroeIndex: number):void
  {
    const heroesToDelete : number = 1;
    this.deletedHeroe = heroeName;
    let indexOfHeroeToDelete : number = this.heroeList.indexOf(heroeName, heroeIndex);
    this.deletedHeroeList.push(...this.heroeList.splice(indexOfHeroeToDelete, heroesToDelete));
    
  }

  public resetHeroeList():void {
    this.heroeList.push(...this.deletedHeroeList)
    this.deletedHeroeList = [];
  }

  public showAlert(message:string):void{
    alert(message);
  }
}
