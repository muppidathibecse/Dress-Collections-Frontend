import { Routes } from '@angular/router';
import { Test } from './components/test/test';
import { Home } from './components/home/home';
import { Start } from './components/start/start';
import { Men } from './components/men/men';
import { Women } from './components/women/women';
import { Kids } from './components/kids/kids';
import { Likes } from './components/likes/likes';
import { Bags } from './components/bags/bags';
import { Profile } from './components/profile/profile';
import { Adminapi } from './components/admincomponents/adminapi/adminapi';
import { Post } from './components/admincomponents/post/post';
import { Get } from './components/admincomponents/get/get';
import { Card } from './components/card/card';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'test',
    component: Test,
  },
  {
    path: 'start',
    component: Start,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'men',
    component: Men,
  },
  {
    path: 'women',
    component: Women,
  },
  {
    path: 'card',
    component: Card,
  },
  {
    path: 'kids',
    component: Kids,
  },
  {
    path: 'likes',
    component: Likes,
  },
  {
    path: 'bags',
    component: Bags,
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'adminapi',
    component: Adminapi,
  },
  {
    path: 'adminapi/get',
    component: Get,
  },
  {
    path: 'adminapi/post',
    component: Post,
  },
];
