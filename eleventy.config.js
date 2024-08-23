const markdownit = require('markdown-it');
const hljs = require('highlight.js');
const markdownTexmath = require('markdown-it-texmath');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.setLibrary("md", markdownit({
    html: true,
    // Add syntax highlighting for code blocks
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>';
        } catch (__) { }
      }

      return '<pre class="hljs"><code>' + str + '</code></pre>';
    }
  }));

  eleventyConfig.amendLibrary("md", (md) => {
    md.use(markdownTexmath, {
      engine: require('katex'),
      katexOptions: {
        output: "mathml",
      }
    });
  })

  // filter to format date to long format
  eleventyConfig.addFilter("format_date", function (date) {
    if (date === undefined) {
      return '';
    }
    let formatter = new Intl.DateTimeFormat('en-US',
      {
        dateStyle: "long",
        timeZone: "UTC",
      });
    return formatter.format(date);
  })

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}