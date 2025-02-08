export const handleTopicClick = (topic) => {
  // Remove emojis and clean up the search query
  const cleanTopic = topic.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
  const searchQuery = encodeURIComponent(`${cleanTopic} cybersecurity guide how to`);
  const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
  
  // Open in new tab
  window.open(searchUrl, '_blank', 'noopener,noreferrer');
}; 