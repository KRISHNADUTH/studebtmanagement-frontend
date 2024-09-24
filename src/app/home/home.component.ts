import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit {
  ngAfterViewInit(): void {
    const hamBurger = document.querySelector(".toggle-btn") as HTMLElement;
    
    if (hamBurger) {
      hamBurger.addEventListener("click", () => {
        const sidebar = document.querySelector("#sidebar") as HTMLElement;
        if (sidebar) {
          sidebar.classList.toggle("expand");
        }
      });
    }
  }
}
