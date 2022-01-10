import { ReactNode } from 'react';

export type SvgrComponent = React.FunctionComponent<
  React.SVGAttributes<SVGElement>
>;
export type NonUndefined<A> = A extends undefined ? never : A;

export interface WithChildren {
  children: ReactNode;
}
export interface WithClassName {
  className?: string;
}
