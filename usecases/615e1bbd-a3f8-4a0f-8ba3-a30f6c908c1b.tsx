// https://sharetext.io/wnhs7od8
localStorage.setItem(
  "demo_615e1bbd-a3f8-4a0f-8ba3-a30f6c908c1b",
  JSON.stringify([
    {
      message:
        "Identify, qualify, and onboard high-quality restaurant partner in Chicago.",
      response: `
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

<strong>🤖 Discovery Agent is thinking…</strong>

Building a composite, deduplicated restaurant universe for Chicago by unifying:
- CRM Leads 
- CRM Opportunities 
- Public restaurant discovery sources 

This universe will serve as the single substrate for all downstream qualification and acquisition actions. 

### Source Systems Activated
| System              | Purpose                     |
|---------------------|-----------------------------|
| CRM – Leads         | Early pipeline context      |
| CRM – Opportunities | In-flight / historical deals |
| Google Places       | Public discovery & ratings  |
| Yelp                | Supplemental quality signals |
| OpenTable           | Operational metadata        |

Pulling all Chicago-related records from CRM.

### CRM Sync Outcome (Validated)
| Object               | Chicago Records  |
|----------------------|-------|
| Opportunities        | 227    |
| Leads (ZIP-validated) | 4     |

These records are tagged for contextual awareness, not exclusion.

Discovering additional Chicago restaurant locations from public sources.

### Public Discovery Outcome
| Metric                 | Value |
|------------------------|-------|
| Restaurants discovered | 266   |

<hr/>

<strong>🤖 Lead Intake & Normalization Agent is thinking…</strong>

Normalizing, deduplicating, and classifying all sources into a single location-level universe.

Each restaurant location is tagged with:
- Location_ID 
- Restaurant_Type (Standalone / Chain) 
- Brand_Name (if applicable) 
- CRM_Lead_Flag 
- CRM_Opportunity_Flag

### Composite Discovery Output (Post-Deduplication)
| Category                    | Count |
|-----------------------------|-------|
| Unique restaurant locations | 266   |
| Standalone locations        | ~218  |
| Chain locations             | ~27   |
| Unique chain brands         | ~10   |


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
<tr><td>Indienne</td><td>3</td><td>71</td><td>$2M–$5M</td><td>Fine Dining</td></tr>
<tr><td>Avec River North</td><td>8</td><td>73</td><td>$500K–$1M</td><td>Casual Sit Down</td></tr>
<tr><td>Gilt Bar</td><td>6</td><td>71</td><td>$2M–$5M</td><td>Casual Sit Down</td></tr>
<tr><td>Gibsons Italia </td><td>4</td><td>68</td><td>$1M–$2M</td><td>Fast Casual</td></tr>
<tr><td>Trivoli Tavern</td><td>2</td><td>66</td><td>$1M–$2M</td><td>Casual Sit Down</td></tr>
<tr><td>Boka</td><td>1</td><td>62</td><td>$1M–$2M</td><td>Fine Dining</td></tr>
<tr><td>Prime & Provisions</td><td>1</td><td>58</td><td>$500K–$1M</td><td>Casual Sit Down</td></tr>
<tr><td>Ciccio Mio</td><td>2</td><td>55</td><td>$1M–$2M</td><td>Casual Dining</td></tr>
</tbody>
</table>
<div class="w-full flex items-center justify-between" style='margin-top:-16px;'><div><strong>1-10</strong> of <strong>23</strong> results</div><div class="flex items-center gap-3"><span class="size-4 flex items-center justify-center bg-blue-500 text-white" style='width:24px;height:24px;border-radius:4px;'>1</span><span class="text-gray-400">2</span><span class="text-gray-400">3</span><span class="text-gray-400"> 🡢 </span></div></div>

<br>

<p><em>All leads initialized into RQS with identity-only fields.</em></p>

<details>

<summary><strong>RQS — Initialized</strong></summary>

<br>

> For each restaurant, All economic, sales, risk, and execution attributes are explicitly set to default, non-actionable states.

- Restaurant_Name: Rick Bayless Restaurants 
- Address: On File 
- City: On File 
- Case_ID: RAS-INKIND-US-LEADS-2026-01 
- Policy_Pack_Version: inKind-Econ-v1.0 
- Discovery_Source(s): Kaya_Lead_Data.csv 
- CRM_Opportunity_Flag: No 
- Opportunity_ID: Not Created 
- Acquisition_Status: Initialized 
- Estimated_AUV: Empty  
- AUV_Confidence: Empty 
- Hard_Gate_Status: Pending 
- LOS: Length of Sales – Not Started 
- Tier: Unassigned 
- POC_Name: Unknown 
- POC_Role: Unknown 
- POC_Email: Unknown 
- POC_Phone: Unknown 
- Outreach_Status: Not Started 
- Risk_Flag: None 
- Contract_Status: Not Initiated 
- Go_Live_Status: Not Applicable 

<div><strong>Status:</strong> <span class="bg-green-100 text-[13px]" style="padding:4px 8px;border-radius:5px;">Identity-only</span></div>

<br>

> No qualification, prioritization, or outreach actions permitted at this stage.

> Proceeding to economic qualification.

</details>

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
<tr><td>Indienne</td><td>$1.0M</td><td>4.1</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>Borderline AUV</td></tr>
<tr><td>Trivoli Tavern</td><td>$1.2M</td><td>4.2</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>Meets threshold</td></tr>
<tr><td>Boka</td><td>$1.4M</td><td>4.5</td><td style="color:#16A34A;font-weight:bold;">PASS</td><td>High quality</td></tr>
<tr><td>Gibsons Italia</td><td>$0.9M</td><td>4.1</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>AUV below threshold</td></tr>
<tr><td>Avec River North</td><td>$0.6M</td><td>4.4</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>AUV below threshold</td></tr>
<tr><td>Gilt Bar</td><td>$0.9M</td><td>3.9</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>Rating & AUV</td></tr>
<tr><td>Prime & Provisions</td><td>$0.7M</td><td>4.0</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>AUV below threshold</td></tr>
<tr><td>Ciccio Mio</td><td>$0.8M</td><td>3.8</td><td style="color:#DC2626;font-weight:bold;">FAIL</td><td>Rating below threshold</td></tr>
</tbody>
</table>

<p><em>Restaurants failing hard gates are excluded from downstream sales effort.</em></p>

**Economic Gate Summary**  
- Passed economic gates: 5  
- Failed AUV threshold: 4  
- Failed rating threshold: 1  
- Only gate-passed restaurants proceed further.  

<details>
  <summary><strong>RQS — Updated Economic Qualification & Hard Gates</strong></summary>

| Attribute Name        | Rick Bayless Restaurants | Hemisphere Hospitality | Indienne  | Avec River North | Gilt Bar | Gibsons Italia | Trivoli Tavern | Boka  | Prime & Provisions  | Ciccio Mio  |
|-----------------------|--------------------------|------------------------|--------------------------|-------------------------|------|------------------|----------------------------|-------------------|---------------------|--------------------|
| Estimated_AUV         | ~$1.8M                   | ~$1.1M                 | ~$1.0M                   | ~$0.6M                  | ~$0.9M | ~$0.9M           | ~$1.2M                     | ~$1.4M            | ~$0.7M              | ~$0.8M             |
| AUV_Confidence        | High                     | Medium                 | Medium                   | Low                     | Low  | Low              | Medium                     | High              | Low                 | Low                |
| Hard_Gate_Status      | Pass                     | Pass                   | Pass                     | Fail                    | Fail | Fail             | Pass                       | Pass              | Fail                | Fail               |
| LOS                   | Not Started              | Not Started            | Not Started              | Not Started             | Not Started | Not Started     | Not Started                | Not Started       | Not Started         | Not Started        |
| Tier                  | A                        | A                      | B                        | Unassigned              | Unassigned | Unassigned     | B                          | B                 | Unassigned          | Unassigned         |
| POC_Name              | Unknown                  | Unknown                | Unknown                  | Unknown                 | Unknown | Unknown         | Unknown                    | Unknown           | Unknown             | Unknown            |
| POC_Role              | Unknown                  | Unknown                | Unknown                  | Unknown                 | Unknown | Unknown         | Unknown                    | Unknown           | Unknown             | Unknown            |
| POC_Email             | Unknown                  | Unknown                | Unknown                  | Unknown                 | Unknown | Unknown         | Unknown                    | Unknown           | Unknown             | Unknown            |

For each restaurant, the RQS records the outcome of economic qualification.

### Captured at this stage:
- Estimated AUV per unit (modeled) 
- AUV Confidence 
- Economic Gate Status (Pass / Fail) 
- Length of Sales (Not Started) 
- Tier (assigned for Pass; unassigned for Fail) 
- POC Name, Role, Email (Unknown)

Restaurants marked Fail are retained for audit visibility only and excluded from all downstream activity. 

<br>
Proceeding with economically qualified restaurants only.

</details>

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
<tr><td>Trivoli Tavern</td><td>66</td><td>$1.2M</td><td><span class="bg-yellow-100 text-yellow-700" style="padding:4px 8px;border-radius:5px;">Tier B</span></td></tr>
<tr><td>Indienne</td><td>71</td><td>$1.0M</td><td><span class="bg-yellow-100 text-yellow-700" style="padding:4px 8px;border-radius:5px;">Tier B</span></td></tr>
<tr><td>Boka</td><td>62</td><td>$1.4M</td><td><span class="bg-yellow-100 text-yellow-700" style="padding:4px 8px;border-radius:5px;">Tier B</span></td></tr>
</tbody>
</table>

**Tier Definitions:**  
- Tier A: Immediate acquisition priority  
- Tier B: Strong fit, secondary priority  

<p><em>Scores are advisory only. No automated execution.</em></p> 

<details>
  <summary><strong>RQS — Updated Risk Surfacing & Sales Readiness</strong></summary>

| Attribute Name        | Rick Bayless Restaurants | Hemisphere Hospitality | Indienne  | Trivoli Tavern  | Boka  |
|-----------------------|--------------------------|------------------------|--------------------------|----------------------------|-------------------|
| Estimated_AUV         | ~$1.8M                   | ~$1.1M                 | ~$1.0M                   | ~$1.2M                     | ~$1.4M            |
| AUV_Confidence        | High                     | Medium                 | Medium                   | Medium                     | High              |
| Hard_Gate_Status      | Pass                     | Pass                   | Pass                     | Pass                       | Pass              |
| LOS                   | Not Started              | Not Started            | Not Started              | Not Started                | Not Started       |
| Tier                  | A                        | A                      | B                        | B                          | B                 |
| POC_Name              | Unknown                  | Unknown                | Unknown                  | Unknown                    | Unknown           |
| POC_Role              | Unknown                  | Unknown                | Unknown                  | Unknown                    | Unknown           |
| POC_Email             | Unknown                  | Unknown                | Unknown                  | Unknown                    | Unknown           |
| POC_Phone             | Unknown                  | Unknown                | Unknown                  | Unknown                    | Unknown           |
| Risk_Flag             | Brand Sensitivity        | POS Compatibility Check| Multi-location Sequencing| None                       | None              |
| Outreach_Status       | Not Started              | Not Started            | Not Started              | Not Started                | Not Started       |
| Contract_Status       | Not Initiated            | Not Initiated          | Not Initiated            | Not Initiated              | Not Initiated     |
| Go_Live_Status        | Not Applicable           | Not Applicable         | Not Applicable           | Not Applicable             | Not Applicable    |
| Acquisition_Status    | Qualified – Pending Sales Intent | Qualified – Pending Sales Intent | Qualified – Pending Sales Intent | Qualified – Pending Sales Intent | Qualified – Pending Sales Intent |

For economically qualified restaurants only, the RQS records risk signals and sales readiness. 

### Captured at this stage:
- Persisted economic results (AUV, confidence, gate status) 
- Length of Sales (Not Started) and Tier 
- POC details (still unconfirmed) 
- Risk Flag, Outreach Status (Not Started) 
- Contract Status (Not Initiated), Go-Live Status (Not Applicable) 

Risk signals are advisory only. No automated progression occurs.

Proceeding to human commercial intent.

</details>

<hr/>

<strong>🤖 Risk & Constraint Detection Agent is thinking…</strong>

<p><em>Surfacing real-world acquisition risks.<p><em> 

<h3>Risk Signals Identified</h3>

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr><th>Restaurant</th><th>Risk Flag</th></tr>
</thead>
<tbody>
<tr><td>Hemisphere Hospitality</td><td>POS compatibility confirmation</td></tr>
<tr><td>Rick Bayless Restaurants</td><td>High brand sensitivity — AE-led approach required</td></tr>
</tbody>
</table>

<p><em>Risks surfaced, not assumed. No restaurant auto-excluded.</em></p>

<details>
  <summary><strong>RQS — Updated HITL Selection & Outreach Execution</strong></summary>

| Attribute Name             | Rick Bayless Restaurants                 | Hemisphere Hospitality            |
|----------------------------|------------------------------------------|-----------------------------------|
| Estimated_AUV              | ~$1.8M                                   | ~$1.1M                            |
| AUV_Confidence             | High                                     | Medium                            |
| Hard_Gate_Status           | Pass                                     | Pass                              |
| LOS                        | Initiated                                | Initiated                         |
| Tier                       | A                                        | A                                 |
| POC_Name                   | Owner                                    | Operations Manager                |
| POC_Role                   | Owner                                    | Ops / GM                          |
| POC_Email                  | Captured During Outreach                 | Captured During Outreach          |
| POC_Phone                  | Captured During Outreach                 | Captured During Outreach          |
| Risk_Flag                  | AE-Led Only (Brand Sensitivity)          | POS Review Pending                |
| Outreach_Status            | Completed – AE Follow-up Required        | Completed – Warm                  |
| Contract_Status            | Not Initiated                            | Not Initiated                     |
| Go_Live_Status             | Not Applicable                           | Not Applicable                    |
| CRM_Opportunity_Flag       | Yes                                      | Yes                               |
| Opportunity_ID             | Generated Post-HITL                     | Generated Post-HITL               |
| Acquisition_Status         | Outreach Approved                        | Outreach Approved                 |

For sales-selected restaurants, the RQS records human approval and outreach execution.

### Captured at this stage:
- Confirmed economic and readiness state 
- POC details (captured during outreach) 
- Risk Flag (updated if applicable) 
- Outreach Status (Completed / Warm / AE Follow-up) 
- CRM Opportunity Flag (Yes) and Opportunity ID (generated) 
- Acquisition Status (Outreach Approved) 

Only restaurants explicitly approved by Sales appear in this update.

</details>

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
  "to": ["ammshathwan@kayatech.com"],
  "content": "<p>Hi Vijay,</p><p>The <strong>Restaurant Acquisition System (RAS)</strong> has completed all automated qualification and economic gating for the current lead set.</p><p>Your commercial input is now required before any outreach can proceed.</p><br><p><strong>Qualified Restaurants (Tier A)</strong></p><p>Based on enforced economic and risk filters, the following restaurants are recommended for pursuit:</p><ul><li>Rick Bayless Restaurants</li><li>Hemisphere Hospitality</li></ul><br><p><strong>Proposed Outreach Parameters</strong></p><p>Please review and confirm the following:</p><ul><li><strong>Outreach Method:</strong> AI voice agent calls  + Email</li><li><strong>Automation Level:</strong> Assisted</li></ul><p>No contact will be made unless you explicitly confirm or modify these parameters.</p><br><p><strong>What Happens Next</strong></p><p>Once you confirm or modify the proposed selection:</p><ul><li>AI Voice agents will deploy outreach calls to Rick Bayless Restaurant & Hemisphere Hospitality</li><li>System will automatically analyse the transcripts and take on the next actions</li><li>AEs will be informed on the next actions</li></ul><br><p><strong>Action Needed:</strong><br>Please reply to confirm, modify, or decline the proposed outreach approach</p><div style='margin-top:16px;'><button style='background-color: #3B82F6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; margin-right: 8px;'>Confirm Approach</button><button style='background-color: #6B7280; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;'>Modify Parameters</button></div><br><p>Thanks,<br>Restaurant Acquisition System</p>"
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

- AI Voice Agent led calls + Email

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

<div class="bg-[#d7d7d7] p-3 rounded-full inline-block border-2 border-gray-200"><audio class="rounded-full" controls><source src="https://www.dropbox.com/scl/fi/yd06uw55yll8fbiuz4iz8/Inkind-Call-latest.mp3?rlkey=gfyfhnnukbq6iy2gmnvy6lvgi&st=dhetf8dj&dl=0&raw=1" type="audio/mpeg">Your browser does not support the audio element.</audio></div>

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

**Call Summary — Hemisphere Hospitality** 

- Operator reached and receptive 
- Interest expressed in guest acquisition and repeat visit mechanics 
- Funding discussed only at a conceptual level; deferred for later conversation 
- Requested additional details via email before scheduling 

**System Action:** 

- Marked as Warm — <em>Follow-up Pending</em> 
- AE notification queued with suggested talking points 
- POS confirmation flagged for discussion during follow-up 

<p><em>No automated sales outreach executed beyond initial informational calls.</em></p>
<p><em>All call outcomes logged with timestamps and script versioning.</em></p>
<p><em>Human-led follow-up is required to proceed further.</em></p>

### Email templates has been populated and successfully delivered.

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
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "before",
          buttonId: "email",
          response: "Human approval initiated Successfully",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate: `{
  "subject": "Follow-up & Next Steps - inKind Discussion",
  "to": ["ammshathwan@kayatech.com"],
  "content": "<p>Hi John,</p><p>Thank you for taking the time to speak with us today. I wanted to follow up with a brief summary of the discussion and outline the next steps.</p><br><p><strong>Summary from the Call</strong></p><ul><li>We shared a high-level overview of inKind's guest pay and dining credit model.</li><li>The approach was received positively, particularly from a guest experience and brand perspective.</li><li>You indicated a preference for a white-glove, AE-led approach for any follow-up, given brand sensitivity and positioning.</li></ul><br><p><strong>Next Steps</strong></p><ul><li>We will share a concise set of materials for your review.</li><li>If helpful, we can schedule a short, AE-led introductory conversation to walk through details and address any questions.</li></ul><br><p><strong>Scheduling</strong></p><p>When its convenient, you can select a time for a follow-up conversation using the link below:</p><p><a href='#' style='color:#2563EB; text-decoration: underline;'>Select a time for a follow-up conversation</a></p><br><p>Please feel free to proceed at your pace - we're happy to align around what works best for you.</p><br><p>Best regards,<br>The inKind Team</p>"
}`,
          waitingConfirmation: false,
        },
      ],
    },
    {
      message: "Show me the underlying guidelines that power this I-Flow",
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
- Email — Initial Outreach <span class="text-blue-500 underline">(Template link)</span>
- SMS — Follow-up <span class="text-blue-500 underline">(Template link)</span>
- Voice / Avatar — Level-1 Intro Script <span class="text-blue-500 underline">(Template link)</span>

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
  ]),
);
