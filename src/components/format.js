
const testEmpty = html => !html || html === '<p><br></p>';
export const isEmpty = (html = '') => testEmpty(html?.trim());

export function paragraphToLineBreak(html) {
  html = html?.toString();
  if (isEmpty(html)) return '';

  const withLineBreaks = html
    ?.replace(/<p>/g, '')
    .replace(/<\/p>/g, ' <br>');

  return withLineBreaks;
}

const timestampToDate = options => timestamp => {
  return new Date(timestamp).toLocaleDateString('en-US', options);
}
const FULL_DATE = { dateStyle: 'full' };
const SHORT_DATE = { dateStyle: 'short' };
// const NUMERIC_DATE = {
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit',
// }
export const timestampToFullDate = timestampToDate(FULL_DATE);
export const timestampToShortDate = timestampToDate(SHORT_DATE);

const CLOUDINARY_URL = 'https://res.cloudinary.com/alchemy-code-lab';
const isCloudinary = url => !!(url?.startsWith(CLOUDINARY_URL));

export function sizeImageUrl(url, maxWidth) {
  if (!maxWidth || !isCloudinary(url)) return url;

  const split = '/image/upload/';
  const [lead, trail] = url.split(split);
  return `${lead}${split}c_fill,w_${maxWidth}/${trail}`;
}