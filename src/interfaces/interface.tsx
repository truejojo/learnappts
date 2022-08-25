import { COUNTER_ACTIONS } from "../enums/enum";

// hooks
export interface ICountState {
  count: number;
}

export interface ICountAction {
  type: COUNTER_ACTIONS;
  payload: number;
}

export interface IDataItems {
  id: number;
  title: string;
}

export interface IDataItemsTitle {
  title: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IThemeContent {
  theme?: string;
  toggleTheme?: () => void;
  getCount: () => number;
}

export interface IThemeContentCounter {
  increment: () => void;
  getCount: () => number;
}
export interface IThemeContentCount {
  count: number;
}
