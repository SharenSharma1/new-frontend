import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { PostService } from './services/postservices/post.service';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Blogger';

  constructor(private postService: PostService, private router: Router){}

  logout(): void {
    this.postService.logout();
    this.router.navigate(['/login']);
  }
}
