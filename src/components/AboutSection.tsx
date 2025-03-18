
import React from 'react';
import MarkdownContent from './MarkdownContent';

const aboutContent = `
I come from a long line of hams going back generations and am proud to carry on the family tradition, combining technology and communication with the fun of meeting new people. I'm a member of the [ARRL](https://www.arrl.org) as well as the [Vaca Valley Radio Club (VVRC)](https://w6vvr.net) and [Sac Valley Mesh](https://www.sacvalleymesh.com) and got my FCC Amateur Extra in 2025.

I'm always looking to chat with new folks and learn new things so if you see me, say hi!

I send eQSLs and haven't yet gotten physical ones made yet. But I hope to soon!
`;

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="hidden lg:block w-24 h-1 bg-primary mb-8"></div>
            <div className="hidden lg:flex flex-col space-y-4 text-muted-foreground">
              <a href="#equipment" className="hover:text-primary transition-colors">Equipment</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-9">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <MarkdownContent content={aboutContent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
