import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Story } from '../story';
import { StoryService } from '../services/story.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() story: Story;
  @ViewChild("player") player;
  @ViewChild("miniPlayer") miniPlayer;
  currentSource = "";
  constructor(private route: ActivatedRoute, private storyService: StoryService) { }

  ngOnInit(): void {
    this.getStory();
  }
  getStory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storyService.getStory(id)
      .subscribe(story => this.story = story);
  }
  play(source) {
    if(!this.miniPlayer.nativeElement.classList.contains('show')) {
      this.miniPlayer.nativeElement.classList.add('show');
    }

    this.currentSource = source;
    this.player.nativeElement.load();
    this.player.nativeElement.play();
  }
}
