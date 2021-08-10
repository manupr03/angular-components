import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,  SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges,
 DoCheck, AfterContentChecked, 
 AfterContentInit, AfterViewChecked,AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name:string
  
  constructor() {
    console.log('constructor called')
   }

   ngOnChanges(changes: SimpleChanges){
    console.log('ngonChanges called')
    console.log(changes)

   }
  ngOnInit(): void {
    console.log('ngonInit called')

  }
  ngDoCheck(){
    console.log('ngDocheck called ')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentchecked called')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  }
 ngAfterViewChecked(){
   console.log('ngAfterviewChecked called')
 }
 ngAfterViewInit(){
  console.log('ngAfterviewInit called')
}

ngOnDestroy(){
  
}


}
