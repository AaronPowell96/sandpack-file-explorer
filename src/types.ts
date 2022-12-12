export interface SandpackBundlerFile {
  active?: boolean;
  code: string;
  hidden?: boolean;
  readOnly?: boolean;
}
export type SandpackBundlerFiles = Record<string, SandpackBundlerFile>;

export type Item = {
  children?: Item[];
  data: {
    path: string;
  };
  droppable: boolean;
  id: string;
  parent: string;
  text: string;
};
export type HierarchicalData = Record<number, Item>;
