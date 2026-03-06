---
seo:
  title: FilaForms - Self-hosted Form Builder for Filament
  description: Drag-and-drop form builder for Laravel Filament. Conditional logic, multi-step forms, file uploads, payments, integrations, and more.
---

::u-page-hero
#title
FilaForms

#description
Self-hosted form builder for Laravel Filament.

Drag-and-drop builder, conditional logic, multi-step forms, file uploads, payments, integrations, and more.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /getting-started/installation
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons:github
  size: xl
  to: https://github.com/filaforms/docs
  variant: outline
  ---
  GitHub
  :::
::

::u-page-section
#title
Features

#features
  :::u-page-feature
  ---
  icon: i-lucide-layout-grid
  ---
  #title
  Drag-and-Drop Builder

  #description
  Visual form builder with live preview. 24+ field types including text, email, file upload, signature, line items, rich editor, and more.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-eye
  ---
  #title
  Conditional Logic

  #description
  Show/hide fields based on other field values. Supports multiple conditions with AND/OR logic.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-mail
  ---
  #title
  Email Notifications

  #description
  Admin notifications on submission and auto-response emails to respondents. Configurable per form.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bar-chart
  ---
  #title
  Analytics & Submissions

  #description
  Real-time submission tracking, analytics dashboard, CSV/Excel export, sequential submission numbers.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-globe
  ---
  #title
  Public Forms

  #description
  Share forms via public URLs. Respondents submit without needing an account.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-plug
  ---
  #title
  Integrations

  #description
  Connect forms to Stripe, Google Sheets, Webhooks, Zapier, Make, n8n, and more via the optional integrations package.
  :::
::

::u-page-section
#title
Packages

#default
  ::card-group
    :::card
    ---
    title: filaforms/core
    icon: i-lucide-box
    ---
    Form builder, submissions, notifications, analytics, public forms.
    :::

    :::card
    ---
    title: filaforms/integrations
    icon: i-lucide-plug
    to: /integrations/setup
    ---
    Stripe Connect, Google Sheets, Webhooks, Zapier, and automation API. Optional add-on.
    :::
  ::
::
