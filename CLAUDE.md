# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal JavaScript learning curriculum owned by Monirul Islam Khan (senior frontend developer). 60 topics organized into 7 "floors" (Engine Internals → Core JS → Async → Advanced → DOM → Performance → Design Patterns). There is no build system, no package manager, no tests, no dependencies — it is pure static HTML/JS opened directly in a browser.

## Running / using

- Open the root [index.html](index.html) in a browser — it is the dashboard of all 60 topics with clickable cards.
- Each topic's `index.html` loads its own `practice.js` as a plain `<script>`. To "run" a topic: open that topic's `index.html` and watch DevTools Console. There is no dev server, no bundler, no transpilation.
- No commands to build, lint, or test. Do not invent or scaffold any — the user has deliberately kept this dependency-free.

## Repository structure (the rule, not the listing)

Every topic folder lives at `Floor-NN_<Area>/NN_<Topic-Name>/` and contains **exactly three files**:

- `index.html` — minimal page (dark `#1d1d1d` background, a `<small>` label, `<script src="practice.js">`). Same shape for every topic.
- `notes.md` — fixed template with sections: *What I learned*, *Key concept (1 line)*, *V8 / Internal working*, *Real-world connection*, *Common mistakes / gotchas*, *Interview answer (short)*, *Status* checklist.
- `practice.js` — empty file with a header comment; the user fills it in.

When the user asks you to add a new topic or scaffold one, **follow this three-file pattern exactly** and add a corresponding `<a class="topic-card">` link to the root [index.html](index.html) under the appropriate `.floor-block`. Topic numbering is global (01–60), not per-floor.

## Floor → color tag mapping (used in root index.html)

The root index assigns one of seven CSS tag classes per topic card: `t-core`, `t-async`, `t-adv`, `t-dom`, `t-perf`, `t-pattern`. The class is chosen by floor, not by individual topic — preserve this when adding cards.

## Writing style for notes.md content

The user writes in **Hinglish** (mixed Hindi/English/Roman-Hindi — e.g. "yahan code likho", "samajh aaya"). The notes template itself already uses Hinglish hint comments. When generating or editing note content, match this voice — do not rewrite his Hinglish into formal English unless he asks.

The *Real-world connection* section references the user's own projects (e.g. `dubaihousing`, `hcorealestates`) — keep those references when they appear; do not strip them as "placeholders."

## What NOT to do here

- Do not add a `package.json`, bundler, TypeScript, framework, or test runner. This repo is deliberately zero-tooling.
- Do not "modernize" the topic `index.html` template (it is intentionally minimal — its job is just to load `practice.js`).
- Do not consolidate or reorganize the floor/topic folder layout — the numbered structure is the curriculum's spine and is referenced by every link in the root index.
