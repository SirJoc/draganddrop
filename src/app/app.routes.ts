import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { JiraComponent } from './pages/jira/jira.component';

export const routes: Routes = [
    { title: 'test', path: 'test', component: TestComponent},
    { title: 'jira', path: 'jira', component: JiraComponent}
];
