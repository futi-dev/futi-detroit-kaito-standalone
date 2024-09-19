import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { LINKS } from '@/app/components/main-layout/profile/introduction/links/consts';
import { buttonVariants } from '@/app/components/ui/button';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type ILinksProps = BasicsProps;

export const Links: React.FC<ILinksProps> = ({ className, style }) => (
  <AnimatePresence>
    <motion.div
      className={cn('flex gap-2 max-sm:gap-1', className)}
      style={style}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.1, delayChildren: 0.6 } },
      }}
      initial="hidden"
      animate="visible"
    >
      {LINKS.map(({ Icon, href, label }, i) => (
        <motion.a
          key={i}
          href={href}
          target="_blank"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'group cursor-pointer text-base font-bold text-[#6da5e7]/85 hover:bg-accent-foreground/20 hover:dark:bg-accent/20 hover:text-[#6da5e7] max-sm:px-2 dark:text-[#ecf6ff]/85 hover:dark:text-white',
          )}
          rel="noreferrer"
          variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
        >
          <Icon className="mr-2 h-4 w-4 fill-[#6da5e7] stroke-[#6da5e7]/85 dark:fill-[#ecf6ff] dark:stroke-[#ecf6ff]/85" />
          {label}
        </motion.a>
      ))}
    </motion.div>
  </AnimatePresence>
);
