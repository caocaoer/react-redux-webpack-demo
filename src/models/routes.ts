import { RouteObject } from 'react-router';
import { USER_ROLE_ENUM } from '@/constants/user';

export type RouteProps = {
  meta?: {
    auth?: boolean;
    roles?: USER_ROLE_ENUM[];
    unRoles?: USER_ROLE_ENUM[];
  };
  children?: RouteProps[];
} & RouteObject;
