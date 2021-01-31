import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster';

  selectedIndex: number = -1;

  ishtar = {
    name: "Ishtar",
  }
  gigli = {
    name: "Gigli"
  }
  nineteenfortyone = {
    name: "1941"
  }
  trolltwo = {
    name: "Troll 2"
  }

  upVote(index: number) {
    this.selectedIndex = index;
  }

  isSelected(index: number) {
    return this.selectedIndex === index;
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }
}
