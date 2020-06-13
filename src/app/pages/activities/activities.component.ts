import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivitiesService } from './activities.service';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ActivitiesComponent implements OnInit {
  constructor(
    config: NgbCarouselConfig,
    private activitiesService: ActivitiesService
  ) {
    config.interval = 10000;
  }
  active = 'workshop';
  tap = 1;

  public workshop = [
    {
      Image: { host: '', path: './assets/images/2.jpg' },
      name: 'web development',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Android',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/1.jpg' },
      name: 'Python',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/3.jpg' },
      name: 'web development',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/4.jpg' },
      name: 'Machine Learning',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/2.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/3.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];

  public techbhukkads = [
    {
      Image: { host: '', path: './assets/images/1.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/4.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/2.jpg' },
      name: 'Activity 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 5',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/4.jpg' },
      name: 'Activity 6',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/1.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/3.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];

  public farewell = [
    {
      Image: { host: '', path: './assets/images/1.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/2.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/3.jpg' },
      name: 'Activity 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 5',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/4.jpg' },
      name: 'Activity 6',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/1.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/2.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];

  // slider------------------------

  images = [];
  public errorMsg: any;

  paused = false;
  pauseOnHover = false;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  buttons(but: number) {
    this.tap = but;
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  ngOnInit() {
    this.activitiesService.getSlide().subscribe(
      (data) => (this.images = data.images),
      (error) => (this.errorMsg = error)
    );
  }

  public activateTab(tab: string) {
    this.active = tab;
  }
}
