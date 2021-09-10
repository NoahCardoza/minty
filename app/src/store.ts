import { writable } from 'svelte/store';

type StateAccount = {
  name: string;
  value: number;
}

type StateCategories = {
  name: string;
  children: string[];
}

type State = {
  session: any;
  categories: StateCategories[];
  // accounts: StateAccount[];
}

export const state = writable<State>(null);