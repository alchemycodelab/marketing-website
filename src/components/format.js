
export function paragraphToLineBreak(html = '') {
  if (html.trim() === '<p><br></p>') return '';

  const withLineBreaks = html
    ?.replace(/<p>/g, '')
    .replace(/<\/p>/g, ' <br>');

  return withLineBreaks;
}