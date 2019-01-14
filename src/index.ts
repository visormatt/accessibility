// Vendor
import '@babel/polyfill';
import pa11y from 'pa11y';
import { ADMIN, THREDUP } from './constants';

const URLS = true ? ADMIN : THREDUP;

const parseError = (data: any) => {
  const { context, message } = data;
  return { context, message };
};

/**
 * @name parseResults
 * @description tbd...
 */
const parseResults = (results: any) => {
  const { issues, pageUrl } = results;
  if (issues.length) {
    const issuesData = issues.map(parseError);
    console.warn(`⚠️  There are ${issues.length} issues on "${pageUrl}"`);
  } else {
    console.log(`✅ No issues on "${pageUrl}"`);
  }
};

const checkURL = async (url: string) => {
  await pa11y(url).then(parseResults);
};

URLS.map(checkURL);

export { checkURL, parseError, parseResults };
