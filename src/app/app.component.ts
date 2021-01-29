import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster';
  ishtar = {
    name: "Ishtar",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjZmMzc0NmEtZTEwZi00ZWQyLWEwZjItNWJjMDZlODAxNjIwXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg"
  }

  upVote() {
    alert("You voted!");
  }



}
