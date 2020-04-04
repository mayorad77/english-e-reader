import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { StoryService } from '../services/story.service'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories: Story[];
  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.getStories();
  }
  getStories(): void {
    this.storyService.getStories()
    .subscribe(stories => this.stories = stories);
  }
}
