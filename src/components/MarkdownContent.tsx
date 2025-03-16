
import React from 'react';
import { cn } from '@/lib/utils';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

// A simple markdown renderer. For a more advanced solution, 
// you could add react-markdown or marked as dependencies.
const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className }) => {
  // Process markdown-like content
  const processedContent = content
    // Headers
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6 mt-10">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-4 mt-8">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-3 mt-6">$1</h3>')
    // Lists
    .replace(/^\* (.*$)/gm, '<li class="ml-6 list-disc mb-2">$1</li>')
    .replace(/^\- (.*$)/gm, '<li class="ml-6 list-disc mb-2">$1</li>')
    .replace(/^\d\. (.*$)/gm, '<li class="ml-6 list-decimal mb-2">$1</li>')
    // Bold
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Paragraphs (must be last)
    .replace(/^\s*$(?:\r\n?|\n)/gm, '</p><p class="mb-4">')
    // Add opening paragraph tag
    .replace(/^(.+)$/m, '<p class="mb-4">$1');

  return (
    <div 
      className={cn("prose max-w-none prose-p:leading-relaxed prose-headings:text-foreground prose-a:text-primary", className)}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
};

export default MarkdownContent;
