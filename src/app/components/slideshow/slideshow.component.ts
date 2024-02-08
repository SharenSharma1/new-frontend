
    // { src: '..\assets\image1.jpeg', alt: 'Slide 1', active: true },
    // { src: '..\assets\image2.jpeg', alt: 'Slide 2', active: false },
    // Add more images as needed
  
    import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  images = [
    { src: '..\assets\image1.jpeg', alt: 'Image 1', active: true },
    { src: '..\assets\image2.jpeg', alt: 'Image 2', active: false },
    // { src: 'path/to/image3.jpg', alt: 'Image 3', active: false }
  ];
  currentSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.showNextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  showNextSlide(): void {
    this.images[this.currentSlideIndex].active = false;
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    this.images[this.currentSlideIndex].active = true;
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-slideshow',
//   templateUrl: './slideshow.component.html',
//   styleUrls: ['./slideshow.component.css']
// })
// export class slideshowComponent {
//   images = [
//     { url: '..\assets\image1.jpeg' },
//     { url: '..\assets\image2.jpeg' }
//   ];
// }
