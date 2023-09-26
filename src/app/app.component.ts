import { Component } from '@angular/core';

@Component({
  selector: 'co-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-challange';

  indice: number = 0;

  public onChangeComponent(i: number){
    this.indice = i;
  }
  
}
