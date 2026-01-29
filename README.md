# Butzy JSON Formatter

A simple Obsidian plugin to **prettify** or **minify** JSON directly inside the editor.

Perfect when you’re working with raw JSON snippets in notes and want them clean and readable — or compact.

---

## Features

- 🔹 **Prettify JSON** (formatted with tabs)
- 🔹 **Minify JSON** (single-line JSON)
- 🔹 Works on:
  - Selected text **or**
  - The entire note if no selection is active
- 🔹 Automatically converts from pyth:
  - `'` → `"`
  - `True` → `true`
  - `False` → `false`
  - `None` → `null`

---

## How it works

The plugin adds two commands to Obsidian:

- **Butzy JSON Formatter: Prettify**
- **Butzy JSON Formatter: Minify**

You can run them from:
- Command Palette (`Ctrl/Cmd + P`)
- Or assign your own keyboard shortcuts

If the JSON is invalid, you’ll get a notification instead of broken output.

---

## Installation (Manual)

1. Clone or download this repository
2. Copy the folder into your Obsidian vault:
