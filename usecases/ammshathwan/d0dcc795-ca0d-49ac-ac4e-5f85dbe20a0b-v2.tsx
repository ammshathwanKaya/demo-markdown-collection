localStorage.setItem(
  "demo_3112f0cd-7c9a-4f75-b912-31afdf307487",
  JSON.stringify([
    {
      message:
        "Identify high-risk COPD discharges, prevent 30-day readmissions, and protect reimbursement.",
      response: `
**🤖 Orchestration & Governance Cluster Agent is thinking…**

<br>

> Initializing COPD Readmission Prevention System (CRPS)

<br>

### CRPS is a governed, agentic application designed to:
- Detect high-risk COPD discharges  
- Ensure medication possession & adherence  
- Identify early deterioration  
- Resolve barriers (medication, transport, follow-up)  
- Divert avoidable ED visits  
- Maintain complete audit lineage  
- Enable payer defensibility  

### Systems Activated
| Function            | System                    |
|---------------------|---------------------------|
| Discharge feed      | Epic (HL7 ADT)            |
| Clinical enrichment | Epic (FHIR APIs)          |
| Pharmacy            | Pharmacy systems          |
| Benefit check       | PBM / RTPB networks       |
| Delivery            | Courier / Meds-to-Beds (M2B) |
| Patient outreach    | APP + Telephony           |
| RT escalation       | TigerText / Doximity      |
| Urgent care         | MediQuick                 |
| Scheduling          | Access Center / EHR       |
| Claims              | Revenue cycle             |
| Audit               | KAYA Event Store          |

<br>

> Routing to → Risk Agent 

<br>

---

**🤖 Risk Agent is thinking…**

<br>

> Subscribing to HL7 ADT discharge stream.

<br>

### Integrations
- Epic → Interface Engine → KAYA
      - 1-way | real-time (5–20 min)
- FHIR enrichment
      - 1-way read | near-real-time


### Data received
- MRN  
- Encounter ID  
- Discharge timestamp  
- COPD diagnosis  
- Baseline risk  
- Medication list  
- Follow-up details  

### Event Store
| Event                  | Risk Δ | Risk |
|------------------------|--------|------|
| discharge_detected     | 0      | 24%  |
| baseline_risk_high     | +5     | 29%  |
| copd_pathway_enrolled  | 0      | 29%  |

### Knowledge Base
- COPD eligibility rules  
- Discharge filters  
- Risk threshold logic

### Output
Patient: John M. selected

<br>

> Routing to → Medication Agent 

<br>

---

**🤖 Medication Agent is thinking…**

<br>

> Validating medication reality vs expectation.

<br>

### Integrations
- EHR → KAYA (FHIR)  
- Pharmacy → KAYA (API/feed)  
- PBM → KAYA (network/API)  
- Courier → KAYA  
- KAYA → Pharmacy (proposal)  

### Event Store 
| Event                | Risk Δ | Risk |
|----------------------|--------|------|
| med_ordered          | 0      | 29%  |
| med_not_dispensed    | +3     | 32%  |
| insurance_rejection  | +2     | 34%  |
| med_not_delivered    | +2     | 36%  |

### KB
- COPD Medication hierarchy based on criticality 
- Coverage logic  
- Substitution pathways  
- Formulary rules 
- Prior auth logic

### Output
⚠ Medication gap detected → risk 36%

<br>

> Routing to → Engagement Agent 

<br>

---

**🤖 Engagement Agent thinking…**

<br>

### Need confirmation of:
- possession 
- symptoms & severity 
- barriers 

### Integrations
- Kaya->Telephony API (1-way trigger)  
- Telephony Response -> Kaya(1-way return)  
- APP human capture/AI Voice call ->Kaya 

<br>

> Initiating 36-hour follow-up call.

<br>

<div style="margin:8px 0;" class="bg-[#d7d7d7] p-3 rounded-full inline-block border-2 border-gray-200"><audio class="rounded-full" controls><source src="https://www.dropbox.com/scl/fi/2utl57wiks0awvui3n65b/audio-1.mp3?rlkey=oyt0wb8dxpyy051d9piio9l22&st=n6h4c7f0&dl=0&raw=1" type="audio/mpeg">Your browser does not support the audio element.</audio></div>

<details>
  <summary><strong>🟠 System flags:</strong></summary>

- Insurance barrier 
- Missing maintenance inhaler 
- Adherence risk rising 

</details>

<details>
  <summary><strong>🔴 System triggers: </strong></summary>

- SOB ≥7 
- Escalation threshold crossed 

Escalation candidate identified. 

</details>

<details>
  <summary><strong>🚨 Escalation Path Activated: </strong></summary>

- RT Escalation Path Triggered 
- MediQuick Diversion Candidate 

</details>

<details>
  <summary><strong>⚠ Social Barrier Identified: </strong></summary>

- Transportation barrier flagged 
- Appointment compliance risk 

</details>

### Patient interaction
- Missing maintenance inhaler  
- SOB = 7  
- Speech difficulty  
- No transport 

### Event Store
| Event                           | Risk Δ | Risk |
|---------------------------------|--------|------|
| patient_confirms_missing_med    | +2     | 38%  |
| sob_score_7                     | +5     | 43%  |
| speech_difficulty_present       | +3     | 46%  |
| transport_barrier_yes           | +1     | 47%  |

### Knowledge Base
- Symptom thresholds  
- Escalation rules  
- Social barrier handling

### Output
🟠 Risk elevated but controlled escalation (~47%)

<br>

> Routing to → Clinical Agent 

<br>

---

**🤖 Clinical Agent thinking…**

<br>

> Escalation required — but not extreme deterioration.

<br>

### Integrations 
- KAYA → RT (TigerText)  
- RT → KAYA (manual/human response)

### Event Store 
| Event                     | Risk Δ | Risk |
|----------------------------|--------|------|
| rt_escalation_triggered    | 0      | 47%  |
| rt_assessment_completed    | +1     | 48%  |

### Output
Urgent care recommended

<br>

> Routing to → MediQuick Agent 

<br>

---

**🤖 Clinical Agent + Medication Agent are thinking…**

<br>

> Stabilize + resolve root cause

<br>

### Integrations 
- KAYA → MediQuick  (Task/API) 
- MediQuick → KAYA (Confirmation) 
- KAYA → Pharmacist (HITL)  (Task) 
- Pharmacist → KAYA (Decision) 
- KAYA → Pharmacy (Execution) 
- Pharmacy → KAYA (Dispense) 

### Knowledge Base
- COPD therapy equivalence  
- Formulary coverage  
- Substitution rules

### HITL — NEXT BEST ACTION

Agent proposes:

Covered inhaler substitute

### Human (Pharmacist) reviews:
| Context              | Value       |
|----------------------|-------------|
| Original med         | Not covered |
| Alternative          | Covered     |
| Clinical equivalence | Valid       |
| Risk                 | 48%         |
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
  "subject": "COPD – Medication Gap",
  "to": ["vijay@kayatech.com"],
  "content": "<div style='background-color:#F3F4F6;padding:24px;font-family:Arial,Helvetica,sans-serif;'>\
    <table width='100%' cellpadding='0' cellspacing='0' style='max-width:700px;margin:0 auto;background-color:#FFFFFF;border-radius:8px;border:1px solid #E5E7EB;'>\
      <tr><td style='padding:24px;color:#111827;font-size:14px;line-height:1.6;'>\
        <p style='margin:0 0 12px 0;'>Hi [Pharmacist Name],</p>\
        <p style='margin:0 0 16px 0;'>A recently discharged COPD patient is missing their maintenance inhaler due to insurance rejection and is now symptomatic.</p>\
        \
        <p style='margin:16px 0 6px 0;font-weight:600;color:#1F2937;'>🧑‍⚕️ Snapshot</p>\
        <p style='margin:0;'>Patient: John M. (MRN: XXXX)</p>\
        <p style='margin:0;'>Risk: 48% (elevated)</p>\
        <p style='margin:0;'>Symptoms: SOB 7/10, difficulty speaking</p>\
        <p style='margin:0 0 12px 0;'>RT: Escalated → urgent care recommended</p>\
        \
        <p style='margin:16px 0 6px 0;font-weight:600;color:#B91C1C;'>⚠️ Issue</p>\
        <p style='margin:0;'>Maintenance inhaler: ❌ Not dispensed</p>\
        <p style='margin:0 0 12px 0;'>Cause: Insurance rejection</p>\
        \
        <p style='margin:16px 0 6px 0;font-weight:600;color:#065F46;'>💊 Proposed Action</p>\
        <p style='margin:0;'>Switch to covered formulary alternative (LAMA/LABA equivalent)</p>\
        <p style='margin:0 0 12px 0;'>→ Restores adherence and reduces relapse risk</p>\
        \
        <p style='margin:16px 0 6px 0;font-weight:600;color:#1D4ED8;'>✅ Please respond with one:</p>\
        <p style='margin:0;'>APPROVE – Proceed with suggested alternative</p>\
        <p style='margin:0;'>MODIFY – Specify alternative</p>\
        <p style='margin:0 0 12px 0;'>REJECT – Provide reason</p>\
        \
        <p style='margin:16px 0 12px 0;color:#92400E;font-weight:500;'>⏱ Time-sensitive: Patient is in post-discharge high-risk window</p>\
        \
        <p style='margin-top:16px;'>Thanks,<br/>HHC Care Team</p>\
      </td></tr>\
    </table>\
  </div>"
  }`,
          waitingConfirmation: true,

          // Message to display during waiting state
          waitingMessage: "Awaiting Pharmacist approval...",

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
          confirmationMessage: "Request Clarification Received",
        },
      ],
    },
    {
      message: "Request Clarification Received",
      response: `
## Pharmacist has approved & dispensed alternative medication

### Event Store 

| Event                              | Risk Δ | Risk |
|------------------------------------|--------|------|
| urgent_visit_completed             | -4     | 44%  |
| alternative_med_proposed           | 0      | 44%  |
| alternative_med_approved           | 0      | 44%  |
| alternative_med_dispensed          | -3     | 41%  |
| patient_confirms_meds_in_hand      | -1     | 40%  |

gradual recovery (not sharp)

### Output
🟡 Stabilized but still moderate risk (~40%) 

<br>

> Routing to → Continuity Agent 

<br>

---

**🤖 Continuity Agent is thinking…**

<br>

> Remove residual risk drivers. Prevent second deterioration wave.

<br>

### Integrations
| Flow                     | Type       |
|--------------------------|------------|
| KAYA → Access Center     | Task/API   |
| Access Center → KAYA     | Confirmation |
| KAYA → Transport         | Task       |
| Transport → KAYA         | Confirmation |

### Event Store 
| Event                | Risk Δ | Risk |
|----------------------|--------|------|
| followup_confirmed   | -3     | 37%  |
| transport_resolved   | -3     | 34%  |

### Patient Summary
| Factor     | Status    |
|------------|-----------|
| Meds       | Restored  |
| Follow-up  | Confirmed |
| Transport  | Resolved  |
| Risk       | 35%       |

### Output
Continuity secured

<br>

> Routing to → Monitoring Agent 

<br>

---

**🤖 Monitoring Agent is thinking…**

<br>

> Confirm sustained stability. Observe trajectory vs relapse.

<br>

### Integrations
| Flow               | Type                             |
|--------------------|----------------------------------|
| ADT → KAYA         | Real-time ED                     |
| APP → KAYA         | Human input (human adherence)    |
| Scheduling → KAYA  | API/file (Scheduling feeds)      |

### Event Store
| Event                | Risk Δ | Risk |
|----------------------|--------|------|
| adherence_confirmed  | -2     | 32%  |
| stable_72h           | -2     | 30%  |

### FINAL TRAJECTORY
| Stage       | Risk |
|-------------|------|
| Baseline    | 24%  |
| Peak        | 48%  |
| Stabilized  | 30%  |

## 🟢 PERSONA 1 — PREVENTED
- No ED return  
- No readmission  
- Risk stabilized at 30% 

## 🔴 PERSONA 2 — DEFENSIBLE READMISSION

<br>

> ED return detected

<br>

### Integrations
| Flow             | Type      |
|------------------|-----------|
| ADT → KAYA       | real-time |
| Claims → KAYA    | batch     |
| KAYA → Export    | Report    |

### Event Store
| Event                | Risk Δ | Risk |
|----------------------|--------|------|
| adherence_confirmed  | -2     | 32%  |
| stable_72h           | -2     | 30%  |

### FINAL TRAJECTORY
| Stage       | Risk |
|-------------|------|
| Baseline    | 24%  |
| Peak        | 48%  |
| Stabilized  | 30%  |

## 🟢 PERSONA 1 — PREVENTED
- No ED return  
- No readmission  
- Risk stabilized at 30%  

## 🔴 PERSONA 2 — DEFENSIBLE READMISSION

<br>

> ED return detected

<br>

### Integrations
| Flow             | Type      |
|------------------|-----------|
| ADT → KAYA       | real-time |
| Claims → KAYA    | batch     |
| KAYA → Export    | Report    |

### Event Store
| Event                 | Status |
|-----------------------|--------|
| med gap detected      | <span class="text-green-700">✔</span>      |
| HITL substitution     | <span class="text-green-700">✔</span>      |
| RT escalation         | <span class="text-green-700">✔</span>      |
| urgent care           | <span class="text-green-700">✔</span>      |
| follow-up             | <span class="text-green-700">✔</span>      |

### Output

(Payer) Defense packet includes:
- Medication gap + resolution  
- HITL decision trail  
- Intervention logs  
- Timeline evidence  
- RT escalation  
- Follow-up compliance  

### Outcome
| Metric               | Result   |
|----------------------|----------|
| Readmission          | ✔        |
| Documentation        | Complete |
| Claim defensibility  | Strong   |

### FINAL OUTPUT MODEL
- Reports  
- Exports  
- Audit trail 
`,
    },
  ]),
);
