import markdownit from 'markdown-it';
import hljs from 'highlight.js';
import markdownTexmath from 'markdown-it-texmath';
import katex from 'katex';

export default function (eleventyConfig) {
  // copy image files to output directory conserving file path
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.png");

  // Watch css files
  eleventyConfig.addWatchTarget("src/**/*.css");

  // Add syntax highlighting for code blocks
  eleventyConfig.setLibrary("md", markdownit({
    html: true,
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

  // add math plugin (markdownTexmath with katex) to markdown engine
  eleventyConfig.amendLibrary("md", (md) => {
    md.use(markdownTexmath, {
      engine: katex,
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
  });

  // exclude drafts when making full Eleventy Builds
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}