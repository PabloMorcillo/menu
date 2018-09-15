import {
  Directive,
  HostBinding,
  HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})

export class DirectivesDirective {
  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @HostBinding('style.border-color') color: string;
  @HostBinding('style.background-color') borderColor: string;

  @HostListener('click') onClick() {


    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
    
  }
}
