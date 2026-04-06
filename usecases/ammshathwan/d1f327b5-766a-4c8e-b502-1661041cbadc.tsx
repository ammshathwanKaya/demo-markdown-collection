// https://sharetext.io/1va2ve14 - mail to vijay
// https://sharetext.io/xstfg3lo - mail to jason

localStorage.setItem(
  "demo_d1f327b5-766a-4c8e-b502-1661041cbadc",
  JSON.stringify([
    {
      message:
        "Continuously monitor new smart meter installations completed within the last 90 days, evaluate installation performance across the deployed fleet, detect installation-quality defects, determine the correct corrective action, enforce contractor accountability, and execute remediation while preserving operational governance and audit traceability.",
      response: `
**🤖 Orchestration & Governance Agent is thinking…**

<br>

> Request received.

> Initializing Smart Meter Operational Intelligence System (SMOIS).

<br>

### SMOIS orchestrates meter operations across:
- Telemetry monitoring 
- Installation quality detection 
- Contractor governance 
- Field remediation execution 
- RCA investigation 
- Preventive control updates 
- Customer and supplier communications 
- Audit traceability

Operating under <strong>KAYA deterministic orchestration + HITL governance framework.</strong>

### Systems Activated
| Function                | System                     |
|-------------------------|----------------------------|
| Meter Data Management   | MDM                        |
| AMI Communications      | AMI Head End               |
| RF Diagnostics          | LTE Diagnostics            |
| Field Service           | Field Service Platform     |
| Installation Closeout   | Install Management System  |
| Asset Registry          | Meter Registry             |
| Customer Systems        | CRM                        |
| Outage Context          | OMS                        |
| Commercial Exposure     | Warranty / Billing systems |
| Governance              | KAYA Audit Layer           |
| Data Lake               | Smart Meter Telemetry Lake |

<br>

> Routing to → <strong>Telemetry Intake Agent</strong>

<br>

---

**🤖 Telemetry Intake Agent is thinking…**

<br>

> Scanning enterprise telemetry lake for meter performance signals.

> Parameters detected.

<br>

SKU = SKU-SM-AC-440-LTE-V3

Time Window = Last 90 Days

Installed Base = 112,400 meters 

### Raw Telemetry Dataset Retrieved

(1 SKU — multi-batch — multi-contractor)

| meter_id | batch       | contractor  | region | mdm_success | comm_fail | voltage_events | visits | complaints |
|----------|-------------|-------------|--------|-------------|-----------|---------------|--------|------------|
| MTR10001 | B-440-N-01  | VoltGrid    | North  | 96%         | 3%        | 1             | 0      | 0          |
| MTR10002 | B-440-N-01  | VoltGrid    | North  | 95%         | 4%        | 1             | 0      | 0          |
| MTR10003 | B-440-E-01  | NexaInstall | East   | 94%         | 5%        | 1             | 0      | 0          |
| MTR10004 | B-440-W-01  | FieldAxis   | West   | 94%         | 4%        | 1             | 0      | 0          |
| MTR10005 | B-440-S-01  | NexaInstall | South  | 95%         | 4%        | 1             | 0      | 0          |

<br>

> 112,430 records retrieved.

<br>

### Monitoring Target
| Parameter            | Value                                  |
|----------------------|----------------------------------------|
| Installation scope    | Newly installed meters                  |
| Observation window    | Last 90 days                            |
| Meter SKU             | SKU-SM-AC-440-LTE-V3                   |
| Installed population  | 112,430 meters                          |
| Contractors involved  | VoltGrid, NexaInstall, FieldAxis       |
| Regions               | North, East, West, South               |
| Installation Batches  | 22                                      |

SMOIS will continuously evaluate post-installation operational stability signals to detect installation quality issues.

## Operational scope confirmed. Dataset includes:
- MDM read success 
- AMI communication health 
- voltage anomaly signals 
- field service revisit signals 
- customer complaint signals 

<br>

> Routing to → <strong>Threshold Evaluation Agent</strong>

<br>

---

**🤖 Threshold Evaluation Agent is thinking…**

<br>

> Applying Deterministic Installation Quality Threshold Rubric.

<br>

### Evidence Panel — Threshold Rubric
| Rule  | Parameter                         | Threshold |
|------|-----------------------------------|-----------|
| TR-01 | MDM read failure density          | >10%      |
| TR-02 | Estimated read uplift             | >2x       |
| TR-04 | AMI comm failure density          | >12%      |
| TR-05 | Voltage anomaly density           | >8%       |
| TR-06 | Repeat visit density              | >3%       |
| TR-07 | Complaint density                 | >2%       |
| TR-09 | Installer closeout exceptions     | present   |

### Batch-Level Aggregation

SKU-SM-AC-440-LTE-V3

| Batch       | Contractor  | MDM Fail | Comm Fail | Voltage | Visits | Complaints | Status     |
|-------------|-------------|----------|-----------|---------|--------|------------|------------|
| B-440-N-01  | VoltGrid    | 3.8%     | 4.2%      | 2.1%    | 1.0%   | 0.6%       | Normal     |
| B-440-N-02  | VoltGrid    | 4.4%     | 5.0%      | 2.5%    | 1.2%   | 0.7%       | Normal     |
| B-440-N-03  | VoltGrid    | 18.9%    | 21.8%     | 12.9%   | 6.4%   | 3.1%       | ⚠ Abnormal |
| B-440-E-01  | NexaInstall | 4.1%     | 4.6%      | 2.3%    | 1.1%   | 0.5%       | Normal     |

### Threshold Evaluation Result

Batch B-440-N-03 breaches deterministic trigger logic

## Required condition

<div class="flex flex-col gap-0.5">
<span>(TR-01 OR TR-02)</span>
<span>AND</span>
<span>Two of TR-04 → TR-08</span>
<span>AND</span>
<span>TR-09 present</span>
<span>AND</span>
<span>TR-10 exclusion cleared</span>
</div>

## Result

<span class="text-green-700">✔</span> Pattern candidate batch identified

<br>

> Routing to → <strong>Subset Isolation Agent</strong>

<br>

---

**🤖 Subset Isolation Agent is thinking…**

<br>

> Isolating meters contributing to anomaly signature.

<br>

### Meter Subset Extracted
| Meter | Batch       | Contractor | MDM Fail | Comm Fail | Voltage | Visits | Complaint |
|-------|-------------|------------|----------|-----------|---------|--------|-----------|
| 10345 | B-440-N-03  | VoltGrid   | 20%      | 22%       | 5       | 2      | Yes       |
| 10346 | B-440-N-03  | VoltGrid   | 17%      | 19%       | 4       | 1      | No        |
| 10347 | B-440-N-03  | VoltGrid   | 24%      | 27%       | 6       | 3      | Yes       |

<br>

> Routing to → <strong>Pattern Intelligence Agent</strong>

<br>

---

**🤖 Pattern Intelligence Agent is thinking…**

<br>

> Comparing anomaly signature against deterministic pattern catalogue.

<br>

### Evidence Panel — Pattern Library Comparison
| Pattern | Match   |
|--------|---------|
| P-219 Loose Terminal + Antenna Installation Error | Strong |
| P-103 Incomplete Commissioning                    | Partial |
| P-104 Firmware Drift                              | Weak |
| P-106 RF Coverage Issue                           | Weak |

## Result

<span class="text-green-700">✔</span> Pattern P-219 identified

<br>

> Routing to → <strong>Domain Validation Agent</strong>

<br>

---

**🤖 Domain Validation Agent is thinking…**

<br>

> Verifying evidence stack across operational systems.

<br>

### Evidence Stack Panel

Meter Example — **10347**
| Evidence Layer | Evidence                         |
|----------------|----------------------------------|
| MDM            | 24% read failure                 |
| AMI/HES        | unstable reconnect pattern       |
| RF Diagnostics | signal instability               |
| Install Closeout | commissioning incomplete       |
| Field Notes    | loose terminal + antenna misorientation |
| OMS            | outage overlap excluded          |
| Firmware comparison | normal                      |
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          bodyTemplate: `{
  "subject": "Pattern Diagnosis Confirmation Required – Meter 10347",
  "to": ["Jason@kayatech.com"],
  "content": "<div style='background-color:#F3F4F6;padding:24px;font-family:Arial,Helvetica,sans-serif;'>\
  <table width='100%' cellpadding='0' cellspacing='0' style='max-width:700px;margin:0 auto;background-color:#FFFFFF;border-radius:8px;'>\
    <tr><td style='padding:24px;color:#111827;font-size:14px;line-height:1.6;'>\
      <p>Dear Domain Specialist,</p>\
      <p>An anomaly detected in <strong>Batch B-440-N-03</strong> requires confirmation of the identified pattern before proceeding to the decision stage.</p>\
      <p><strong>Meter Example:</strong> 10347</p>\
      <h3 style='margin-top:20px;border-bottom:1px solid #E5E7EB;padding-bottom:6px;'>Evidence Summary</h3>\
      <table width='100%' cellpadding='8' cellspacing='0' style='border-collapse:collapse;border:1px solid #E5E7EB;margin-top:10px;'>\
        <tr style='background-color:#F9FAFB;font-weight:bold;'>\
          <td style='border:1px solid #E5E7EB;'>Evidence Layer</td>\
          <td style='border:1px solid #E5E7EB;'>Observation</td>\
        </tr>\
        <tr>\
          <td style='border:1px solid #E5E7EB;'>MDM</td>\
          <td style='border:1px solid #E5E7EB;'>24% read failure</td>\
        </tr>\
        <tr>\
          <td style='border:1px solid #E5E7EB;'>AMI/HES</td>\
          <td style='border:1px solid #E5E7EB;'>Unstable reconnect pattern</td>\
        </tr>\
        <tr>\
          <td style='border:1px solid #E5E7EB;'>RF Diagnostics</td>\
          <td style='border:1px solid #E5E7EB;'>Signal instability</td>\
        </tr>\
        <tr>\
          <td style='border:1px solid #E5E7EB;'>Install Closeout</td>\
          <td style='border:1px solid #E5E7EB;'>Commissioning incomplete</td>\
        </tr>\
        <tr>\
          <td style='border:1px solid #E5E7EB;'>Field Notes</td>\
          <td style='border:1px solid #E5E7EB;'>Loose terminal + antenna misorientation</td>\
        </tr>\
        <tr>\
          <td style='border:1px solid #E5E7EB;'>OMS</td>\
          <td style='border:1px solid #E5E7EB;'>Outage overlap excluded</td>\
        </tr>\
        <tr>\
          <td style='border:1px solid #E5E7EB;'>Firmware Comparison</td>\
          <td style='border:1px solid #E5E7EB;'>Normal</td>\
        </tr>\
      </table>\
      <h3 style='margin-top:24px;border-bottom:1px solid #E5E7EB;padding-bottom:6px;'>Candidate Pattern</h3>\
      <p style='background-color:#FEF3C7;padding:12px;border-radius:6px;color:#92400E;'>\
      <strong>P-219 – Loose Terminal + Antenna Installation Error</strong>\
      </p>\
      <p>Please review the evidence and confirm the diagnosis.</p>\
      <h3 style='margin-top:24px;border-bottom:1px solid #E5E7EB;padding-bottom:6px;'>Action Required</h3>\
      <p>Kindly reply with the following confirmation:</p>\
      <p style='font-weight:bold;color:#16A34A;'>✔ Confirm Pattern Diagnosis</p>\
      <p style='margin-top:24px;'>Regards,<br/><strong>SMOIS Workflow Engine</strong></p>\
    </td></tr>\
  </table>\
  </div>"
}`,
          waitingConfirmation: true,
          waitingMessage: "Awaiting for Approval",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "HITL Approved",
        },
      ],
    },
    {
      message: "HITL Approved",
      response: `
**Human Review Received**  

## Result

<span class="text-green-700">✔</span> Pattern diagnosis confirmed.

<br>

> Routing to → <strong>Decision Intelligence Agent </strong>

<br>

---

**🤖 NAF Decision Agent is thinking…**

<br>

> Applying Next Action Framework (NAF).

<br>

### NAF Rubric 
| Dimension                      | Weight |
|--------------------------------|--------|
| Resolution Likelihood          | 30%    |
| Operational Cost Efficiency    | 15%    |
| Service Restoration Speed      | 10%    |
| Customer Impact Reduction      | 10%    |
| Recurrence Prevention          | 10%    |
| Commercial Exposure Mitigation | 15%    |
| Revenue Protection             | 10%    |

### Evidence Panel — Action Scoring

Meter 10347

| Action              | Score |
|---------------------|-------|
| A4 Combined Maintenance | 87.6 |
| A2 Torque Only      | 63.1  |
| A5 Replacement      | 62.8  |
| A1 Remote Diagnostics | 23.8 |

## Result

<span class="text-green-700">✔</span> A4 Combined Maintenance recommended.

<br>

> Routing to → <strong>HITL Governance Checkpoint</strong>

<br>

---

**🤖 HITL Checkpoint — Meter Operations Governance Agent is thinking…**

<br>

### Decision Panel
| Role                     | Lens                   |
|--------------------------|------------------------|
| Head of Meter Operations | operational approval   |
| Field Engineering Lead   | technical validation   |
| Vendor Manager           | contractor governance  |
| Customer Operations      | service impact         |
| Commercial Asset Lead    | warranty exposure      |

Enter 'Approve' to Confirm

<br>

> Awaiting Approval...
`,
    },
    {
      message: "Approve",
      response: `
> Actions approved.

<br>

### Decision
| Role                     | Lens                  | Decision  |
|--------------------------|----------------------|-----------|
| Head of Meter Operations  | operational approval  | Approved  |
| Field Engineering Lead    | technical validation  | Approved  |
| Vendor Manager            | contractor governance | Approved  |
| Customer Operations       | service impact        | Approved  |
| Commercial Asset Lead     | warranty exposure     | Approved  |

<br>

> Routing to → <strong>Execution PMO Agent</strong>

<br>

---

**🤖 Execution PMO Agent is thinking…**

<br>

> Launching remediation tasks.

<br>

### Execution PMO Tracker

Meter 10347

| Task | Owner | Budget |
|-----|------|------|
| Correct terminal torque | Technician | $30 |
| Reposition antenna | Technician | $30 |
| Complete commissioning closeout | Technician | $20 |
| Run validation test | Technician | $12 |
| Monitor 30-day stability | Ops Analyst | $12 |

Total execution budget : <strong>$145</strong>

<br>

> Routing to → <strong>RCA Investigation Agent</strong>

<br>

---

**🤖 RCA Investigation Agent is thinking…**

<br>

> Evaluating root cause hypotheses.

<br>

### Hypothesis Evaluation
| Hypothesis | Result |
|------------|--------|
| Combined installation defect | <span class="text-green-600">Validated</span> |
| Firmware mismatch | <span class="text-red-600">Rejected</span> |
| Manufacturing defect | <span class="text-red-600">Rejected</span> |
| RF coverage issue | <span class="text-red-600">Rejected</span> |
| Incomplete commissioning | <span class="text-amber-600">Partial</span> |

### Final RCA

## Primary cause

Loose terminal connection + antenna orientation error during contractor installation. 

## Contributory factor

Incomplete commissioning closeout. 

<br>

> Routing to → <strong>CAPA Governance Agent</strong>

<br>

---

**🤖 CAPA Governance Agent is thinking…**

<br>

> Launching preventive control program.

<br>

### Preventive CAPA Program
| CAPA | Owner | Budget |
|------|------|--------|
| Installation SOP update | Engineering Standards | $4,500 |
| Checklist revision | Engineering Standards | $2,800 |
| Contractor retraining | Vendor Manager | $8,500 |
| Post-install QA sampling | Meter Ops Analytics | $3,200 |

<br>

> Routing to → <strong>Communications Agent</strong>

<br>

---

**🤖 Communications Agent is thinking…**

<br>

> Preparing stakeholder communications.

<br>

### Stakeholder Communications
| Audience | Purpose |
|----------|---------|
| Alpha Energy Supplier | Issue transparency |
| John Doe (consumer) | maintenance visit |
| VoltGrid contractor | quality exception |
| Service desk | support alignment |

<br>

> Routing to → <strong>Audit Governance Agent</strong>

<br>

---

**🤖 Audit Governance Agent is thinking…**

<br>

> Recording lifecycle events.

<br>

### Audit Event Register
| Timestamp | Event | Entity | Recorded By | Key Content |
|-----------|------|--------|-------------|-------------|
| Day 90 08:10 | AI draft pattern created | DP-219 | Pattern Engine | recurring deterministic signature observed |
| Day 90 10:25 | pattern finalized | P-219 | Domain Specialist | final pattern name, scope, exclusions, activation |
| Day 91 08:40 | MDM trigger | B-440-N-03 | Monitoring Engine | read failure threshold breached |
| Day 91 08:55 | AMI trigger | B-440-N-03 | Monitoring Engine | communication instability detected |
| Day 91 09:20 | meter subset extracted | 10345/10346/10347 | Ops Analyst | anomaly subset created |
| Day 91 11:00 | pattern mapping completed | subset case | Pattern Engine | P-219 strongest fit |
| Day 93 09:00 | action scoring completed | meters | Decision Engine | A2/A3/A4 highest ranked |
| Day 93 13:00 | HITL approval | committee | Head Meter Ops | actions approved |
| Day 94 10:00 | RCA issued | case | RCA Lead | installation defect validated |
| Day 94 15:30 | CAPA approved | CAPA record | Governance Board | preventive program launched |
| Day 97 14:00 | maintenance complete | 10345 | Technician | torque corrected |
| Day 98 12:40 | maintenance complete | 10347 | Senior Technician | combined remediation completed |
| Day 120 14:00 | contractor retraining completed | VoltGrid | Training Lead | training completed |

#### SMOIS Command Center

### Fleet Metrics
| KPI | Value |
|-----|------|
| Meters monitored | 112, 430 |
| Installation batches analyzed | 22 |
| Anomaly batches detected | 1 |
| Contractors monitored  | 3 |
| Meters requiring remediation   | 840 |
| CAPA programs launched   | 1 |

### FINAL STATE

Installation Quality Issue Status

| Batch | Status |
|-------|--------|
| B-440-N-03 | 🟢 Remediated |

### End State

- Installation defects detected within new installations deployed in the last 90 days.
- Installation quality anomaly identified 
- Root cause diagnosed (Pattern P-219) 
- Corrective field actions executed 
- Contractor governance enforced 
- Preventive CAPA program launched 
- Operational health restored 
- Full lifecycle audit trail preserved
`,
    },
  ]),
);
