import { AfterContentChecked, AfterContentInit, 
  AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input,
   OnChanges, OnDestroy, OnInit,  SimpleChanges, ViewChild, 
   ViewEncapsulation } from '@angular/core';

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
  @ViewChild('heading') header:ElementRef
  
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

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentchecked called')
  }

 ngAfterViewInit(){
  console.log('ngAfterviewInit called')
  console.log('Text Content :'+this.header.nativeElement.textContent)
}
ngAfterViewChecked(){
  console.log('ngAfterviewChecked called')
}

ngOnDestroy(){

}


}
