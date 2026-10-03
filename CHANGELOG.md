# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- A transparent Zaccess mark under `public/brand`, as an SVG source plus 256, 512 and 1000px PNGs that read on light and dark backgrounds.
- CODEOWNERS, CODE_OF_CONDUCT.md, SECURITY.md and SUPPORT.md.
- Markdown lint CI workflow with its own `.markdownlint.json` and workflows README.
- YAML issue forms for bug reports and feature requests, a pull request template and an issue template config disabling blank issues.

### Changed

- README License and contact section tidied into callouts.

### Security

- `brace-expansion` 1.1.21 and 5.0.12 in the lock file, fixing two denial of service advisories in the ESLint toolchain.
