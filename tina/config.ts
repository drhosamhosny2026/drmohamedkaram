import { defineConfig, type TinaField } from "tinacms";

// Tina saves to the branch Vercel is building (falls back to main).
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

/* ── Small field helpers ─────────────────────────────────────── */

const text = (name: string, label: string, description?: string): TinaField => ({
  type: "string",
  name,
  label,
  description,
  required: true,
});

const longText = (name: string, label: string, description?: string): TinaField => ({
  type: "string",
  name,
  label,
  description,
  required: true,
  ui: { component: "textarea" },
});

const textList = (name: string, label: string, description?: string): TinaField => ({
  type: "string",
  name,
  label,
  description,
  list: true,
});

const LINE_BREAK_HINT = "Press Enter to start a new line on the site.";

/* ── Schema ──────────────────────────────────────────────────── */

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
    accept: ["image/*", "application/pdf"],
  },

  schema: {
    collections: [
      {
        name: "site",
        label: "Website",
        path: "content/site",
        format: "json",
        // One fixed page: the client edits it, but can't create or delete it.
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        fields: [
          text("name", "Full name", "Shown in the header, portrait card and footer."),

          {
            type: "object",
            name: "hero",
            label: "Hero (top of page)",
            fields: [
              text("kicker", "Small line above the headline"),
              longText("headlineBefore", "Headline — before the gold words", LINE_BREAK_HINT),
              text("headlineAccent", "Headline — gold words"),
              longText("headlineAfter", "Headline — after the gold words", LINE_BREAK_HINT),
              longText("intro", "Intro paragraph"),
              text("primaryCta", "Dark button text"),
              text("secondaryCta", "Light button text"),
              textList("highlights", "Highlights (ticks under the buttons)"),
              {
                type: "image",
                name: "portrait",
                label: "Portrait photo",
                description: "Portrait (3:4) works best.",
                accept: "image",
                required: true,
              },
              text("portraitAlt", "Photo description (for accessibility & Google)"),
              text("cardSubtitle", "Card under photo — subtitle"),
              text("cardStatus", "Card under photo — status (e.g. Open)"),
            ],
          },

          {
            type: "object",
            name: "journey",
            label: "Professional Journey",
            fields: [
              text("label", "Section label"),
              longText("heading", "Section heading", LINE_BREAK_HINT),
              text("startYear", "Start year (small timeline)"),
              text("endLabel", "End label (small timeline)"),
              text("inProgressLabel", "Badge on the last milestone"),
              {
                type: "object",
                name: "items",
                label: "Milestones",
                description: "Numbers (01, 02…) are added automatically. The last one is highlighted.",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "New milestone" }) },
                fields: [
                  text("tag", "Tag (e.g. Foundation)"),
                  text("title", "Title"),
                  text("period", "Period (e.g. 2020 – 2022)"),
                  longText("desc", "Description"),
                ],
              },
            ],
          },

          {
            type: "object",
            name: "story",
            label: "The Story",
            fields: [
              text("label", "Section label"),
              longText("heading", "Section heading", LINE_BREAK_HINT),
              {
                type: "string",
                name: "paragraphs",
                label: "Paragraphs",
                list: true,
                ui: { component: "textarea" },
              },
              longText("quote", "Quote", "Quotation marks are added automatically."),
              {
                type: "object",
                name: "chapters",
                label: "Chapters",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.phase || "New chapter" }) },
                fields: [text("phase", "Title"), longText("copy", "Text")],
              },
            ],
          },

          {
            type: "object",
            name: "expertise",
            label: "Core Expertise",
            fields: [
              text("label", "Section label"),
              longText("heading", "Section heading", LINE_BREAK_HINT),
              longText("intro", "Intro paragraph"),
              text("ctaLabel", "Button text"),
              {
                type: "object",
                name: "pillars",
                label: "Expertise cards",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "New card" }) },
                fields: [
                  text("title", "Title"),
                  text("domain", "Small label (top right)"),
                  longText("why", "Why it matters (italic line)"),
                  longText("what", "Description"),
                  textList("tags", "Tags"),
                ],
              },
            ],
          },

          {
            type: "object",
            name: "credentials",
            label: "Credentials",
            fields: [
              text("label", "Section label"),
              longText("heading", "Section heading", LINE_BREAK_HINT),
              {
                type: "object",
                name: "stats",
                label: "Stats boxes",
                list: true,
                ui: { itemProps: (item) => ({ label: [item?.value, item?.label].filter(Boolean).join(" — ") || "New stat" }) },
                fields: [text("value", "Big value (e.g. 8+)"), text("label", "Label")],
              },
              {
                type: "object",
                name: "education",
                label: "Education",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.degree || "New degree" }) },
                fields: [
                  text("degree", "Degree"),
                  text("inst", "Institution"),
                  text("year", "Year"),
                  text("tag", "Gold note"),
                ],
              },
              {
                type: "object",
                name: "experience",
                label: "Professional Experience",
                list: true,
                ui: { itemProps: (item) => ({ label: [item?.title, item?.org].filter(Boolean).join(" — ") || "New role" }) },
                fields: [
                  text("title", "Job title"),
                  text("org", "Organisation"),
                  text("period", "Period"),
                  text("tag", "Gold note"),
                ],
              },
            ],
          },

          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              text("label", "Section label"),
              longText("heading", "Section heading", LINE_BREAK_HINT),
              longText("intro", "Intro paragraph"),
              text("linkedinUrl", "LinkedIn profile URL"),
              text("email", "Email address"),
              {
                type: "image",
                name: "cvFile",
                label: "CV (PDF)",
                description: "Upload a new PDF to replace the downloadable CV.",
                accept: "pdf",
                required: true,
              },
              text("availability", "Availability line (bottom)"),
            ],
          },

          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [text("tagline", "Small line under your name")],
          },
        ],
      },
    ],
  },
});
