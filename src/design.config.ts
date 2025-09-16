export const COLORS = {
    main: [
      { name: "Blue primary", value: "#00539b" },
      { name: "Blue 25% tint", value: "#407eb4" },
      { name: "Blue 50% tint", value: "#80a9cd" },
      { name: "Blue 25% shade", value: "#003e74" },
      { name: "Light blue primary", value: "#0071b3" },
      { name: "Light blue 25% tint", value: "#4095c6" },
      { name: "Light blue 50% tint", value: "#80b8d9" },
      { name: "Light blue 25% shade", value: "#005586" },
      { name: "Red primary", value: "#ea1a13" },
      { name: "Red 25% tint", value: "#ef534e" },
      { name: "Red 50% tint", value: "#f58d89" },
      { name: "Red 25% shade", value: "#b0140e" },
      { name: "Dark grey 1", value: "#202024" },
      { name: "Dark grey 2", value: "#0f0f11" },
      { name: "Grey", value: "#6a6a6b" },
      { name: "Mid grey 1", value: "#949494" },
      { name: "Mid grey 2", value: "#dedede" },
      { name: "Light grey 1", value: "#f0f0f0" },
      { name: "Light grey 2", value: "#fafafa" },
      { name: "White", value: "#ffffff" },
      { name: "Orange primary", value: "#ffb400" },
      { name: "Dark orange", value: "#bf5909" },
    ],
    additional: [
      { name: "Green primary", value: "#00853f" },
      { name: "Green 25% tint", value: "#40a46f" },
      { name: "Green 50% tint", value: "#80c29f" },
      { name: "Green 25% shade", value: "#00642f" },
      { name: "Purple primary", value: "#7b439a" },
      { name: "Purple 25% tint", value: "#9c72b3" },
      { name: "Purple 50% tint", value: "#bda1cd" },
      { name: "Purple 25% shade", value: "#5c3274" },
      { name: "Burgundy primary", value: "#c60c46" },
      { name: "Burgundy 25% tint", value: "#d44974" },
      { name: "Burgundy 50% tint", value: "#e386a3" },
      { name: "Burgundy 25% shade", value: "#950935" },
    ],
    contextual: [
      { name: "Success", value: "#00853f" },
      { name: "Information", value: "#00539b" },
      { name: "Warning", value: "#bf5909" },
      { name: "Danger", value: "#ea1a13" },
    ],
  };
  
  // Design configuration for typography + fonts
// Keep this file importable across Astro/MDX/Vue.

export const TYPOGRAPHY = {
  fontFamily: "'PT Sans',Helvetica,Arial,sans-serif",
  scale: [
    { name: 'h1', size: '2.0736em', weight: '700' },
    { name: 'h2', size: '1.728em', weight: '700' },
    { name: 'h3', size: '1.44em', weight: '700' },
    { name: 'h4', size: '1.2em', weight: '700' },
    { name: 'body', size: '13pt', weight: '400' },
    { name: 'button', size: '13pt', weight: '400' },
    { name: 'caption', size: '10pt', weight: '400' }
  ]
} as const

// Programmatic description of your @font-face rules
export const FONT_FACES = [
  // PT Sans
  {
    family: 'PT Sans', style: 'normal', weight: 400,
    src: [
      { local: 'PT Sans' },
      { local: 'PTSans-Regular' },
      { url: '//fonts.gstatic.com/s/ptsans/v8/CWlc_g68BGYDSGdpJvpktgLUuEpTyoUstqEm5AMlJo4.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-sans/regular/PTS55F-webfont.woff', format: 'woff' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  },
  {
    family: 'PT Sans', style: 'normal', weight: 700,
    src: [
      { local: 'PT Sans Bold' },
      { local: 'PTSans-Bold' },
      { url: '//fonts.gstatic.com/s/ptsans/v8/0XxGQsSc1g4rdRdjJKZrNAzyDMXhdD8sAj6OAJTFsBI.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-sans/bold/PTS75F-webfont.woff', format: 'woff' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  },
  {
    family: 'PT Sans', style: 'italic', weight: 400,
    src: [
      { local: 'PT Sans Italic' },
      { local: 'PTSans-Italic' },
      { url: '//fonts.gstatic.com/s/ptsans/v8/PIPMHY90P7jtyjpXuZ2cLJBw1xU1rKptJj_0jans920.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-sans/italic/PTS56F-webfont.woff', format: 'woff2' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  },
  {
    family: 'PT Sans', style: 'italic', weight: 700,
    src: [
      { local: 'PT Sans Bold Italic' },
      { local: 'PTSans-BoldItalic' },
      { url: '//fonts.gstatic.com/s/ptsans/v8/lILlYDvubYemzYzN7GbLkBampu5_7CjHW5spxoeN3Vs.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-sans/bolditalic/PTS76F-webfont.woff', format: 'woff' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  },

  // PT Serif
  {
    family: 'PT Serif', style: 'normal', weight: 400,
    src: [
      { local: 'PT Serif' },
      { local: 'PTSerif-Regular' },
      { url: '//fonts.gstatic.com/s/ptserif/v8/I-OtoJZa3TeyH6D9oli3iXYhjbSpvc47ee6xR_80Hnw.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-serif/regular/PTF55F-webfont.woff', format: 'woff' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  },
  {
    family: 'PT Serif', style: 'normal', weight: 700,
    src: [
      { local: 'PT Serif Bold' },
      { local: 'PTSerif-Bold' },
      { url: '//fonts.gstatic.com/s/ptserif/v8/QABk9IxT-LFTJ_dQzv7xpIgp9Q8gbYrhqGlRav_IXfk.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-serif/bold/PTF75F-webfont.woff', format: 'woff' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  },
  {
    family: 'PT Serif', style: 'italic', weight: 400,
    src: [
      { local: 'PT Serif Italic' },
      { local: 'PTSerif-Italic' },
      { url: '//fonts.gstatic.com/s/ptserif/v8/03aPdn7fFF3H6ngCgAlQzAzyDMXhdD8sAj6OAJTFsBI.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-serif/italic/PTF56F-webfont.woff', format: 'woff' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  },
  {
    family: 'PT Serif', style: 'italic', weight: 700,
    src: [
      { local: 'PT Serif Bold Italic' },
      { local: 'PTSerif-BoldItalic' },
      { url: '//fonts.gstatic.com/s/ptserif/v8/Foydq9xJp--nfYIx2TBz9WaVI6zN22yiurzcBKxPjFE.woff2', format: 'woff2' },
      { url: '../assets/fonts/pt-serif/bolditalic/PTF76F-webfont.woff', format: 'woff' }
    ],
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
  }
] as const

export type FontFaceToken = typeof FONT_FACES[number]
export type TypographyToken = typeof TYPOGRAPHY

  
  export const SHADOWS = {
    types: [
      { name: "xs", value: "0px 2px 4px rgba(0, 0, 0, 0.08)" },
      { name: "sm", value: "0px 4px 8px rgba(0, 0, 0, 0.125)" },
      { name: "md", value: "0px 8px 16px rgba(0, 0, 0, 0.125)" },
      { name: "lg", value: "0px 16px 32px rgba(0, 0, 0, 0.125)" },
      { name: "xl", value: "0px 32px 64px rgba(0, 0, 0, 0.125)" },
      { name: "2xl", value: "0px 64px 128px rgba(0, 0, 0, 0.125)" },
    ],
  };
  