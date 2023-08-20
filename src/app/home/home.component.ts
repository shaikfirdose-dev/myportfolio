import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnDestroy {
  private animationTimeline: anime.AnimeTimelineInstance;

  constructor(private router: Router) { }

  onContact() {
    this.router.navigate(['/contact']);
  }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.an-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    this.animationTimeline = anime.timeline({ loop: true })
      .add({
        // ... First animation config
        targets: '.an-2 .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
      }).add({
        // ... Second animation config
      });
  }

  ngOnDestroy(): void {
    if (this.animationTimeline) {
      this.animationTimeline.pause();
    }
  }
}

