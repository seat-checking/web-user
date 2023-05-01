/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  type ReactElement,
  type PropsWithChildren,
  type WeakValidationMap,
  type ValidationMap,
} from 'react';

/**
 * functional component 응용
 * children이 있는 컴포넌트 타입
 */
export interface FC<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<P, any>;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  displayName?: string;
}

/**
 * void functional component 응용
 * children이 없는 컴포넌트 타입
 */
export interface VFC<P = {}> {
  (props: P, context?: any): ReactElement<P, any>;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  displayName?: string;
}
