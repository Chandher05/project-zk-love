import * as React from 'react';
import { useState } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50',
        secondary:
          'border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800',
        destructive: 'border-transparent bg-red-500 text-neutral-50 hover:bg-red-500/80',
        outline: 'text-neutral-950 dark:text-neutral-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({ className, variant, onClick, active, ...props }) {
  return <div onClick={onClick} className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
