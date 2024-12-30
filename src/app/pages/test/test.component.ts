import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

interface ComponentTest {
  title: string,
  description: string,
  type: string,
  url: string,
  order: number
}

@Component({
  selector: 'app-test',
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  currentComponent: ComponentTest | null = null;
  listComponents: ComponentTest[] = [
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

  openIssues = [
    { id: 1, summary: 'Open Issue 1' },
    { id: 2, summary: 'Open Issue 2' },
    { id: 3, summary: 'Open Issue 3' }
  ];

  inProgressIssues = [
    { id: 4, summary: 'In Progress Issue 1' },
    { id: 5, summary: 'In Progress Issue 2' }
  ];

  closedIssues = [
    { id: 6, summary: 'Closed Issue 1' },
    { id: 7, summary: 'Closed Issue 2' }
  ];

  filterByType(type: string) {
    return this.listComponents.filter(component => component.type === type);
  }

  onDragStart(item: ComponentTest) {
    console.log('Drag started for:', item);
    this.currentComponent = item;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any, type: string) {
    if (this.currentComponent) {
      this.currentComponent.type = type;
    }
    //moveItemInArray(this.listComponents, event.previousIndex, event.currentIndex);
  }

  // Function to handle the drop event for drag-and-drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
