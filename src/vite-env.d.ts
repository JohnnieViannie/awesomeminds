/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Brevo embedded-form endpoint used by the newsletter sign-up */
  readonly VITE_BREVO_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
