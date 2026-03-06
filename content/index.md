---
title: FilaForms
navigation: false
---

::u-page-hero
---
title: FilaForms Documentation
description: Self-hosted form builder for Filament. Drag-and-drop builder, conditional logic, multi-step forms, file uploads, payments, integrations, and more.
---

#links
::u-button
---
label: Get Started
to: /getting-started
---
::
::

## Core Features

::card-group
  :::card
  ---
  icon: i-lucide-layout-grid
  title: Drag-and-Drop Builder
  ---
  Visual form builder with live preview. 24+ field types including text, email, file upload, signature, line items, rich editor, and more.
  :::

  :::card
  ---
  icon: i-lucide-eye
  title: Conditional Logic
  ---
  Show/hide fields based on other field values. Supports multiple conditions with AND/OR logic.
  :::

  :::card
  ---
  icon: i-lucide-mail
  title: Email Notifications
  ---
  Admin notifications on submission and auto-response emails to respondents. Configurable per form.
  :::

  :::card
  ---
  icon: i-lucide-bar-chart
  title: Analytics & Submissions
  ---
  Real-time submission tracking, analytics dashboard, CSV/Excel export, sequential submission numbers.
  :::

  :::card
  ---
  icon: i-lucide-globe
  title: Public Forms
  ---
  Share forms via public URLs. Respondents submit without needing an account.
  :::

  :::card
  ---
  icon: i-lucide-plug
  title: Integrations
  ---
  Connect forms to Stripe, Google Sheets, Webhooks, Zapier, Make, n8n, and more via the optional `filaforms/integrations` package.
  :::
::

## Packages

| Package | Description |
|---------|-------------|
| `filaforms/core` | Form builder, submissions, notifications, analytics, public forms |
| `filaforms/integrations` | Stripe Connect, Google Sheets, Webhooks, Zapier, and automation API |

The integrations package is optional and requires the core package.
