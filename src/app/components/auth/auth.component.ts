import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInIt(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "blue";
  }

}
