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
  count: number;
}

export interface IThemeContentCounter {
  count: number;
  incrementCount: () => void;
}
export interface IThemeContentCount {
  count: number;
}