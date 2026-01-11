# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Work Tool Research - a React 19 + TypeScript + Vite project with React Compiler enabled.

## Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Type check with tsc then build for production
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Tech Stack

- **React 19** with React Compiler (babel-plugin-react-compiler)
- **TypeScript 5.9** with strict mode
- **Vite 7** as build tool
- **SCSS** with modern-normalize
- **ESLint 9** with flat config, typescript-eslint, react-hooks, and react-refresh plugins

## Architecture

Entry point: `src/main.tsx` renders `App` component into `#root` element with StrictMode.

The React Compiler is enabled via Vite's Babel plugin configuration in `vite.config.ts`. This provides automatic memoization but may impact dev/build performance.

## Styling

SCSS structure in `src/styles/`:
- `_variables.scss` - Design tokens (colors, typography, spacing, breakpoints)
- `globals.scss` - Global styles with modern-normalize

Base font size is 62.5% (1rem = 10px). Use variables via `@use "variables" as *;` in component SCSS files.

## TypeScript Configuration

Uses project references pattern with separate configs:
- `tsconfig.app.json` - App source code (ES2022, strict)
- `tsconfig.node.json` - Node/Vite config files
