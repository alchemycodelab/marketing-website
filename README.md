# Alchemy Marketing Website

[Builder.io](builder.io) + React + [Astro](astro.build)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e263705-f300-4559-9bd3-683b66a4ccf5/deploy-status)](https://app.netlify.com/sites/alchemy-marketing/deploys)

## Getting Started

### Install Dependencies

```
npm i
```

### Start dev server

```
npm start
```

Some astro issues:

- `segmentation fault` fail in terminal after hitting dev server. Check your NodeJS version, `16.0.0` is problem. Having success with `v17.4.0`
- Initial page load hangs or doesn't load css after first starting dev server. Refresh browser window

## Architecture/Structure

Almost every section uses `Section` the basis for Component composition. See existing pattern for passing through theming properties. `/src/common` has common base sections and adaptations

### CSS

- Global styles are in `/src/styles` and are straight css (an artifact of trying to fix astro/vite css loading issue, not sure if these could go back to scss but not needed).
- Component css is in `Component.module.scss` file next to component.
- There are a series of components built for text display that live in `/src/content`. You will generally use these for any text display, particularly the various components exposed from `/src/content/Text`

## Designing New Sections

Recommended to use `/src/design/design.astro` which loads at `http://localhost:3000/design`. Stub in section component and props. `Scholarships` example:

```jsx
<Scholarships
  theme="white"
  intro={{
    image: {
      url: 'https://res.cloudinary.com/alchemy-code-lab/image/upload/v1630426345/ws/admissions/Alchemy_Admissions_illustraion_02_1260x976_Desktop__2x.png',
      alt: 'alt image text',
    },
    split: 'golden-reverse',
    heightMode: 'image',
    content: {
      headline: `
          Scholarships Available
        `,
      lead: `
        We offer several scholarships designed to create more opportunities for self-identifying women, Veterans, LGBTQ+, and individuals from racial and ethnic backgrounds that are traditionally underrepresented in tech.
        `,
      text: `
          *Scholarship applications are available after acceptance into the program.
        `,
    },
  }}
  scholarships={{
    tabThemes: {
      activeTheme: 'blue',
      textTheme: 'blue-dark',
    },
    items: [
      {
        heading: 'Alchemy Diversity In Tech',
        content: {
          text: `
            <p>Applications are open on a rolling basis. Tuition awards range from 5-70% and are based upon the degree of barrier entering the tech field and personal need. Alchemy does not turn away any qualifying applicants</p>
          `,
          cta: {
            theme: 'blue-medium',
            text: 'More Information',
            url: '#',
            type: 'secondary',
          },
        },
      },
      {
        heading: 'Women Who Code',
        content: {
          text: `
            <p>This $2500 tuition scholarship is awarded to two women per cohort (located anywhere in the US) and is provided in partnership with Alchemy. Award winners are notified 3-4 weeks prior to the cohort start date.</p>
          `,
          cta: {
            theme: 'blue-medium',
            text: 'More Information',
            url: '#',
            type: 'secondary',
          },
        },
      },
      {
        heading: 'PDX Women In Tech',
        content: {
          text: `
            <p>This $5000 tuition scholarship is awarded to one Black and/or Indigenous woman per cohort and is provided in partnership with Alchemy. Award winners are notified 3-4 weeks prior to the cohort start date.</p>
          `,
          cta: {
            theme: 'blue-medium',
            text: 'More Information',
            url: '#',
            type: 'secondary',
          },
        },
      },
    ],
  }}
/>
```
