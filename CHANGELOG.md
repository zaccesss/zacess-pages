# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [2.1.0] - 2026-11-03

### Added

- A diagram in the README of the source pages, the Next.js build and the site as it was served on Vercel behind Cloudflare

### Changed

- The README describes the deployment and roadmap as they stand after the retirement
- Routine tidy-up

## 2026-10-13

### Changed

- Retired. zacess.com now serves the Zacess product site, built in zacesshq/website, so this terminal page no longer runs anywhere. The README explains how to run it locally and the repo is archived.

### Added

- A transparent Zaccess mark under `public/brand`, as an SVG source plus 256, 512 and 1000px PNGs that read on light and dark backgrounds.
- CODEOWNERS, CODE_OF_CONDUCT.md, SECURITY.md and SUPPORT.md.
- Markdown lint CI workflow with its own `.markdownlint.json` and workflows README.
- YAML issue forms for bug reports and feature requests, a pull request template and an issue template config disabling blank issues.

### Changed

- README License and contact section tidied into callouts.

### Security

- `brace-expansion` 1.1.21 and 5.0.12 in the lock file, fixing two denial of service advisories in the ESLint toolchain.
