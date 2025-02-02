/* stylelint-disable selector-pseudo-element-colon-notation */
/* stylelint-disable font-family-no-missing-generic-family-keyword */
@font-face {
  font-weight: normal;
  font-family: '<%= fontName %>';
  font-style: normal;
  font-display: auto;
  src: url('http://qjkmoyomo.hd-bkt.clouddn.com/<%= cssClass %>.woff2') format('woff2'),
    url('http://qjkmoyomo.hd-bkt.clouddn.com/<%= cssClass %>.woff') format('woff'),
    url('http://qjkmoyomo.hd-bkt.clouddn.com/<%= cssClass %>.ttf') format('truetype');
}

.rk-icon {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 '<%= fontName %>';
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;

  &::before {
    display: inline-block;
  }
}

<% _.each(glyphs, function(glyph) { %>.rk-icon-<%= glyph.fileName %>::before {
  content: '\<%= glyph.codePoint %>';
}

<% }); %>
