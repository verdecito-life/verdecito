# Recover This Chat — The Living Memory Prompt

*Turn an important AI conversation into memory you can reuse, correct, protect, and continue from.*

This file is two things at once:

- **A prompt you can use right now.** Give it to an AI assistant, say *“Recover this chat,”* and it will turn your conversation into a clean, reusable Markdown document.
- **A specification for what a good recovery contains.** Further down, it tells the assistant exactly which fields, sections, naming rules, privacy rules, and redaction formats to use, so the result is consistent and useful — not just a loose summary.

Normal users only need the first half. The strict half is there so the output stays reliable, and so the same prompt can work across different capable assistants.

---

## Part 1 — How to use it

### What this is

A *recovery* is a structured snapshot of a conversation: what it was really about, the decisions you made, the nuances and corrections, the ideas worth keeping, and a clear point to continue from.

It is **living memory** — something you own, edit, reuse, and carry forward — not a transcript and not a throwaway summary.

A recovery may also include one **regalito** — a small gift back: a synthesis, name, question, or next-step artifact that the assistant can responsibly create from the conversation. It should be useful, not decorative.

### Quick start

1. Open the conversation you want to keep.
2. Make this prompt available to the assistant.
3. Type the trigger:

   > **Recover this chat**
   >
   > *(or, in Spanish: **Recupera este chat**)*

That is the whole minimum. The assistant reads the spec below and produces your recovery.

### How to give the assistant this prompt

Use whatever fits your device and app:

- **Drag and drop** this `.md` file into the chat.
- **Upload / attach** it using the app’s attach or paper-clip button.
- **Paste** the whole text into the chat before the trigger phrase.
- **Link it** — paste the public URL where this prompt lives and ask the assistant to read it.
- **On your phone:** tap the attach icon, often a `+`, paper-clip, or file icon; choose *Files* or *Browse*; pick this file; then send “Recover this chat.” If your app cannot attach files, paste the text and then send the trigger.

If the assistant cannot open files at all, paste the text. Pasting is the universal fallback.

### Optional assistant capabilities

Some assistants can work with files, web/search, Deep Research, Canvas or document editors, code/CLI tools, generated images, or other tools. Use these capabilities when they are available and useful, but never assume every user has them.

If you are not sure what these are, skip this section. The basics above are enough to use the prompt.

If a capability depends on paid access, beta access, app settings, enabled tools, or a specific assistant, say so clearly and offer the simplest fallback.

Examples:

- If file upload is unavailable, paste the prompt.
- If Search/web is unavailable, mark external facts as unverified rather than pretending to know.
- If Canvas/document editing is available, use it for editable recoveries or recovery updates when useful.
- If code/CLI tools are available, use them only when the user is clearly working with files/repos and the task benefits from exact edits or checks.

### What you get back

A single Markdown document containing:

- a short header with the basics: what it is, when it was made, how complete it is, and what privacy status it has;
- **what the conversation was really about** — the deeper point under the surface task;
- a **ledger of ideas and nuances** worth keeping;
- the **decisions and corrections** made along the way;
- **rough drafts / seeds** of anything the chat was building;
- a clear **place to continue from**;
- a **suggested title** for the conversation.

Longer or richer conversations get more sections: timeline, open questions, project relevance, image references, Deep Research references, parking lot, and a small original contribution from the assistant. Short ones stay short. The assistant picks the depth that fits.

### It will suggest a better title

Long conversations usually outgrow the title they started with. The recovery proposes a short, conceptual title that reflects what the chat *became* — so you can rename it and find it later.

### You are the authority — review it

The recovery is a **draft of your memory, not the truth.** Before you rely on it:

- remove or redact anything private;
- fix any decision the AI misread;
- mark what actually matters to you;
- keep what is useful, and correct what is not.

The AI proposes; you decide. A recovery is raw material you finish.

### What it is good for

- **A second brain.** Keep the thinking, not just the chat log.
- **A clean restart.** Begin a fresh conversation with the recovery as context instead of re-explaining everything.
- **Moving between assistants.** Tested with ChatGPT and Claude; designed to work with other capable assistants too. Recover from one, continue in another.
- **Handing off.** Give a collaborator, another assistant, or your future self a self-contained starting point.
- **Pulling out the good parts.** Lift a draft, plan, outline, decision, research prompt, or idea straight out of the recovery.

### Why this also saves time, context, and usage

When you continue long work, you normally re-paste history and re-explain context every time. That is slow, and on metered assistants it burns through message, context, or usage limits faster.

A recovery is **compact context.** Instead of carrying a whole transcript forward, you carry one tight document. That means:

- **less repeated context** — you stop re-pasting the same background;
- **shorter continuations** — a fresh chat seeded with a recovery uses less accumulated weight;
- **more control over usage limits** — you decide what context to carry instead of dragging everything;
- **cleaner long projects** — recover, start fresh, continue, recover again, rather than letting one chat grow unwieldy.

For people working at the edge of their plan’s limits, recovering and restarting from compact memory can be the difference between hitting a wall and keeping momentum.

---

## Part 2 — Privacy and public sharing

**The method is public. Your content is private by default.**

- Using this prompt never makes your conversation public. Nothing is shared publicly by the act of recovering.
- **You control what is shared, redacted, summarized, or kept private.** The recovery is yours.
- Be especially careful with **other people’s information** — names, contacts, anything said in confidence, anything about a third party who has not agreed to be shared. You can be open about yourself; protect others by default.
- The recovery records a **sensitivity level** and whether redactions were applied, so its status is never ambiguous.

### Visible redaction

If you plan to share a recovery, redact first — and redact *visibly*. Do not silently delete sensitive content, and do not replace it with invented neutral wording that looks factual.

Use this exact placeholder pattern whenever possible:

`[redacted:<type>:<stable-label>]`

Regex:

```regex
\[redacted:[a-z0-9_-]+:[a-z0-9_-]+\]
```

Use lowercase letters, numbers, underscores, and hyphens only. This keeps future linting and search simple.

Examples:

- `[redacted:person:partner-1]`
- `[redacted:org:partner-org-1]`
- `[redacted:place:pilot-community]`
- `[redacted:contact:phone-1]`
- `[redacted:finance:amount-1]`
- `[redacted:private:item-1]`

Rules:

- Use the same placeholder for the same entity throughout the document.
- Use stable labels that remain meaningful inside the document, not real names.
- If the category is unclear, use `[redacted:private:item-1]`.
- If multiple entities of the same type appear, number them consistently: `person-1`, `person-2`, `org-1`, `org-2`.
- Keep enough context to preserve the decision, nuance, or artifact seed without exposing the sensitive value.

### Turning a private recovery into a public sample

When preparing a recovery for public viewing:

1. Keep the real structure, decisions, corrections, nuance, and artifact seeds.
2. Mask non-consenting third parties, sensitive places, private contacts, and confidential details.
3. Keep masks visible using the placeholder format above.
4. Add a short redaction legend explaining what was masked and why.
5. Keep the unredacted original private.
6. Mark the public copy clearly as a redacted sample.
7. Do not invent missing content to make the sample prettier.
8. If redaction would destroy the meaning, do not publish that recovery; choose another sample.

---

## Part 3 — Deep Research, generated images, and attachments

Conversations sometimes include heavy material: long research reports, generated images, videos, screenshots, spreadsheets, PDFs, zip files, or project folders. A recovery handles these by **reference, not by inlining**, so it stays compact and usable.

- **Deep Research reports:** do **not** paste the full report into the recovery. Summarize the key findings, what they changed, and where they point; then reference the report as a separate exported file. Keep the full report and its citations in its own Markdown file alongside the recovery.
- **Generated images:** do not try to embed them. Reference each one with a short description, the prompt used, a re-generation prompt when useful, a suggested filename, and the related artifact or project. Export the actual image separately only when needed.
- **Large attachments / files:** name them, say what they contain and why they matter, and point to where they live instead of copying their contents in.
- **Screenshots / PDFs / slides / spreadsheets:** summarize the relevant signal and include file references; use exact extraction only when the assistant has the right tools and the result matters.

Rule of thumb: the recovery holds the *meaning and the pointer*; the heavy artifact lives next to it as its own file.

---

## Part 4 — Specification for the assistant

> Assistant: when the user triggers *“Recover this chat” / “Recupera este chat,”* produce one Markdown document following this section. Respond in the user’s language. Preserve the user’s wording, decisions, corrections, and meaningful nuance — **enrich, do not overwrite.** A recovery is a living artifact, not a summary. Capture is not commitment: record ideas without treating each one as a task. If a section does not apply, mark it *not applicable* rather than inventing content. If you are unsure about a fact, say so rather than guessing.

### 4.1 Recovery depth — pick one

| Mode | When | Must include |
|---|---|---|
| **MVR** (Minimum Viable Recovery) | quick fixes, short operational chats, lightweight capture | Metadata · What this was really about · Idea/Nuance ledger · Continuation status · Suggested title |
| **Standard** | most working conversations, project seeds, planning, content, decisions | MVR **+** Timeline · Current best understanding · Decisions/corrections · Artifact seeds · Regalito · Future research/model-use · Regression warnings |
| **Full** | identity/personal, architecture/design, long project chains, deep or high-stakes chats | Standard **+** Deep Research references · Generated image references · Project/life relevance · Reuse/OSS potential · Naming history · Parking lot |

Default to **Standard** unless the chat clearly calls for less or more.

### 4.2 Required metadata

The assistant fills this block. The user does not need to complete it manually.

Place it immediately after the title and the source comment. Use plain indented text — no code fences, no YAML wrapper:

    Status: draft / active / final
    Source: live chat / exported file / pasted transcript / screenshots / attachments
    Source completeness: full / partial / unknown
    Conversation owner:
    Participants:
    Consent / sharing status: private / shareable / public-safe
    Sensitivity: none / low / medium / high
    Redactions applied: no / yes — what was masked
    Assistant / model used:
    Date created: YYYY-MM-DD
    Date updated: YYYY-MM-DD
    Deep Research involved: no / yes — exported file:
    Images involved: no / yes — referenced below
    Attachments involved: no / yes — referenced below
    Confidence: high / medium / low
    Limitations:
    Recovery prompt version:
    Local patch / fork: none / yes — name:

Ownership and sensitivity fields matter: a recovery may be about the user’s own chat, a meeting, a collaborator’s idea, a client situation, or a third party. Do not assume every recovery is safe to publish.

### 4.3 Required sections

Use the section order below. Include mode labels where helpful, but keep the document readable.

1. **What this conversation was really about** — the deeper signal under the surface task: strategic, emotional, creative, structural, relational, or operational.
2. **Conversation timeline** *(Standard+)* — how the chat developed, with rough spans. Preserve the path, including pivots, corrections, and discarded directions, not only the final answer.
3. **Current best understanding** *(Standard+)* — what is decided, what is open, what should not be reopened casually, and what changed from earlier assumptions. This is the anti-regression anchor.
4. **Idea / Nuance ledger** — a table with exactly these columns: `Item | Type | Why it matters | Possible artifact | Where it could go | Priority`. Priority values: `now`, `soon`, `seed only`, `parking lot`, `identity-level`, `public later`.
5. **Decisions / corrections** *(Standard+)* — a table with exactly these columns: `Decision or correction | Context | Why | Consequence | Revisit?`. Corrections, such as fixed dates or reframed goals, are high-value; never let them regress.
6. **Artifact seeds** *(Standard+)* — rough drafts of anything the chat was producing: a message, plan, outline, checklist, snippet, prompt, naming set, diagram description, or next artifact. **Rough is valid — a stub beats a note saying “make a stub.”** Each seed should be liftable on its own.
7. **Regalito / small gift back** *(Standard+, when earned)* — one original contribution the assistant can responsibly make *from the conversation’s own material*: a sharp synthesis, a name, a diagram, a research prompt, or the question that unlocks the next step. Mark it clearly as generated, not recovered fact. One strong gift beats many decorative ones. Do not force it.
8. **Future research / model-use suggestions** *(Standard+, when useful)* — where deeper research, a stronger/different model, web/search verification, external feedback, Canvas/doc editing, CCLI/code tools, or other capabilities could help later. Note the task, why it matters, and rough priority. Suggesting is not doing — queue it, do not spend resources by default.
9. **Deep Research references** *(Full / when applicable)* — summary plus pointer to the separately exported report. Never inline the full report.
10. **Generated image references** *(Full / when applicable)* — description, prompt, re-generation prompt, suggested filename, related artifact.
11. **Attachment references** *(Full / when applicable)* — filenames, what they contain, why they matter, and where they live.
12. **Project / life relevance** *(Full)* — which ongoing projects, goals, decisions, or life areas this connects to.
13. **Regression warnings** *(Standard+)* — things a future reader, human or AI, must not do: do not flatten the path into conclusions, do not reopen settled decisions casually, do not treat every idea as a task, do not drop a correction, do not expose private context.
14. **Reuse / OSS potential** *(Full)* — what is reusable or shareable vs. what is specific to the owner or local context.
15. **Parking lot** *(Full)* — ideas explicitly set aside: not now, not never.
16. **Continuation / handoff status** — where the work left off, the next concrete step, and what to paste into a new chat or another assistant to continue. This is what makes the recovery a launch point, not an archive.
17. **Suggested title** — a short conceptual title following the rules in section 4.6.

### 4.4 Naming rules

#### Recovery file name

Name the recovery file after the conversation, ending in `_Recovery.md`.

Regex:

```regex
^[A-Za-z0-9]+(?:_[A-Za-z0-9]+)*_Recovery\.md$
```

This public convention is intentionally relaxed: segments may start with uppercase or lowercase letters. Local patches may tighten this rule for a specific workspace.

Rules:

- Use words joined by underscores.
- Use no dates in the filename; put dates in metadata.
- Use no spaces, emoji, punctuation, or special characters.
- Keep it descriptive enough to find later.
- If the user has a different established naming scheme, follow it and record the deviation in metadata.

Examples:

- `Ecotourism_Pilot_Recovery.md`
- `Living_Memory_Prompt_Recovery.md`
- `Barranco_Cinema_Workflow_Recovery.md`

#### Public sample file name

If a recovery is redacted for public viewing, use:

```text
<Conversation_Name>_Recovery_Redacted.md
```

Regex:

```regex
^[A-Za-z0-9]+(?:_[A-Za-z0-9]+)*_Recovery_Redacted\.md$
```

### 4.5 Footer / source line

Add a comment as the first line after the title so the file is self-identifying:

```html
<!-- recovery of: [short description of the conversation] · made with: [assistant/model] · date: [YYYY-MM-DD] · prompt: Living Memory Prompt v0.4 -->
```

For formats that do not support comments, put the same note in the nearest metadata/notes area.

### 4.6 Suggested title rules

The recovery must suggest a better chat title.

Rules:

- 2–6 words.
- Conceptual, not date-based.
- No trailing punctuation.
- No version number unless the chat is explicitly about a release/version.
- Should describe what the chat became, not only the first prompt.
- Should be useful as a future search handle.

Examples:

- `Ecotourism Pilot Memory`
- `Living Memory Prompt`
- `Cinema Barranco Workflow`

### 4.7 Redaction rules

Use the visible redaction placeholder format defined in Part 2. The canonical form is:

```text
[redacted:<type>:<stable-label>]
```

Rules:

- Use the same placeholder for the same entity throughout.
- Keep the placeholder visible.
- Do not silently delete.
- Do not invent replacement facts.
- Add a redaction legend for public samples.
- Keep the unredacted original private.
- If Part 2 and this section ever drift, Part 2 is the source of truth for the exact placeholder pattern.

### 4.8 Local adaptations and forks

This public prompt is the base. A person, team, organization, or project may maintain a local patch with additional preferences, vocabulary, privacy rules, required sections, or assistant-specific workflows.

Recommended pattern:

```text
base prompt + local patch → one built Markdown prompt for actual use
```

Rules:

- The built file should remain readable as a single prompt.
- Normal users do not need patches.
- Local patches should be explicit about what they add, override, or remove.
- Local patches should not silently weaken privacy, redaction, or source-traceability rules.
- A recovery should record whether a local patch or fork was used.

---

## Part 5 — Version, testing, and feedback

<!-- Maintainer metadata. Normal users can ignore this block. -->

    Artifact: Recover This Chat — The Living Memory Prompt
    Public version: v0.4
    Status: public preview — in early public use
    Latest file: docs/living-memory/recovery-prompt.md
    Versioned snapshot: docs/living-memory/versions/recovery-prompt-v0.4.md
    Download name: RecoverThisChat_LivingMemoryPrompt.md
    Date: 2026-06-03

Maintainer note: the user-facing version string is the footer/source line in section 4.5 (`prompt: Living Memory Prompt v0.4`). Generated user recoveries must never carry internal labels such as `candidate` or `draft`. When cutting a new version, update 4.5, this block, and the changelog together.

**Changelog**

- **v0.4 — 2026-06-03.** First finalized release of the Living Memory Prompt as a standalone, self-contained recovery prompt + specification, now in public preview. Distilled from an internal recovery practice into a generic, assistant-agnostic artifact with practical optional capability guidance, privacy and visible-redaction rules, Deep Research / image / attachment handling by reference, MVR / Standard / Full modes, required metadata and sections, strict naming conventions, suggested-title rules, local patch/fork pattern, and the *regalito* as a useful small contribution from the assistant.

**Tested with**

- ChatGPT and Claude.
- Designed to work with other capable assistants. Treat that as something to verify and learn from, not a guarantee — results vary by model, by app, and by how you attach or paste this prompt.

**Feedback**

Found a rough edge, a confusing step, or an assistant where this did not work well? Open a GitHub Issue on the project repository once the public repository feedback path is enabled, or send feedback directly. Real-world reports are what move this from preview toward stable.

<!-- This prompt is public; your recovered conversations are private and yours to control. -->
