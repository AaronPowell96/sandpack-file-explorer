export interface SandpackBundlerFile {
  code: string;
  hidden?: boolean;
  active?: boolean;
  readOnly?: boolean;
}
export type SandpackBundlerFiles = Record<string, SandpackBundlerFile>;

export type Item = {
  id: string;
  parent: string;
  text: string;
  droppable: boolean;
  children?: Item[];
  data: {
    path: string;
  };
};
export type HierarchicalData = Record<number, Item>;
