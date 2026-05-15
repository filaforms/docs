---
title: FilaForms Documentation
description: Build powerful form-driven applications in Filament — from your first form to production integrations.
---

# FilaForms Documentation

The complete reference for building, integrating, and extending forms in your Filament application.

## Start here

::card-group{cols=2}
::card
---
title: Installation
to: /getting-started/installation
icon: i-lucide-rocket
---
Install the package, register the plugin, run the migrations.
::

::card
---
title: Configuration
to: /getting-started/configuration
icon: i-lucide-settings
---
Configure storage, locales, authorization, and panel options.
::
::

## Core features

The day-to-day building blocks you'll use on every form.

- [Form builder](/core-features/form-builder) — drag-and-drop visual editor for fields and layout
- [Field types](/core-features/field-types) — text, select, file upload, signature, and 20+ more
- [Conditional logic](/core-features/conditional-logic) — show, hide, require, and skip fields based on answers
- [Multi-step forms](/core-features/multi-step-forms) — wizards with progress, validation, and step navigation
- [File uploads](/core-features/file-uploads) — storage disks, validation, security, and ULID naming
- [Notifications](/core-features/notifications) — email autoresponders and admin alerts on submission
- [Analytics](/core-features/analytics) — views, starts, completions, drop-off per field
- [Submissions](/core-features/submissions) — search, filter, export, and triage in the admin panel
- [Public forms](/core-features/public-forms) — embed in your Laravel app, sign URLs, restrict access
- [Custom styling](/core-features/custom-styling) — theme tokens, CSS overrides, and brand fit

## Integrations

Wire form submissions to the systems your team already uses.

- [Setup](/integrations/setup) — installing and registering the integrations package
- [Configuration](/integrations/configuration) — credentials, connection management, per-form options
- [Stripe](/integrations/stripe) — collect payments via Stripe Connect with hosted Checkout
- [Google Sheets](/integrations/google-sheets) — append every submission as a new row, with field mapping
- [Webhooks](/integrations/webhooks) — POST submissions to any URL with retries and signing
- [Zapier](/integrations/zapier) — trigger Zaps from form submissions
- [Field mapping](/integrations/field-mapping) — transform values before they leave your app
- [Creating integrations](/integrations/creating-integrations) — build your own with the integration contract
- [OAuth](/integrations/oauth) — connect Google, HubSpot, and other OAuth providers from the admin

## Advanced

For when you're building beyond the defaults.

- [Custom field types](/advanced/custom-field-types) — register your own field types and validators
- [Events and hooks](/advanced/events-and-hooks) — listen for `FormSubmitted` and the surrounding lifecycle
- [Standalone components](/advanced/standalone-components) — embed FilaForms outside Filament panels
