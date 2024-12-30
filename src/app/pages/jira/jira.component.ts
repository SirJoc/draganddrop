import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface ComponentTest {
  title: string,
  description: string,
  type: string,
  url: string,
  order: number
}

@Component({
  selector: 'app-jira',
  imports: [NgFor, CdkDropList, CdkDrag],
  templateUrl: './jira.component.html',
  styleUrl: './jira.component.scss'
})
export class JiraComponent {
  currentComponent: ComponentTest | null = null;
  items: ComponentTest[] = [
    {
      title: 'Componente 1',
      description: 'Descripción del componente 1',
      type: 'Type 1',
      order: 1,
      url: 'https://example.com/component1'
    },
    {
      title: 'Componente 2',
      description: 'Descripción del componente 2',
      type: 'Type 2',
      order: 1,
      url: 'https://example.com/component2'
    },
    {
      title: 'Componente 3',
      description: 'Descripción del componente 3',
      type: 'Type 3',
      order: 1,
      url: 'https://example.com/component3'
    }
  ];

  moveItem(event: CdkDragDrop<ComponentTest[]>) {
    const { previousContainer, container, previousIndex, currentIndex } = event;
    const isSameContainer = previousContainer === container;

    if (isSameContainer && previousIndex === currentIndex) {
      return;
    }
    moveItemInArray(this.items, previousIndex, currentIndex);
    //console.log(this.items, previousIndex, currentIndex);
  }
}
