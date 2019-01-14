// Vendor
import pa11y from 'pa11y';
import { ADMIN, THREDUP } from './constants';

const URLS = true ? ADMIN : THREDUP;

const parseError = (data) => {
  const { context, message } = data;
  return { context, message };
};

/**
 * @name parseResults
 * @description tbd...
 * @param {*} results
 */
const parseResults = (results) => {
  const { issues, pageUrl } = results;
  if (issues.length) {
    const issuesData = issues.map(parseError);
    console.warn(`⚠️  There are ${issues.length} issues on "${pageUrl}"`);
    // console.log('​parseResults -> issuesData', issuesData);
  } else {
    console.log(`✅ No issues on "${pageUrl}"`);
  }
};

const checkURL = async (url) => {
  await pa11y(url).then(parseResults);
};

URLS.map(checkURL);
