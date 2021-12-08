import { RouteComponentProps } from 'react-router-dom';

type BaseFunctionComponent = RouteComponentProps;

export type ContentLayoutProps = RouteComponentProps;

export interface LoginProps extends BaseFunctionComponent {
  // history: {
  //   push: (pathname) => void;
  // };
}

export type SignUpProps = BaseFunctionComponent;

export interface MyCollectionProps{}
