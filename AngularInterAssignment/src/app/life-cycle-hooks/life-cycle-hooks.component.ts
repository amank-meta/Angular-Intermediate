import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges,DoCheck, Input, AfterContentInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked{
  constructor()
  {
    console.log("Constructor is called");
  }
  @Input() data: any;
  ngOnInit(){
    console.log("Oninit is called");
  }
 
  ngOnDestroy() {
    console.log("OnDestroy is called");
  }

  ngOnChanges(){
      console.log("OnChanges is called");
  }

  ngDoCheck(){
      console.log("DoCheck is called");
  }
  ngAfterContentInit(){
    console.log("AfterContentInit is called");
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked is called");
  }
}
