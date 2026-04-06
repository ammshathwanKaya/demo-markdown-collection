localStorage.setItem(
  "demo_ce0088c6-fe76-4a36-b544-79113da69b96",
  JSON.stringify([
    {
      message:
        "Identify, qualify, and onboard high-quality restaurant partners in Chicago across all channels.",
      response: `
**🤖 Orchestration & Governance Cluster Agent is thinking…**

<br>

> Request received.

> Initializing Restaurant Acquisition System (RAS) — Chicago Market.

<br>

RAS is a standalone, governed, agentic application designed to:
- Discover and structure the Chicago restaurant universe 
- Enrich and score high-quality partners 
- Allocate ownership intelligently 
- Govern policy and Salesforce hygiene 
- Prepare AEs for engagement 
- Orchestrate onboarding 
- Maintain full audit lineage

Aligned to KAYA’s governed, enterprise-ready agentic framework

### Systems Activated
| Function              | System                         |
|-----------------------|--------------------------------|
| CRM Context           | Salesforce (read-only)         |
| Restaurant Listings   | Google Places API              |
| Ratings & Reviews     | Google Places / Yelp           |
| Reservation Signals   | OpenTable                      |
| Revenue Estimation    | OneSauce                       |
| Email                 | Microsoft Outlook (Graph API)  |
| Meetings              | Microsoft Teams API            |
| Transcript Capture    | Microsoft Teams                |
| CRM Writeback         | Salesforce Lead API            |
| Audit & Lineage       | RAS Governance Layer           |


Salesforce write access: **Disabled until commercialization approval.**

<br>

> Routing to → Market Discovery & Structuring Cluster

<br>

---

<br>

**🤖 Market Discovery & Structuring Cluster Agent is thinking…**

<br>

Building the Chicago restaurant universe.

### Data Sources Queried
- Salesforce Opportunities (Chicago — contextual only) 
- Salesforce Leads (Chicago — contextual only) 
- Google Places (Chicago restaurants) 
- Yelp (ratings + review counts) 
- OpenTable (reservation footprint) 

**Deterministic Deduplication Logic Applied**

**Key:** normalize(name) + normalize(address) + ZIP 

### Precedence Order: 
<ol>
  <li>Salesforce Opportunity</li>
  <li>Salesforce Lead </li>
  <li>Google </li>
  <li>Yelp </li>
  <li>OpenTable </li>
</ol>

### Chicago Market Summary
| Metric                                   | Count |
|------------------------------------------|-------|
| Salesforce Opportunities  | <span class="text-blue-600 underline">227</span>   |
| Salesforce Leads          | <span class="text-blue-600 underline">4</span>   |
| Public Discoveries                       | <span class="text-blue-600 underline">612</span>   |
| Post-Dedup Unique Restaurants            | <span class="text-blue-600 underline">534</span>   |
| Net-New Candidates                       | <span class="text-blue-600 underline">303</span>   |

> No CRM updates performed.

<br>

### Chain Intelligence

Chains identified and rolled up:
- Rick Bayless Restaurants (3 Chicago locations) 
- Fulton Market Hospitality Group (cluster footprint) 
- Other multi-location operators flagged 

**Recommendation:** Engage chains top-down where possible.

<br>

> Routing to → Enrichment & Intelligence Cluster

<br>

---

<br>

**🤖 Enrichment & Intelligence Cluster Agent is thinking…**

<br>

> Enriching structured Chicago candidates.

<br>

<details open>
  <summary><strong>Candidate 1 — Rick Bayless Restaurants</strong></summary>

<div style="margin-bottom:12px;margin-top:12px;"><strong>Google Rating:</strong> 4.6 (2,318 reviews)</div>
<div style="margin-bottom:12px;"><strong>Review Velocity:</strong> Stable</div>
<div style="margin-bottom:12px;"><strong>OneSauce Estimated AUV:</strong> $1.95M</div>
<div style="margin-bottom:12px;"><strong>Confidence:</strong> 0.83</div>
<div style="margin-bottom:12px;"><strong>Locations:</strong> West Loop / River North / Loop</div>
<div ><strong>OpenTable Presence:</strong> Yes</div>

</details>

<details>
  <summary><strong>Candidate 2 — Boka (Lincoln Park)</strong></summary>

<div style="margin-bottom:12px;margin-top:12px;"><strong>Google Rating:</strong> 4.4 (1,108 reviews)</div>
<div style="margin-bottom:12px;"><strong>OneSauce Estimated AUV:</strong> $1.30M</div>
<div style="margin-bottom:12px;"><strong>Confidence:</strong> 0.78</div>
<div ><strong>OpenTable Presence:</strong> Yes</div>

</details>

<details>
  <summary><strong>Candidate 3 — Fulton Market Hospitality Group</strong></summary>

<div style="margin-bottom:12px;margin-top:12px;"><strong>Google Rating:</strong> 3.9 (under threshold)</div>
<div style="margin-bottom:12px;"><strong>OneSauce Estimated AUV:</strong> $0.95M</div>
<div style="margin-bottom:12px;"><strong>Confidence:</strong> 0.66</div>
<div style="margin-bottom:12px;"><strong>Review Sentiment:</strong> Mixed</div>

</details>

### Upstream Public Risk Signals

**Rick Bayless**
- None material

**Boka**
- Moderate exposure to seasonal fluctuations (review cluster) 

**Fulton Market HG**
- Rating below qualification threshold 
- Mixed service sentiment 
- High competitive density in Fulton corridor 

<br>

> Routing to → Qualification, Scoring & Allocation Cluster

<br>

---

<br>

**🤖 Qualification, Scoring & Allocation Cluster Agent is thinking…**

<br>

### Hard Qualification Rules
- Rating ≥ 4.0 
- AUV ≥ $1M 
- Active operating status 

| Restaurant        | Rating Gate | AUV Gate | Result |
|-------------------|------------|----------|--------|
| Rick Bayless      | <span class="text-green-600">PASS</span>       | <span class="text-green-600">PASS</span>     | <span class="text-green-600">PASS</span>   |
| Boka              | <span class="text-green-600">PASS</span>       | <span class="text-green-600">PASS</span>     | <span class="text-green-600">PASS</span>   |
| Fulton Market HG  | <span class="text-red-600">FAIL</span>       | <span class="text-red-600">FAIL</span>     | <span class="text-red-600">FAIL</span>   |

### Location Opportunity Score (LOS)

**Formula:** Rating (40%) + AUV (40%) + Ops Signals (20%)

| Restaurant        | LOS | Tier     |
|-------------------|-----|----------|
| Rick Bayless      | 88  | Tier 1   |
| Boka              | 76  | Tier 2   |
| Fulton Market HG  | 48  | Blocked  |

### Proposed AE Allocation based on look-up of location & segment mapping to AE’s in Salesforce
| Restaurant        | Proposed AE       | Rationale                   |
|-------------------|------------------|-----------------------------|
| Rick Bayless      | Sarah Martinez   | Premium segment specialist  |
| Boka              | Daniel Cho       | Lincoln Park territory      |
| Fulton Market HG  | Priya Desai      | Fulton corridor coverage    |

<br>

> No Salesforce write performed.

> Routing to → Commercialization & CRM Governance Cluster 

<br>

---

<br>

**🤖 Commercialization & CRM Governance Cluster Agent is thinking…**

<br>

This cluster merges: 
- Commercial approval 
- Override logic 
- AE assignment confirmation 
- Salesforce schema validation 
- Data completeness enforcement

Unified Commercialization Dashboard
- 3 Leads Pending 
- 2 Require Attention 
- Overall Must-Have Completeness: 93% 

| Status             | Company            | Tier          | Proposed AE       | Must-Have % | Missing | Action        |
|--------------------|--------------------|--------------|------------------|------------|---------|--------------|
| 🔴 Action Required | Fulton Market HG   | T2 (Override) | Priya Desai      | 82%        | 2       | Review & Fix |
| 🟡 Partial         | Boka               | T2           | Daniel Cho       | 94%        | 1       | Quick Fix    |
| 🟢 Ready           | Rick Bayless       | T1           | Sarah Martinez   | 100%       | 0       | —            |

<details open>
<summary><strong>Drill-down: Fulton Market HG</strong></summary>

Missing:

- Primary Contact Last Name 
- Primary Contact Email 

Actions: Trigger Enrichment / Manual edit / Research queue

### Human + enrichment fix:
- Enrichment finds: ops@fultonmarkethg.com 
- Human enters last name: Kim

Status flips to 🟢 (100%)
</details>

<details>
<summary><strong>Drill-down: Boka</strong></summary>

</details>

<details>
<summary><strong>Drill-down: Rick Bayless Restaurants</strong></summary>

</details>

`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          response: "Human approval initiated Successfully",
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          waitingConfirmation: true,

          // Message to display during waiting state
          waitingMessage: "Awaiting HITL updates",

          // Delay in milliseconds (used for timeout fallback)
          confirmationDelay: 10000,

          // Trigger mechanism: 'websocket' or 'timeout'
          confirmationTrigger: "websocket",

          // WebSocket URL for real-time communication
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",

          // Event type to listen for on the WebSocket
          websocketEvent: "confirmation",

          // Message to display after confirmation is received
          confirmationMessage: "HITL updated",
        },
      ],
    },
    {
      message: "HITL updated",
      response: `
**Final Gate State** 

**All records:**
- Commercially approved 
- Schema compliant 
- Riders documented 

<span class="text-green-600">✔</span> Commercialize & Push to Salesforce

> User confirms.

> Routing to → Salesforce Writeback

<br>

---

<br>

**🤖 Salesforce Writeback Cluster Agent is thinking…**

<br>

**System:** Salesforce Lead Object API

### Actions Performed
- 3 Leads Created 
- Timeline entry added: “Commercialized via RAS – Chicago v2.7” 
- Rider metadata stored 
- Audit log recorded (actor, timestamp, policy version)

<details open>
<summary>Click to view details</summary>

| Field (Salesforce) | Rick Bayless | Boka | Fulton Market Hospitality Group |
|-----------------------------|-------------------------------|-------------------------------|---------------------------------------------|
| Lead ID | L-009871 | L-009872 | L-009873 |
| Company (Required) | Rick Bayless Hospitality Group | Boka Restaurant Group | Fulton Market Hospitality Group |
| Lead Owner (Required) | Sarah Martinez | Daniel Cho | Priya Desai |
| Lead Source (Required) | Outbound – KAYA RQS | Outbound – KAYA RQS | Outbound – KAYA RQS |
| Status (Required) | Working – Contacted | Working – Not Contacted | Open – New |
| Industry | Hospitality – Fine Dining | Hospitality – Multi-Unit | Hospitality – Independent Restaurant Group |
| Website | www.rickbayless.com | www.bokachicago.com | www.fultonmarkethg.com |
| Phone | (312) 555-1847 | (312) 555-0921 | (312) 555-7714 |
| Annual Revenue (Est.) | $28,000,000 | $45,000,000 | $8,400,000 |
| Number of Locations (Custom) | 3 | 9 | 2 |
| Average Unit Volume (AUV) (Custom) | $9.3M | $5.0M | $4.2M |
| Google Rating (Custom) | 4.6 | 4.5 | 4.4 |
| RQS Qualification Score (Custom) | 87 / 100 | 82 / 100 | 76 / 100 |
| RQS Tier (Custom) | Tier 1 – Strategic | Tier 1 – Expansion | Tier 2 – High Potential |
| Primary Contact Name | Alejandro Perez | Emily Larson | Michael Romano |
| Primary Contact Title | Director of Operations | VP of Development | Managing Partner |
| Email | aperez@rbhg.com | elarson@bokagrp.com | mromano@fultonmarkethg.com |
| Estimated Partnership Fit (Custom) | High | High | Medium |
| Acquisition Priority (Custom) | Immediate | 30–60 Days | 60–90 Days |
| Notes (Auto-Populated from RQS) | Multi-unit, premium brand fit, strong AUV, high card volume | Expansion-focused group, scalable model | Growing West Loop footprint, strong weekend volume, mid-tier AUV |
| Integration Reference ID (Custom) | RQS-2026-0213-001 | RQS-2026-0213-002 | RQS-2026-0213-003 |

</details>

<br>

> Salesforce now contains validated, governed leads.

> Routing to → AE Enablement & Pursuit Intelligence Cluster

<br>

---

<br>

**🤖 AE Enablement & Pursuit Intelligence Cluster Agent is thinking…**

<br>

> Commercialized leads now move to AE Support Hub.

<br>

| Status | Lead | Tier | Suggested Next Action | Buttons |
|--------|----------------------------|---------------|-----------------------------------------------|------------------------------------|
| Ready  | Rick Bayless Restaurants  | T1            | Send Intro Email + Schedule Call             | <span class="text-blue-600 underline">Open Prep</span> / <span class="text-blue-600 underline">Trigger Email</span> / <span class="text-blue-600 underline">Schedule</span> |
| Ready  | Boka                      | T2            | Send Renovation-aware Intro + Soft Connect   | <span class="text-blue-600 underline">Open Prep</span> / <span class="text-blue-600 underline">Trigger Email</span> / <span class="text-blue-600 underline">Schedule</span> |
| Ready  | Fulton Market HG          | T2 (Override) | Validate POC + Send Model-Fit Positioning Email | <span class="text-blue-600 underline">Open Prep</span> / <span class="text-blue-600 underline">Trigger Email</span> / <span class="text-blue-600 underline">Schedule</span> |

AE clicks Open Prep for each in turn.

<details open>
<summary>Rick Bayless — AE Prep Pack</summary>

### AE PREP PACK (Rick Bayless Restaurants)

### 1) Account Snapshot (Chicago) 
- Brand type: Multi-unit, premium 
- Locations: 3 (West Loop / River North / Loop) 
- Rating: 4.6 (2,300) 
- AUV: $1.95M (Conf 0.83) 
- Tier: T1 | LOS: 88

---

### 2) Contacts (Smart Summary)

**Primary POC (recommended)**
- Maria Hernandez — Director of Operations 
- Contactability: email + phone present ✅ 
- Influence: High (Ops + rollout) 

**Secondary stakeholder to engage**
- Carlos Vega — CFO 
- Likely role: Funding approval, risk/compliance questions 

“Suggested stakeholder mapping: Ops champion + Finance approver.”

---

### 3) Likely Risks (Chicago context) 
- FINANCE: funding band concerns (medium) 
- OPS: multi-location rollout coordination (low) 
- TECH: none at present (POS to be checked) 

---

### 4) Likely Objections + Best Counters
- “We need to understand funding/cash impact.” 
Counter: “We’ll propose a pilot funding band with staged activation aligned to demand.” 
- “Will this dilute brand?” 
Counter: “Positioned as invitation-only dining credit, protecting premium perception.” 

---

### 5) Suggested Call Script (first 90 seconds)

“Maria, we’re working with premium Chicago operators to drive repeat traffic using structured dining credits. Given your West Loop + River North footprint and strong demand, we’d like to propose a two-location pilot that keeps brand positioning premium. Can we walk through a 15-minute pilot model and confirm what Finance needs to see?” 

---

### 6) Email Template Preview

<textarea style="width:100%; height:300px; border:1px solid black; border-radius:10px; padding:16px" class="bg-gray-100">
Subject: Pilot proposal for 2 Chicago locations (West Loop + River North)

Body:

Hi Maria,

We support premium Chicago restaurant groups in driving repeat visits via structured dining credits — typically positioned as an invite-only program to protect brand perception. Based on your footprint and demand, we’d like to propose a two-location pilot and share a funding band option that aligns with your expected volume.

Would you be open to a 20-minute discussion this week?

Best,
{{AE_Name}}
</textarea>

Buttons:
- Send Email (Tracked) 
- Edit Template 
- Attach Case Study (Chicago premium group) 
- Log as SFDC Activity 

---

### 7) Schedule Meeting (Teams) — UI

**Pick time slots:**
- Wed 11:00–11:30 
- Thu 15:00–15:30 
- Fri 10:00–10:30 

Button:
- Send Meeting Invite (Teams link auto-generated)

Invite preview: 
- **Title:** InKind Pilot Discussion — Rick Bayless Restaurants 
- **Location:** Microsoft Teams Meeting (auto) 
- **Agenda:** Pilot scope, funding band, timeline, stakeholder alignment

</details>

<details>

<summary>AE PREP PACK (Boka)</summary>

### Snapshot
- Single location, Lincoln Park 
- Rating 4.4, AUV $1.3M 
- Tier T2
- Rider: Revenue Derived (advisory) 

---

### Contacts
Emily Tran — Owner / Operator (Primary)

Influence: Very High

Contactability: email present ✅

---

### Risks

- TIMING: renovation / operational focus (high likelihood) 
- FINANCE: moderate 

---

### Objections + Counters

“We’re renovating — can’t prioritize now.” 

Counter: “We’ll align to reopening — positioned as launch accelerator.” 

---

### Suggested Email (Renovation-aware

<textarea style="width:100%; height:300px; border:1px solid black; border-radius:10px; padding:16px" class="bg-gray-100">
Subject: Reopening accelerator idea for Boka (when timing is right) 

Body:

Hi Emily,

Congrats on the renovation plans. When you’re closer to reopening, we can help amplify launch momentum using structured dining credits targeted to repeat guests. If helpful, I can share examples from similar Chicago fine dining partners.

 Would it be okay if I circle back in early October?

Best,
{{AE_Name}}
</textarea>

### Buttons:
- Send email 
- Set nurture task 
- Schedule “revisit” meeting placeholder (Teams) 

</details>

<details>

<summary>🔴 AE PREP PACK (Fulton Market Hospitality Group)</summary>

### Snapshot

- Fulton Market nightlife cluster 
- Rating 3.9 (below gate) 
- AUV $0.95M (below gate) 
- Commercialization allowed via Strategic Cluster override 
- Rider: Qualification Override + Capacity acknowledged 

---

### Contacts (data quality now resolved)
- Ops contact: “Kim” (Last name) 
- Email: ops@fultonmarkethg.com 

---

### Risks 
- Model fit risk: high 
- Brand positioning sensitivity: high 
- Contact completeness: medium (role clarity may need confirmation) 

---

### Objections + Counters (nightlife brand) 
- “Prepaid model doesn’t fit us.” 
Counter: “We can frame as controlled credit packages for high-intent guests, not discounting.” 
- “Brand dilution.” 
Counter: “Invite-only, limited inventory, premium positioning.” 

---

### Suggested Script (validation-first)

“Before we talk structure, I want to ensure the program matches how you protect your brand. Can we align on who owns guest acquisition and how you want credits positioned — premium and controlled vs mass discounting?” 

---

### Email Template (brand-protection positioning

<textarea style="width:100%; height:300px; border:1px solid black; border-radius:10px; padding:16px" class="bg-gray-100">
Subject: Controlled, premium credit model for Fulton Market venues 

Body:

Hi {{FirstName}},

We work with Chicago nightlife and premium concepts using a controlled dining credit model that avoids discounting and protects brand positioning. If you’re open, I’d like to share a short example and learn how you approach guest acquisition today.

  Would 15 minutes work this week?

Best,
{{AE_Name}}
</textarea>

### Buttons:
- Send email 
- Schedule Teams call 
- Flag “model fit risk” watch 

</details>

<br>

---

<br>

**🤖 Outreach Orchestration Cluster Agent is thinking…**

<br>

### Confirm/Reject proposed actions for the 3 Accounts:

- Send email to Rick Bayless + Boka + Fulton Market HG 
- Schedule call for Rick Bayless + Fulton Market HG 
- Create October nurture follow-up for Boka 

<br>

> Awaiting Confirmation...
`,
    },
    {
      message: "Confirm",
      response: `
**Confirming actions:**
- Email queued/sent (tracked) 
- Teams invite created 
- Logged automatically in Salesforce Activity 

<br>

> Routing to → Conversation Intelligence Cluster

<br>

---

<br>

**🤖 Conversation Intelligence Cluster Agent is thinking…**

<br>

> Transcript ingested via Microsoft Teams.

<br>

#### Smart Summary Generated

### Rick Bayless:

- Strong pilot interest (2 locations) 
- CFO review required 
- POS currently Toast (compatibility checked and confirmed) 

<br>

> HITL confirms summary before stage progression.

> Routing to → Outcome Routing Cluster

<br>

<p class="text-blue-600 underline">Smart Summary: Boka</p>

<p class="text-blue-600 underline">Smart Summary: Fulton Market HG</p>

<br>

---

<br>

**🤖 Outcome Routing Cluster Agent is thinking…**

<br>

### Rick Bayless → Closed (Won)
- Stage progression in SFDC (HITL) 
- Onboarding Orchestration triggered (separate agent) 

### Boka → NOT NOW
- Nurture classification 
- Revisit task Oct 1 
- Nurture email + reminder sequence 

### Fulton Market HG → Closed (Lost)
- Structured loss reason captured 
- Rider + override noted 
- Learning feedback flagged 

<br>

> Routing to → Onboarding & Lifecycle Orchestration Cluster

<br>

---

<br>

**🤖 Onboarding & Lifecycle Orchestration Cluster Agent is thinking…**

<br>

> Triggered for Rick Bayless.

<br>

### Onboarding Tracker

<br>

> Initiating cross-functional onboarding workflow for Rick Bayless Restaurants (2-location pilot).

<br>

### Onboarding Tracker (Dashboard)
| Status | Workstream | Owner | SLA | Notes | Action |
|--------|------------|-------|-----|-------|--------|
| 🟡 In Progress | Legal – Contract | Legal Ops | 3d | Draft in review | Nudge / Escalate |
| 🟡 In Progress | Finance – Funding Band | Finance | 2d | CFO review pending | Nudge / Escalate |
| 🟢 Complete | Ops – POS Validation | Ops Eng | 1d | Toast supported | View |
| 🟡 Scheduled | Enablement – Training | Enablement | 5d | Training booked | View |
| ⚪ Not Started | Marketing – Launch Plan | Marketing | 7d | Pending go-live date | Start |

### Nudges/Escalations (buttons)
- Nudge Owner (Teams message + SFDC task) 
- Escalate to Manager 
- Mark Blocked (requires reason) 
- Request AE input (HITL) 

### Go-Live Checklist

- <span class="text-green-600">✔</span> Contract Signed 
- <span class="text-green-600">✔</span> Funding Approved 
- <span class="text-green-600">✔</span> POS Validated 

- <span class="text-green-600">✔</span> Risks resolved/accepted 
- <span class="text-green-600">✔</span> Training Complete 

<br>

> Awaiting Confirmation...
`,
    },
    {
      message: "Approve",
      response: `
<span class="text-green-600">✔</span> **Salesforce updated** — Opportunity marked Active, Go-Live date stamped, lifecycle tasks created. 

<span class="text-green-600">✔</span> **Partner Portal provisioned** — Restaurant account created and login credentials issued. 

<span class="text-green-600">✔</span> **Consumer App activated** — Restaurant profile published and visible to Chicago members. 

<span class="text-green-600">✔</span> **Finance configured** — Funding band scheduled and settlement tracking initiated. 

<span class="text-green-600">✔</span> **Stakeholders notified** — AE, Ops, and Finance alerted; performance monitoring begins. 

<br>

---

<br>

**🤖 Command Center Cluster Agent is thinking…**

<br>

### Displaying:
- Override Rate 
- First-Pass Completeness % 
- Most Missing Fields
- Loss Clusters 
- Template Effectiveness 
- Policy Version 

Trainer updates threshold for rating risk sensitivity.

### FINAL STATE
| Restaurant | Status |
|------------|--------|
| Rick Bayless | Closed (Won) |
| Boka | Nurture |
| Fulton Market HG | Closed (Lost) |

<br>

> All actions governed.


> All CRM writes validated.


> Full audit trail retained. 

<br>
`,
    },
  ]),
);
