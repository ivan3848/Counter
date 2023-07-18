import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: 
    [
        HeroComponent,
        HeroListComponent
    ],
    exports:
    [
        HeroComponent,
        HeroListComponent
    ],
    imports:
    [
        CommonModule
    ]
})

export class HeroeModule
{

}