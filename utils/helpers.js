
const Handlebars = require('handlebars');

// Helper to format date
Handlebars.registerHelper('format_date', (date) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formattedDate;
});


module.exports = Handlebars;
