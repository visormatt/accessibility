// Vendor
import pa11y from 'pa11y';

const URLS = [
  'https://www.mattscholta.com/',
  'https://www.mattscholta.com/Contact',
  'https://www.mattscholta.com/Portfolio',
  'https://www.mattscholta.com/Portfolio/portfolio',
  'https://www.mattscholta.com/StyleGuide',
  'https://www.mattscholta.com/StyleGuide/Color',
  'https://www.mattscholta.com/StyleGuide/Typography',
  'https://www.mattscholta.com/StyleGuide/Utilities',
  'https://www.mattscholta.com/StyleGuide/Grid',
  'https://www.mattscholta.com/StyleGuide/Forms',
  'https://www.mattscholta.com/StyleGuide/Imagery'
];

/**
 * @name parseResults
 * @description tbd...
 * @param {*} results
 */
const parseResults = (results) => {
  const { issues, pageUrl } = results;
  if (issues.length) {
    console.warn(`⚠️ There are ${issues.length} issues on "${pageUrl}"`);
    console.log(issues);
    // console.log('---> issues', issues);
  } else {
    console.log(`✅ No issues on "${pageUrl}"`);
  }
};

const checkURL = async (url) => {
  await pa11y(url).then(parseResults);
};

URLS.map(checkURL);
