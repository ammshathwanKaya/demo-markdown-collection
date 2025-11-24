// https://sharetext.io/57afec8e

localStorage.setItem(
  "demo_4438ec8a-c9e6-4372-ab98-f2ed2bc038c9",
  JSON.stringify([
    {
      message: "Review and plan fault management for London",
      response: `
🤖 **Fault Management Agent is thinking...**  

> Initiating end-to-end workflow…  

---

🤖 **Health Monitoring Agent is thinking...** 
<br>
> Collecting operational parameters, external and environmental parameters…  

> Accessing Health Assessment Rules Knowledge Base… 

**Scan Window:** 29 July 2025, 00:00–06:00 GMT  
**Coverage Region:** Greater London (Central, East, North, South, West)  

#### Health Assessment  

### 1. Operational Parameters Considered  
- Real-time network KPIs: latency, uptime, packet loss  
- Rolling 90-day incident trends by postcode  
- Average daily usage per postcode sector  
- SLA adherence benchmarks by service type  
- Postcode overlays using upgrade timelines and last maintenance  

### 2. External & Environmental Parameters Considered  
- Weather forecast APIs  
- Special event impact data  
- Peak usage alerts  
- Complaint rate spike alerts  

---

#### Composite Area-Based Deviation Scores  

| Parameter               | East London | Central London | North London | South London | West London |
|-------------------------|-------------|----------------|--------------|--------------|-------------|
| Latency (ms)            | 85          | 72             | 66           | 71           | 64          |
| Uptime (%)              | 96.2        | 98.0           | 99.3         | 98.5         | 99.6        |
| Packet Loss (%)         | 1.1         | 0.5            | 0.2          | 0.3          | 0.1         |
| 90-day Incident Spike (%) | +22%     | -2%          | -5%        | —            | -6%       |
| Avg Daily Usage vs Baseline (%) | -6.5%    | Stable         | +1%          | Stable       | +1.2%       |
| SLA Breach Trend (%)    | +18%      | -2%          | -3%        | Normal       | Stable      |
| Infra Age / Last Upgrade | Legacy GEA (2018) | Mixed (2019–2023) | Upgraded (2023) | Partial FUL Refresh (2021) | Modernized (2022–2024) |
| Weather Alert (API)     | Heavy rain W–F | Light rain   | Clear skies | Cloudy    | Clear skies |
| Special Event Impact    | None        | None           | None         | None         | None        |
| Peak Usage Alerts       | Friday (Stratford) | Friday (Soho) | None        | None         | None        |
| Complaint Spike Alerts  | Ilford, Stratford | Soho, Canary Wharf | Normal | Minor | Normal |
| **Final Composite Health Score** | **61 / 100** | **69 / 100** | **84 / 100** | **77 / 100** | **89 / 100** |

---

🤖 **Risk & Fault Detection Agent is thinking...**  

> Accessing Health Assessment Rules Knowledge Base… 

#### Network Health Report - Regional Health Summary  
**Date:** 29 July 2025  

| Region        | Composite Health Score | Health Status | Risk Level |
|---------------|------------------------|---------------|------------|
| East London   | 61 / 100               | Degraded   | High Risk |
| Central London | 69 / 100             | Moderate   | Elevated |
| North London  | 84 / 100               | Healthy     | Low Risk |
| South London  | 77 / 100               | Healthy     | Low Risk |
| West London   | 89 / 100               | Healthy     | Low Risk |

---

🤖 **Fault Detection Agent thinking...**  

#### Critical Region: East London  
- **Latency & Packet Loss:**  
  - Latency: 85 ms (↑ baseline by 17%)  
  - Packet Loss: 1.1% (above SLA threshold of 0.5%)  
- **Device Health:** 2 nodes unresponsive in Ilford and Stratford  
- **Incident History:** 22% spike in faults (last 90 days)  
- **Weather Risk:** Heavy rain forecast Wed–Fri → risk of rain-induced faults  
- **Complaints:** Elevated in Ilford and Stratford  
- **SLA Breaches:** +18% trend increase in past week  
- **Infrastructure:** Legacy GEA lines (last upgraded 2018)  

#### Faults Detected:  
- Intermittent Combined Service outage in Ilford  
- Forecasted signal degradation in Stratford  

#### Watch Zone: Central London  
- **Peak Usage Alert:** Friday spike expected in Soho  
- **Complaint Increase:** Detected in Soho, Canary Wharf  
- **Latency:** Elevated in Canary Wharf – 120 ms  
- **SLA Breaches:** Minor decrease (–2%), but volatility present  
- **Infrastructure:** Mixed age (2019–2023)  

#### Faults Detected: 
- SLA breach from enterprise client – Canary Wharf  
- Load saturation forecast – Soho  
 
#### Stable Zones: North London  
- Strong uptime (99.3%), low fault rates, upgraded infra  
- No anomalies or complaint spikes   

#### Stable Zones: South London  
- Stable KPIs; slight complaint uptick due to marathon spillover  
- No current faults detected

#### Stable Zones: West London  
- Best performing region   
- Modernized infrastructure, minimal events or fault risks 

---

🤖 **Ticket Generation Agent is thinking...**  

#### Ticket Derivation & Classification  

<table class="table-auto w-full border-collapse">
  <thead>
    <tr>
      <th class="border p-2 text-left">Ticket ID</th>
      <th class="border p-2 text-left">Location</th>
      <th class="border p-2 text-left">Postal Code</th>
      <th class="border p-2 text-left">Product Type</th>
      <th class="border p-2 text-left max-w-[400px] whitespace-normal break-words align-top">Fault Issue Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-2">FT-005</td>
      <td class="border p-2">Canary Wharf</td>
      <td class="border p-2">E14 5AB</td>
      <td class="border p-2">Business Fibre (Ethernet)</td>
      <td class="border p-2 max-w-[400px] whitespace-normal break-words align-top"><strong>Enterprise Ethernet SLA breach:</strong> Point-to-point circuit experiencing packet loss &gt;2%, latency spikes above 150ms. Impacts financial services tenant requiring high availability. Logged via CRM with regulatory penalty risk.</td>
    </tr>
    <tr>
      <td class="border p-2">FT-003</td>
      <td class="border p-2">Ilford</td>
      <td class="border p-2">IG1 1AG</td>
      <td class="border p-2">Legacy Copper</td>
      <td class="border p-2 max-w-[400px] whitespace-normal break-words align-top"><strong>Copper Line Instability:</strong> Multiple disconnections and low sync speeds (&lt;5 Mbps) reported by residential users. DSL line shows high loop resistance and noise. Infrastructure &gt;12 years old, not upgraded to FTTP. Complaint spike over past 72 hours.</td>
    </tr>
    <tr>
      <td class="border p-2">FT-001</td>
      <td class="border p-2">Tower Hamlets</td>
      <td class="border p-2">E1 5LP</td>
      <td class="border p-2">Legacy Copper</td>
      <td class="border p-2 max-w-[400px] whitespace-normal break-words align-top"><strong>Ethernet-over-copper node drop:</strong> GEA link drops detected intermittently on VDSL backhaul node. Line card flagged for hardware degradation. Residents report repeated buffering and sync loss. Area scheduled for fibre migration but still on copper.</td>
    </tr>
    <tr>
      <td class="border p-2">FT-002</td>
      <td class="border p-2">Stratford</td>
      <td class="border p-2">E15 1XQ</td>
      <td class="border p-2">Fibre</td>
      <td class="border p-2 max-w-[400px] whitespace-normal break-words align-top"><strong>Rain-predicted fibre signal degradation:</strong> Sudden attenuation increases flagged by telemetry during weather onset. Node temperature variance suggests minor ingress or sealing failure at street cabinet. Preemptive ticket raised to avoid service outage.</td>
    </tr>
    <tr>
      <td class="border p-2">FT-004</td>
      <td class="border p-2">Soho</td>
      <td class="border p-2">W1D 3QB</td>
      <td class="border p-2">Fibre</td>
      <td class="border p-2 max-w-[400px] whitespace-normal break-words align-top"><strong>Planned load saturation risk:</strong> Soho fibre aggregation point expected to exceed capacity Friday evening due to local event + peak usage (200% baseline). The current margin is insufficient. Forecasted contention may breach QoS SLAs. The maintenance team required to inspect the uplink load balancer.</td>
    </tr>
  </tbody>
</table>

---

🤖 **Prioritization Agent is thinking...**  

> Initiating prioritization…   
> Accessing Prioritization Logic Knowledge Base…   

##### Prioritization Inputs Considered  

| Factor                     | Description | Weight |
|----------------------------|-------------|--------|
| Severity & Fault Impact    | SLA breach, service outage, customer type (residential vs business) | 30% |
| SLA Commitment Window      | How soon SLA expires | 20% |
| Customer Type              | Enterprise/business vs residential | 15% |
| Product Strategic Value    | Aligns with Openreach goals  | 15% |
| Complaint & Risk Index     | CRM complaints, regulatory or financial exposure | 10% |
| Repair Complexity & Skills | Scarcity of required technician skills  | 10% |

#### Prioritized Ticket List  

| Ticket ID | Fault Summary | Product Type | Final Score | Assigned Priority | Justification |
|-----------|---------------|--------------|-------------|------------------|---------------|
| FT-005    | Enterprise SLA breach (packet loss) | Business Fibre (Ethernet) |  95 | P1 | Enterprise client; SLA breach; penalty risk; mission-critical service |
| FT-003    | Combined outage (residential cluster) | Legacy Copper (Combined) | 84 | P1 | High-density complaints; repeated outages; vulnerable population |
| FT-001    | Ethernet-over-copper node instability | Legacy Copper (GEA) | 77 | P2 | Confirmed degradation but stable SLA window and fewer complaints |
| FT-002    | FTTP degradation (weather-triggered) | Fibre (FTTP) | 74 | P2 | Future degradation; fibre priority; but not impacting service yet |
| FT-004    | Fibre load saturation forecast | Fibre (GEA) | 68 | P3 | Future load risk; non-critical; outside current SLA window |

---

🤖 **Governance Agent is thinking...**  

**JIRA Ticket Raised for Human Review**  
This ticket is auto-generated using KAYA’s JIRA connector.  

**View the JIRA ticket:** [KAP-2026](https://techlabsglobal.atlassian.net/browse/KAP-2026?target=_blank)  

**Important**  
- Review all ticket priority codes (P1, P2, P3) based on the proposed matrix  
- Approve, reject, or override based on operational knowledge and real-time conditions  
- Update the attached Excel file with any changes  
- Add comments if overriding any system recommendation  

**Once approved:**  
- Mark the JIRA ticket as "Done"  
- This triggers Technician team slot confirmation  
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
          bodyTemplate:
            '{"subject":"Websocket Initiated","to":["ammshathwan@kayatech.com"],"content":"Websocket call initiated!"}',
          waitingConfirmation: true,
          waitingMessage: "Awaiting JIRA updates",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "JIRA updated",
        },
      ],
    },
    {
      message: "JIRA updated",
      response: `**Human Review Received**  

🤖 **Governance Agent Thinking…**  

**Updated Priority Assignments** have been saved.  

---
🤖 **Ticket Generation Agent is thinking...**  

Recording all the tickets in the CRM. 

Technician Slot Optimization will now proceed using the approved priority set.  

---

🤖 **Slot Optimizer Agent is thinking…**  

> Accessing Technician Roaster…

### Technician Teams Available – 29 July 2025  

| Team ID | Team Members | Base Region       | Skills Covered                    | Daily Capacity | Availability |
|---------|---------|-------------------|-----------------------------------|----------------|--------------|
| T01     | James R, Alice J     | Stratford Depot   | FTTP, GEA, Ethernet               | 4 tickets/day  | Full Day     |
| T02     | Suki M, Ramesh P     | Ilford Exchange   | Copper (Combined, GEA), DSL Repair | 3 tickets/day  | AM Only      |
| T03     | John T, Praveen K     | Camden Hub        | GEA, FTTP, Maintenance            | 4 tickets/day  | PM Only      |

---

### Optimized Assignment by Ticket  

| Ticket ID | Priority | Location       | Postal Code | Product Type          | Assigned Team            | Slot Time | Travel Time (Clustered) | Skill Match |
|-----------|----------|----------------|-------------|------------------------|---------------------------|-----------|--------------------------|-------------|
| FT-005    | P1       | Canary Wharf   | E14 5AB     | Business Fibre         | T01     | AM        | 12 min (from Stratford)  | Yes    |
| FT-003    | P1       | Ilford         | IG1 1AG     | Legacy Copper          | T02     | AM        | 9 min (local base)       | Yes    |
| FT-001    | P2       | Tower Hamlets  | E1 5LP      | Legacy Copper          | T02     | AM        | 14 min                   | Yes         |
| FT-002    | P2       | Stratford      | E15 1XQ     | FTTP                   | T01     | PM        | 12 min                   | Yes        |
| FT-004    | P3       | Soho           | W1D 3QB     | Fibre                  | T03     | PM        | 17 min (Camden → Soho)   | Yes         |

---

**All technician teams were assigned based on:**  

- Fault severity  
- Skill match  
- Base proximity  
- Slot availability  
- Avoiding unnecessary travel  

---

🤖 **Technician Dispatch Agent is thinking…**  

All technician teams have been notified of their assignments via the internal dispatch system

Job cards, route plans, and SLA timers have been synced to field devices for execution.
`,
    },
  ])
);
