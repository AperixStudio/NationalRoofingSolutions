# Netlify Contact Form Setup

Quick reference for how the contact form works in this project, and how to copy it to another site/page.

## Why there are two forms

This is a React SPA. Netlify detects forms at **build time** by scanning static HTML. It cannot see forms rendered only by React.

So we use two forms with the **same name and fields**:

1. **Hidden static form** — `public/netlify-forms.html`  
   Netlify reads this during deploy and registers the form.

2. **Visible React form** — `src/components/ContactUs.tsx`  
   This is what users actually fill out and submit.

Both must use the same `name`, field `name`s, and Netlify attributes.

---

## Files in this project

| File | Purpose |
|------|---------|
| `public/netlify-forms.html` | Hidden form for Netlify build detection |
| `src/components/ContactUs.tsx` | Visible contact section + form |
| `netlify.toml` | Standard Vite SPA deploy config (not form-specific) |

---

## Hidden static form (`public/netlify-forms.html`)

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input type="hidden" name="form-name" value="contact" />
  <input name="bot-field" />
  <input type="text" name="name" />
  <input type="text" name="contact" />
  <textarea name="message"></textarea>
</form>
```

**Important:** Every field in the React form must also exist here (same `name` values).

---

## React form (`ContactUs.tsx`)

Required Netlify attributes on the `<form>`:

```tsx
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
```

Required hidden fields inside the form:

```tsx
<input type="hidden" name="form-name" value="contact" />

<p className="hidden">
  <label>
    Don’t fill this out if you’re human:
    <input name="bot-field" />
  </label>
</p>
```

Current visible fields:

| Field | `name` attribute | Type |
|-------|------------------|------|
| Name | `name` | text input |
| Phone or Email | `contact` | text input |
| Job Details | `message` | textarea |

Each input needs a matching `name` in `public/netlify-forms.html`.

---

## Add the same setup on another page/site

### Option A — Same form name (`contact`)

If you only need one contact form, copy the React `<form>` block into your new component. Keep the same `name="contact"` and field names. No changes needed to `netlify-forms.html`.

### Option B — New form (e.g. quote form)

1. **Add a new hidden form** in `public/netlify-forms.html` (or a second file like `public/netlify-quote-form.html`):

```html
<form name="quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input type="hidden" name="form-name" value="quote" />
  <input name="bot-field" />
  <input type="text" name="name" />
  <input type="text" name="email" />
  <textarea name="message"></textarea>
</form>
```

2. **Create the React form** with matching attributes:

```tsx
<form name="quote" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="quote" />
  {/* honeypot + fields with same name values as static form */}
</form>
```

3. **Deploy** — Netlify only picks up new forms after a deploy.

---

## After deploy

1. Go to **Netlify → your site → Forms**.
2. You should see `contact` (and any other form names you added).
3. Submissions appear there. You can turn on email notifications under **Form notifications**.

---

## Checklist before going live

- [ ] `public/netlify-forms.html` exists and is included in the build (`dist/netlify-forms.html` after `npm run build`)
- [ ] Form `name` matches in both static and React forms
- [ ] Every field `name` matches in both places
- [ ] `form-name` hidden input matches the form `name`
- [ ] Honeypot field `bot-field` is present in both forms
- [ ] Site has been redeployed after adding/changing forms

---

## Common gotchas

**Form not showing in Netlify dashboard**  
Redeploy after adding `public/netlify-forms.html`. Netlify scans at build time.

**Submissions fail silently**  
Usually a field name mismatch between the static and React forms.

**React-only form without static HTML**  
Will not work. You need the hidden static form (or form HTML in `index.html`).

**Multiple forms on one site**  
Each form needs its own unique `name` and its own static HTML definition with matching fields.

---

## Minimal copy-paste template

Static (`public/netlify-forms.html`):

```html
<form name="YOUR_FORM_NAME" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input type="hidden" name="form-name" value="YOUR_FORM_NAME" />
  <input name="bot-field" />
  <!-- one input/textarea per field, matching React form name attributes -->
</form>
```

React:

```tsx
<form name="YOUR_FORM_NAME" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="YOUR_FORM_NAME" />
  <p className="hidden">
    <label>
      Don’t fill this out if you’re human:
      <input name="bot-field" />
    </label>
  </p>
  {/* your fields here */}
  <button type="submit">Send</button>
</form>
```

Replace `YOUR_FORM_NAME` and add fields in both places.
