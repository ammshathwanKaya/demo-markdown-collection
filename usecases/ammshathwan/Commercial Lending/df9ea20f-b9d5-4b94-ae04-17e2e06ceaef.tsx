localStorage.setItem(
  "demo_df9ea20f-b9d5-4b94-ae04-17e2e06ceaef",
  JSON.stringify([
    // Scenario 1
    {
      message:
        "Evaluate Precision Aerospace Components, LLC for an $8 million term loan to acquire CNC machinery. Determine whether the bank should lend, assign internal grade, optimize pricing, identify approver, generate documents, fund the facility, and establish post-close monitoring.",
      response: `
🤖 **ORCHESTRATOR INITIALIZATION...**

> Running DetermineFairerShareEligibility for YEAR = 2025. Routing through Normaliser → Current-Account Qualifier → Savings/Mortgage Qualifier → Eligibility Controller → (HITL if 2024→2025). 

---

> Commercial Lending Orchestrator Initialized

> Listening for new commercial lending applications...

<br>

## Activated Agents:
- Intake Agent  
- Plan Resolution Agent  
- Compliance Lookup Agent  
- Financial Spreading Agent  
- Borrower Assessment Agent  
- Policy Agent  
- Risk Grade Agent  
- Pricing Agent  
- Approval Routing Agent  
- Documentation Agent
- Closing Agent  
- Monitoring Agent  
- Audit Agent

# DESIGN PRINCIPLE USED THROUGHOUT

For every step, Kaya distinguishes:

## LOOKUP
Use governed upstream systems, reference tables, policy repositories, or prior approved outputs.

## COMPUTE
Perform fresh deterministic calculations inside the iFlow. 

## INFER 
Apply approved rules/logic to reach controlled conclusions.

# STEP 1 — APPLICATION INTAKE + ELIGIBILITY

---

🤖 **Intake Agent is thinking...**

## GET
- Loan application payload (Loan Origination System)  
- Borrower relationship profile (Salesforce)  
- Existing exposure snapshot (Core Lending)

## PROCESS
- Lookup relationship status  
- Lookup existing facilities / exposure  
- Compute completeness score  
- Infer segment from request size  
- Infer product lane from purpose  
- Package canonical intake case

## DECISION SIGNALS + BASIS
| Signal             | Type    | Value         | Basis               | Completeness        |
|--------------------|---------|---------------|---------------------|---------------------|
| Compute            | 100%    | Mandatory checklist | Product Eligibility | Lookup              |
| Eligible           | Product matrix | Segment       | Infer               | Middle Market       |
| $8M threshold      | Relationship Value | Lookup | Positive            | Existing treasury client |
| Data Quality       | Compute | High          | Structured payload  |                     |

## SO WHAT
- Valid lending request received  
- Existing client relationship confirmed  
- Middle Market lane identified  
- Equipment finance fit confirmed

## NOW WHAT
- Select best-fit governed workflow  
- Load relevant policy packs  
- Load approval matrix

<br>

> Handing over to Plan Resolution Agent...

<br>

---

# STEP 1A — EXECUTION PLAN RESOLUTION

> 🤖 **Plan Resolution Agent is thinking...**

## PROCESS
- Lookup workflow catalog  
- Infer optimal execution path  
- Lookup policy set  
- Lookup delegated authority set

## DECISION SIGNALS + BASIS
| Signal          | Type   | Value             | Basis                      |
|-----------------|--------|-------------------|----------------------------|
| Geography Pack  | Lookup | US                | Intake country             |
| Segment Pack    | Infer  | Middle Market     | Exposure                   |
| Product Pack    | Infer  | Equipment Finance | Request type               |
| Complexity Lane | Infer  | Standard          | Existing client + clean docs |

**Execution Plan Selected:**
US Middle Market Equipment Finance – Version 4.2

## SO WHAT
- Correct workflow selected  
- Wrong-path processing avoided  
- Controls aligned to deal type

## NOW WHAT
- Validate compliance readiness  
- Confirm underwriting may proceed

> Handing over to Compliance Lookup Agent... 

<br>

---

# STEP 2 — KYC / AML / OWNERSHIP GATE

🤖 **Compliance Lookup Agent is thinking...**

## GET
- Compliance Case ID (LOS)  
- KYC profile (Fenergo)  
- AML screening (World-Check / Actimize)  
- Beneficial ownership file

## PROCESS
- Lookup KYC approval  
- Lookup sanctions / PEP results  
- Lookup ownership certification  
- Compute refresh aging  
- Infer proceed / hold decision 

## DECISION SIGNALS + BASIS
| Signal             | Type    | Value         | Basis                    |
|--------------------|---------|---------------|--------------------------|
| KYC Status         | Lookup  | Approved      | Fenergo                  |
| AML Result         | Lookup  | Clear         | Screening utility        |
| Ownership Verified | Lookup  | Yes           | UBO complete             |
| Refresh Status     | Compute | 120 days      | Last review date         |
| Risk Tier          | Lookup  | Moderate-Low  | AML model                |
| Proceed            | Infer   | Yes           | No blockers + current    |

## SO WHAT
- No compliance blockers  
- Ownership transparent  
- Screening clean  
- Profile current

## NOW WHAT
- Use approved profile for underwriting  
- Move into financial spreading

> Handing over to Financial Spreading Agent...

<br>

---

# STEP 3 — FINANCIAL SPREADING

🤖 **Financial Spreading Agent is thinking...**

## GET
- Prior spread package (RiskAnalyst / internal tool)  
- Audited financials  
- Interim statements  
- Tax returns  
- Debt schedule  
- Appraisal

## PROCESS
- Lookup prior spread  
- Compute refreshed period values  
- Compute EBITDA  
- Infer S-Corp tax distributions (40% proxy)  
- Compute CFADS  
- Compute FCCR  
- Compute Debt / TNW  
- Compute LTV  
- Infer earnings quality  
- Compute 3-year trend stability

## DECISION SIGNALS + BASIS
| Signal             | Type    | Value   | Basis                     |
|--------------------|---------|---------|---------------------------|
| EBITDA             | Compute | $2.5M   | NI + Int + Tax + D&A      |
| Tax Distribution   | Infer   | $400k   | 40% S-Corp proxy          |
| CFADS              | Compute | $1.8M   | EBITDA less uses          |
| FCCR               | Compute | 1.35x   | CFADS / debt service      |
| Debt/TNW           | Compute | 1.20x   | Liabilities / TNW         |
| LTV                | Compute | 75%     | Loan / OLV                |
| Earnings Quality   | Infer   | High    | Deposits align            |
| Trend Stability    | Compute | Positive| 3-year trend              |

## SO WHAT
- Cash flow supports debt service  
- Leverage manageable  
- Collateral strong  
- Data quality high  
- Trend positive  

## NOW WHAT
- Convert metrics into 5C risk view  
- Assess borrower holistically

> Handing over to Borrower Assessment Agent...

<br>

---

# STEP 4 — 5C UNDERWRITING

🤖 **Borrower Assessment Agent is thinking...**

## PROCESS
- Lookup Character scorecard  
- Lookup Capacity scorecard  
- Lookup Capital scorecard  
- Lookup Collateral scorecard  
- Lookup Conditions scorecard  
- Compute weighted score  
- Infer repayment strength

## CONDITIONS SOURCES
- Internal Sector Risk Engine  
- Moody’s industry outlook  
- S&P sector reports  
- Internal economist views  
- Portfolio stress indicators

## DECISION SIGNALS + BASIS
| Signal                | Type    | Value       | Basis                    |
|-----------------------|---------|-------------|--------------------------|
| Character             | Lookup  | Strong      | Paydex 82                |
| Capacity              | Lookup  | Strong      | FCCR 1.35x band          |
| Capital               | Lookup  | Strong      | 1.20x leverage           |
| Collateral            | Lookup  | Strong      | 75% LTV                  |
| Conditions            | Lookup  | Moderate    | Aerospace stable/cyclical |
| Raw Score             | Compute | 2.25        | Weighted model           |
| Primary Repayment     | Infer   | Acceptable  | Cash flow                |
| Secondary Repayment   | Infer   | Strong      | Machinery collateral     |

## SO WHAT
- Strong borrower profile  
- Sector risk manageable  
- Dual repayment sources credible  
- Bankable middle-market credit

## NOW WHAT
- Test hard policy rules  
- Test concentration appetite

> Handing over to Policy Agent...

<br>

---

# STEP 5 — POLICY / APPETITE CHECK

🤖 **Policy Agent is thinking...**

## PROCESS
- Lookup FCCR floor  
- Lookup LTV max  
- Lookup leverage cap  
- Lookup single-name limit  
- Lookup sector concentration limit  
- Compute post-loan exposure  
- Infer exception need

## DECISION SIGNALS + BASIS
| Signal              | Type    | Value        | Basis                    |
|---------------------|---------|--------------|--------------------------|
| FCCR Pass           | Infer   | Yes          | 1.35x ≥1.25x             |
| LTV Pass            | Infer   | Yes          | 75% ≤80%                 |
| Leverage Pass       | Infer   | Yes          | 1.20x ≤1.50x             |
| Borrower Exposure   | Compute | Within cap   | Existing + new           |
| Sector Exposure     | Lookup  | Within appetite | Portfolio file        |
| Exceptions          | Infer   | None         | All clear                |

## SO WHAT
- Deal fits policy  
- No waivers needed  
- No committee drag  
- Straight-through path intact

## NOW WHAT
- Assign formal risk grade  
- Quantify expected loss

> Handing over to Risk Grade Agent...

<br>

---

# STEP 6 — INTERNAL GRADE + EXPECTED LOSS 

🤖 **Risk Grade Agent is thinking...**

## PROCESS
- Compute raw score  
- Lookup grade map  
- Lookup PD table  
- Lookup LGD benchmark  
- Compute expected loss

## DECISION SIGNALS + BASIS
| Signal | Type    | Value   | Basis              |
|--------|---------|---------|--------------------|
| Grade  | Lookup  | 2       | 2.25 band          |
| PD     | Lookup  | 0.25%   | Grade table        |
| LGD    | Lookup  | 40%     | Secured equipment   |
| EAD    | Lookup  | $8M     | Facility size      |
| EL     | Compute | $8,000  | PD×LGD×EAD         |

## SO WHAT
- Strong internal grade  
- Low default risk  
- Low expected loss  
- Delegated lane eligible

## NOW WHAT
- Price for risk and return  
- Build commercial offer

> Handing over to Pricing Agent...

<br>

---

# STEP 7 — STRUCTURE + PRICING

🤖 **Pricing Agent is thinking...**

## PROCESS
- Lookup SOFR  
- Lookup cost of funds  
- Lookup operating cost  
- Compute EL premium  
- Compute capital charge  
- Compute FCCR cushion premium  
- Lookup comparable deals  
- Infer final spread

## PRICING STACK
| Component                | Type    | bps |
|--------------------------|---------|-----|
| Cost of Funds            | Lookup  | 45  |
| Operating Cost           | Lookup  | 40  |
| Expected Loss Premium    | Compute | 15  |
| Capital Charge           | Compute | 75  |
| FCCR Cushion Premium     | Compute | 15  |

= 190 bps

## DECISION SIGNALS + BASIS
| Signal           | Type    | Value        | Basis              |
|------------------|---------|--------------|--------------------|
| Spread           | Compute | 1.90%        | Pricing stack      |
| All-in Rate      | Compute | 5.55%        | SOFR + spread      |
| RAROC            | Compute | Above hurdle | Finance model      |
| Competitiveness  | Lookup  | P40          | Comparable deals   |
| Win Probability  | Infer   | High         | Existing relationship |

## SO WHAT
- Profitable structure achieved  
- Competitive market pricing  
- Margin discipline preserved  
- Pricing fully explainable

## NOW WHAT
- Route to correct approver  
- Package economics for sanction

> Handing over to Approval Routing Agent...

<br>

---

# STEP 8 — APPROVAL ROUTING

🤖 **Approval Routing Agent is thinking...**

## PROCESS
- Lookup delegation matrix  
- Lookup grade lane  
- Compute exposure tier  
- Infer committee need 

## DECISION SIGNALS + BASIS 
| Signal        | Type    | Value                | Basis   |
|---------------|---------|----------------------|---------|
| Grade Lane    | Lookup  | Strong credit        | Grade 2 |
| Amount Tier   | Compute | ≤$10M                | $8M     |
| Exceptions    | Lookup  | None                 | Step 5  |
| Approver      | Infer   | Regional Credit Officer | Matrix |

## SO WHAT
- Delegated approval available  
- No committee delay  
- Governance preserved

## NOW WHAT
- Submit approval pack  
- Trigger human sanction

> Handing over to Human Approver...

<br>

---

# STEP 9 — HUMAN APPROVAL

🤖 **Regional Credit Officer reviewing...**

## PROCESS
- Review scorecard  
- Review pricing  
- Review covenants  
- Approve

## DECISION SIGNALS
| Signal         | Value     |
|----------------|-----------|
| Override              |  No          |
| Final Decision | Approved  |

## SO WHAT
- Human governance complete  
- Model outputs validated  
- Deal sanctioned

## NOW WHAT
- Generate legal package  
- Prepare for closing

> Handing over to Documentation Agent...

---

# STEP 10 — DOCUMENTATION (BANK-GRADE ARTEFACTS)

🤖 **Documentation Agent is thinking...**

> Generating production-grade credit documents...

> Applying approved terms...

> Preparing Word / PDF exports...

<br>

## PROCESS
- Lookup approved templates  
- Compute borrower merge fields  
- Insert pricing mechanics  
- Insert covenants  
- Insert collateral schedules  
- Infer clause pack

# ON-SCREEN ARTEFACTS 

## ON-SCREEN ARTEFACT 1

**CREDIT APPROVAL MEMORANDUM**

**(Internal Credit Decision Pack)**

**CONFIDENTIAL CREDIT APPROVAL MEMORANDUM**

### Borrower
Precision Aerospace Components, LLC (“PAC”)

### Requested Approval
Approval is requested for an $8,000,000 Senior Secured Equipment Term Loan to finance the acquisition of CNC machining and automation equipment supporting expansion of aerospace component manufacturing capacity.

### Borrower Overview
PAC is a privately owned precision engineering manufacturer supplying components to commercial aerospace and defense customers. The company has operated for 22 years and maintains an existing treasury and deposit relationship with the Bank.

### Purpose of Facility
- Expand production capacity  
- Improve throughput and automation  
- Support contracted demand pipeline  
- Replace aging equipment with higher-yield assets

### Credit Strengths
- Strong historical operating performance  
- Fixed Charge Coverage Ratio of 1.35x post-debt service  
- Conservative leverage at 1.20x Debt / Tangible Net Worth  
- Strong collateral support at 75% Loan-to-Value  
- Long-standing operating history and clean payment profile

### Key Risks
- Aerospace sector cyclicality  
- Customer concentration risk  
- Capital expenditure execution risk

### Risk Mitigants
- Diversified end-market exposure including defense programs  
- First lien on financed equipment  
- Quarterly covenant monitoring  
- Existing relationship visibility through operating accounts

### Financial Snapshot
| Metric      | Value      |
|-------------|------------|
| Revenue     | $18,400,000 |
| EBITDA      | $2,500,000 |
| CFADS       | $1,800,000 |
| FCCR        | 1.35x      |
| Debt / TNW  | 1.20x      |
| LTV         | 75%        |

### Proposed Facility Terms
| Item                | Terms                              |
|---------------------|------------------------------------|
| Amount              | $8,000,000                         |
| Product             | Senior Secured Term Loan           |
| Tenor               | 10 Years                           |
| Pricing             | SOFR + 190 bps                     |
| Current All-in Rate | 5.55%                              |
| Amortization        | Monthly P&I                        |
| Security            | First lien on financed equipment   |

### Internal Risk Assessment
| Metric              | Value   |
|---------------------|---------|
| Internal Grade      | 2       |
| Probability of Default | 0.25% |
| Loss Given Default   | 40%     |
| Expected Loss        | $8,000  |

### Recommendation

Approve as proposed subject to standard documentation and closing conditions.

### Approval Authority

Regional Credit Officer

📄 Export: Word / PDF

---

## ON-SCREEN ARTEFACT 2

**COMMITMENT LETTER**

(Borrower-Facing)

**COMMITMENT LETTER**

**Date: 27 April 2026**

### To: Precision Aerospace Components, LLC
We are pleased to advise that the Bank is prepared to extend credit facilities to Precision Aerospace Components, LLC, subject to execution of definitive documentation and satisfaction of conditions precedent, on the following principal terms:

### Facility Summary
| Item                   | Terms                                 |
|------------------------|----------------------------------------|
| Facility Type          | Senior Secured Equipment Term Loan     |
| Amount                 | $8,000,000                             |
| Purpose                | CNC machinery acquisition              |
| Interest Rate          | SOFR + 1.90%                          |
| Current Indicative Rate| 5.55%                                 |
| Tenor                  | 120 months                            |
| Repayment              | Monthly principal & interest          |
| Security               | First priority lien on financed assets |

### Conditions Precedent
- Executed loan documentation  
- Evidence of insurance  
- UCC filings satisfactory to Bank  
- No material adverse change  
- Accuracy of representations

### Reporting Requirements
- Quarterly management accounts  
- Annual CPA-reviewed statements  
- Compliance certificates

This commitment expires unless accepted within 30 days.

**Authorized Signatory,**
Regional Credit Officer 

📄 Export: Word / PDF

---

## ON-SCREEN ARTEFACT 3

**TERM SHEET**

### Commercial Terms
| Category        | Detail                          |
|----------------|----------------------------------|
| Borrower       | Precision Aerospace Components, LLC |
| Facility       | Equipment Finance Term Loan      |
| Currency       | USD                              |
| Availability   | Single draw                      |
| Maturity       | 120 months                       |
| Pricing Grid   | Floating, SOFR-based            |
| Margin         | 190 bps                         |
| Default Margin | +200 bps                        |
| Prepayment     | Allowed, subject to breakage if applicable |

### Operational Terms
| Category         | Detail                 |
|------------------|------------------------|
| Payment Date     | Monthly                |
| Day Count        | Actual / 360           |
| Interest Reset   | Monthly                |
| Late Charges     | Per agreement          |
| Governing Law    | New York               |

📄 Export: Word / PDF

---

## ON-SCREEN ARTEFACT 4

**FINANCIAL COVENANT SCHEDULE**

**COVENANT SCHEDULE**

The Borrower shall maintain the following covenants at all times unless otherwise waived in writing by the Bank.
| Covenant                        | Requirement                 | Test      |
|---------------------------------|----------------------------|-----------|
| Fixed Charge Coverage Ratio     | Minimum 1.25x              | Quarterly |
| Debt / Tangible Net Worth       | Maximum 1.50x              | Quarterly |
| Tax Distributions               | Max 40% taxable income     | Quarterly |
| Additional Indebtedness         | Restricted above threshold  | Ongoing   |
| Insurance Coverage              | Full replacement value      | Ongoing   |

### Covenant Breach Protocol
Failure to comply may result in reservation of rights, pricing step-up, waiver process, or event of default depending on severity.

📄 Export: Word / PDF

## ON-SCREEN ARTEFACT 5

**SECURITY AGREEMENT SUMMARY**

### SECURITY PACKAGE
As continuing collateral security for all obligations, Borrower grants the Bank a first priority security interest in the following assets:
- CNC Machine Line #1  
- CNC Machine Line #2  
- Robotic automation cells  
- Related accessories, proceeds, replacements, and insurance proceeds

### Valuation Summary
| Metric                    | Amount        |
|---------------------------|--------------|
| Fair Market Value         | $12,300,000  |
| Orderly Liquidation Value | $10,670,000  |
| Loan Amount               | $8,000,000   |
| LTV                       | 75%          |

### Perfection Steps
- UCC-1 Filing  
- Insurance loss payee notation  
- Serial number schedules completed

📄 Export: Word / PDF

---

## ON-SCREEN ARTEFACT 6

**QUARTERLY COMPLIANCE CERTIFICATE**

### COMPLIANCE CERTIFICATE
The undersigned certifies that as of quarter-end, the Borrower is in compliance with the Loan Agreement.
| Metric              | Actual | Required | Status |
|---------------------|--------|----------|--------|
| FCCR                | ____   | ≥1.25x   | ____   |
| Debt/TNW           | ____   | ≤1.50x   | ____   |
| Tax Distributions   | ____   | ≤40%     | ____   |
| Default Existing    | Yes / No | No     | ____   |

Authorized Officer Signature: ___________ 

Date: ___________ 

📄 Export: Word / PDF 

---

## ON-SCREEN ARTEFACT 7

**LOAN BOOKING INSTRUCTION**

### BOOKING INSTRUCTION SHEET

Please establish the following facility in the core lending platform:

| Field            | Value                 |
|------------------|----------------------|
| Customer ID      | PAC-44721            |
| Facility ID      | TL-88412             |
| Product Code     | Equipment Term Loan   |
| Amount           | $8,000,000           |
| Rate Index       | SOFR                 |
| Margin           | 1.90%                |
| Amortization     | Monthly              |
| Effective Date   | Closing Date         |
| Maturity Date    | +120 Months          |

Prepared by: Documentation Agent 

Verified by: Loan Operations 

📄 Export: Word / PDF

### DECISION SIGNALS + BASIS
| Signal               | Value     | Basis                      |
|----------------------|----------|----------------------------|
| Template Version     | Current   | Document Repository        |
| Merge Accuracy       | Verified  | Approved data package      |
| Covenant Accuracy    | Verified  | Policy + sanction terms    |
| Clause Deviations    | None      | Standard docs              |
| Export Readiness     | Complete  | Word/PDF package ready     |

### SO WHAT
- Approval converted into enforceable documents  
- Internal and borrower-facing packs aligned  
- Manual drafting risk removed  
- Closing pack ready immediately

### NOW WHAT
- Validate signatures and conditions precedent  
- Book facility  
- Release funds

> Handing over to Closing Agent...

<br>

# STEP 11 — CLOSING / FUNDING

🤖 **Closing Agent is thinking...**

## PROCESS
- Validate executed docs  
- Confirm lien perfection  
- Refresh sanctions  
- Book facility in core system  
- Release funds

## DECISION SIGNALS
| Signal                | Result      |
|-----------------------|------------|
| Conditions Precedent  | Complete   |
| Booking Status        | Successful |
| Funding Status        | Released   |

## SO WHAT
- Legal protections active  
- Facility live  
- Funds released safely

## NOW WHAT
- Start lifecycle monitoring  
- Watch covenants and risk

> Handing over to Monitoring Agent...

<br>

# STEP 12 — MONITORING

🤖 **Monitoring Agent is thinking...**

## PROCESS
- Lookup quarterly statements  
- Compute FCCR refresh  
- Lookup payment behavior  
- Lookup sector risk refresh  
- Infer alert need

## DECISION SIGNALS
| Signal           | Value      |
|------------------|-----------|
| Monitoring Tier  | Standard   |
| Review Cadence   | Quarterly  |
| Current Risk     | Low        |

## SO WHAT
- Active surveillance enabled  
- Early warning triggers live 
- Risk governance continues

## NOW WHAT
- Continue through maturity  
- Escalate on trigger breach 

> Loan Lifecycle Monitoring Activated

---

# STEP 13 — CONSOLIDATED AUDIT TRAIL + REGULATORY REPLAY

🤖 **Audit Agent is thinking...**

<br>

> Compiling end-to-end lifecycle evidence... 

> Generating replayable audit pack... 

<br>

## CONSOLIDATED AUDIT TRAIL
| Date       | Step           | Event                         | Decision / Output | Owner              |
|------------|----------------|-------------------------------|------------------|--------------------|
| 27 Apr 2026 | Intake        | Application received          | Accepted         | Intake Agent       |
| 27 Apr 2026 | Plan          | Workflow selected             | MM Equipment v4.2 | Plan Agent         |
| 27 Apr 2026 | Compliance    | KYC / AML cleared             | Proceed          | Compliance Agent   |
| 28 Apr 2026 | Spreading     | EBITDA / FCCR complete        | 1.35x FCCR       | Financial Agent    |
| 28 Apr 2026 | Underwriting  | 5C complete                   | Raw Score 2.25   | Assessment Agent   |
| 29 Apr 2026 | Policy        | Appetite tests passed         | No waivers       | Policy Agent       |
| 29 Apr 2026 | Grade         | Internal rating assigned      | Grade 2          | Risk Agent         |
| 29 Apr 2026 | Pricing       | Spread built                  | 190 bps          | Pricing Agent      |
| 30 Apr 2026 | Approval      | Credit sanctioned             | Approved         | RCO                |
| 01 May 2026 | Documentation | Final docs issued             | v1.0             | Docs Agent         |
| 02 May 2026 | Funding       | Facility booked + funded      | $8M              | Closing Agent      |
| 03 May 2026 | Monitoring    | Surveillance active           | Quarterly        | Monitoring Agent   |

## DECISION EXPLAINABILITY SNAPSHOT
| Decision              | Basis                                   |
|----------------------|------------------------------------------|
| Why Approved?        | Grade 2 + Policy Pass + Strong cash flow |
| Why Grade 2?        | Raw Score 2.25                          |
| Why 190 bps?        | EL + Capital + Market                   |
| Why RCO Lane?       | Grade 2 + ≤$10M                         |
| Why Standard Monitoring? | Strong borrower profile           |

## CONTROL CHECKS
| Control                         | Result |
|--------------------------------|--------|
| Unauthorized override          | No     |
| Approved terms = booked terms  | Yes    |
| Missing documents              | No     |
| Delegated authority breach     | No     |
| Audit evidence complete        | Yes    |

## SO WHAT
- Full lifecycle traceable end-to-end  
- Regulator-ready from day one

## NOW WHAT
- Archive case to vault  
- Continue surveillance until maturity

Audit Pack Finalized 

Case Archived 

## FINAL OUTCOME
| Metric      | Result                               |
|-------------|--------------------------------------|
| Borrower    | Precision Aerospace Components, LLC  |
| Approved    | Yes                                  |
| Facility    | $8,000,000                           |
| Grade       | 2                                    |
| Pricing     | SOFR + 190 bps                       |
| All-in Rate | 5.55%                                |
| Approver    | Regional Credit Officer              |
| Funded      | Yes                                  |
| Monitoring  | Active                               |
| Auditability| Full Replayable                      |
`,
    },
    // Scenario 2
    {
        message:"Evaluate Summit Aero Manufacturing, LLC for an $8 million term loan to acquire CNC machinery. Determine whether the bank should lend, assign internal grade, optimize pricing, identify approver, generate documents, fund the facility, and establish post-close monitoring.",
        response: `
🤖 **ORCHESTRATOR INITIALIZATION...**

<br>

> Commercial Lending Orchestrator Initialized

<br>

Mode: Deterministic Plan + Execute + Replanner 

Case ID: CL-SAM-2026-0427-001

### Activated Agents:
- Intake Agent  
- Data Integrity Agent  
- Planner Agent  
- Replanner Agent  
- Compliance Agent  
- Financial Spreading Agent  
- Borrower Assessment Agent  
- Policy Agent  
- Risk Grade Agent  
- Pricing Agent  
- Approval Routing Agent  
- Documentation Agent  
- Closing Agent  
- Monitoring Agent  
- Audit Agent

---

# STEP 1 — RAW APPLICATION INTAKE

🤖 **Intake Agent is thinking...**

## GET
From Loan Origination System:
- Summit Aero Manufacturing, LLC  
- Request = $8,000,000  
- Purpose = CNC machinery acquisition  
- FY2025 audited statements  
- Prior quarter statements  
- Existing appraisal  
- Ownership schedule

## PROCESS
- Capture raw package exactly as submitted  
- Validate schema and readability  
- Confirm mandatory fields

## OUTPUT
| Signal              | Value |
|---------------------|------|
| Raw Completeness    | 92%  |
| Hard Errors         | None |
| Intake Accepted     | Yes  |

## SO WHAT
- Case successfully entered pipeline.

## NOW WHAT
- Perform integrity review. 

---

# STEP 2 — DATA INTEGRITY / GAP REVIEW

🤖 **Data Integrity Agent is thinking...**

## GAPS DETECTED
| Gap                                         | Severity | Recoverable |
|---------------------------------------------|----------|-------------|
| Latest signed interim statements missing     | Medium   | Yes         |
| Appraisal expired by 18 days                | Low      | Yes         |

## SO WHAT
- Incomplete file, but no fatal blockers.

## NOW WHAT
- Select main plan + remediation plans.

---

# STEP 3 — PRIMARY PLAN + SUB-PLANS

🤖 **Planner Agent is thinking...**

<br>

<div>
  <div>Primary Plan Selected:</div>
  <div>US Middle Market Equipment Finance v4.2</div>
</div>

<br>

<div>
  <div>Sub-Plans Loaded:</div>
  <div>1. Financial Proxy Evidence v1.1</div>
  <div>2. Temporary Collateral Haircut v1.0</div>
</div>

## SO WHAT
- Standard path retained with fallback options.

## NOW WHAT
- Run compliance gate.

---

# STEP 4 — EARLY KYC / AML / OWNERSHIP GATE

🤖 **Compliance Agent is thinking...**

| Signal     | Value     |
|------------|----------|
| KYC        | Approved |
| AML        | Clear    |
| Ownership  | Verified |

## SO WHAT
- Borrower legally onboardable.

## NOW WHAT
- Move into spreading.

---

# STEP 5 — REPLANNER TRIGGER

🤖 **Financial Spreading is thinking...**

<br>

> Current signed interim statements unavailable.

> Triggering Replanner.

<br>

## SO WHAT
- Standard underwriting path interrupted.

## NOW WHAT
- Use approved alternate evidence model.

---

# STEP 6 — REPLANNER EXECUTION

🤖 **Replanner Agent is thinking...**

## SUBSTITUTE SOURCES USED

### Financial
- ERP monthly management accounts  
- Treasury inflow trends  
- AR aging  
- Historical margins

### Collateral
- Existing appraisal  
- 5% temporary haircut  
- Fresh appraisal ordered

### SO WHAT
- Missing data replaced with governed evidence.

### NOW WHAT
- Resume underwriting.

---

# STEP 7 — FINANCIAL SPREADING

🤖 **Financial Spreading Agent is thinking...**

| Metric | SAM   |
|--------|------|
| EBITDA | $2.38M |
| CFADS  | $1.68M |
| FCCR   | 1.26x |

## SO WHAT
- Debt service still supported.

## NOW WHAT
- Run borrower assessment.

---

# STEP 8 — 5C UNDERWRITING

🤖 **Borrower Assessment Agent is thinking...**

| Dimension   | Result            |
|-------------|------------------|
| Character   | Strong           |
| Capacity    | Slightly Lower   |
| Capital     | Strong           |
| Collateral  | Slightly Lower   |
| Conditions  | Moderate         |

Raw Score = 2.42 

Internal Grade = 2 

## SO WHAT
- Credit remains bankable.  

## NOW WHAT 
- Apply policy rules.

---

# STEP 9 — POLICY CHECK

🤖 **Policy Agent is thinking...**

| Rule          | Result |
|--------------|--------|
| FCCR ≥1.25x  | Pass   |
| LTV ≤80%     | Pass   |
| Exposure Cap | Pass   |
| Sector Cap   | Pass   |

Adjusted OLV = $10.14M 

LTV = 78.9% 

## SO WHAT
- No waiver required.

## NOW WHAT
- Finalize pricing.

---

# STEP 10 — GRADE + PRICING

🤖 **Risk Grade & Pricing Agent is thinking...**

## PRICING BUILD-UP
| Component                     | bps |
|------------------------------|-----|
| Cost of Funds               | 45  |
| Operating Cost              | 40  |
| Credit Loss Premium         | 20  |
| Capital Charge              | 75  |
| Coverage Cushion Premium    | 10  |
| Temporary Confidence Premium | 15  |

Total Spread = 205 bps

SOFR 3.65% + 2.05% = 5.70%

## CURE STEP-DOWN
<div>
  <div>Upon cure completion:</div>
  <div>Spread = 195 bps</div>
  <div>Rate = 5.60%</div>
</div>

<br>

## SO WHAT
- Bank paid for temporary uncertainty.

## NOW WHAT
- Route to approver.

---

# STEP 11 — APPROVAL ROUTING + HUMAN APPROVAL

🤖 **Regional Credit Officer lane.**

## DECISION

### Approved subject to:
- Interim statements in 10 business days  
- Updated appraisal in 30 calendar days  
- Margin reprices after cure

## SO WHAT
- Deal approved without delay.

## NOW WHAT
- Generate documents.

---

# STEP 12 — DOCUMENTATION

Generated:
- Credit Memo  
- Conditional Commitment Letter  
- Cure Tracker  
- Reporting Addendum  
- Booking Instructions

## ON-SCREEN ARTEFACT 1

CREDIT APPROVAL MEMORANDUM (SUMMIT) 

CONFIDENTIAL CREDIT APPROVAL MEMORANDUM

### Borrower
Summit Aero Manufacturing, LLC

### Recommendation
Approve $8,000,000 Senior Secured Equipment Term Loan subject to post-approval cure conditions.

### Variance from Standard Path
- Latest signed interim statements outstanding  
- Existing appraisal expired by 18 days

### Underwriting Mitigation Applied
- Proxy financial spreading using management accounts + deposit trends  
- 5% temporary haircut to appraisal OLV  
- Temporary pricing premium 

### Final Terms
| Metric            | Value                          |
|------------------|--------------------------------|
| Grade            | 2                              |
| Initial Pricing  | SOFR + 205 bps                 |
| Step-down Pricing | SOFR + 195 bps upon cure       |
| Approval Status  | Conditional Approval           |

### Required Conditions
- Signed interim statements within 10 business days  
- Updated appraisal within 30 calendar days

📄 Export: Word / PDF

## ON-SCREEN ARTEFACT 2

COMMITMENT LETTER (SUMMIT) 

COMMITMENT LETTER

To: Summit Aero Manufacturing, LLC

The Bank is pleased to extend the following commitment subject to definitive documentation and the conditions below.

| Item              | Terms                          |
|------------------|--------------------------------|
| Amount           | $8,000,000                     |
| Rate (Initial)   | SOFR + 2.05%                   |
| Rate Upon Cure   | SOFR + 1.95%                   |
| Tenor            | 10 Years                       |
| Security         | First lien on financed equipment |

### Additional Conditions
- Borrower to deliver signed quarterly interim statements within 10 business days of closing  
- Borrower to deliver refreshed third-party appraisal within 30 days of closing  
- Failure to cure may result in pricing retention or further lender action

📄 Export: Word / PDF

## ON-SCREEN ARTEFACT 3

COVENANT / REPORTING ADDENDUM (SUMMIT) 

TEMPORARY REPORTING ADDENDUM 

Until all cure items are satisfied:
| Requirement                 | Frequency |
|----------------------------|----------|
| Management Accounts        | Monthly  |
| Accounts Receivable Aging  | Monthly  |
| Deposit Trend Review       | Monthly  |
| Covenant Snapshot          | Monthly  |

### Upon cure completion:
- Reporting cadence reverts to standard quarterly package.  

📄 Export: Word / PDF

## ON-SCREEN ARTEFACT 4

POST-CLOSE CURE TRACKER 

POST-CLOSE CONDITION TRACKER

| Item                          | Due Date      | Owner                 | Status  |
|-------------------------------|--------------|-----------------------|---------|
| Signed Interim Statements      | +10 BD       | Borrower CFO         | Open    |
| Updated Appraisal             | +30 CD       | Borrower / Appraiser | Open    |
| Margin Step-down Trigger Review| Upon completion | Loan Ops           | Pending |

📄 Export: Word / PDF

## ON-SCREEN ARTEFACT 5

BOOKING INSTRUCTION (SUMMIT) 

BOOKING INSTRUCTION

| Field         | Value                          |
|--------------|--------------------------------|
| Borrower     | Summit Aero Manufacturing, LLC |
| Margin        | 2.05%                          |
| Auto Reprice  | 1.95% upon cure completion     |
| Monitoring Tier | Enhanced Temporary          |
| Review Date   | Monthly                        |

📄 Export: Word / PDF

### SO WHAT
- Decision converted into executable documents.

### NOW WHAT
- Close and fund.

## STEP 13 — FUNDING + ENHANCED MONITORING

### FUNDING
| Action          | Result        |
|-----------------|--------------|
| Docs signed     | Yes          |
| UCC filed       | Yes          |
| Facility booked | Yes          |
| Funds released  | $8,000,000   |

### TEMPORARY MONITORING
| Item                | Frequency |
|---------------------|----------|
| Management Accounts | Monthly  |
| AR Aging            | Monthly  |
| Cure Tracker        | Weekly   |

### CURE ITEMS
| Item               | Due     |
|--------------------|---------|
| Signed interims    | +10 BD  |
| Updated appraisal  | +30 CD  |

### AUTO ACTIONS
| Trigger                    | Action                    |
|----------------------------|--------------------------|
| Both cure items complete   | Reprice to 195 bps       |
| Interim overdue            | Alert RM + Credit Ops    |
| Appraisal overdue          | Collateral exception     |
| FCCR <1.25x                | Covenant workflow        |

## SO WHAT
- Loan funded safely with controls.

## NOW WHAT 
- Continue monitoring until cure complete.

## STEP 14 — CURE COMPLETION

Borrower subsequently provides:
- Signed interim statements  
- Updated appraisal

<br>

<div>
  <div>All cure items satisfied.</div>
  <div>Spread reduced to 195 bps.</div>
  <div>Monitoring tier reset to Standard.</div>
</div>

## STEP 15 — CONSOLIDATED AUDIT TRAIL
| Date       | Step          | Event                                                | Decision / Output         | Owner                  |
|------------|--------------|------------------------------------------------------|---------------------------|------------------------|
| 27 Apr 2026 | Intake       | Application received                                | Accepted                  | Intake Agent           |
| 27 Apr 2026 | Data Review  | Missing interims + stale appraisal detected          | Recoverable               | Data Integrity Agent   |
| 27 Apr 2026 | Planning     | Primary plan + sub-plans selected                    | Ready to execute         | Planner Agent          |
| 28 Apr 2026 | Compliance   | KYC / AML / Ownership checked                        | Cleared                  | Compliance Agent       |
| 28 Apr 2026 | Replanner    | Standard path blocked by missing interims            | Alternate path invoked   | Replanner Agent        |
| 29 Apr 2026 | Spreading    | Proxy EBITDA / FCCR calculated                       | FCCR 1.26x               | Financial Agent        |
| 29 Apr 2026 | Underwriting | 5C scorecard completed                               | Grade 2                  | Assessment Agent       |
| 30 Apr 2026 | Policy       | Appetite / thresholds tested                         | Passed                   | Policy Agent           |
| 30 Apr 2026 | Pricing      | Risk-adjusted pricing built                          | 205 bps / 5.70%          | Pricing Agent          |
| 01 May 2026 | Approval     | Conditional sanction granted                         | Approved                 | Regional Credit Officer|
| 04 May 2026 | Documentation| Docs generated and issued                            | Ready to close          | Documentation Agent    |
| 05 May 2026 | Funding      | Facility booked and funded                           | $8M released             | Closing Agent          |
| 15 May 2026 | Cure 1       | Interim statements received                          | Pending final cure       | Monitoring Agent       |
| 28 May 2026 | Cure 2       | Updated appraisal received                           | All cure items complete  | Monitoring Agent       |
| 01 Jun 2026 | Repricing    | Margin reduced                                       | 195 bps / 5.60%          | Ops Agent              |

## FINAL OUTCOME
| Metric         | Result                          |
|----------------|----------------------------------|
| Borrower       | Summit Aero Manufacturing, LLC   |
| Decision       | Approved with Conditions         |
| Grade          | 2                                |
| Initial Rate   | 5.70%                            |
| Final Rate     | 5.60%                            |
| Funding Date   | 05 May 2026                     |
| Full Cure Date | 01 Jun 2026                     |
| Auditability   | Full Replayable                 |

Commercial Lending Lifecycle Completed Successfully 

Audit Vault Updated 
`
    },
    // Scenario 3
    {
        message: "Evaluate Vector Aero Components, LLC for an $8 million term loan to acquire CNC machinery. Determine whether the bank should lend, assign internal grade, optimize structure and pricing, identify approver, generate documents, fund the facility, establish post-close monitoring, and maintain full auditability.",
        response: `
🤖 **ORCHESTRATOR INITIALIZATION...**

<br>

<div>
  <div>Commercial Lending Orchestrator Initialized</div>
  <div>Mode: Deterministic Credit Workflow + Replanner + Mandatory HITL</div>
  <div>Case ID: CL-VAC-2026-0427-001</div>
</div>


`
    }
  ])
);
