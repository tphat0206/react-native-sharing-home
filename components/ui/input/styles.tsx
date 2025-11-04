import { tva } from '@gluestack-ui/utils/nativewind-utils';

export const inputStyle = tva({
  base: 'w-full px-4 py-3 rounded-xl bg-gray-100 text-base',
  variants: {
    variant: {
      default: '',
      error: 'border border-red-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

