# Prosit Events

Prosit Events is an Angular conference discovery app featuring a sample catalog of web-development events in Tunisia.

## Features

- Browse conference dates, cities, and descriptions.
- Search by conference name, city, or topic.
- Filter the catalog by city and sort by date.
- Open an event page for its formatted date and full description.
- Navigate with lazy-loaded routes and a responsive layout.

The catalog data is maintained in `src/app/conferance-list/conferances.ts`.

## Development

Install dependencies and start the development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The app reloads when source files change.

## Build and test

```bash
npm run build
npm test -- --watch=false
```
