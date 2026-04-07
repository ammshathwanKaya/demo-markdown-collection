localStorage.setItem(
  "demo_a716a53e-392a-41c1-98d1-687771fc330a",
  JSON.stringify([
    {
      message:
        "Ensure procurement requests across the enterprise are fulfilled rapidly and compliantly — from requisition submission to purchase order issuance — while enforcing vendor governance, architecture standards, and financial controls.",
      response: `  
**🤖 Orchestration & Governance Agent is thinking…** 

Request received. 

Initializing **Enterprise Procurement Orchestration System (EPOS).** 

EPOS orchestrates procurement across: 

- sourcing governance 
- engineering validation 
- financial authorization 
- purchase order execution 
- vendor engagement initiation 
- financial commitment tracking 

Operating under **KAYA deterministic orchestration + HITL governance framework.** 

### Systems Activated 

| **Function** | **System** |
|--------------|------------|
| Procurement Platform | Coupa / Ariba |
| ERP Finance | SAP S4HANA |
| Budget Planning | Anaplan |
| Vendor Registry | Vendor Master Database |
| Contract Repository | Icertis |
| Capacity Planning | Network Planning System |
| Network Topology | Architecture Registry |
| Asset Registry | Enterprise Asset System |
| Governance | KAYA Audit Layer |

Routing to → **Structured Procurement Intake Agent** 

<br>

**🤖 Structured Procurement Intake Agent is thinking…** 

Scanning procurement platform for new procurement requests. 

Two procurement events detected. 

### Procurement Requests 

| **Attribute** | **Network Infrastructure** | **Media Production** |
|---------------|---------------------------|---------------------|
| PR Number | ACM-PR-77102 | ACM-PR-77103 |
| Requester | Director, Network Engineering | Production Operations Manager |
| Location | Chicago Network Hub | Acme Studios – Los Angeles |
| Vendor | NetCore Systems | MediaTech Supply |
| Estimated Value | $420K | $185K |
| Category | Core Router Upgrade | Broadcast Camera Equipment |

Routing to → **Procurement Intelligence Cluster** 

<br>

**🤖 Procurement Intelligence Agent is thinking…** 

Validating sourcing governance and vendor eligibility. 

<br>

**Evidence Panel — Vendor Validation** 

**Network Vendor** 

Data retrieved 

| **System** | **Data** |
|------------|----------|
| Vendor Registry | NetCore Systems – Approved Vendor |
| Vendor Risk | Risk Score: Low |
| Contract Repository | Contract NEA-4478 |

**Reference rule** 

Network infrastructure vendors must be Tier-1 approved vendors 

**Evaluation

Vendor NetCore Systems 

Tier-1 Vendor Status: Approved 

Risk Rating: Low 

**Result** 

✅ Vendor eligible. 

<br>

**Media Equipment Vendor** 

Data retrieved 

| **System** | **Data** |
|------------|----------|
| Vendor Registry | MediaTech Supply – Approved Media Vendor |
| Vendor Risk | Risk Score: Low |
| Contract Repository | Contract MEDIA-SUP-2211 |

**Reference rule** 

Broadcast production equipment must be sourced from approved studio equipment vendors 

**Evaluation** 

Vendor MediaTech Supply 

Approved Media Equipment Vendor 

**Result** 

✅ Vendor eligible. 

<br>

Routing to → **Architecture Compliance Agent** 

<br>

**🤖 Architecture Compliance Agent is thinking…** 

Validating technical compatibility. 

<br>

**Evidence Panel — Network Router Validation** 

Data retrieved 

| **System** | **Data** |
|------------|----------|
| Topology Registry | Core Backbone Network |
| Capacity Planning | Traffic Forecast |
| Vendor Catalog | Router Series X |

**Evaluation** 

Current network capacity: 5 Tbps 

Projected demand: 6.5 Tbps 

Router capacity: 8 Tbps 

**Reference standard** 

Infrastructure must support forecast demand with 20% capacity margin 

**Result** 

⚠ Conditional capacity margin. 

<br>

**Evidence Panel — Media Equipment Validation** 

Data retrieved 

| **System** | **Data** |
|------------|----------|
| Studio Systems Registry | Broadcast Control Platform |
| Vendor Catalog | 4K Broadcast Camera Rig |
| Production Requirements | 4K HDR Recording |

**Evaluation** 

Camera resolution: 4K HDR 

Studio compatibility: Supported 

Control system integration: Verified 

**Reference standard** 

Production equipment must support 4K HDR broadcast standards 

**Result** 

✅ Compatible. 

<br>

**Conditional Validation (Network Case)** 

Requester clarification required. 
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
  "subject": "Clarification Required: Core Router Upgrade Capacity Validation",
  "to": ["jason@kayatech.com"],
  "content": "<div style='background-color:#F3F4F6;padding:24px;font-family:Arial,Helvetica,sans-serif;'>\
    <table width='100%' cellpadding='0' cellspacing='0' style='max-width:700px;margin:0 auto;background-color:#FFFFFF;border-radius:8px;'>\
      <tr><td style='padding:24px;color:#111827;font-size:14px;line-height:1.6;'>\
        <p>Dear Team,</p>\
        <p>During the architecture capacity validation for the Core Router Upgrade request (PR ACM-PR-77102), the current assessment indicates that the projected demand may approach the capacity threshold under the existing infrastructure plan.</p>\
        <p>Before proceeding with the approval, we require clarification on how the proposed procurement aligns with the planned network expansion and capacity roadmap.</p>\
        <p><strong>Specifically, please confirm:</strong></p>\
        <ul style='margin-top:6px;padding-left:18px;'>\
          <li>Whether additional infrastructure upgrades are planned as part of the upcoming network upgrade cycle</li>\
          <li>Whether the current purchase is intended as an interim capacity expansion</li>\
          <li>Whether the upgrade roadmap has been reviewed and verified</li>\
        </ul>\
        <p>Kindly provide clarification so that the validation process can proceed.</p>\
        <p style='margin-top:24px;'>Regards,<br/>Architecture Review Team</p>\
      </td></tr>\
    </table>\
  </div>"
  }`,
          waitingConfirmation: true,

          // Message to display during waiting state
          waitingMessage: "Awaiting Request Clarification",

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
**Result** 

✅ Conditional requirement satisfied. 

<br>

Routing to → **HITL Engineering Authority** 

<br>

**🤖 HITL Checkpoint — Engineering Authority** 

Engineering decision panel. 

| **Validation** | **Network** | **Media Equipment** |
|----------------|-------------|---------------------|
| Architecture Compatibility | ✅ | ✅ |
| Capacity Validation | ✅ (conditional cleared) | ✅ |
| Security Compliance | ✅ | ✅ |

Pending Approval from Engineering Authority: **Enter ‘Approve’ to proceed:** 
 
`,
    },
    {
      message: "Approve",
      response: `
**Decision** 

Engineering approval granted. 

Routing to → **Financial Governance Agent** 

<br>

**🤖 Financial Governance Agent is thinking…** 

Validating budget and financial exposure. 

<br>

**Evidence Panel — Financial Validation** 

**Network Infrastructure** 

Data retrieved

- Annual infrastructure budget: $18M 
- Committed spend: $12.6M 
- Remaining budget: $5.4M 
- Requested spend: $420K 

**Reference rule** 

Purchases must not exceed approved budget allocation 

**Result** 

✅ Budget available. 

<br>

**Media Production Equipment** 

Data retrieved

- Production equipment budget: $3.2M 
- Committed spend: $2.7M 
- Remaining budget: $500K 
- Requested spend: $185K 

**Result** 

✅ Budget available. 

<br>

Routing to → **HITL Financial Authorization**

<br>

**🤖 HITL Checkpoint — Financial Authorization** 

Finance controller reviews exposure. 

| **Request** | **Financial Exposure** | **Result** |
|-------------|------------------------|------------|
| Network Infrastructure | $420K | Approved |
| Media Equipment | $185K | Approved |

Finance approval granted. 

<br>

Routing to → **PO Generation Agent** 

<br>

**🤖 PO Generation Agent is thinking…** 

Generating enterprise purchase orders. 

### Purchase Orders Generated 

| **PO Number** | **Vendor** | **Value** |
|---------------|------------|-----------|
| ACM-PO-98214 | NetCore Systems | $420K |
| ACM-PO-98215 | MediaTech Supply | $185K |

### Generated Purchase Orders 

| **Field** | **Network Infrastructure** | **Media Equipment** |
|-----------|---------------------------|---------------------|
| Vendor | NetCore Systems | MediaTech Supply |
| Ship To | Chicago Network Hub | Acme Studios LA |
| Payment Terms | Net 45 | Net 30 |
| Line Items | Router Series X (4 units) | 4K Broadcast Camera Rig (5 units) |

**Download Media Production Equipment PDF Here:** <a href="https://drive.google.com/uc?export=download&id=1toEC8mTVNpAzEcq8LmqyyWbtPZDXTME_" download="acme_PO_media_production_equipment.pdf">acme_PO_media_production_equipment.pdf</a>

**Download Network Infrastructure PDF Here:** <a href="https://drive.google.com/uc?export=download&id=1sCq1HiGrbBbSqNhd33BxxRmgYXX_ObHx" download="acme_PO_network_infrastructure.pdf">acme_PO_network_infrastructure.pdf</a>

<br>

Routing to → **PO Distribution Agent**

<br>

**🤖 PO Distribution Agent is thinking…** 

Distributing purchase orders. 

### Vendor Notification 

| **Vendor** | **Status** |
|------------|------------|
| NetCore Systems | PO Delivered |
| MediaTech Supply | PO Delivered |

Vendor receives: 
- Purchase Order 
- Delivery location 
- Payment terms 
- Contract reference 

### Requester Notification 

| **Requester** | **Status** |
|---------------|------------|
| Network Engineering Director | PO Issued |
| Production Operations Manager | PO Issued |

Routing to → **Financial Setup Agent**

<br>

**🤖 Financial Setup Agent is thinking…** 

Recording procurement commitments. 

### Financial Systems Updated 

| **System** | **Network** | **Media** |
|------------|-------------|-----------|
| ERP Finance | AP Commitment Created | AP Commitment Created |
| Budget Ledger | CapEx Recorded | CapEx Recorded |
| Cash Forecast | Payment Schedule Registered | Payment Schedule Registered |

**Operational Lifecycle Handoff** 

Procurement orchestration complete. 

Operational lifecycle transitions to downstream platforms (AP, Vendor Management etc.). 

<br>

Routing to → **Procurement Command Center**

<br>

**📊 Procurement Command Center Dashboard** 

### Procurement Metrics 

| **KPI** | **Value** |
|---------|-----------|
| Procurement Requests Processed | 312 |
| Average Procurement Cycle | 3.5 days |
| Vendor Compliance Rate | 98% |
| Contract Utilization | 94% |

### Risk Signals 

| **Risk** | **Count** |
|----------|-----------|
| Pricing deviations | 3 |
| Non-preferred vendors | 5 |
| Contract violations | 1 |

**🧭 Parallel Procurement Timeline** 

| **Stage** | **Network Infrastructure** | **Media Equipment** |
|-----------|---------------------------|---------------------|
| PR Submission | Router Upgrade Requested | Camera Equipment Requested |
| Validation | Architecture + Capacity Validation | Production Compatibility Validation |
| Approvals | Engineering + Finance | Engineering + Finance |
| PO Issued | ACM-PO-98214 | ACM-PO-98215 |
| Vendor Engagement | NetCore Systems | MediaTech Supply |

### FINAL STATE 

| **Procurement Request** | **Status** |
|-------------------------|------------|
| Network Infrastructure Purchase | 🟢 Completed |
| Media Production Equipment Purchase | 🟢 Completed |

**End State** 

- Procurement Authorized 
- Vendor Engagement Initiated 
- Financial Commitments Recorded 
- Operational Lifecycle Transitioned 
- Audit Trail Preserved
`,
    },
  ]),
);
