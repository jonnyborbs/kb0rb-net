
import React, { useRef, useEffect } from 'react';
import MarkdownContent from './MarkdownContent';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

const aboutContent = `
I come from a long line of hams going back generations and am proud to carry on the family tradition, combining technology and communication with the fun of meeting new people. I'm a member of the ARRL as well as the Vaca Valley Radio Club (VVRC, https://w6vvr.net) and Sac Valley Mesh (https://www.sacvalleymesh.com) and got my FCC Amateur Extra in 2025.

I'm always looking to chat with new folks and learn new things so if you see me, say hi!

I send eQSLs and haven't yet gotten physical ones made yet. But I hope to soon!
`;

const AboutSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { observe } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px"
  });

  useEffect(() => {
    if (titleRef.current) observe(titleRef.current);
    if (contentRef.current) observe(contentRef.current);
  }, [observe]);

  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl font-bold mb-8 intersection-observer-trigger animate-fade-in-up"
        >
          About Me
        </h2>
        
        <div 
          ref={contentRef}
          className="prose prose-lg max-w-none intersection-observer-trigger animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <MarkdownContent content={aboutContent} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
