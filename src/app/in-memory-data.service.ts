import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Story } from './story';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const stories = [
      {
        id: 1,
        name: 'Peter Pan',
        author: 'J. M. Barrie',
        image: './assets/sources/Peter_Pan-J_M_Barrie_Audio/cover.jpg',
        data: [
          {
            name: 'Chapter one',
            path: './assets/sources/Peter_Pan-J_M_Barrie_Audio/Peter Pan - Chapter 01.mp3',
            lyric: ''
          },
          {
            name: 'Chapter two',
            path: './assets/sources/Peter_Pan-J_M_Barrie_Audio/Peter Pan - Chapter 02.mp3',
            lyric: ''
          }
        ]
      },
      {
        id: 2,
        name: 'Halloween Horror',
        author: 'Clemen D. B. Gina',
        image: '',
        data: [
          {
            name: 'Chapter one',
            path: './assets/sources/Peter_Pan-J_M_Barrie_Audio/Peter Pan - Chapter 01.mp3',
            lyric: ''
          }
        ]
      }
    ];
    return {stories};
  }
  genId(stories: Story[]): number {
    return stories.length > 0 ? Math.max(...stories.map(story => story.id)) + 1 : 11;
  }
}
