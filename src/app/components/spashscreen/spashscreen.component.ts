import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spashscreen',
  templateUrl: './spashscreen.component.html',
  styleUrls: ['./spashscreen.component.css']
})
export class SpashscreenComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/principal']);
      console.log("Fin");
    }, 6000); 
  }

}
