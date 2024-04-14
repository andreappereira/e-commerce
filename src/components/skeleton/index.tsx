import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface SkeletonProps extends ComponentProps<'div'> {}

export const Skeleton: React.FC<SkeletonProps> = ({ ...rest }) => (
  <div
    className={twMerge(
      'bg-zinc-50/10 animate-pulse rounded-md',
      rest.className
    )}
    {...rest}
  />
);
