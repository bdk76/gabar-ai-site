Gabar AI — Static One-Page Site
================================

Files
- index.html — one-page landing
- styles.css — styling
- script.js — minor JS for UX
- assets/workflow.svg — vector workflow illustration

How to deploy on Wix (HTML Embed)
---------------------------------
1) In Wix Editor, add a new page section.
2) Add → Embed → "Embed a widget" (HTML iframe).
3) Paste the following minimal wrapper to load this site from a public host:
   <iframe src="https://YOUR_HOST/gabar_ai_site/index.html" style="width:100%;min-height:1600px;border:0;border-radius:12px"></iframe>

Alternative: Host the files on Vercel/Netlify for free and iframe them into Wix. 
Do NOT collect PHI on Wix; use HIPAA-compliant form vendors for PHI.
