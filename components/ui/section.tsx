import { ReactNode } from 'react';

type SectionProps = {
          children: ReactNode;
          className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
          return (
                    <section className={`max-w-3xl mx-auto px-4 ${className}`}>
                              {children}
                    </section>
          );
};
