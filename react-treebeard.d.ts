declare module "react-treebeard" {
  export interface DecoratorsProps {
    node: TreebeardNode;
    style: { [key: string]: React.CSSProperties };
    width: number;
    height: number;
    decorators: Decorators;
    onClick(): void;
    onTriangleClick(node: TreebeardNode, toggled: boolean): void;
  }

  export interface Decorators {
    Loading(props: DecoratorsProps): React.ReactNode;
    Toggle?(props: any): React.ReactNode;
    Header(props: DecoratorsProps): React.ReactNode;
    Container(props: DecoratorsProps): React.ReactNode;
  }

  export interface TreebeardProps {
    data: TreebeardNode | TreebeardNode[];
    decorators?: Decorators;
    animations?: boolean;
    style?: any;
    onToggle?(node: TreebeardNode): void;
    onTriangleClick?(node: TreebeardNode, toggled: boolean): void;
  }

  export interface TreebeardNode {
    id?: string;
    name: string;
    children?: TreebeardNode[];
    toggled: boolean;
    loading?: boolean;
    active?: boolean;
  }

  export class Treebeard extends React.Component<TreebeardProps> {}
  export const decorators: Decorators;
}
