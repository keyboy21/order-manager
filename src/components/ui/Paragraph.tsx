import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '@/utils/cn.util';

type TextRef = HTMLParagraphElement;
type TextProps = ComponentPropsWithoutRef<'p'> & {
     variant?: 'body' | 'muted';
     asChild?: boolean;
     as?: 'p' | 'span' | 'div';
};

const paragraphVariants = cva('text-antialiased', {
     variants: {
          variant: {
               body: 'text-stone-900',
               muted: 'text-gray-500',
          },
     },
});

export const Paragraph = forwardRef<TextRef, TextProps>(
     (
          { className, variant = 'body', asChild, children, as = 'p', ...props },
          ref,
     ) => {
          const Component = asChild ? Slot : as;

          return (
               <Component
                    className={cn(paragraphVariants({ variant }), className)}
                    {...props}
                    ref={ref}
               >
                    {children}
               </Component>
          );
     },
);

Paragraph.displayName = 'Paragraph';