localStorage.setItem(
  "demo_615e1bbd-a3f8-4a0f-8ba3-a30f6c908c1b",
  JSON.stringify([
    {
      message:
        "Initialize a Restaurant Acquisition System (RAS) run using the provided leads file.",
      response: `
<h3>Input Artifacts</h3>
<div class="flex flex-col gap-2">
  <div><strong>Leads Dataset:</strong> <span class="bg-blue-100 text-[13px]" style="padding:4px 8px;border-radius:5px;">Kaya_Lead_Data.csv</span></div>
  <div><strong>Total Lead Records Ingested:</strong> 10 restaurants</div>
</div>

<hr/>

<strong>🤖 Orchestrator Agent is thinking…</strong>

<p>
Initializing <strong>Restaurant Acquisition System (RAS)</strong> for inKind.
</p>

<p>
<strong>Objective:</strong> Convert a small, raw lead set into a qualified, explainable, and sales-ready acquisition shortlist — enforcing inKind’s economic discipline before any outreach.
</p>

<div class="flex flex-col gap-1">
  <div><strong>Primary artefact:</strong> Restaurant Qualification Sheet (RQS)</div>
  <div><strong>Execution Mode:</strong>
    <span class="bg-blue-100 text-[13px]" style="padding:4px 8px;border-radius:5px;">Deterministic</span>
    <span class="bg-blue-100 text-[13px]" style="padding:4px 8px;border-radius:5px;">Policy-aware</span>
    <span class="bg-blue-100 text-[13px]" style="padding:4px 8px;border-radius:5px;">HITL-enabled</span>
  </div>
  <div><strong>Workflow ID:</strong> 615e1bbd-a3f8-4a0f-8ba3-a30f6c908c1b</div>
  <div><strong>Case ID:</strong> RAS-INKIND-US-LEADS-2026-01</div>
</div>

<hr/>

<strong>🤖 Lead Intake & Normalization Agent is thinking…</strong>

<ul>
  <li>Ingesting leads as the sole system of input</li>
  <li>Normalizing restaurant group identities and multi-location structures</li>
  <li>Standardizing revenue ranges, lead scores, and service types</li>
</ul>

<h3>Normalized Lead Snapshot (All Leads)</h3>

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
<th>Restaurant / Group</th><th>Locations</th><th>Lead Score</th><th>Revenue Range</th><th>Service Type</th>
</tr>
</thead>
<tbody>
<tr><td>Rick Bayless Restaurants</td><td>7</td><td>85</td><td>Over $5M</td><td>Fine Dining</td></tr>
<tr><td>Hemisphere Hospitality</td><td>3</td><td>75</td><td>$2M–$5M</td><td>Fine Dining</td></tr>
<tr><td>Dhall Hospitality Group</td><td>3</td><td>71</td><td>$2M–$5M</td><td>Fine Dining</td></tr>
<tr><td>Maria’s Italian Kitchen</td><td>8</td><td>73</td><td>$500K–$1M</td><td>Casual Sit Down</td></tr>
<tr><td>Rest</td><td>6</td><td>71</td><td>$2M–$5M</td><td>Casual Sit Down</td></tr>
<tr><td>Urban Taco Group</td><td>4</td><td>68</td><td>$1M–$2M</td><td>Fast Casual</td></tr>
<tr><td>Coastal Kitchen Collective</td><td>2</td><td>66</td><td>$1M–$2M</td><td>Casual Sit Down</td></tr>
<tr><td>Green Fork Bistro</td><td>1</td><td>62</td><td>$1M–$2M</td><td>Fine Dining</td></tr>
<tr><td>Maple Street Eatery</td><td>1</td><td>58</td><td>$500K–$1M</td><td>Casual Sit Down</td></tr>
<tr><td>Sunset Grill & Bar</td><td>2</td><td>55</td><td>$1M–$2M</td><td>Casual Dining</td></tr>
</tbody>
</table>

<p><em>All leads initialized into RQS with identity-only fields.</em></p>

**RQS — Initialized**  
For each restaurant:  
- Restaurant / Group Name  
- Location Count  
- Lead Score  
- Revenue Band (as provided)  
- Service Type  
- Status: Identity-only  

<hr/>

<strong>🤖 Economic Qualification & Hard-Gating Agent is thinking…</strong>

<p>Applying inKind’s <strong>non-negotiable economic filters</strong>.</p>

**Economic Qualification Policies**  
- Google Rating ≥ <strong>4.0</strong>  
- Estimated AUV ≥ <strong>$1M per unit</strong>  

AUV estimation derived from: 

- Revenue range 
- Location count
- Service type benchmarks from historically funded restaurants  

<h3>Economic Gate Evaluation</h3>

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
<th>Restaurant / Group</th><th>Est. AUV</th><th>Google Rating</th><th>Gate Result</th><th>Reason</th>
</tr>
</thead>
<tbody>
<tr><td>Rick Bayless Restaurants</td><td>$1.8M</td><td>4.6</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>Strong economics</td></tr>
<tr><td>Hemisphere Hospitality</td><td>$1.1M</td><td>4.3</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>Meets threshold</td></tr>
<tr><td>Dhall Hospitality Group</td><td>$1.0M</td><td>4.1</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>Borderline AUV</td></tr>
<tr><td>Coastal Kitchen Collective</td><td>$1.2M</td><td>4.2</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>Meets threshold</td></tr>
<tr><td>Green Fork Bistro</td><td>$1.4M</td><td>4.5</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>High quality</td></tr>
<tr><td>Urban Taco Group</td><td>$0.9M</td><td>4.1</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>AUV below threshold</td></tr>
<tr><td>Maria’s Italian Kitchen</td><td>$0.6M</td><td>4.4</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>AUV below threshold</td></tr>
<tr><td>Rest</td><td>$0.9M</td><td>3.9</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>Rating & AUV</td></tr>
<tr><td>Maple Street Eatery</td><td>$0.7M</td><td>4.0</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>AUV below threshold</td></tr>
<tr><td>Sunset Grill & Bar</td><td>$0.8M</td><td>3.8</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>Rating below threshold</td></tr>
</tbody>
</table>

<p><em>Restaurants failing hard gates are excluded from downstream sales effort.</em></p>

**Economic Gate Summary**  
- Passed economic gates: 5  
- Failed AUV threshold: 4  
- Failed rating threshold: 1  
- Only gate-passed restaurants proceed further.  

**RQS — Updated**  
For each restaurant:  
- Estimated AUV per unit  
- Google Rating (verified / modeled)  
- Economic Gate Status: Pass / Fail  
- Exclusion Reason (if failed)  

<p><em>Proceeding with economically qualified restaurants only.</em></p> 

<hr/>

<strong>🤖 Enrichment & Scoring Agent is thinking…</strong>

<p><em>Enriching gate-passed restaurants and applying acquisition prioritization.</em></p>  

**Scoring Inputs**  
- Lead score  
- Strength above AUV threshold  
- Multi-location leverage  
- Similarity to historically funded profiles  

<h3>Acquisition Tiering (Gate-Passed)</h3>

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
<th>Restaurant</th><th>Lead Score</th><th>Est. AUV</th><th>Tier</th>
</tr>
</thead>
<tbody>
<tr><td>Rick Bayless Restaurants</td><td>85</td><td>$1.8M</td><td><span class="bg-green-100 text-green-700" style="padding:4px 8px;border-radius:5px;">Tier A</span></td></tr>
<tr><td>Hemisphere Hospitality</td><td>75</td><td>$1.1M</td><td><span class="bg-green-100 text-green-700" style="padding:4px 8px;border-radius:5px;">Tier A</span></td></tr>
<tr><td>Coastal Kitchen Collective</td><td>66</td><td>$1.2M</td><td><span class="bg-yellow-100 text-yellow-700" style="padding:4px 8px;border-radius:5px;">Tier B</span></td></tr>
<tr><td>Dhall Hospitality Group</td><td>71</td><td>$1.0M</td><td><span class="bg-yellow-100 text-yellow-700" style="padding:4px 8px;border-radius:5px;">Tier B</span></td></tr>
<tr><td>Green Fork Bistro</td><td>62</td><td>$1.4M</td><td><span class="bg-yellow-100 text-yellow-700" style="padding:4px 8px;border-radius:5px;">Tier B</span></td></tr>
</tbody>
</table>

**Tier Definitions:**  
- Tier A: Immediate acquisition priority  
- Tier B: Strong fit, secondary priority  

<p><em>Scores are advisory only. No automated execution.</em></p> 

**RQS — Updated**  
- Composite Score (0–1)  
- Tier Assignment  
- Score rationale logged for explainability  

<hr/>

<strong>🤖 Risk & Constraint Detection Agent is thinking…</strong>

<p><em>Surfacing real-world acquisition risks.<p><em> 

<h3>Risk Signals Identified</h3>

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr><th>Restaurant</th><th>Risk Flag</th></tr>
</thead>
<tbody>
<tr><td>Dhall Hospitality Group</td><td>Multi-location onboarding sequencing</td></tr>
<tr><td>Hemisphere Hospitality</td><td>POS compatibility confirmation</td></tr>
<tr><td>Rick Bayless Restaurants</td><td>High brand sensitivity — AE-led approach required</td></tr>
</tbody>
</table>

<p><em>Risks surfaced, not assumed. No restaurant auto-excluded.</em></p>

**RQS — Updated**  
- Risk flags attached  
- Suggested AE discovery questions generated  

<hr/>

<strong>🤖 Human Intent & Selection Agent is thinking…</strong>

<p><em>All automated qualification complete. Commercial intent required.</em></p> 

**HITL Required — Sales (Scoped)**  
Please confirm:  
- Restaurants to pursue  
- Outreach mode  
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          response: "Human approval initiated Successfully",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate: `{
  "subject": "Action Required: Confirm Outreach for Qualified Tier A Restaurants",
  "to": ["sandaruwan@kayatech.com"],
  "content": "<p>Hi Vijay,</p><p>The <strong>Restaurant Acquisition System (RAS)</strong> has completed all automated qualification and economic gating for the current lead set.</p><p>Your commercial input is now required before any outreach can proceed.</p><br><p><strong>Qualified Restaurants (Tier A)</strong></p><p>Based on enforced economic and risk filters, the following restaurants are recommended for pursuit:</p><ul><li>Rick Bayless Restaurants</li><li>Hemisphere Hospitality</li></ul><br><p><strong>Proposed Outreach Parameters</strong></p><p>Please review and confirm the following:</p><ul><li><strong>Outreach Method:</strong> AE-led calls only</li><li><strong>Automation Level:</strong> Assisted (no automated or system-initiated outreach)</li></ul><p>No contact will be made unless you explicitly confirm or modify these parameters.</p><br><p><strong>What Happens Next</strong></p><p>Once confirmed:</p><ul><li>AE-ready acquisition briefs will be generated</li><li>Positioning and funding narratives will be prepared</li><li>Outreach remains fully human-led and auditable</li></ul><br><p><strong>Action Needed:</strong><br>Please reply to confirm, modify, or decline the proposed outreach approach</p><div style='margin-top:16px;'><button style='background-color: #3B82F6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; margin-right: 8px;'>Confirm Approach</button><button style='background-color: #6B7280; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;'>Modify Parameters</button></div><br><p>Thanks,<br>Restaurant Acquisition System</p>"
}`,
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
**Human Intent Captured — Sales** 

**Selection Decision:** 

- Proceed with Tier A restaurants: 
    - Rick Bayless Restaurants 
    - Hemisphere Hospitality 

**Outreach Mode:** 

- AI Voice Agent led calls 

<p><em>Audit trail updated.</em></p> 

<hr/>

**🤖 Outreach Preparation Agent is thinking…** 

<p><em>Initiating introductory voice outreach for sales-selected restaurants.</em></p> 

**Purpose of calls:** 
- Provide a brief overview of inKind, confirm relevance, and assess openness to a human-led follow-up conversation. 
- No selling, negotiation, or commitment requested. 

### Voice Outreach Initiated 

| **Restaurant / Group Name** | **Call Status** | **Outcome** |
|-----------------------------|-----------------|-------------|
| Rick Bayless Restaurants    | Completed       | Follow-up approved |
| Hemisphere Hospitality      | Completed       | Follow-up approved |

**Call Summary — Rick Bayless Restaurants** 

- Owner reached and engaged for full call duration 
- High-level overview of inKind guest pay and dining credit model received positively 
- Clear preference expressed for a <strong>white-glove, AE-led follow-up</strong> 
- Brand sensitivity acknowledged; no automated outreach requested 
- Open to reviewing materials and scheduling a short introductory discussion 

**System Action:** 

- Marked as Interested — <em>AE Follow-up Required</em> 
- Outreach mode remains <strong>AE-led only</strong> 
- Notes attached to RQS and CRM context 

<div class="bg-[#d7d7d7] p-3 rounded-full inline-block border-2 border-gray-200"><audio class="rounded-full" controls><source src="https://www.dropbox.com/scl/fi/9a1e2w3hx1rw1hp1of271/Inkind-Call-New.mp3?rlkey=gnjilnrngtuenau0vzyc57ssb&st=h468yzby&dl=0&raw=1" type="audio/mpeg">Your browser does not support the audio element.</audio></div>

**Call Summary — Hemisphere Hospitality** 

- Operator reached and receptive 
- Interest expressed in guest acquisition and repeat visit mechanics 
- Funding discussed only at a conceptual level; deferred for later conversation 
- Requested additional details via email before scheduling 

**System Action:** 

- Marked as Warm — <em>Follow-up Pending</em> 
- AE notification queued with suggested talking points 
- POS confirmation flagged for discussion during follow-up 

<div class="bg-[#d7d7d7] p-3 rounded-full inline-block border-2 border-gray-200"><audio class="rounded-full" controls><source src="https://www.dropbox.com/scl/fi/9a1e2w3hx1rw1hp1of271/Inkind-Call-New.mp3?rlkey=gnjilnrngtuenau0vzyc57ssb&st=h468yzby&dl=0&raw=1" type="audio/mpeg">Your browser does not support the audio element.</audio></div>

<p><em>No automated sales outreach executed beyond initial informational calls.</em></p>
<p><em>All call outcomes logged with timestamps and script versioning.</em></p>
<p><em>Human-led follow-up is required to proceed further.</em></p>

<hr/>

**🤖 Execution Readiness & Audit Agent is thinking…** 

<p><em>Finalizing acquisition readiness.</em></p>

**System Outputs:** 

- Final Restaurant Qualification Sheet (RQS) 
- Acquisition dashboard snapshot 
- Full policy, scoring, and HITL audit log 

**Confirmed:** 

- Economic gates enforced before contact 
- Human commercial intent preserved 
- Restaurant selection fully explainable 
- No automated sales outreach 
- Decisions replayable and auditable 

Restaurant Acquisition System run complete. 
Ready for next acquisition cycle. 
`,
    },
    {
      message: "Show all knowledge base rules of the agents",
      response: `
**🤖 Orchestrator Agent is thinking…** 

### 1. Discovery & Deduplication Rules 

**Purpose** 
<br>
Create a single, authoritative, location-level restaurant universe per market. 

**Rules** 
- All source systems are read-only 
- Inputs may include CRM, Google Places, Yelp, OpenTable 
- A restaurant qualifies as in-market if: 
  - City matches target city (case-insensitive), or 
  - ZIP is in approved list, or 
  - Coordinates fall within defined geo-fence 
- Deduplication is deterministic: 
  - Primary key = normalized restaurant name + normalized address 
    - Conflict resolution priority: 
        - CRM Opportunity 
        - CRM Lead 
        - Google Places 
        - Yelp 
        - OpenTable 
- No enrichment, scoring, or assumptions are permitted at this stage 

**Output Contract**
<br>
Each record must include: 
- Stable Location ID 
- Restaurant name and full address 
- Restaurant type (standalone or chain) 
- Brand name (if applicable) 
- CRM lead / opportunity flags 
- Acquisition status = DISCOVERED 

### 2. Chain vs Standalone Classification 

**Purpose** 
<br>
Enable brand-level reasoning without breaking location-level execution. 

**Rules** 
- A restaurant is classified as <strong>CHAIN</strong> if: 
  - The same normalized brand appears ≥ 3 times in the market, or 
  - Franchise metadata is detected, or 
  - A known brand match exists in the brand knowledge base 
- Otherwise, the restaurant is classified as <strong>STANDALONE</strong> 
- Brand grouping never removes location-level visibility 
- This demo operates in <strong>location-level scoring mode only</strong>

### 3. AUV Estimation Rules (Explainable) 

**Purpose** 
<br>
Estimate Annual Unit Volume using public signals when CRM data is unavailable. 

**Inputs** 
- Google rating 
- Review count 
- Price band 
- Seating proxy (derived) 
- Service type 

**Approved Formula** 
- Daily covers derived from review count 
- Average check derived from price band 
- AUV = Daily Covers × Avg Check × 360 

**Confidence Scoring** 
- Base confidence applied 
- Adjusted using review count and rating 
- Final confidence capped between 0.5 and 0.9 

**Guardrails** 
- Estimated AUV < $1M → hard fail 
- Confidence score < 0.6 → HITL review required 

### 4. Hard Qualification Gates 

**Purpose** 
<br>
Prevent low-quality restaurants from entering sales motion. 

**Mandatory Gates (all must pass)** 
- Google rating ≥ 4.0 
- Estimated AUV ≥ $1M per unit 
- Restaurant must be operating and open 
- Dine-in or hybrid service model required 

**Outcomes** 
- PASS → proceed to scoring 
- FAIL → block and archive 
- UNCERTAIN → HITL validation required 

### 5. Location Opportunity Score (LOS) 

**Purpose** 
<br>
Rank acquisition priority using a single, explainable score. 

**Scoring Weights** 
- Google rating: 40% 
- Estimated AUV: 40% 
- Operational signals: 20% 

**Tier Mapping** 
- LOS ≥ 80 → Tier 1 
- LOS 65–79 → Tier 2 
- LOS 50–64 → Tier 3 
- LOS < 50 → Blocked 

**Constraints** 
- LOS is advisory only 
- Scores never trigger automated execution 

### 6. Human Intent Gates (Mandatory) 

**Purpose** 
<br>
Ensure commercial control remains human-led at all times. 

**Required HITL Decisions** 
- Restaurant selection 
- Proceed to outreach 
- Point-of-contact confirmation 
- Risk acceptance 
- Final go-live approval 

**Each decision records:** 
- Decision outcome 
- Rationale 
- Timestamp 
- Human actor 

### 7. Outreach Templates (Controlled) 

**Purpose** 
<br>
Standardize outreach while preventing unapproved messaging. 

**Supported Templates** 
- Email — Initial Outreach 
  (Template link available) 
- SMS — Follow-up 
  (Template link available) 
- Voice / Avatar — Level-1 Intro Script 
  (Template link available) 

**Rules** 
- Outreach is only permitted after human approval 
- Templates are version-controlled 
- No free-form automated messaging allowed 

### 8. Risk Taxonomy 

**Purpose** 
<br>
Surface operational risks without auto-disqualification. 

**Risk Categories** 
- Technical (e.g., POS changes) 
- Legal (e.g., ownership disputes) 
- Financial (e.g., cash timing) 
- Operational (e.g., staffing gaps) 
- Timing (e.g., renovations) 

**Rules** 
- Risks inform conversations 
- Risks never auto-exclude a restaurant 

### 9. Supported POS Registry 

**Purpose** 
<br>
Prevent onboarding failures due to unsupported systems. 

**Rules** 
- Supported POS systems may proceed without escalation 
- Unsupported POS triggers HITL review 
- POS status is advisory, not blocking by default 

### 10. HITL Triggers & SLAs 

**Purpose** 
<br>
Ensure timely human intervention where required. 

**SLAs** 
- Technical risk → 48 hours 
- Legal risk → 72 hours 
- Finance risk → 24 hours 

### 11. Closure & Empanelment Rules 

**Purpose** 
<br>
Define what "onboarded" means. 

**All must be completed** 
- Contract signed 
- Funding band approved (if applicable) 
- Operator account provisioned 
- Credit load configured 
- Training modules assigned 
- inKind SPOC assigned 

### 12. Audit & Field Lineage 

**Purpose** 
<br>
Ensure full explainability and replayability. 

**For every RQS field** 
- Source system 
- Agent that set or modified it 
- Timestamp 
- Human override (if any) 
- Lineage matches the approved schema exactly. 

### 13. Dashboard Semantics 

**Purpose** 
<br>
Prevent metric drift and misinterpretation. 

**Rules** 
- Dashboard fields must exactly match approved definitions 
- No inferred, guessed, or derived metrics outside schema 
- Dashboard reflects system state, not opinions 
`,
    },
  ])
);