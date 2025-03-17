
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
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl font-bold mb-8"
        >
          About Me
        </h2>
        
        <div 
          className="prose prose-lg max-w-none"
        >
          <MarkdownContent content={aboutContent} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
