import { tva } from '@gluestack-ui/utils/nativewind-utils';

export const buttonStyle = tva({
  base: 'rounded-xl flex-row items-center justify-center',
  variants: {
    variant: {
      solid: 'bg-black',
      outline: 'border border-gray-300 bg-white',
      link: 'bg-transparent',
    },
    size: {
      sm: 'px-4 py-2',
      md: 'px-6 py-3',
      lg: 'px-8 py-4',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'lg',
  },
});

export const buttonTextStyle = tva({
  base: 'font-medium',
  variants: {
    variant: {
      solid: 'text-white',
      outline: 'text-black',
      link: 'text-black',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'lg',
  },
});

