localStorage.setItem(
  "demo_cb9ed331-5e5e-41bd-a468-096a86eb5bda",
  JSON.stringify([
    {
      message:
        "Optimize the order backlog to maximize revenue and minimize penalties within lifecycle, supplier, capacity, and staffing constraints. Prioritize orders, validate feasibility, resolve blockers, execute actions, and expose full portfolio trade-offs with audit.",
      response: `
<br>

> Initializing the Kaya BACKLOG EXECUTION OPTIMIZATION i-FLOW

<br>

**From constrained order book to optimized, explainable, executable delivery decisions**

This Kaya i-Flow does not merely rank orders. It determines:
- which orders can realistically be reprioritized  
- which orders should be accelerated, maintained, protected, or deferred  
- which blockers should be resolved and why  
- what downside is created elsewhere in the portfolio  
- whether that downside is certain or probabilistic  
- what mitigation is available  
- where staffing risk exists  
- what actions should be triggered in execution systems  
- where HITL (Human In The Loop) approval is required  
- and how every decision is audited

## SYSTEMS ACTIVATED
| Function                                 | System / Source                          |
|------------------------------------------|------------------------------------------|
| Order, value, dates, GM                  | ERP                                      |
| Strategic tier / account context         | CRM                                      |
| Contract penalties / clauses             | CLM + contract PDFs                      |
| Lifecycle stage / plant slot             | MES                                      |
| Components / supplier ETA                | SCM + supplier emails                    |
| Site readiness / delivery plan           | PMO tracker + PMO reports                |
| Logistics assumptions                    | TMS                                      |
| Staffing status / role coverage          | Staffing sheet + HR status feed          |
| Approvals / action orchestration         | Kaya workflow layer                      |
| Ticketing / work execution               | JIRA / PMO work management               |
| Procurement / supplier actions           | SCM / purchasing workflow                |
| Talent requisition                       | HR workflow / requisition system         |

## ILLUSTRATIVE ORDER BOOK — INPUT STATE

### Sources used for this view

**Structured sources**
- ERP: order ID, customer, order value, secured date, base gross margin, target dates  
- MES: lifecycle stage, plant slot status  
- CRM: strategic tier, account criticality  
- SCM: component PO status, supplier committed dates  
- TMS: standard transit assumptions  
- Staffing sheet: role requirement, assignment status, backup status

**Unstructured / semi-structured sources**
- contract PDF / order form: penalty clauses, milestone obligations  
- PMO site-readiness report: customer/site preparedness  
- supplier email thread: revised ETA for delayed components  
- account notes: executive sensitivity / special handling  
- delivery notes: on-site constraints

### Current open order set in scope
| Order | Customer       | Value ($M) | Base GM % | Secured Days Ago | Current Stage             | SLA Days Left | Penalty $/Day | Strategic Tier | Key Delivery Constraint        | Staffing Status              |
|-------|----------------|------------|-----------|------------------|---------------------------|---------------|----------------|----------------|--------------------------------|------------------------------|
| O-101 | Hyperscaler A  | 45         | 18        | 40               | Procurement Initiated     | 30            | 150K           | Tier 1         | Cooling units delayed          | Cooling SME shortfall        |
| O-102 | Enterprise B   | 12         | 28        | 20               | Engineering Design        | 45            | 25K            | Tier 3         | No critical blocker            | Adequately staffed           |
| O-103 | Hyperscaler C  | 60         | 15        | 35               | Procurement Initiated     | 25            | 200K           | Tier 1         | Site readiness incomplete      | Site engineer backup risk    |
| O-104 | Colocation D   | 20         | 22        | 50               | Manufacturing Scheduled   | 20            | 100K           | Tier 2         | Transformer inbound risk       | Adequately staffed           |
| O-105 | Enterprise E   | 8          | 35        | 10               | Engineering Design        | 50            | 10K            | Tier 3         | No critical blocker            | Adequately staffed           |

---

**🤖 Supervisor Agent is thinking…**

<br>

> Initializing backlog execution optimization.

> Before any optimization, loading lifecycle governance rules so Kaya only works within realistic execution boundaries.

<br>

| Stage | Description                 | Reprioritization Allowed | Rationale                                      |
|-------|-----------------------------|--------------------------|------------------------------------------------|
| 1. Order Secured           | Contract signed           | Full                     | No downstream hard commitments yet             |
| 2. Engineering Design      | Config finalized          | High                     | Engineering still adjustable                   |
| 3. Procurement Initiated   | Components ordered        | Moderate                 | Supplier commitments now exist                 |
| 4. Manufacturing Scheduled | Slot assigned             | Limited                  | Reshuffling impacts plant plan                 |
| 5. In Production           | Assembly underway         | Very Limited             | Physical execution already underway            |
| 6. Ready to Ship           | Packed                    | None                     | Delivery locked                               |
| 7. In Transit              | Shipping                  | None                     | No practical recovery path                     |
| 8. On-site Installation    | Deployment                | None                     | Customer execution in progress                 |

## Rule Engine 1 — Lifecycle Eligibility

### Purpose
Determine whether an order can be reprioritized at all, and to what extent. 

### Logic
If Stage = 1 → Reprioritization = Full

If Stage = 2 → Reprioritization = High

If Stage = 3 → Reprioritization = Moderate

If Stage = 4 → Reprioritization = Limited

If Stage = 5 → Reprioritization = Very Limited (HITL required)

If Stage ≥ 6 → Reprioritization = None (Excluded)

### Additional governance constraints

**Stage 4 constraint**

If Stage = Manufacturing Scheduled

Then reprioritization allowed only if:

Slot Disruption Cost ≤ configured threshold

AND no unapproved displacement of another protected order occurs

**Stage 5 constraint**

If Stage = In Production 

Then reprioritization requires Executive HITL approval 

AND Net Benefit must exceed override threshold 

**Stage ≥ 6 constraint**

If Stage ≥ Ready to Ship 

Then order is excluded from optimization

### Application to current orders
| Order | Stage                     | Derived Eligibility | Rule Applied | Reason                          |
|-------|---------------------------|---------------------|--------------|----------------------------------|
| O-101 | Procurement Initiated     | Moderate            | Stage 3      | Supplier commitments exist       |
| O-103 | Procurement Initiated     | Moderate            | Stage 3      | Supplier commitments exist       |
| O-104 | Manufacturing Scheduled   | Limited             | Stage 4      | Slot already assigned            |
| O-102 | Engineering Design        | High                | Stage 2      | Engineering still adjustable     |
| O-105 | Engineering Design        | High                | Stage 2      | Engineering still adjustable     |

### Audit trace captured
| Audit Field             | Value                         |
|------------------------|-------------------------------|
| Source used            | MES, ERP                      |
| Policy table version   | Lifecycle Policy v1.0         |
| Rule engine invoked    | Lifecycle Eligibility Engine  |
| Output stored          | Eligibility per order         |
| Locked-out stages      | 6, 7, 8                       |
| Special override stages| 5                             |

<br>

---

**🤖 Supervisor Agent is thinking…**

<br>

> Lifecycle boundaries established.

> Orders with Eligibility = None will never enter optimization.

> Handing eligible order set to Order Intake Agent.

<br>

---

**🤖 Order Intake Agent is thinking…**

<br>

> Loading structured and unstructured data into a normalized order view.

<br>

## Sources loaded
- ERP: value, GM, secured dates, baseline milestones  
- CRM: strategic tier, account classification  
- CLM + contract PDFs: penalties, milestone commitments  
- MES: stage, reserved manufacturing slot  
- SCM: PO status, current committed dates  
- supplier emails: revised ETA for delayed materials  
- PMO reports: site and customer readiness status  
- staffing sheet: delivery role demand and confirmed assignments  
- HR status feed: long leave / separation indicators where available

### Normalized order book view shown in Kaya
| Order | Value | GM  | Stage           | SLA | Penalty   | Strategic | Key Constraint              | Constraint Source        | Staffing Issue           |
|-------|-------|-----|------------------|-----|-----------|-----------|-----------------------------|--------------------------|--------------------------|
| O-101 | 45M   | 18% | Procurement      | 30d | 150K/day  | Tier 1    | Cooling units delay         | SCM + supplier email     | Cooling SME missing      |
| O-103 | 60M   | 15% | Procurement      | 25d | 200K/day  | Tier 1    | Site readiness incomplete   | PMO report               | No confirmed backup      |
| O-104 | 20M   | 22% | Mfg Scheduled    | 20d | 100K/day  | Tier 2    | Transformer inbound risk    | SCM                      | No material issue        |
| O-102 | 12M   | 28% | Engineering      | 45d | 25K/day   | Tier 3    | No critical blocker         | N/A                      | No material issue        |
| O-105 | 8M    | 35% | Engineering      | 50d | 10K/day   | Tier 3    | No critical blocker         | N/A                      | No material issue        |

### Audit trace captured
| Audit Field            | Value                                              |
|-----------------------|----------------------------------------------------|
| Structured sources    | ERP, CRM, MES, SCM, staffing sheet                 |
| Unstructured sources  | contract PDFs, PMO report, supplier email          |
| Extraction status     | normalized successfully                            |
| Evidence retained     | Yes, linked to order record                        |

<br>

---

**🤖 Order Intake Agent is thinking…**

<br>

> Normalized order view prepared. 

> Handing order set to Candidate Selection Agent.

<br>

---

**🤖 Candidate Selection Agent is thinking…**

<br>

> Not every eligible order should enter optimization.

> Invoking Candidate Selection Rule Engine.

<br>

## Rule Engine 2 — Candidate Selection

### Purpose
Identify which orders should enter the optimization run.

### Logic
<div>
  <div>Candidate Order =</div>
  <div>(Eligibility ∈ {Full, High, Moderate, Limited})</div>
  <div>AND</div>
  <div>(</div>
  <div>Preliminary Penalty Exposure ≥ $250K</div>
  <div>OR Strategic Tier ∈ {Tier 1, Tier 2}</div>
  <div>OR Active Critical Delivery Constraint exists</div>
  <div>OR Order Value ≥ $15M</div>
  <div>)</div>
</div>

### Thresholds
- Penalty threshold: $250K+  
- Strategic threshold: Tier 1 or Tier 2  
- Revenue threshold: $15M+  
- Delivery constraint threshold: critical blocker present 

### Application to current orders
| Order | Eligible? | Penalty Threshold Hit? | Strategic Threshold Hit? | Constraint Hit? | Revenue Threshold Hit? | Candidate? | Why                                                   |
|-------|-----------|------------------------|---------------------------|------------------|------------------------|------------|-------------------------------------------------------|
| O-101 | Yes       | Yes                    | Yes                       | Yes              | Yes                    | Yes        | High-value Tier 1 order with blocker and penalty exposure |
| O-103 | Yes       | Yes                    | Yes                       | Yes              | Yes                    | Yes        | Highest-value Tier 1 order with critical delay risk       |
| O-104 | Yes       | Yes                    | Yes                       | Yes              | Yes                    | Yes        | Stage 4 order with penalty and blocker                   |
| O-102 | Yes       | No                     | No                        | No               | No                     | No         | Eligible but low urgency and low leverage                |
| O-105 | Yes       | No                     | No                        | No               | No                     | No         | Eligible but low urgency and low leverage                |

### Audit trace captured
| Audit Field                     | Value                                                         |
|--------------------------------|---------------------------------------------------------------|
| Rule engine invoked            | Candidate Selection Engine                                    |
| Thresholds used                | Penalty 250K, Value 15M, Tier 1/2                             |
| Candidate orders selected      | O-101, O-103, O-104                                           |
| Non-candidate orders protected | O-102, O-105 unless later displacement is approved            |

<br>

---

**🤖 Candidate Selection Agent is thinking…**

<br>

> Detected 3 candidate orders for optimization and 2 non-candidate orders to be protected unless displaced by approved portfolio trade-off. 

> Handing candidate order set to Order Intelligence Agent. 

<br>

---

**🤖 Order Intelligence Agent is thinking…**

<br>

> Loading candidate order data and supporting evidence.

<br>

**Invoking:**
- Strategic Index Rule Engine  
- Margin Score Rule Engine  
- Readiness Score Rule Engine

## Rule Engine 3 — Strategic Index

### Purpose
Measure strategic importance without mixing in execution urgency or margin quality. 

### MECE dimensions
1. Account Criticality 

2. Order Scale  

3. Expansion Leverage  

4. Reference / Lighthouse Value  

5. Executive Commitment Level  

### Formula
<div>
  <div>Strategic Index =</div>
  <div>0.30(Account Criticality)</div>
  <div>+ 0.20(Order Scale)</div>
  <div>+ 0.20(Expansion Leverage)</div>
  <div>+ 0.15(Reference Value)</div>
  <div>+ 0.15(Executive Commitment)</div>
</div>

### Dimension scoring map
Each dimension scored 0–10.

### Banding
- 8.5–10.0 = Critical Strategic  
- 7.0–8.4 = High Strategic  
- 5.0–6.9 = Moderate Strategic  
- < 5.0 = Standard  

### Application

**O-103**
- Account Criticality = 10  
- Order Scale = 10  
- Expansion Leverage = 9  
- Reference Value = 8  
- Executive Commitment = 10

<div>
  <div>0.30(10) + 0.20(10) + 0.20(9) + 0.15(8) + 0.15(10)</div>
  <div>= 3.0 + 2.0 + 1.8 + 1.2 + 1.5</div>
  <div>= 9.5</div>
</div>

Band: Critical Strategic

**O-101**
- Account Criticality = 10  
- Order Scale = 8  
- Expansion Leverage = 9  
- Reference Value = 8  
- Executive Commitment = 9 

3.0 + 1.6 + 1.8 + 1.2 + 1.35 = 8.95

Band: Critical Strategic

**O-104**
- Account Criticality = 7  
- Order Scale = 5  
- Expansion Leverage = 7  
- Reference Value = 6  
- Executive Commitment = 7

2.1 + 1.0 + 1.4 + 0.9 + 1.05 = 6.45

Band: Moderate-to-High, normalized under current config to High Strategic threshold watchlist

Flagging O-104 as High Strategic under account policy override because it is a flagship colocation account with management sensitivity above standard score mapping.

## Rule Engine 4 — Margin Score

### Purpose
Measure commercial quality after likely execution/acceleration burden is considered.

### Formula
<div>
  <div>Adjusted Gross Margin % =</div>
  <div>Base Gross Margin %</div>
  <div>- Expedite Cost %</div>
  <div>- Delivery Complexity Cost %</div>
  <div>- Special Commercial Concession %</div>
  <div>- Custom Engineering / Handling Cost %</div>
</div>

### Banding
- = 30.0% = Very High 
- 24.0%–29.9% = High  
- 18.0%–23.9% = Medium  
- 12.0%–17.9% = Low  
- < 12.0% = Critical

### Application

**O-101**
- Base GM = 18%  
- Expedite cost = 2%  
- Delivery complexity cost = 1%  
- Special concession = 0%  
- Custom handling = 0% 

<div>
  <div>Adjusted GM:</div>
  <div>18 - 2 - 1 = 15%</div>
</div>

Band: Low

**O-103**
- Base GM = 15%  
- Site acceleration burden = 2%  
- Coordination complexity burden = 1%  

<div>
  <div>Adjusted GM:</div>
  <div>15 - 2 - 1 = 12%</div>
</div>

Band: Low

**O-104**
- Base GM = 22%  
- Controlled expedite burden = 1%  
- Additional handling = 0.5% 

<div>
  <div>Adjusted GM:</div>
  <div>22 - 1 - 0.5 = 20.5%</div>
</div>

Band: Medium

## Margin governance exception
<div>
  <div>If Margin Band ∈ {Low, Critical}</div>
  <div>AND Strategic Band = Critical Strategic</div>
  <div>AND Penalty Avoidance Value &gt; Strategic Exception Threshold</div>
  <div>Then escalate for HITL review rather than auto-reject</div>
</div>

This applies to O-101 and O-103.

## Rule Engine 5 — Readiness Score

### Purpose
Measure immediate executability using non-overlapping execution dimensions. 

### MECE dimensions
- Material Readiness  
- Customer / Site Readiness  
- Engineering Readiness  
- Capacity Readiness  
- Logistics Readiness  
- Compliance / Documentation Readiness  

### Formula
<div>
  <div>Readiness Score =</div>
  <div>0.25(Material Readiness)</div>
  <div>+ 0.20(Customer / Site Readiness)</div>
  <div>+ 0.15(Engineering Readiness)</div>
  <div>+ 0.15(Capacity Readiness)</div>
  <div>+ 0.15(Logistics Readiness)</div>
  <div>+ 0.10(Compliance / Documentation Readiness)</div>
</div>

Each dimension scored: 
- 100 = Ready  
- 50 = Partial  
- 0 = Not Ready

### Banding
- 85–100 = High  
- 65–84 = Medium  
- 40–64 = Low  
- < 40 = Critical

### Hard-gate rule 
<div>
  <div>If Material Readiness = 0</div>
  <div>and no approved alternate source exists</div>
  <div>Then Effective Readiness Band cannot exceed Low</div>
</div>

### Application

**O-103**
- Material = 100 
- Customer/Site = 0  
- Engineering = 100  
- Capacity = 80 
- Logistics = 75  
- Compliance = 100

<div>
  <div>0.25(100) + 0.20(0) + 0.15(100) + 0.15(80) + 0.15(75) + 0.10(100)</div>
  <div>= 25 + 0 + 15 + 12 + 11.25 + 10</div>
  <div>= 73.25</div>
</div>

Band: Medium

**O-101**
- Material = 0  
- Customer/Site = 100  
- Engineering = 100  
- Capacity = 80  
- Logistics = 80  
- Compliance = 100 

<div>
  <div>0.25(0) + 0.20(100) + 0.15(100) + 0.15(80) + 0.15(80) + 0.10(100)</div>
  <div>= 0 + 20 + 15 + 12 + 12 + 10</div>
  <div>= 69</div>
</div>

Weighted band: Medium 

Hard gate applies because Material = 0 and no approved alternate source yet. 

Effective Readiness Band: Low 

**O-104**
- Material = 80  
- Customer/Site = 100  
- Engineering = 100  
- Capacity = 60  
- Logistics = 80  
- Compliance = 100 

20 + 20 + 15 + 9 + 12 + 10 = 86

Weighted band: High

Lifecycle limitation still applies due to Stage 4, so execution headroom is constrained. 

### Order Intelligence output shown in Kaya
| Order | Strategic Index | Strategic Band              | Adjusted GM % | Margin Band | Readiness Score | Effective Readiness Band        |
|-------|------------------|-----------------------------|---------------|-------------|------------------|----------------------------------|
| O-103 | 9.5              | Critical Strategic          | 12.0          | Low         | 73.25            | Medium                           |
| O-101 | 8.95             | Critical Strategic          | 15.0          | Low         | 69.0             | Low                              |
| O-104 | 6.45 + policy watchlist | High Strategic (policy) | 20.5          | Medium      | 86.0             | High but lifecycle-constrained   |

### Audit trace captured
| Audit Field                     | Value                                              |
|--------------------------------|----------------------------------------------------|
| Rule engines invoked           | Strategic, Margin, Readiness                       |
| Inputs stored                  | Source fields + extracted evidence                 |
| Hard gate triggered            | Yes, O-101 material readiness                      |
| Governance exception triggered | Yes, O-101 and O-103 low margin but strategic      |

<br>

---

**🤖 Order Intelligence Agent is thinking…**

<br>

> Order intelligence enrichment completed.  

> Handing enriched order set to Commercial Impact Agent. 

<br>

---

**🤖 Commercial Impact Agent is thinking…**

<br>

> Accessing contract clauses, revised delay indicators, and revenue timing assumptions.

<br>

Invoking:
- Penalty Exposure Rule Engine  
- Revenue Velocity Rule Engine

### Rule Engine 6 — Penalty Exposure

## Purpose
Quantify downside of delay in a clear and auditable manner.

## Formula
Penalty Exposure = Contractual Penalty Per Day × Estimated Delay Days

## Penalty exposure banding
- = $1.5M = Critical 
- $750K–1.49M = High  
- $250K–749K = Medium  
- < $250K = Low

## Delay source logic
- supplier ETA slip from SCM / supplier email  
- site readiness delay from PMO report
- manufacturing conflict from MES  
- logistics delay from TMS 

## Application

**O-103**
- Penalty per day = $200K  
- PMO delay estimate = 10 days

200K × 10 = $2.0M

Band: Critical

**O-101**
- Penalty per day = $150K  
- Supplier ETA slip = 6 days

150K × 6 = $900K

Band: High

**O-104**
- Penalty per day = $100K  
- Transformer risk = 5 days

100K × 5 = $500K

Band: Medium

## Rule Engine 7 — Revenue Velocity

### Purpose
Measure how quickly value is realized if the order is kept on track or accelerated.

### Formula
Revenue Velocity Index = Order Value / Days to Revenue Realization

### Banding
- = 2.0 = Very High 
- 1.2–1.99 = High
- 0.7–1.19 = Medium  
- < 0.7 = Low

### Application

**O-103**

60 / 25 = 2.4 

Band: Very High 

**O-101**

45 / 30 = 1.5 

Band: High 

**O-104**

20 / 20 = 1.0 

Band: Medium

### Commercial Impact output shown in Kaya
| Order | Penalty Exposure | Penalty Band | Revenue Velocity Index | Revenue Velocity Band |
|-------|------------------|--------------|------------------------|------------------------|
| O-103 | 2.0M             | Critical     | 2.4                    | Very High              |
| O-101 | 0.9M             | High         | 1.5                    | High                   |
| O-104 | 0.5M             | Medium       | 1.0                    | Medium                 |

### Audit trace captured
| Audit Field               | Value                                                                 |
|--------------------------|-----------------------------------------------------------------------|
| Rule engines invoked     | Penalty, Revenue Velocity                                             |
| Evidence stored          | Contract clause excerpt, PMO delay note, supplier ETA note            |
| Order-level outputs stored | Yes                                                                 |

<br>

---

**🤖 Commercial Impact Agent is thinking…**

<br>

> Commercial impact enrichment completed. 

> Handing candidate order set to Prioritization Agent. 

<br>

---

**🤖 Prioritization Agent is thinking…**

<br>

> Loading enriched order intelligence, commercial impact, current lifecycle constraints, and preliminary portfolio trade-off context.

> Invoking Priority Score Rule Engine.

<br>

### Rule Engine 11 — Priority Score

## Purpose
Rank candidate orders using a balanced, non-overlapping set of factors before staffing, dependency approval, and action execution decisions are taken. 

## MECE dimensions
- Revenue Velocity  
- Strategic Importance  
- Penalty Exposure  
- Execution Readiness  
- Margin Risk  
- Residual Execution Friction  
- Portfolio Displacement Impact

## Formula
<div>
  <div>Priority Score =</div>
  <div>0.22(Revenue Velocity)</div>
  <div>+ 0.20(Strategic Importance)</div>
  <div>+ 0.20(Penalty Exposure)</div>
  <div>+ 0.15(Execution Readiness)</div>
  <div>- 0.08(Margin Risk)</div>
  <div>- 0.07(Residual Execution Friction)</div>
  <div>- 0.08(Portfolio Displacement Impact)</div>
</div>

All components normalized to 0–10.

## Banding
- = 8.0 = Accelerate 
- 6.5–7.99 = Controlled Accelerate  
- 5.0–6.49 = Maintain  
- < 5.0 = Defer / unchanged

## Order-level explainability in Kaya

**O-103**
- Revenue Velocity: Very High  
- Strategic Importance: Critical Strategic  
- Penalty Exposure: Critical  
- Execution Readiness: Medium  
- Margin Risk: Low-to-poor commercial quality, but accepted due to strategic/penalty logic  
- Residual Execution Friction: present because site not ready  
- Portfolio Displacement Impact: moderate, but manageable at this stage

Outcome: highest priority candidate because it combines the strongest revenue urgency, penalty urgency, and strategic importance.

**O-101**
- Revenue Velocity: High  
- Strategic Importance: Critical Strategic  
- Penalty Exposure: High  
- Execution Readiness: Low due to material hard gate  
- Margin Risk: Low margin  
- Residual Execution Friction: high because material is blocked  
- Portfolio Displacement Impact: acceptable 

Outcome: second-highest priority candidate, but controlled because readiness and staffing concerns constrain full acceleration.

**O-104**
- Revenue Velocity: Medium  
- Strategic Importance: High / policy-sensitive  
- Penalty Exposure: Medium  
- Execution Readiness: High, but lifecycle-constrained due to Stage 4  
- Margin Risk: Medium  
- Residual Execution Friction: moderate because transformer inbound risk remains  
- Portfolio Displacement Impact: potentially high if slot is disrupted

Outcome: remains in scope, but treated as protected / controlled rather than aggressively accelerated.

## Priority score outcome shown in Kaya
| Order | Priority Score | Band                          | Why                                                                                  |
|-------|----------------|-------------------------------|--------------------------------------------------------------------------------------|
| O-103 | 8.7            | Accelerate                    | Critical penalty + critical strategic + strong commercial urgency                   |
| O-101 | 7.8            | Controlled Accelerate         | Strong strategic and commercial case, but readiness and staffing constraints remain |
| O-104 | 6.4            | Maintain / selective protect  | Valuable, but lifecycle limitation constrains reshuffle headroom                    |

## Audit trace captured
| Audit Field            | Value                                                                                   |
|-----------------------|-----------------------------------------------------------------------------------------|
| Rule engine invoked   | Priority Score                                                                          |
| Inputs used           | Strategic, Margin, Readiness, Penalty, Velocity, lifecycle, displacement assumptions   |
| Scores and bands stored | Yes                                                                                  |
| Priority ordering stored | Yes                                                                                 |

<br>

---

**🤖 Prioritization Agent is thinking…**

<br>

> Priority ordering established. 

> Handing prioritized candidate set to Staffing Risk Agent before any blocker-resolution actions are approved. 

<br>

---

**🤖 Staffing Risk Agent is thinking…**

<br>

> Using the staffing sheet as the primary source of truth for role coverage and deployment readiness.

> This agent is not performing deep talent matching. It is identifying delivery risk and escalation need before action decisions are approved.

<br>

### Sources loaded
- staffing sheet by order  
- employee status feed  
- leave / long leave status  
- attrition / separation flags  
- recruiting funnel extract  
- offer-accepted tracker, where available

### Invoking:
- Delivery Staffing Risk Rule Engine  
- Staffing Escalation / JD Trigger Rule Engine 

### Rule Engine 13 — Delivery Staffing Risk

## Purpose
Identify whether prioritized orders have staffing shortfall or deployability risk.

## MECE dimensions
- Required roles unfilled  
- Assigned resource unavailability risk  
- Near-term attrition risk  
- Long leave conflict  
- No viable backup / no accepted pipeline  
- Start-date mismatch

## Formula
<div>
  <div>Delivery Staffing Risk =</div>
  <div>0.25(Unfilled Role Risk)</div>
  <div>+ 0.20(Unavailability Risk)</div>
  <div>+ 0.15(Attrition Risk)</div>
  <div>+ 0.15(Long Leave Risk)</div>
  <div>+ 0.15(Backup Pipeline Risk)</div>
  <div>+ 0.10(Start Date Mismatch Risk)</div>
</div>

## Each dimension scored:
- 0 = no issue 
- 50 = moderate issue  
- 100 = severe issue

## Banding
- 75–100 = High staffing risk  
- 50–74 = Medium staffing risk  
- 25–49 = Low staffing risk  
- < 25 = Minimal staffing risk 

### Rule Engine 14 — Staffing Escalation / JD Trigger

## Trigger logic
<div>
  <div>If Delivery Staffing Risk &gt;= Medium</div>
  <div>or Required Role Unfilled = Yes</div>
  <div>or Start Date Mismatch = Severe</div>
  <div>Then flag staffing escalation</div>
</div>

## JD creation option logic 
<div>
  <div>If Required Role Unfilled = Yes</div>
  <div>and No Offer Accepted Candidate Exists</div>
  <div>and Start Date Within Urgency Threshold</div>
  <div>Then enable JD / requisition generation option</div>
</div>

## Application

**O-103**

Staffing sheet says:
- Site engineer required  
- Primary assigned resource exists  
- No confirmed secondary backup  
- No long leave or attrition flag today


Scoring:
- Unfilled role risk = 0  
- Unavailability risk = 50  
- Attrition risk = 0  
- Long leave risk = 0  
- Backup pipeline risk = 100  
- Start date mismatch = 0 

<div>
  <div>0.25(0) + 0.20(50) + 0.15(0) + 0.15(0) + 0.15(100) + 0.10(0)</div>
  <div>= 0 + 10 + 0 + 0 + 15 + 0</div>
  <div>= 25</div>
</div>

Band: Low staffing risk

Recommended action: confirm backup engineer

**O-101**

Staffing sheet says:
- Cooling SME required  
- No confirmed staffed resource  
- No offer-accepted candidate  
- Start required within 7 days

Scoring:
- Unfilled role risk = 100  
- Unavailability risk = 0  
- Attrition risk = 0  
- Long leave risk = 0  
- Backup pipeline risk = 100 
- Start date mismatch = 100

<div>
  <div>0.25(100) + 0.20(0) + 0.15(0) + 0.15(0) + 0.15(100) + 0.10(100)</div>
  <div>= 25 + 0 + 0 + 0 + 15 + 10</div>
  <div>= 50</div>
</div>

Band: Medium staffing risk 

Recommended action: escalate staffing and enable JD creation option 

**O-104**

All required roles assigned, no leave/attrition issue.

Staffing risk: Minimal

Recommended action: no additional staffing action

### Staffing risk output shown in Kaya
| Order | Staffing Risk Band | Why                                                         | Recommended Action                          |
|-------|--------------------|--------------------------------------------------------------|----------------------------------------------|
| O-103 | Low                | primary assigned but no backup                               | Flag backup confirmation                     |
| O-101 | Medium             | required Cooling SME unfilled, no accepted candidate, urgent start | Escalate staffing + enable JD creation |
| O-104 | Minimal            | no material staffing issue                                   | No action                                    |

## Creating draft JD creation for O-101

Generated contextual fields:
- Role Title: Cooling Systems SME  
- Delivery Context: hyperscaler deployment support  
- Location: US / onsite as required  
- Expected Start Date: within 7 days  
- Duration: 6 weeks  
- Required Skills: high-density cooling systems, installation support, commissioning coordination  
- Delivery-specific constraints: immediate deployability, customer-site readiness support  
- Immigration / authorization field: to be completed if non-local deployment required 

Initiating downstream triggers, as per contextual triggers:
- HR requisition card  
- JIRA staffing action  
- manager notification  
- delivery leadership escalation

### Audit trace captured
| Audit Field                          | Value                                      |
|-------------------------------------|--------------------------------------------|
| Rule engines invoked                | Staffing Risk, Staffing Escalation / JD Trigger |
| Staffing sheet used as source of truth | Yes                                    |
| Orders flagged                      | O-103, O-101                               |
| JD enablement shown                 | O-101                                      |

<br>

---

**🤖 Staffing Risk Agent is thinking…**

<br>

> Staffing feasibility review completed. 

> Handing prioritized and staffing-feasible candidate set to Dependency Resolution Agent.  

<br>

---

**🤖 Dependency Resolution Agent is thinking…**

<br>

> Accessing component, supplier, site readiness, and plant sequencing evidence.

> Invoking Dependency Severity Rule Engine. 

<br>

## Rule Engine 8 — Dependency Severity

### Purpose
Measure blocker severity without double counting.

### MECE dimensions
- Delay Impact  
- Substitutability Inverse  
- Recovery Complexity  
- Customer Sensitivity 

### Formula
<div>
  <div>Dependency Severity Score =</div>
  <div>0.40(Delay Impact)</div>
  <div>+ 0.20(Substitutability Inverse)</div>
  <div>+ 0.20(Recovery Complexity)</div>
  <div>+ 0.20(Customer Sensitivity)</div>
</div>

### Banding
- 85–100 = Critical  
- 65–84 = High  
- 40–64 = Medium  
- < 40 = Low

### Application

*O-103 — Site readiness incomplete*
- Delay Impact = 100  
- Substitutability Inverse = 30  
- Recovery Complexity = 70  
- Customer Sensitivity = 100

<div>
  <div>0.40(100) + 0.20(30) + 0.20(70) + 0.20(100)</div>
  <div>= 40 + 6 + 14 + 20</div>
  <div>= 80</div>
</div>

Band: High

**O-101 — Cooling units delay**
- Delay Impact = 80  
- Substitutability Inverse = 60  
- Recovery Complexity = 50  
- Customer Sensitivity = 90

32 + 12 + 10 + 18 = 72

Band: High

**O-104 — Transformer inbound risk**
- Delay Impact = 60  
- Substitutability Inverse = 70  
- Recovery Complexity = 40  
- Customer Sensitivity = 70

24 + 14 + 8 + 14 = 60

Band: Medium

### Dependency Resolution output shown in Kaya
| Order | Dependency Severity | Why                                                                 |
|-------|--------------------|----------------------------------------------------------------------|
| O-103 | High               | site readiness directly drives 10-day delay and high customer sensitivity |
| O-101 | High               | material blocker suppresses effective readiness and creates delay risk |
| O-104 | Medium             | inbound transformer risk is meaningful but somewhat contained        |

### Audit trace captured
| Audit Field               | Value                                                                 |
|--------------------------|-----------------------------------------------------------------------|
| Rule engine invoked      | Dependency Severity                                                   |
| Evidence retained        | SCM data, PMO report, supplier email, plant scheduling evidence       |
| Order-level severity stored | Yes                                                                 |

<br>

---

**🤖 Dependency Resolution Agent is thinking…**

<br>

> Dependency severity classified.

> Handing candidate set to Resolution Options Agent. 

<br>

---

**🤖 Resolution Options Agent is thinking…**

<br>

> Now that priority, staffing feasibility, and dependency severity are known, generating action options only for the orders where intervention has value

> Invoking Resolution Recommendation Rule Engine.

<br>

## Rule Engine 9 — Resolution Recommendation

### Purpose
Decide whether to resolve immediately, maintain as-is, or escalate. 

### Formula
<div>
  <div>Net Resolution Value =</div>
  <div>Penalty Avoided</div>
  <div>+ Revenue Acceleration Value</div>
  <div>- Resolution Cost</div>
  <div>- Secondary Disruption Cost</div>
</div>

### Recommendation rule
<div>
  <div>If Net Resolution Value &gt; 0</div>
  <div>and no policy violation exists</div>
  <div>Then recommend action</div>
  <div>Else maintain current plan or escalate</div>
</div>

### Application

**O-103 — Parallel site prep**
- Penalty avoided = $1.6M  
- Revenue acceleration value = $0.4M  
- Resolution cost = $0.3M  
- Secondary disruption cost = $0.1M

1.6 + 0.4 - 0.3 - 0.1 = +1.6M

Recommended action: Trigger parallel site prep

**O-101 — Alternate supplier**
- Penalty avoided = $0.75M  
- Revenue acceleration value = $0.15M  
- Resolution cost = $0.30M  
- Secondary disruption cost = $0.05M

0.75 + 0.15 - 0.30 - 0.05 = +0.55M 

Recommended action: Switch to approved alternate supplier

**O-104 — Controlled expedite**
- Penalty avoided = $0.3M  
- Revenue acceleration value = $0.05M  
- Resolution cost = $0.12M  
- Secondary disruption cost = $0.08M 

0.30 + 0.05 - 0.12 - 0.08 = +0.15M

Recommended action: Controlled expedite only if slot protection is preserved

### Resolution options shown in Kaya
| Order | Dependency Severity | Recommended Action                          | Net Resolution Value |
|-------|--------------------|---------------------------------------------|----------------------|
| O-103 | High               | Trigger parallel site prep                  | +1.6M                |
| O-101 | High               | Switch to approved alternate supplier       | +0.55M               |
| O-104 | Medium             | Controlled expedite / protect slot          | +0.15M               |

### Audit trace captured
| Audit Field                     | Value                      |
|--------------------------------|----------------------------|
| Rule engine invoked            | Resolution Recommendation  |
| Net value calculations stored  | Yes                        |
| Option set stored              | Yes                        |

<br>

---

**🤖 Resolution Options Agent is thinking…**

<br>

> Resolution options ready.

> Handing candidate orders to HITL Agent for human-governed review before any execution is triggered. 

<br>

---

**🤖 HITL Agent is thinking…**

<br>

> Invoking HITL Escalation Rule Engine. 

<br>

## Rule Engine 10 — HITL Escalation

### HITL is mandatory if any of the following are true:
- Strategic Band = Critical Strategic  
- Penalty Band = Critical  
- Margin Band = Low or Critical and acceleration still proposed  
- Stage = 4 and slot displacement may occur  
- Resolution cost exceeds financial threshold  
- Another active order will be negatively impacted  
- Special customer handling flag exists 

### HITL triggered for:
- O-103 — Yes  
- O-101 — Yes  
- O-104 — Yes 

<details open>
<summary><strong>Full HITL packet — O-103</strong></summary>

Order: O-103

Customer: Hyperscaler C

Strategic Index: 9.5 — Critical Strategic 

Current Stage: Procurement Initiated 

Penalty Exposure: $2.0M — Critical 

Readiness: 73.25 — Medium 

Dependency Severity: 80 — High 

Staffing status: Low staffing risk, but no confirmed backup engineer 

###  Source evidence visible to reviewer
- contract PDF clause excerpt showing $200K/day penalty  
- PMO note showing 10-day site-readiness delay  
- CRM note showing Tier 1 strategic hyperscaler  
- staffing sheet showing primary site engineer assigned but no confirmed backup  

### Resolution options comparison
| Option                | Cost | Residual Delay | Penalty Impact | Secondary Impact     | Net Value        |
|----------------------|------|----------------|----------------|----------------------|------------------|
| Wait                 | 0    | 10 days        | -2.0M          | none                 | -2.0M            |
| Parallel site prep   | 0.3M | 2 days         | -0.4M          | PMO resource load    | +1.3M vs wait    |
| Premium mobilization | 0.55M| 1 day          | -0.2M          | high disruption      | +1.25M vs wait   |

Recommendation: Parallel site prep

</details>


<details>
<summary><strong>Full HITL packet — O-101</strong></summary>

Order: O-101 

Customer: Hyperscaler A 

Strategic Index: 8.95 — Critical Strategic 

Current Stage: Procurement Initiated 

Adjusted Margin: 15% — Low 

Effective Readiness: Low due to material hard gate 

Penalty Exposure: $0.9M — High 

Dependency Severity: 72 — High 

Staffing status: Medium staffing risk due to missing Cooling SME 

### Source evidence visible to reviewer
- supplier email showing cooling unit delay  
- approved alternate supplier list  
- contract clause showing penalty structure  
- staffing sheet showing cooling SME unfilled  

### Resolution options comparison
| Option                   | Cost | Days Recovered | Margin Impact     | Net Value             |
|--------------------------|------|----------------|-------------------|------------------------|
| Wait                     | 0    | 0              | none              | -0.9M exposure path    |
| Alternate supplier       | 0.3M | 6              | -2 margin points  | +0.55M                |
| Partial split execution  | 0.2M | 3              | -1 margin point   | +0.2M                 |

Recommendation: Alternate supplier, subject to commercial approval due to low post-adjusted margin

</details>

<details>
<summary><strong>Full HITL packet — O-104</strong></summary>

Order: O-104 

Customer: Colocation D 

Strategic Band: High Strategic 

Current Stage: Manufacturing Scheduled 

Penalty Exposure: $0.5M — Medium 

Lifecycle Flexibility: Limited 

Staffing status: no material issue 

### Source evidence visible to reviewer
- MES slot reservation record  
- SCM transformer inbound risk  
- contract penalty clause  
- production schedule showing neighboring slot sensitivity  

### Resolution options comparison
| Option                  | Cost  | Delay Reduction | Slot Disruption Risk | Net Value         |
|-------------------------|-------|-----------------|----------------------|-------------------|
| Maintain current plan   | 0     | 0               | none                 | baseline          |
| Controlled expedite     | 0.12M | 3 days          | low                  | +0.15M            |
| Aggressive resequence   | 0.25M | 4 days          | high                 | requires override |

Recommendation: Controlled expedite only, preserving slot protection

</details>

---

Choose from one of the following Review actions
- Approve recommendation 
- Select alternate option 
- Override and maintain current plan 
- Request additional scenario analysis
`,
    },
    {
      message: "Approve recommendation",
      response: `
## Approval received from Reviewer
- O-103: Parallel site prep approved  
- O-101: Alternate supplier approved  
- O-104: Controlled expedite approved, no slot displacement allowed

### Audit trace captured
| Audit Field             | Value                                                                 |
|------------------------|-----------------------------------------------------------------------|
| HITL packets generated | 3                                                                     |
| Evidence shown         | full excerpts retained                                                |
| Reviewer decisions captured | Yes                                                             |
| Overrides              | None                                                                  |
| Selected actions       | O-103 parallel prep, O-101 alternate supplier, O-104 controlled expedite |
| Reviewer Name          | John Doe                                                              |
| Approval Date/Time     | 4/14/2026, 11:15 AM EST                                               |

<br>

---

**🤖 HITL Agent is thinking…**

<br>

> Approved actions received. 

> Handing approved decisions to Execution Orchestration Agent.  

<br>

---

**🤖 Execution Orchestration Agent is thinking…**

<br>

> Triggering approved actions directly from Kaya.

> This is now moving from approved decision to execution.

<br>

Order-specific execution actions triggered

## O-103 — Parallel Site Prep
| Action                                      | Integrated System        | Role Holder Invoked        | Action Detail                                                                 |
|---------------------------------------------|--------------------------|-----------------------------|--------------------------------------------------------------------------------|
| Create PMO acceleration work package         | PMO / JIRA               | PMO Lead                    | Creates “Parallel Site Prep” work package with critical path tasks            |
| Raise customer site-readiness follow-up      | PMO / CRM tasking        | Delivery Manager            | Opens customer coordination task for missing site prerequisites               |
| Re-plan delivery milestone dates             | PMO / ERP milestone sync | Project Controller          | Updates milestone plan to reflect 2-day residual delay instead of 10 days     |
| Flag staffing backup risk                    | Staffing tracker / JIRA  | Delivery Resource Manager   | Creates action to confirm backup engineer within 48 hours                     |

### Resulting state update
- PMO blocker status changes from “Open / 10-day delay” to “Mitigation active / 2-day residual delay”  
- Penalty exposure recalculates from $2.0M to $0.4M  
- Readiness remains Medium but improves in practical executability  
- Audit log stores action IDs and linked tickets

---

## O-101 — Alternate Supplier + Staffing Escalation
| Action                                   | Integrated System                     | Role Holder Invoked                     | Action Detail                                                                                  |
|------------------------------------------|--------------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------|
| Raise alternate supplier procurement request | SCM / purchasing workflow            | Procurement Manager                      | Issues approved alternate supplier sourcing action for cooling units                          |
| Update component ETA                     | SCM                                  | Supply Planner                           | Revises material ETA based on alternate source                                                 |
| Recompute material readiness             | Kaya state engine                    | Order Intelligence Agent                 | Removes material hard gate once alternate source is confirmed                                 |
| Raise staffing escalation                | HR / staffing workflow / JIRA        | Delivery Manager + Resource Manager      | Flags Cooling SME shortfall for urgent action                                                  |
| Enable JD creation option                | HR requisition system                | Delivery Manager / Hiring Manager        | Pre-populates requisition with delivery context if shortfall persists                         |

### Resulting state update
- Material readiness changes from 0 to approved-alternate-source-in-progress  
- Effective readiness may improve from Low to Medium once supplier action is accepted in SCM  
- Staffing risk remains active pending SME action  
- Audit log stores procurement request ID, ETA revision record, staffing escalation ID  

---

## O-104 — Controlled Expedite with Slot Protection
| Action                                   | Integrated System                | Role Holder Invoked | Action Detail                                                                 |
|------------------------------------------|----------------------------------|----------------------|--------------------------------------------------------------------------------|
| Raise controlled inbound expedite request | SCM / logistics coordination     | Supply Planner       | Expedites transformer inbound without plant resequencing                      |
| Protect existing manufacturing slot       | MES                              | Plant Scheduler      | Locks current slot from aggressive reprioritization                           |
| Update expected delay scenario            | MES / ERP planning sync          | Project Controller   | Recalculates expected delay reduction under controlled expedite               |

### Resulting state update
- Slot status remains protected  
- Delay risk reduces but is not fully removed  
- Aggressive resequencing remains blocked by policy  
- Audit log stores expedite request ID and slot protection action

---

## Live execution-state update shown in Kaya

###  O-103

<div>
  <div>Before:</div>
  <div>Site readiness incomplete → 10-day delay → $2.0M exposure</div>
</div>

<div>
  <div>After:</div>
  <div>Parallel site prep active → 2-day residual delay → $0.4M exposure</div>
</div>

### O-101

<div>
  <div>Before:</div>
  <div>Cooling units delayed → Material readiness = 0 → Effective readiness low</div>
</div>

<div>
  <div>After:</div>
  <div>Alternate supplier request raised → Material recovery path active → Readiness pending refresh</div>
</div>

### O-104

<div>
  <div>Before:</div>
  <div>Transformer inbound risk → 5-day slip risk → slot sensitive</div>
</div>

<div>
  <div>After:</div>
  <div>Controlled expedite active → reduced slip risk → slot protected</div>
</div>

---

### Audit trace captured
| Audit Field                 | Value                                                                 |
|----------------------------|-----------------------------------------------------------------------|
| Execution actions triggered | Yes                                                                   |
| Systems integrated          | PMO/JIRA, SCM, MES, ERP sync, staffing workflow                       |
| Role holders invoked        | PMO Lead, Delivery Manager, Procurement Manager, Supply Planner, Plant Scheduler, Resource Manager |
| Action IDs retained         | Yes                                                                   |
| Execution-state refreshed   | Yes                                                                   |

<br>

---

**🤖 Execution Orchestration Agent is thinking…**

<br>

> Approved actions executed and state refreshed.  

> Handing refreshed portfolio state to Portfolio Rebalancing Agent. 

<br>

---

**🤖 Portfolio Rebalancing Agent is thinking…**

<br>

> Now evaluating what this approved execution path costs elsewhere in the portfolio. 

> Invoking Portfolio Displacement / Zero-Sum Impact Rule Engine. 

<br>

## Rule Engine 12 — Portfolio Displacement / Zero-Sum Impact

### Purpose

Show what is being taken away elsewhere in the portfolio, and whether that downside is certain or probabilistic. 

### Formula 

<div>
  <div>Net Portfolio Benefit =</div>
  <div>Priority Uplift on Accelerated Orders</div>
  <div>- Confirmed Downside on Displaced Orders</div>
  <div>- Expected Risked Downside on Displaced Orders</div>
  <div>+ Mitigation Recovery Value</div>
</div>

### Definitions
- Confirmed downside = impact that will definitely occur if resources are reassigned  
- Expected risked downside = probability-adjusted downside where mitigation still exists  
- Mitigation recovery value = value regained if recommended mitigation is executed

### Deprioritization / displacement scenario loaded

To accelerate O-103 and keep O-101 on a controlled accelerated path, engineering and planning bandwidth are partially reallocated from O-102. 

## O-102 displacement view
- Confirmed effect: engineering checkpoint delayed by 3 days  
- Possible additional risk: 2 more days if backup is not secured  
- downside if 5-day slip occurs: $125K  
- likelihood of additional 2-day slip without mitigation: 40%  
- expected risked downside: $50K  
- mitigation option: assign backup engineer within 48 hours 
- mitigation recovery value: $30K expected

## O-104 protected treatment

<div>
  <div>O-104 is not aggressively displaced because Stage 4 slot protection is enforced.</div>
  <div>Its plan is maintained with controlled expedite only.</div>
</div>

## Portfolio trade-off view 
| Order | Impact Type   | Impact Nature                                   | Likelihood | Suggested Mitigation                     |
|-------|---------------|--------------------------------------------------|------------|------------------------------------------|
| O-102 | Confirmed     | 3-day engineering checkpoint delay               | Certain    | Assign backup engineer                   |
| O-102 | Risked        | Additional 2-day slip beyond confirmed delay     | 40%        | Confirm backup within 48 hrs             |
| O-104 | Risked        | Slot pressure if aggressive expedite is forced   | 25%        | Preserve controlled expedite only        |
| O-101 | Delivery risk | Cooling SME start-date risk                      | Active     | Trigger staffing escalation / JD         |

## Order-level explainability in Kaya

### O-103
- Revenue Velocity: Very High  
- Strategic Importance: Critical Strategic  
- Penalty Exposure: Critical  
- Readiness: Medium after approved site-prep action  
- Margin Risk: Low-to-poor commercial quality, but accepted due to strategic/penalty logic  
- Residual Execution Friction: reduced after mitigation  
- Portfolio Displacement Impact: moderate, but outweighed by benefit

### O-101
- Revenue Velocity: High  
- Strategic Importance: Critical Strategic  
- Penalty Exposure: High  
- Readiness: improved recovery path after alternate supplier action, but staffing risk remains  
- Margin Risk: Low margin  
- Residual Friction: moderate  
- Portfolio Displacement Impact: acceptable

### O-104
- Revenue Velocity: Medium  
- Strategic Importance: High / policy-sensitive  
- Penalty Exposure: Medium  
- Readiness: strong, but lifecycle-limited  
- Portfolio Displacement Impact: kept low by protecting slot  

### O-102
- Not unimportant  
- Simply lower portfolio urgency under current constraints  
- Confirmed downside is limited and visible  
- Additional risk is probabilistic and mitigable 

### O-105
- Low urgency and low leverage under current conditions

## Portfolio rebalancing outcome 
| Order | Priority Score | Band                        | Why                                                                                  |
|-------|----------------|-----------------------------|--------------------------------------------------------------------------------------|
| O-103 | 8.7            | Accelerate                  | Critical penalty + critical strategic + mitigation improves readiness materially     |
| O-101 | 7.8            | Controlled Accelerate       | Strong strategic and commercial case, but low margin and staffing risk require control |
| O-104 | 6.4            | Maintain / selective protect| Valuable, but lifecycle limitation constrains reshuffle headroom                    |
| O-102 | 5.7            | Maintain with mitigation    | Lower urgency; impacted by displacement but not ignored                             |
| O-105 | 4.8            | Defer / unchanged           | Low urgency, low leverage                                                           |

## Audit trace captured
| Audit Field                              | Value                                      |
|------------------------------------------|--------------------------------------------|
| Rule engine invoked                      | Portfolio Displacement / Zero-Sum Impact    |
| Confirmed downside tracked               | Yes                                        |
| Probability-based downside tracked       | Yes                                        |
| Mitigation recovery tracked              | Yes                                        |
| Deprioritized orders explicitly identified | Yes                                     |

<br>

---

**🤖 Portfolio Rebalancing Agent is thinking…**

<br>

> Portfolio trade-offs fully evaluated and recorded.   

> Handing final portfolio state to Final Output Agent.  

<br>

---

**🤖 Final Output Agent is thinking…**

<br>

> Publishing final execution package.  

<br>

## Final Kaya execution summary
| Order | Final Decision           | Why                                                                                                      | Human Governance |
|-------|-------------------------|----------------------------------------------------------------------------------------------------------|------------------|
| O-103 | Accelerate              | Highest strategic and commercial urgency, strongest net value after mitigation                           | Approved         |
| O-101 | Controlled Accelerate   | High strategic value, positive recovery economics, but lower margin and staffing risk require control    | Approved         |
| O-104 | Maintain / protect      | Limited reprioritization headroom due to lifecycle stage; controlled expedite only                      | Approved         |
| O-102 | Maintain with mitigation| Lower relative urgency, but protected with transparent mitigation due to resource displacement           | Approved         |
| O-105 | Defer / unchanged       | Low urgency, low portfolio leverage                                                                      | No action needed |

## Value realization summary
- Major penalty exposure reduced materially  
- Revenue realization accelerated on the highest-leverage orders  
- Lower-priority orders not ignored; their downside is made explicit and mitigated  
- Staffing risk surfaced early rather than becoming a late delivery surprise  
- Every material decision approved, logged, and triggered from the same plane

## Full auditability retained for every order

For each order, Kaya stores:
- structured and unstructured sources used  
- extracted evidence and snippets  
- lifecycle eligibility result  
- candidate-selection rationale  
- all rule engines invoked  
- thresholds and weights in force  
- computed scores and bands  
- hard gates triggered  
- recommended action  
- alternative scenarios compared  
- impacted peer orders  
- confirmed downside vs probability-based downside  
- mitigation proposed  
- HITL decisions and timestamps  
- downstream actions and system IDs 
`,
    },
  ]),
);
