import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --body: ${theme.colors.body};
      --element: ${theme.colors.element};
      --primary: ${theme.colors.primary};
      --accent: ${theme.colors.accent};
      --text: ${theme.colors.text};
      --text-cta: ${theme.colors.textCta};
      --title-font: ${theme.fonts.title};
      --body-font: ${theme.fonts.body};
    }

    * {
      box-sizing: border-box;
      font-family: var(--body-font);
    }

    body {
      transition: cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s;
      background: var(--body);
      color: var(--text);
      margin: 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--title-font);
      color: var(--text);
    }

    a {
      color: var(--text);
      cursor: pointer;
    }

    button,
    input,
    select,
    textarea {
      font-size: 100%; /* 1 */
      margin: 0; /* 2 */
      vertical-align: baseline; /* 3 */
      *vertical-align: middle; /* 3 */
    }

    button,
    input {
      line-height: normal;
    }

    button,
    select {
      text-transform: none;
    }

    button,
    html input[type="button"], /* 1 */
    input[type="reset"],
    input[type="submit"] {
      -webkit-appearance: button; /* 2 */
      cursor: pointer; /* 3 */
      *overflow: visible; /* 4 */
    }

    button[disabled],
    html input[disabled] {
      cursor: default;
    }

    input[type="checkbox"],
    input[type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
      *height: 13px; /* 3 */
      *width: 13px; /* 3 */
    }

    input[type="search"] {
      -webkit-appearance: textfield; /* 1 */
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box; /* 2 */
      box-sizing: content-box;
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    textarea {
      overflow: auto; /* 1 */
      vertical-align: top; /* 2 */
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    html,
    button,
    input,
    select,
    textarea {
      color: #222;
    }

    ::-moz-selection {
      background: #b3d4fc;
      text-shadow: none;
    }

    ::selection {
      background: #b3d4fc;
      text-shadow: none;
    }

    img {
      vertical-align: middle;
    }

    fieldset {
      border: 0;
      margin: 0;
      padding: 0;
    }

    textarea {
      resize: vertical;
    }

    .chromeframe {
      margin: 0.2em 0;
      background: #ccc;
      color: #000;
      padding: 0.2em 0;
    }
  `}
`;
