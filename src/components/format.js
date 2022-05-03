
const testEmpty = html => !html || html === '<p><br></p>';
export const isEmpty = (html = '') => testEmpty(html?.trim());

export function paragraphToLineBreak(html) {
  if (isEmpty(html)) return '';

  const withLineBreaks = html
    ?.replace(/<p>/g, '')
    .replace(/<\/p>/g, ' <br>');

  return withLineBreaks;
}