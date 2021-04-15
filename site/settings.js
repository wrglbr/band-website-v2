const projects = require('./data/projects');

const baseTitle = 'BAND Corporation | an Eve Echoes Corp.';
module.exports.titles = {
  '/projects': `Projects | ${baseTitle}`,
  '/': baseTitle,
};

module.exports.googleAnalytics = 'UA-154710364-2';

module.exports.projects = projects;

module.exports.default = {};
