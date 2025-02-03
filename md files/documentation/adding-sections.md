---
title: Introduction
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

# Documentation

## Adding sections

As a developer, you can create folders for new sections.

To show the section on the left side navigation, add it to the navigation config file at `src/config.ts`.

Example:

```js
export const SIDEBAR = [
    { text: "Core", header: true },
    { text: "Introduction", link: "/core/introduction" },
    ...,
    { text: "Components", header: true },
    { text: "Buttons", link: "/components/buttons" },
    ...,
    { text: "New section", header: true },
    { text: "New component", link: "/new-section/new-component.md" },
];
```

