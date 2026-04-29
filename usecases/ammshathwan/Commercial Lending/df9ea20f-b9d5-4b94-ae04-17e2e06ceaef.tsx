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


## Activated Agents:

| **Initiation & Planning** | **Assessment & Compliance** | **Execution & Oversight** |
|---------------------------|----------------------------|--------------------------|
| Intake Agent | Compliance Lookup Agent | Pricing Agent |
| Plan Resolution Agent | Financial Spreading Agent | Approval Routing Agent |
| Borrower Assessment Agent | Policy Agent | Documentation Agent |
| Risk Grade Agent | Monitoring Agent | Closing Agent |
| Audit Agent | | |

# DESIGN PRINCIPLE USED THROUGHOUT

For every step, Kaya distinguishes:

## LOOKUP
Use governed upstream systems, reference tables, policy repositories, or prior approved outputs.

## COMPUTE
Perform fresh deterministic calculations inside the iFlow. 

## INFER 
Apply approved rules/logic to reach controlled conclusions.

<br>

---

# STEP 1 — APPLICATION INTAKE + ELIGIBILITY

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

🤖 **Plan Resolution Agent is thinking...**

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

`,
    },
    {
      message: "Approve",
      response: `
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

**ON-SCREEN ARTEFACTS** 

<details>
  <summary>ON-SCREEN ARTEFACT 1 - CREDIT APPROVAL MEMORANDUM (Internal Credit Decision Pack)</summary>

## CONFIDENTIAL CREDIT APPROVAL MEMORANDUM

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1aOBRgq8eIVDtyj2CioWXHrFB7FH_0uNn" download="On-Screen_Artefact_1.pdf">On-Screen_Artefact_1.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 2 - COMMITMENT LETTER (Borrower-Facing)</summary>

## Date: 27 April 2026

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1aOBRgq8eIVDtyj2CioWXHrFB7FH_0uNn" download="On-Screen_Artefact_2.pdf">On-Screen_Artefact_2.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 3 - TERM SHEET</summary>

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1aOBRgq8eIVDtyj2CioWXHrFB7FH_0uNn" download="On-Screen_Artefact_3.pdf">On-Screen_Artefact_3.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 4 - FINANCIAL COVENANT SCHEDULE</summary>

## COVENANT SCHEDULE

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1aOBRgq8eIVDtyj2CioWXHrFB7FH_0uNn" download="On-Screen_Artefact_4.pdf">On-Screen_Artefact_4.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 5 - SECURITY AGREEMENT SUMMARY</summary>

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1aOBRgq8eIVDtyj2CioWXHrFB7FH_0uNn" download="On-Screen_Artefact_5.pdf">On-Screen_Artefact_5.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 6 - QUARTERLY COMPLIANCE CERTIFICATE</summary>

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1aOBRgq8eIVDtyj2CioWXHrFB7FH_0uNn" download="On-Screen_Artefact_6.pdf">On-Screen_Artefact_6.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 7 - LOAN BOOKING INSTRUCTION</summary>

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1aOBRgq8eIVDtyj2CioWXHrFB7FH_0uNn" download="On-Screen_Artefact_7.pdf">On-Screen_Artefact_7.pdf</a>


</details>

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
| 18 Apr 2026 | Intake        | Application received          | Accepted         | Intake Agent       |
| 18 Apr 2026 | Plan          | Workflow selected             | MM Equipment v4.2 | Plan Agent         |
| 18 Apr 2026 | Compliance    | KYC / AML cleared             | Proceed          | Compliance Agent   |
| 19 Apr 2026 | Spreading     | EBITDA / FCCR complete        | 1.35x FCCR       | Financial Agent    |
| 19 Apr 2026 | Underwriting  | 5C complete                   | Raw Score 2.25   | Assessment Agent   |
| 20 Apr 2026 | Policy        | Appetite tests passed         | No waivers       | Policy Agent       |
| 20 Apr 2026 | Grade         | Internal rating assigned      | Grade 2          | Risk Agent         |
| 20 Apr 2026 | Pricing       | Spread built                  | 190 bps          | Pricing Agent      |
| 21 Apr 2026 | Approval      | Credit sanctioned             | Approved         | RCO                |
| 22 Apr 2026 | Documentation | Final docs issued             | v1.0             | Docs Agent         |
| 23 Apr 2026 | Funding       | Facility booked + funded      | $8M              | Closing Agent      |
| 24 Apr 2026 | Monitoring    | Surveillance active           | Quarterly        | Monitoring Agent   |

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

| **Initiation & Planning** | **Assessment & Compliance** | **Execution & Oversight** |
|---------------------------|----------------------------|--------------------------|
| Intake Agent | Compliance Agent | Pricing Agent |
| Data Integrity Agent | Financial Spreading Agent | Approval Routing Agent |
| Planner Agent | Borrower Assessment Agent | Documentation Agent |
| Replanner Agent | Policy Agent | Closing Agent |
| Risk Grade Agent | Monitoring Agent | Audit Agent |

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

### Primary Plan Selected:
US Middle Market Equipment Finance v4.2

### Sub-Plans Loaded:
  1. Financial Proxy Evidence v1.1
  2. Temporary Collateral Haircut v1.0

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

## SO WHAT
- Bank paid for temporary uncertainty.

## NOW WHAT
- Route to approver.
`,
    },
    {
      message: "Approved",
      response: `

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

**ON-SCREEN ARTEFACTS** 

<details>
  <summary>ON-SCREEN ARTEFACT 1 - CREDIT APPROVAL MEMORANDUM (SUMMIT)</summary>

## CONFIDENTIAL CREDIT APPROVAL MEMORANDUM

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1cP7BO8TB4o1TuCb4UCH5zyxfs1hUeo7x" download="On-Screen_Artefact_1.pdf">On-Screen_Artefact_1.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 2 - COMMITMENT LETTER (SUMMIT)</summary>

## COMMITMENT LETTER

### To: Summit Aero Manufacturing, LLC

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

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1cP7BO8TB4o1TuCb4UCH5zyxfs1hUeo7x" download="On-Screen_Artefact_2.pdf">On-Screen_Artefact_2.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 3 - COVENANT / REPORTING ADDENDUM (SUMMIT)</summary>

## TEMPORARY REPORTING ADDENDUM 

Until all cure items are satisfied:
| Requirement                 | Frequency |
|----------------------------|----------|
| Management Accounts        | Monthly  |
| Accounts Receivable Aging  | Monthly  |
| Deposit Trend Review       | Monthly  |
| Covenant Snapshot          | Monthly  |

### Upon cure completion:
- Reporting cadence reverts to standard quarterly package.  

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1cP7BO8TB4o1TuCb4UCH5zyxfs1hUeo7x" download="On-Screen_Artefact_3.pdf">On-Screen_Artefact_3.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 4 - POST-CLOSE CURE TRACKER</summary>

## POST-CLOSE CONDITION TRACKER

| Item                          | Due Date      | Owner                 | Status  |
|-------------------------------|--------------|-----------------------|---------|
| Signed Interim Statements      | +10 BD       | Borrower CFO         | Open    |
| Updated Appraisal             | +30 CD       | Borrower / Appraiser | Open    |
| Margin Step-down Trigger Review| Upon completion | Loan Ops           | Pending |

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1cP7BO8TB4o1TuCb4UCH5zyxfs1hUeo7x" download="On-Screen_Artefact_4.pdf">On-Screen_Artefact_4.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 5 - BOOKING INSTRUCTION (SUMMIT)</summary>

## BOOKING INSTRUCTION

| Field         | Value                          |
|--------------|--------------------------------|
| Borrower     | Summit Aero Manufacturing, LLC |
| Margin        | 2.05%                          |
| Auto Reprice  | 1.95% upon cure completion     |
| Monitoring Tier | Enhanced Temporary          |
| Review Date   | Monthly                        |

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=1cP7BO8TB4o1TuCb4UCH5zyxfs1hUeo7x" download="On-Screen_Artefact_5.pdf">On-Screen_Artefact_5.pdf</a>

</details>

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
| 20 Mar 2026 | Intake       | Application received                                | Accepted                  | Intake Agent           |
| 20 Mar 2026 | Data Review  | Missing interims + stale appraisal detected          | Recoverable               | Data Integrity Agent   |
| 20 Mar 2026 | Planning     | Primary plan + sub-plans selected                    | Ready to execute         | Planner Agent          |
| 21 Mar 2026 | Compliance   | KYC / AML / Ownership checked                        | Cleared                  | Compliance Agent       |
| 21 Mar 2026 | Replanner    | Standard path blocked by missing interims            | Alternate path invoked   | Replanner Agent        |
| 22 Mar 2026 | Spreading    | Proxy EBITDA / FCCR calculated                       | FCCR 1.26x               | Financial Agent        |
| 22 Mar 2026 | Underwriting | 5C scorecard completed                               | Grade 2                  | Assessment Agent       |
| 23 Mar 2026 | Policy       | Appetite / thresholds tested                         | Passed                   | Policy Agent           |
| 23 Mar 2026 | Pricing      | Risk-adjusted pricing built                          | 205 bps / 5.70%          | Pricing Agent          |
| 24 Mar 2026 | Approval     | Conditional sanction granted                         | Approved                 | Regional Credit Officer|
| 27 Mar 2026 | Documentation| Docs generated and issued                            | Ready to close          | Documentation Agent    |
| 28 Mar 2026 | Funding      | Facility booked and funded                           | $8M released             | Closing Agent          |
| 07 Apr 2026 | Cure 1       | Interim statements received                          | Pending final cure       | Monitoring Agent       |
| 20 Apr 2026 | Cure 2       | Updated appraisal received                           | All cure items complete  | Monitoring Agent       |
| 24 Apr 2026 | Repricing    | Margin reduced                                       | 195 bps / 5.60%          | Ops Agent              |

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
`,
    },
    // Scenario 3
    {
      message: "Evaluate Vector Aero Components, LLC for an $8 million term loan to acquire CNC machinery. Determine whether the bank should lend, assign internal grade, optimize structure and pricing, identify approver, generate documents, fund the facility, establish post-close monitoring, and maintain full auditability.",
      response: `
**🤖 ORCHESTRATOR INITIALIZATION** 

> Commercial Lending Orchestrator Initialized 

> Mode: Deterministic Credit Workflow + Replanner + Mandatory HITL

> Case ID: CL-VAC-2026-0427-001 

<br>

**Activated Agents:** 

| **Onboarding & Assessment** | **Risk & Compliance** | **Execution & Oversight** |
|----------------------------|----------------------|--------------------------|
| Intake Agent | Compliance Lookup Agent | Structuring Agent |
| Plan Resolution Agent | Financial Spreading Agent | Pricing Agent |
| Borrower Assessment Agent | Policy Agent | Documentation Agent |
| Sector Intelligence Agent | Customer Concentration Stress Agent | Closing Agent |
| Demand Outlook Agent | Adverse Media Review Agent | Monitoring Agent |
| Replanner Agent | Human Review Coordinator Agent | Audit Agent |

### DESIGN PRINCIPLES 

| **Type** | **Meaning** |
|----------|-------------|
| Lookup | Governed data retrieval from upstream systems, policy stores, scorecards, or third-party feeds |
| Compute | Deterministic calculation performed inside the iFlow |
| Infer | Rule-based conclusion using approved thresholds |
| Replan | Controlled alternate execution path when original path becomes weak or non-approvable |
| Recommend | Non-prescriptive decision support for human approver |
| HITL | Human decision authority retained |
| Log | Full auditability and replayability |

---

**STEP 1 — APPLICATION INTAKE + ELIGIBILITY** 

<br>

**🤖 Intake Agent is thinking…** 

> New commercial lending request received. 

> Capturing raw application package. 

> No assumptions made at intake. 

<br>

**GET** 

| **Data Received by iFlow** | **Source** |
|---------------------------|------------|
| Borrower legal name: Vector Aero Components, LLC | Loan Origination System |
| Request amount: $8,000,000 | Loan Origination System |
| Purpose: CNC machinery acquisition | Loan application |
| Entity type: LLC | Application / tax package |
| Existing operating account relationship | CRM / Treasury |
| Audited FY2025 financial statements | Document Vault |
| Current interim financial statements | Document Vault |
| Tax returns | Document Vault |
| Debt schedule | Borrower upload |
| Appraisal report | Collateral repository |
| Ownership file | KYC platform |
| Customer concentration schedule | Borrower upload / AR ledger |
| Purchase order backlog | Borrower upload |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Lookup | Existing relationship in CRM |
| Lookup | Existing exposure snapshot in core lending |
| Compute | Intake completeness score |
| Infer | Segment from request size |
| Infer | Equipment finance product lane from stated use of proceeds |
| Package | Canonical case object created |

**DECISION SIGNALS + BASIS** 

| **Signal** | **Type** | **Value** | **Basis** |
|------------|----------|-----------|-----------|
| Application completeness | Compute | 100% | Mandatory checklist complete |
| Product fit | Lookup | Eligible | Equipment finance product matrix |
| Segment | Infer | Middle Market | $8M request threshold |
| Relationship value | Lookup | Positive | Existing operating account relationship |
| Intake data quality | Compute | High | Structured package with required docs |
| Intake accepted | Infer | Yes | No intake blockers |

**SO WHAT** 

- Clean package received.  
- Request is commercially valid.  
- No missing-file issue like SAM.  
- Intake does not automatically mean approval; it only confirms the case can be assessed.  

**NOW WHAT** 

- Resolve the base execution plan.  
- Identify whether standard plan alone is sufficient.  
- Attach specialist modules only where facts justify deeper analysis.  

> Handing over to Plan Resolution Agent... 

---

**STEP 1A — EXECUTION PLAN RESOLUTION** 

> Fact-Led Base Plan + Specialist Module Attachment 

<br>

**🤖 Plan Resolution Agent is thinking…** 

> Selecting core workflow... 

> Reviewing early borrower facts... 

> Identifying where standard plan alone is insufficient...

> Attaching only necessary specialist modules... 

<br>

**GET** 

| **Source** | **Data Received** | **Why Used** |
|------------|-------------------|---------------|
| Loan Origination System | $8M equipment term loan request | Determines base product workflow |
| CRM | Existing client relationship | Relationship context |
| Financial Pre-Scan Engine | Preliminary FCCR = 1.18x | Early repayment stress signal |
| Revenue Analyzer | Largest customer = 58% of revenue | Customer dependency signal |
| Compliance Cache | Ownership soft adverse-media match | Governance / reputation signal |
| Industry Registry | Aerospace components supplier | Sector workflow context |
| Appraisal Pack | LTV = 79% | Collateral policy check |
| Portfolio System | Aerospace portfolio within limit | Sector appetite check |

**STAGE A — BASE PLAN SELECTION** 

| **Core Facts** | **Value** | **Plan Impact** |
|----------------|-----------|-----------------|
| Geography | US | US credit policy pack |
| Borrower size | Middle Market | Middle-market workflow |
| Purpose | CNC machinery acquisition | Equipment finance workflow |
| Facility amount | $8M | Delegated approval possible only if risk profile supports it |
| Data package | Complete | No data recovery plan needed |

**Base Plan Selected:** 
US Middle Market Equipment Finance v4.2 

Base plan covers: 
- standard underwriting  
- 5C scoring  
- policy checks  
- pricing  
- approval routing  
- documentation  
- funding  
- monitoring  

**STAGE B — FACT REVIEW TO IDENTIFY WHERE BASE PLAN IS INSUFFICIENT** 

> The Plan Resolution Agent asks: 

> *Which early facts create risk questions that the standard plan cannot answer deeply enough?*

<br>

**FACT 1 — Largest Customer = 58% of Revenue** 

> *Why This Matters* 

> The borrower depends heavily on one aerospace OEM. Standard underwriting sees current revenue, but does not fully answer whether the borrower can survive if that OEM delays, reduces, or reprices orders. 

| **Metric** | **Value** | **Threshold** |
|------------|-----------|---------------|
| Largest customer revenue share | 58% | >40% caution, >50% elevated |

**Additional Analysis Required** 
- Customer order reduction sensitivity  
- EBITDA impact  
- FCCR impact  
- Downgrade sensitivity  
- Dependency mitigation  

**Specialist Module Attached:** Customer Concentration Stress Test 

> *Why This Module Specifically* 

> Because the unanswered question is: *Can repayment survive partial loss or delay from the dominant customer?* 

<br>

**FACT 2 — Aerospace Supply Chain Exposure** 

> *Why This Matters* 

> VAC is not just any manufacturer. It is tied to the aerospace production cycle. Backward-looking financials do not explain whether demand weakness is temporary or structural. 

**Sources Needed** 
- OEM production guidance  
- Aircraft build-rate forecasts  
- Aerospace supplier outlook  
- Internal sector risk view  
- Portfolio stress indicators  

**Additional Analysis Required** 
- Temporary slowdown vs structural decline  
- Margin pressure outlook  
- Backlog quality  
- Recovery timing confidence  

**Specialist Module Attached:** Demand Outlook Analysis 

> *Why This Module Specifically* 

> Because the same 58% concentration has very different implications if aerospace demand is delayed for two quarters versus structurally reduced. 

<br>

**FACT 3 — Ownership Soft Adverse Media Match** 

> *Why This Matters* 

> Base KYC can clear sanctions and AML, but a soft media match requires classification. The bank must know whether it is a benign civil matter or an integrity / governance concern. 

| **Early Signal** | **Value** |
|------------------|-----------|
| Sanctions | No match |
| PEP | No match |
| Adverse media | Historical civil supplier dispute involving beneficial owner |

**Additional Analysis Required** 
- Civil dispute vs fraud pattern  
- Regulatory / criminal relevance  
- Reputational severity  
- Committee disclosure requirement  

**Specialist Module Attached:** Adverse Media Escalation Review 

> *Why This Module Specifically* 

> Because legal permissibility is not the same as reputational acceptability. 

<br>

**FACT 4 — FCCR = 1.18x vs Policy Floor 1.25x** 

> *Why This Matters* 

> The requested $8M standard amortizing structure does not meet the bank's normal repayment coverage threshold. 

| **Metric** | **Value** | **Policy Floor** |
|------------|-----------|------------------|
| FCCR | 1.18x | ≥1.25x |

**Additional Analysis Required** 
- Reduced hold size  
- Interest-only period  
- Sponsor guarantee  
- Cash sweep  
- Accordion structure  
- Enhanced monitoring  

**Specialist Module Attached:** Credit Exception Structuring Pack 

> *Why This Module Specifically* 

> Because the issue may be structure, not total borrower viability. 

**FACTS THAT DO NOT REQUIRE EXTRA MODULES** 

| **Fact** | **Why No Additional Module** |
|----------|------------------------------|
| LTV 79% | Within policy, but tight; can be handled in base collateral assessment |
| Domestic borrower | No cross-border / FX module needed |
| Full intake package | No data recovery module needed |
| No sanctions match | No hard compliance escalation module needed |
| Existing relationship | No new-to-bank onboarding expansion needed |

**GIVE** 

| **Give To** | **Data Sent** |
|-------------|---------------|
| Compliance Lookup Agent | Ownership media details |
| Financial Spreading Agent | Preliminary FCCR concern |
| Sector Intelligence Agent | Aerospace supplier classification |
| Customer Concentration Stress Agent | 58% top-customer exposure |
| Demand Outlook Agent | OEM dependency + backlog file |
| Adverse Media Review Agent | Media match details |
| Structuring Agent | FCCR shortfall + LTV 79% |
| Human Review Coordinator | Early escalation probability |

**FINAL PLAN OUTPUT** 

**Base Plan:** US Middle Market Equipment Finance v4.2 

**Attached Specialist Modules:** 
1. Customer Concentration Stress Test 
2. Demand Outlook Analysis 
3. Adverse Media Escalation Review 
4. Credit Exception Structuring Pack 

**DECISION SIGNALS + BASIS** 

| **Signal** | **Value** | **Basis** |
|------------|-----------|-----------|
| Straight-through eligible | No | FCCR shortfall + concentration + media flag |
| Auto decline required | No | Risks are analyzable and potentially mitigatable |
| Enhanced review required | Yes | Multi-factor risk case |
| Human review probability | High | Policy exception likely |
| Standard base plan still valid | Yes | Product, geography, and segment fit |

**SO WHAT** 

- VAC is not a clean approval path.  
- Standard workflow remains valid, but insufficient by itself.  
- Each specialist module is attached because a specific fact creates an unresolved risk question.  
- No irrelevant modules are loaded.  

**NOW WHAT** 

- Begin execution with compliance review, already tagged for ownership-media review.  

> Handing over to Compliance Lookup Agent... 

---

**STEP 2 — KYC / AML / OWNERSHIP GATE** 

> Including Adverse Media Classification 

<br>

**🤖 Compliance Lookup Agent is thinking…** 

> Retrieving enterprise compliance profile... 

> Classifying residual ownership media issue... 

<br>

**GET** 

| **Data** | **Source** |
|----------|------------|
| Compliance Case ID | Loan Origination System |
| KYC profile | Fenergo / enterprise KYC utility |
| AML screening | Actimize / internal AML platform |
| Sanctions result | World-Check / OFAC screening utility |
| Beneficial ownership file | KYC platform |
| Adverse media hit | LexisNexis / Dow Jones / internal screening cache |
| Prior relationship conduct | CRM / Treasury |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Lookup | KYC approval status |
| Lookup | AML / sanctions results |
| Lookup | Beneficial ownership status |
| Compute | Refresh aging |
| Classify | Adverse media type and severity |
| Infer | Compliance proceed / hold / escalate status |

**ADVERSE MEDIA REVIEW DETAIL** 

| **Question** | **Result** |
|--------------|------------|
| Is there a sanctions match? | No |
| Is there a criminal / fraud reference? | No |
| Is there regulatory censure? | No |
| Is the issue civil/commercial litigation? | Yes |
| Was matter resolved? | Settled four years ago |
| Does this require committee disclosure? | Yes |
| Does this require automatic decline? | No |

**DECISION SIGNALS + BASIS** 

| **Signal** | **Type** | **Value** | **Basis** |
|------------|----------|-----------|-----------|
| KYC status | Lookup | Approved | Fenergo case status |
| AML result | Lookup | Clear | Screening utility |
| Ownership verified | Lookup | Yes | UBO file complete |
| Refresh status | Compute | Current | Within 12-month SLA |
| Adverse media severity | Infer | Moderate | Civil supplier dispute, no fraud/crime |
| Compliance hard stop | Infer | No | No sanctions / AML blocker |
| Committee disclosure | Infer | Required | Residual governance sensitivity |

**SO WHAT** 

- Compliance noise is reduced.  
- No legal onboarding blocker exists.  
- Residual reputational concern remains and must be surfaced to HITL.  

**NOW WHAT** 

- Continue financial underwriting.  
- Carry adverse media disclosure flag forward.  

> Handing over to Financial Spreading Agent... 

---

**STEP 3 — FINANCIAL SPREADING** 

<br>

**🤖 Financial Spreading Agent is thinking…** 

> Spreading financials...

> Calculating repayment capacity... 

> Testing whether requested $8M structure meets minimum coverage standards... 

<br>

**GET** 

| **Data** | **Source** |
|----------|------------|
| Audited FY2025 financials | Document Vault |
| Interim statements | Document Vault |
| Tax returns | Document Vault |
| Debt schedule | Borrower upload |
| Appraisal | Collateral repository |
| Existing operating account trends | Treasury |
| Customer concentration schedule | AR ledger |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Compute | EBITDA |
| Compute | CFADS |
| Compute | FCCR |
| Compute | Debt / TNW |
| Compute | LTV |
| Infer | Coverage weakness |
| Infer | Collateral acceptability |
| Prepare | Inputs for 5C scorecard and stress testing |

**FINANCIAL SPREAD OUTPUT** 

| **Metric** | **Value** | **Basis** |
|------------|-----------|-----------|
| Revenue | $17.0M | Audited / interim financials |
| EBITDA | $2.20M | NI + Interest + Taxes + D&A |
| Maintenance CapEx / tax distributions / fixed uses | $0.78M | Spread adjustments |
| CFADS | $1.42M | EBITDA less fixed uses |
| Annual debt service on requested structure | $1.20M | Existing + proposed amortizing debt |
| FCCR | 1.18x | 1.42M / 1.20M |
| Total liabilities / tangible net worth | 1.42x | Balance sheet spread |
| Appraised OLV | $10.13M | Appraisal |
| LTV | 79% | 8M / 10.13M |

**DECISION SIGNALS + BASIS** 

| **Signal** | **Type** | **Value** | **Basis** |
|------------|----------|-----------|-----------|
| Capacity | Compute / Infer | Weak | FCCR 1.18x below 1.25x floor |
| Capital | Compute / Infer | Moderate | Debt / TNW 1.42x near 1.50x cap |
| Collateral | Compute / Infer | Acceptable | LTV 79% below 80% max |
| Cash flow cushion | Infer | Thin | 0.07x below policy floor |
| Immediate straight approval | Infer | Not supportable | Coverage breach |

**SO WHAT** 

- Business is profitable but thinly covered.  
- Collateral is acceptable but close to policy ceiling.  
- Standard $8M amortizing request is not cleanly approvable.  

**NOW WHAT** 

- Convert current facts into 5C score.  
- Then run specialist analytics.  

> Handing over to Borrower Assessment Agent... 

---

**STEP 4 — 5C UNDERWRITING** 

<br>

**🤖 Borrower Assessment Agent is thinking…** 

> Scoring borrower under 5C framework...

> Separating borrower weakness from structure weakness... 

<br>

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Lookup | Character scorecard |
| Lookup | Capacity scorecard |
| Lookup | Capital scorecard |
| Lookup | Collateral scorecard |
| Lookup | Conditions scorecard |
| Compute | Weighted raw score |
| Infer | Indicative internal grade |

**5C SCORECARD** 

| **5C** | **Value** | **Rubric / Basis** | **Result** |
|--------|-----------|--------------------|------------|
| Character | Clean AML, but moderate media flag | Civil litigation disclosure | Moderate |
| Capacity | FCCR 1.18x | Below 1.25x policy floor | Weak |
| Capital | Debt / TNW 1.42x | Near 1.50x cap | Moderate |
| Collateral | LTV 79% | Below 80% max, but tight | Acceptable |
| Conditions | Aerospace supplier, OEM slowdown | Weakening outlook | Weakening |

Raw Score = 3.85 
Indicative Grade = 5 

**DECISION SIGNALS + BASIS** 

| **Signal** | **Value** | **Basis** |
|------------|-----------|-----------|
| Indicative grade | 5 | Raw score 3.85 |
| Straight-through approval | No | Grade + FCCR breach |
| Auto-decline | No | Collateral acceptable and business profitable |
| HITL likely | Yes | Exception / restructuring required |

**SO WHAT** 

- VAC is materially weaker than PAC and SAM.  
- Original request is not approvable as-is.  
- But there is enough underlying business viability to justify deeper analysis.  

**NOW WHAT** 

- Execute attached specialist modules.  
- Convert ambiguity into committee-ready evidence.  

> Handing over to Customer Concentration Stress Agent... 

---

**STEP 5 — SPECIALIST MODULE 1** 

> Customer Concentration Stress Test 

<br>


**🤖 Customer Concentration Stress Agent is thinking…** 

> Testing repayment resilience under dominant customer dependency... 

<br>

**GET** 

| **Data** | **Source** |
|----------|------------|
| Customer concentration schedule | AR ledger |
| Top customer revenue share | Revenue Analyzer |
| Historical order patterns | ERP / sales ledger |
| Backlog by customer | Borrower backlog file |
| Payment history by customer | AR aging |

**KEY FACT** 

| **Metric** | **Value** |
|------------|-----------|
| Largest customer share | 58% of revenue |
| Second-largest customer share | 13% |
| Top-five customer share | 81% |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Compute | Revenue exposure by top customer |
| Compute | EBITDA impact under order reduction |
| Compute | FCCR under stress |
| Infer | Concentration severity |
| Generate | Stress outputs for structuring |

**STRESS SCENARIOS** 

| **Scenario** | **Revenue Impact** | **EBITDA** | **FCCR** | **Interpretation** |
|--------------|--------------------|------------|----------|---------------------|
| Base case | None | $2.20M | 1.18x | Already below floor |
| Mild OEM reduction | 10% top-customer reduction | $1.95M | 1.07x | Coverage weakens further |
| Moderate OEM reduction | 20% top-customer reduction | $1.65M | 0.96x | Debt service not covered |
| Severe OEM reduction | 30% top-customer reduction | $1.38M | 0.82x | High default risk under structure |

**DECISION SIGNALS + BASIS** 

| **Signal** | **Value** | **Basis** |
|------------|-----------|-----------|
| Concentration risk | High | Top customer 58% |
| Stress resilience | Weak | FCCR below 1.0x under moderate stress |
| Structure sensitivity | High | Debt service burden drives weakness |
| Need for mitigation | Yes | Concentration not removable immediately |

**SO WHAT** 

- VAC's risk is not only current coverage; it is dependency-driven downside risk.  
- Standard $8M amortization is fragile.  
- Concentration must be controlled through structure, covenants, or phased exposure.  

**NOW WHAT** 

- Run demand outlook analysis to see whether concentration is temporary, cyclical, or structural.  

> Handing over to Demand Outlook Agent... 

---

**STEP 6 — SPECIALIST MODULE 2** 

> Demand Outlook Analysis 

<br>

**🤖 Demand Outlook Agent is thinking…** 

> Assessing whether aerospace OEM weakness is temporary or structural... 

<br>

**GET** 

| **Data** | **Source** |
|----------|------------|
| OEM earnings guidance | Public filings / earnings call feed |
| Aerospace build-rate forecast | S&P / Moody's / internal sector desk |
| Purchase order backlog | Borrower backlog file |
| OEM order deferral notices | Borrower upload |
| Internal portfolio aerospace stress indicators | Portfolio risk system |
| Bank economist notes | Internal economics team |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Lookup | Sector outlook |
| Lookup | OEM production guidance |
| Compute | Backlog support estimate |
| Infer | Temporary vs structural view |
| Infer | Margin pressure risk |
| Prepare | Committee evidence summary |

**ANALYSIS OUTPUT** 

<br>

**Positive Signals** 

| **Signal** | **Evidence** |
|------------|--------------|
| OEM remains active customer | No termination notice |
| Multiyear aircraft backlog exists | OEM public guidance / sector research |
| VAC remains approved supplier | Supplier certification current |
| Purchase order backlog exists | Borrower backlog file |

**Negative Signals** 

| **Signal** | **Evidence** |
|------------|--------------|
| Production slowdown guided | OEM 2-quarter delay guidance |
| Delivery timing pushed | Order deferral notices |
| Supplier pricing pressure | OEM renegotiation notices |
| Concentration remains high | AR ledger shows 58% dependency |

**BACKLOG OFFSET ANALYSIS** 

| **Item** | **Value** |
|----------|-----------|
| Confirmed purchase orders | $9.6M |
| LOI / pipeline | $4.8M |
| Historical conversion rate | 58% |
| Pipeline-adjusted support | $2.78M |
| Total supportable revenue | $12.38M |

*9.6M confirmed backlog + (4.8M × 58%) = 12.38M supportable revenue* 

<br>

**PROJECTED EBITDA SUPPORT** 

| **Metric** | **Value** |
|------------|-----------|
| Supportable revenue | $12.38M |
| Normalized EBITDA margin | 13.0% |
| Projected EBITDA | $1.61M |

*12.38M × 13.0% = 1.61M projected EBITDA support* 

<br>

**DECISION SUPPORT** 

| **Topic** | **View** |
|-----------|----------|
| Temporary slowdown likelihood | Moderate |
| Structural decline likelihood | Low-Medium |
| Margin pressure risk | High |
| Recovery confidence | Medium-Low |
| Demand support | Partial, not sufficient for standard ask |

**SO WHAT** 

- Demand is not collapsing, but forward support is not strong enough to justify the original $8M structure.  
- Backlog reduces downside concerns, but does not eliminate coverage weakness.  
- This remains a judgment case.  

**NOW WHAT** 

- Run adverse media review in parallel before structuring options are finalized.  

> Handing over to Adverse Media Review Agent... 

---

**STEP 7 — SPECIALIST MODULE 3** 

> Adverse Media Escalation Review 

<br>

**🤖 Adverse Media Review Agent is thinking…** 

> Classifying ownership media issue... 

> Separating legal permissibility from reputational risk... 

<br>

**GET** 

| **Data** | **Source** |
|----------|------------|
| Media alert details | LexisNexis / Dow Jones |
| Litigation record | State court records |
| Internal watchlist | Bank compliance system |
| Ownership file | KYC platform |
| Relationship conduct history | CRM / Treasury |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Lookup | Media article references |
| Lookup | Court case disposition |
| Lookup | Internal watchlist |
| Classify | Issue type |
| Infer | Severity |
| Infer | Required disclosure / escalation |

**FINDING** 

Beneficial owner was named in a supplier contract dispute four years ago. The matter was settled. No fraud allegation, no sanctions issue, no criminal issue, no regulatory censure. 

<br>

**TRIAGE OUTPUT** 

| **Risk Type** | **Result** |
|---------------|------------|
| Sanctions | None |
| AML / financial crime | None |
| Fraud | None identified |
| Civil litigation | Yes |
| Governance concern | Moderate |
| Reputational escalation | Low-Medium |
| Committee disclosure | Required |
| Auto decline | No |

**SO WHAT** 

- This is not a hard compliance blocker.  
- It is not "noise" to ignore either.  
- It must be disclosed and factored into final approval conditions.  

**NOW WHAT** 

- Replanner should use credit, concentration, demand, and governance outputs to determine whether a safer structure exists.  

> Handing over to Replanner Agent... 

---

**STEP 8 — REPLANNER ACTIVATION** 

<br>

**🤖 Replanner Agent is thinking…** 

> Original execution path indicates low approval probability. 

> Straight $8M amortizing structure does not meet policy comfort. 

> Activating commercial structure replanning... 

<br>

**WHY REPLANNER TRIGGERS** 

| **Original Plan Assumption** | **Actual Result** | **Impact** |
|------------------------------|-------------------|-------------|
| Standard $8M amortization can be approved | FCCR 1.18x | Fails coverage floor |
| Borrower has normal customer diversification | Top customer 58% | High concentration |
| Sector conditions manageable | OEM slowdown + pricing pressure | Weakening conditions |
| Compliance clean enough for standard approval | Civil media flag remains | Committee disclosure |
| Pricing alone can compensate | Stress FCCR weak | Structure needed |

**ORIGINAL PLAN RESULT** 

- Straight $8M approval probability = Low 
- Auto-approve = No 
- Auto-decline = No 
- Replan required = Yes 

<br>

**REPLANNER OBJECTIVE RESET** 

**New Objective:** 
Identify whether a modified structure can: 
1. bring FCCR to ≥1.25x, 
2. reduce immediate exposure, 
3. preserve client relationship, 
4. compensate residual risk, 
5. provide committee with viable options. 

**SO WHAT** 

- Kaya does not stop at escalation.  
- It actively searches for executable alternatives before HITL.  
- Human committee receives structured options, not a blank problem.  

**NOW WHAT** 

- Generate and compare alternate structures.  

> Handing over to Structuring Agent... 

---

**STEP 9 — SPECIALIST MODULE 4** 

> Credit Exception Structuring Pack 

<br>

**🤖 Structuring Agent is thinking…** 

> Generating structure alternatives... 

> Testing each option for coverage, risk, return, and operational enforceability... 

<br>

**GET** 

| **Data** | **Source** |
|----------|------------|
| FCCR 1.18x | Financial Spreading Agent |
| LTV 79% | Collateral calculation |
| Concentration 58% | Stress Agent |
| Demand outlook | Demand Outlook Agent |
| Media severity | Adverse Media Agent |
| Relationship value | CRM |
| Bank policy thresholds | Policy repository |
| Delegation matrix | Approval authority repository |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Generate | Candidate structures |
| Compute | Revised debt service |
| Compute | Revised FCCR |
| Infer | Policy viability |
| Infer | Residual risk |
| Recommend | Non-prescriptive viable options |

**STRUCTURE OPTIONS** 

| **Option** | **Structure** | **Revised Exposure** | **FCCR Impact** | **Policy Position** | **View** |
|------------|---------------|----------------------|-----------------|--------------------|----------|
| A | Approve $8M as requested | $8.0M | 1.18x | Fails FCCR | Weak |
| B | Reduce hold to $6.5M | $6.5M | 1.29x | Passes FCCR | Better |
| C | $8M with 12-month interest-only | $8.0M | 1.31x Yr1 | Transitional pass | Short-term fix |
| D | $8M with owner guarantee + cash sweep | $8.0M | 1.18x but mitigated | Exception | Moderate |
| E | 6.5M now + 1.5M accordion | $6.5M now | 1.29x now | Passes now | Best balance |
| F | Decline | $0 | N/A | No risk | Conservative |

**OPTION CALCULATION EXAMPLES** 

<br>

**Option B — Reduced Hold** 

| **Item** | **Value** |
|----------|-----------|
| Revised loan amount | $6.5M |
| Revised annual debt service | Lower than $8M structure |
| CFADS | $1.42M |
| Revised FCCR | 1.29x |

**Option C — Interest-Only Year** 

| **Item** | **Value** |
|----------|-----------|
| Loan amount | $8M |
| Year 1 principal | Deferred |
| Year 1 FCCR | 1.31x |
| Post-IO concern | Coverage may fall when amortization begins |

**Option E — Reduced Hold + Accordion** 

| **Item** | **Value** |
|----------|-----------|
| Initial funded amount | $6.5M |
| Accordion | $1.5M |
| Accordion trigger | FCCR ≥1.25x and concentration <50% |
| Initial FCCR | 1.29x |

**STRUCTURING VIEW** 

| **Option** | **Benefit** | **Residual Concern** |
|------------|-------------|----------------------|
| A | Meets borrower request | Fails repayment comfort |
| B | Coverage passes | Does not fully meet borrower need |
| C | Supports full request | Defers, not solves, repayment pressure |
| D | Adds sponsor support | Coverage still weak |
| E | Supports relationship and risk discipline | Requires future performance proof |
| F | Lowest risk | Relationship loss / missed opportunity |

**SO WHAT** 

- Structure can improve risk, but not erase all concerns.  
- Option E is the most balanced because it funds the borrower now while making additional exposure conditional.  
- Human judgment is still required because concentration and sector risks remain.  

**NOW WHAT** 

- Price viable options for committee review.  

> Handing over to Pricing Agent... 

---

**STEP 10 — PRICING OPTIONS** 

<br>

**🤖 Pricing Agent is thinking…** 

> Pricing each viable structure... 

> Showing what changes and why... 

<br>

**GET** 

| **Data** | **Source** |
|----------|------------|
| Base SOFR | Treasury feed |
| Internal grade | Risk scorecard |
| Structure options | Structuring Agent |
| PD / LGD assumptions | Risk model |
| Market comps | Internal pricing database |
| Sector risk premium | Pricing policy |
| Guarantee / collateral effect | Pricing model |

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Lookup | SOFR |
| Lookup | Cost of funds |
| Lookup | Operating cost |
| Compute | Expected loss premium |
| Compute | Capital charge |
| Compute | Concentration / coverage premium |
| Compute | Guarantee adjustment |
| Compare | Market pricing range |
| Infer | Marketable but risk-disciplined pricing |

**PRICING OPTIONS** 

| **Option** | **Structure** | **Spread** | **Rate** | **Why** |
|------------|---------------|------------|----------|---------|
| A | $8M standard | 285 bps | 6.50% | Weak FCCR + concentration + exception |
| B | $6.5M reduced hold | 245 bps | 6.10% | FCCR improves to 1.29x |
| C | $8M 12-month IO | 260 bps | 6.25% | First-year coverage improves, but later risk remains |
| D | $8M guarantee + sweep | 235 bps | 6.00% | Sponsor support reduces loss severity |
| E | 6.5M + 1.5M accordion | 245 bps | 6.10% | Balanced exposure control + future upside |
| F | Decline | N/A | N/A | No pricing |

**PRICING BUILD FOR OPTION E** 

| **Component** | **bps** | **Why** |
|---------------|---------|---------|
| Cost of funds | 45 | Treasury funding grid |
| Operating cost | 40 | Product cost model |
| Credit loss premium | 35 | Grade 5 / elevated PD |
| Capital charge | 85 | Higher capital usage than Grade 2 |
| Concentration premium | 35 | 58% top customer exposure |
| Sector / conditions premium | 20 | OEM slowdown and margin pressure |
| Guarantee / exposure-control benefit | -15 | Lower initial hold + accordion discipline |
| **Total Spread** | **245 bps** | |

SOFR 3.65% + 2.45% = 6.10% 

<br>

**DECISION SIGNALS + BASIS** 

| **Signal** | **Value** | **Basis** |
|------------|-----------|-----------|
| Price alone sufficient? | No | Coverage risk remains under Option A |
| Best risk-return options | B / E | Coverage passes and exposure controlled |
| Lowest credit risk option | F | Decline |
| Relationship-preserving option | E | Funds now, contingent future capacity |
| Pricing competitiveness | Moderate | Higher than clean Grade 2, but justified |

**SO WHAT** 

- Pricing compensates risk, but cannot replace repayment strength.  
- Option E gives the bank compensated risk and controlled exposure.  
- This is not an automatic approval; it is a committee decision.  

**NOW WHAT** 

- Build HITL decision support pack.  

> Handing over to Human Review Coordinator Agent... 
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          response: "Approval request initiated successfully",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate: `{
        "subject": "Approval Request – VAC | Suggested Credit Structure",
        "to": ["sandaruwan@kayatech.com"],
        "content": "<div style='background-color:#F3F4F6;padding:24px;font-family:Arial,Helvetica,sans-serif;'>\
          <table width='100%' cellpadding='0' cellspacing='0' style='max-width:720px;margin:0 auto;background-color:#FFFFFF;border-radius:8px;'>\
            <tr><td style='padding:24px;color:#111827;font-size:14px;line-height:1.6;'>\
              <p>Dear Approver,</p>\
              <p>Please review the below approval request for <strong>Vector Aero Components, LLC (VAC)</strong> following completion of the KAYA deterministic credit assessment workflow.</p>\
              \
              <h3 style='margin-top:24px;color:#111827;'>About the Client</h3>\
              <table width='100%' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>\
                <tr><td><strong>Borrower:</strong></td><td>Vector Aero Components, LLC</td></tr>\
                <tr><td><strong>Industry:</strong></td><td>Aerospace Components Manufacturing</td></tr>\
                <tr><td><strong>Relationship:</strong></td><td>Existing operating account customer</td></tr>\
                <tr><td><strong>Request:</strong></td><td>USD 8.0MM equipment finance facility for CNC machinery expansion</td></tr>\
                <tr><td><strong>Risk Status:</strong></td><td>Structurable opportunity requiring approval review</td></tr>\
              </table>\
              <p style='margin-top:10px;'>🔗 <a href='#'>Open Full Borrower Summary</a></p>\
              \
              <h3 style='margin-top:24px;color:#111827;'>Key Credit Highlights</h3>\
              <p><strong>Positives</strong></p>\
              <ul style='padding-left:18px;'>\
                <li>Profitable operating business with active OEM customer relationships</li>\
                <li>Confirmed purchase backlog and approved supplier status</li>\
                <li>Collateral coverage within policy range</li>\
                <li>No AML / sanctions concerns identified</li>\
              </ul>\
              <p><strong>Key Risks</strong></p>\
              <ul style='padding-left:18px;'>\
                <li>FCCR under original request: 1.18x (below standard comfort level)</li>\
                <li>Largest customer concentration: 58% of revenue</li>\
                <li>Near-term aerospace production slowdown / pricing pressure</li>\
                <li>Historical civil litigation mention (resolved; disclosure only)</li>\
              </ul>\
              \
              <h3 style='margin-top:24px;color:#111827;'>Options Evaluated</h3>\
              <table width='100%' cellpadding='8' cellspacing='0' style='border-collapse:collapse;border:1px solid #E5E7EB;'>\
                <tr style='background:#F9FAFB;'>\
                  <th align='left'>Option</th><th align='left'>Structure</th><th align='left'>Suggestion</th><th align='left'>Details</th>\
                </tr>\
                <tr><td>A</td><td>Approve original USD 8.0MM request</td><td>Not Preferred</td><td><a href='#'>Option A</a></td></tr>\
                <tr><td>B</td><td>Approve USD 6.5MM reduced hold</td><td>Viable</td><td><a href='#'>Option B</a></td></tr>\
                <tr><td>C</td><td>USD 8.0MM with 12-month interest only</td><td>Transitional</td><td><a href='#'>Option C</a></td></tr>\
                <tr><td>D</td><td>USD 8.0MM with guarantee + cash sweep</td><td>Moderate</td><td><a href='#'>Option D</a></td></tr>\
                <tr style='background:#ECFDF5;'><td><strong>E</strong></td><td><strong>USD 6.5MM now + USD 1.5MM accordion</strong></td><td><strong>Suggested</strong></td><td><a href='#'>Option E</a></td></tr>\
                <tr><td>F</td><td>Decline</td><td>Conservative</td><td><a href='#'>Option F</a></td></tr>\
              </table>\
              \
              <h3 style='margin-top:24px;color:#111827;'>Suggested Option – Option E</h3>\
              <ul style='padding-left:18px;'>\
                <li>USD 6,500,000 initial senior secured equipment term loan</li>\
                <li>USD 1,500,000 accordion subject to trigger satisfaction</li>\
                <li>Pricing: SOFR + 245 bps (current all-in approx. 6.10%)</li>\
                <li>Owner limited guarantee</li>\
                <li>Monthly enhanced reporting package</li>\
              </ul>\
              <p><strong>Why This Option</strong></p>\
              <ul style='padding-left:18px;'>\
                <li>Improves repayment coverage vs original request</li>\
                <li>Reduces immediate bank exposure</li>\
                <li>Preserves client relationship and growth opportunity</li>\
                <li>Additional exposure only released upon proven performance</li>\
                <li>Best balance of risk, return, and client support</li>\
              </ul>\
              <p>🔗 <a href='#'>Open Full Option E Analysis</a></p>\
              \
              <h3 style='margin-top:24px;color:#111827;'>Accordion Release Conditions</h3>\
              <ul style='padding-left:18px;'>\
                <li>FCCR ≥ 1.25x</li>\
                <li>Largest customer concentration &lt; 50%</li>\
                <li>No payment default / covenant breach</li>\
                <li>No new material compliance concerns</li>\
                <li>Updated backlog review acceptable to Bank</li>\
              </ul>\
              \
              <h3 style='margin-top:24px;color:#111827;'>Approval Response Requested</h3>\
              <p>Please confirm one of the below:</p>\
              <ul style='padding-left:18px;'>\
                <li>Approve Suggested Option E</li>\
                <li>Approve Alternate Option (A / B / C / D / F)</li>\
                <li>Defer pending additional information</li>\
                <li>Decline</li>\
              </ul>\
              <p>Upon your confirmation, documentation and booking workflows will proceed immediately.</p>\
              <p style='margin-top:24px;'>Regards,<br/>Credit Team<br/>Acme Bank</p>\
            </td></tr>\
          </table>\
        </div>"
      }`,
          waitingConfirmation: true,
          waitingMessage: "Awaiting Approval Response",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "Approval Response Received",
        },
      ],
    },
    {
      message: "Approval Response Received",
      response:`

**STEP 11 — HUMAN DECISION SUPPORT PACK** 

<br>

**🤖 Human Review Coordinator Agent is thinking…** 

> Assembling committee-ready decision support... 

> Separating facts, assumptions, model outputs, and human judgment points... 

<br>

**EXECUTIVE SUMMARY FOR COMMITTEE** 

| **Area** | **Positive Evidence** | **Residual Risk** |
|----------|----------------------|-------------------|
| Compliance | No AML / sanctions concern | Civil litigation note requires disclosure |
| Demand | Backlog exists, approved supplier status current | OEM slowdown and pricing pressure |
| Capacity | Business profitable | FCCR below floor under original request |
| Collateral | LTV within policy at 79% | Specialized equipment resale market |
| Concentration | Dominant customer identified clearly | 58% revenue dependency |
| Structure | Several mitigants available | Original ask not supportable |
| Relationship | Existing operating account client | Risk-adjusted exposure must be constrained |

**INTERNAL ANALOG LOOKUP** 

<br>

Search criteria: 
- Aerospace supplier  
- Revenue concentration >50%  
- Equipment finance  
- Loan size 5M–15M  
- Coverage near / below policy floor  

| **Outcome** | **Count** |
|-------------|-----------|
| Approved standard | 1 |
| Approved restructured | 7 |
| Declined | 6 |

**Approved Restructured Deals Shared Traits** 
- Lower initial exposure  
- Sponsor / owner support  
- Enhanced reporting  
- Performance-based release of additional funds  

**Declined Deals Shared Traits** 
- No backlog visibility  
- Customer loss already active  
- Liquidity weak  
- No sponsor support  

**Kaya NON-PRESCRIPTIVE OPTIONS** 

| **Option** | **Terms** | **Kaya View** |
|------------|-----------|---------------|
| Approve standard | $8M amortizing | Not recommended as clean path |
| Approve reduced hold | $6.5M | Viable |
| Approve staged structure | 6.5M + 1.5M accordion | Strongest balance |
| Approve full request with IO | $8M + 12-month IO | Transitional, but cliff risk |
| Defer | Revisit after next quarter | Conservative |
| Decline | No exposure | Cleanest risk exit |

**SO WHAT** 

- Human committee is not being asked to "figure it out from scratch."  
- Kaya has quantified risks, tested alternatives, surfaced precedents, and framed decision options.  
- Residual judgment still belongs to the human committee.  

**NOW WHAT** 

- Committee chooses approve / modify / defer / decline.  

> Handing over to Credit Committee... 

---
      
**STEP 12 — HUMAN CREDIT COMMITTEE REVIEW** 

<br>

**🤖 Credit Committee reviewing…** 

<br>

**OPTIONS PRESENTED** 

- Approve $8M standard  
- Approve reduced $6.5M hold  
- Approve 6.5M + 1.5M accordion  
- Approve $8M with 12-month interest-only + guarantee  
- Defer pending stronger quarter  
- Decline  

**FINAL HUMAN DECISION** 

**Committee Decision:** 

- Approve 6.5M initial facility. 
- Provide 1.5M accordion subject to performance triggers. 
- Require owner limited guarantee. 
- Require monthly concentration and backlog reporting. 
- Maintain enhanced monitoring. 


**APPROVED STRUCTURE** 

| **Item** | **Approved Terms** |
|----------|--------------------|
| Initial facility | $6.5M |
| Accordion | $1.5M contingent |
| Pricing | SOFR + 245 bps |
| Initial rate | 6.10% |
| Guarantee | Owner limited guarantee |
| Reporting | Monthly |
| Accordion triggers | FCCR ≥1.25x, top customer <50%, no new adverse media |
| Monitoring tier | Enhanced |

**SO WHAT** 

- Bank does not approve weak original structure.  
- Client is supported with a smaller, controlled facility.  
- Upside preserved through conditional accordion.  
- Human judgment is applied after deterministic decision support.  

**NOW WHAT** 

- Generate conditional legal and operational artefacts.  

> Handing over to Documentation Agent... 

---

**STEP 13 — DOCUMENTATION** 

<br>

> Full On-Screen Artefacts 

**🤖 Documentation Agent is thinking…** 

> Generating conditional approval documents... 

> Applying approved modified structure... 

> Preparing Word / PDF exports... 

<br>

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Lookup | Approved document templates |
| Compute | Borrower merge fields |
| Insert | $6.5M initial facility |
| Insert | $1.5M accordion schedule |
| Insert | Owner limited guarantee |
| Insert | Monthly reporting covenants |
| Insert | Enhanced monitoring conditions |
| Generate | Word / PDF artefacts |

**ON-SCREEN ARTEFACTS**

<details>
  <summary>ON-SCREEN ARTEFACT 1 - CONFIDENTIAL CREDIT APPROVAL MEMORANDUM</summary>


| **Item** | **Details** |
|----------|-------------|
| **Borrower** | Vector Aero Components, LLC ("VAC") |
| **Requested Approval** | VAC requested an $8,000,000 Senior Secured Equipment Term Loan to finance CNC machinery and automation equipment. |
| **Approved Structure** | Approval is recommended / granted for a modified structure: $6,500,000 initial senior secured equipment term loan + $1,500,000 accordion subject to performance conditions + Owner limited guarantee + Monthly enhanced reporting + First lien on financed CNC equipment |
| **Borrower Overview** | VAC is a privately owned aerospace components supplier with an existing operating account relationship with the Bank. The company supplies precision-machined components to aerospace OEM customers. |
| **Key Credit Concerns** | FCCR of 1.18x under original $8M structure + Top customer concentration of 58% + Aerospace OEM production slowdown and pricing pressure + Moderate adverse media flag involving historical civil supplier dispute + Specialized collateral resale market |
| **Key Mitigants** | Initial exposure reduced to $6.5M + $1.5M accordion only available after performance triggers + Owner limited guarantee + Monthly backlog and customer concentration reporting + Collateral LTV within policy + No AML / sanctions concerns |

**Financial Snapshot** 

| **Metric** | **Original Request** | **Modified Structure** |
|------------|---------------------|------------------------|
| Facility amount | $8.0M | $6.5M |
| FCCR | 1.18x | 1.29x |
| LTV | 79% | Improved due to lower exposure |
| Debt / TNW | 1.42x | Lower post-close |
| Top customer concentration | 58% | 58%, monitored monthly |

**Risk Assessment** 

| **Metric** | **Result** |
|------------|------------|
| Indicative grade under original request | 5 |
| Policy exception | Yes, original structure |
| Approved path | Modified structure |
| Committee required | Yes |
| Approval authority | Credit Committee |

**Recommendation / Decision:** Approve modified structure. Do not approve original $8M standard amortizing request. 

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=10pzimFb2rkN5LjTlktIz8DdMTBYCsQV5" download="On-Screen_Artefact_1.pdf">On-Screen_Artefact_1.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 2 - COMMITMENT LETTER</summary>


## Date: 01 May 2026 

### To: Vector Aero Components, LLC 

The Bank is prepared to extend credit facilities to Vector Aero Components, LLC, subject to definitive documentation and satisfaction of the conditions below. 

**Facility Summary** 

| **Item** | **Terms** |
|----------|-----------|
| Facility type | Senior Secured Equipment Term Loan |
| Initial amount | $6,500,000 |
| Accordion amount | Up to $1,500,000 |
| Purpose | CNC machinery acquisition |
| Interest rate | SOFR + 2.45% |
| Current indicative rate | 6.10% |
| Tenor | 120 months |
| Repayment | Monthly principal and interest |
| Security | First priority lien on financed assets |
| Guarantee | Owner limited guarantee |

**Accordion Availability Conditions** 

Accordion may be made available only if: 
- FCCR ≥1.25x for next quarter  
- Top customer concentration below 50%  
- No new material adverse media  
- No payment default  
- No covenant breach  
- Updated backlog report accepted by Bank  

**Conditions Precedent** 

- Executed loan documentation  
- Evidence of insurance  
- UCC filings satisfactory to Bank  
- Owner limited guarantee executed  
- Accuracy of representations  
- No material adverse change  

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=10pzimFb2rkN5LjTlktIz8DdMTBYCsQV5" download="On-Screen_Artefact_2.pdf">On-Screen_Artefact_2.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 3 - ACCORDION TRIGGER SCHEDULE</summary>


| **Trigger** | **Required Level** | **Evidence Source** | **Test Timing** |
|-------------|--------------------|-------------------|-----------------|
| FCCR | ≥1.25x | Quarterly financials | Next quarter |
| Top customer concentration | <50% | AR ledger / revenue report | Monthly |
| Backlog coverage | ≥6 months supported revenue | Backlog report | Monthly |
| Payment status | Current | Core lending | Ongoing |
| Adverse media | No new material issue | Compliance refresh | Prior to release |
| Covenant compliance | No breach | Compliance certificate | Prior to release |

**Release Decision:** Accordion release is not automatic. It requires review by Credit Officer after all triggers are satisfied. 

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=10pzimFb2rkN5LjTlktIz8DdMTBYCsQV5" download="On-Screen_Artefact_3.pdf">On-Screen_Artefact_3.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 4 - LIMITED GUARANTEE AGREEMENT</summary> 

| **Item** | **Detail** |
|----------|-------------|
| Guarantor | Principal owner of Vector Aero Components, LLC |
| Guarantee Type | Limited guarantee supporting the obligations of the Borrower under the approved facility. |

**Coverage** 

| **Item** | **Detail** |
|----------|-------------|
| Guaranteed amount | Limited to agreed cap |
| Trigger | Payment default, covenant default, material misrepresentation |
| Release | Subject to performance review and bank approval |
| Survival | Continues until obligations are satisfied or formally released |

**Purpose:** The guarantee provides additional support given: 
- FCCR weakness under original request  
- Customer concentration  
- heightened sector uncertainty  

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=10pzimFb2rkN5LjTlktIz8DdMTBYCsQV5" download="On-Screen_Artefact_4.pdf">On-Screen_Artefact_4.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 5 - MONTHLY REPORTING COVENANT PACK</summary>

Borrower shall provide the following until downgraded to standard monitoring by the Bank. 

| **Report** | **Frequency** | **Required Content** |
|------------|--------------|---------------------|
| Management accounts | Monthly | Revenue, EBITDA, cash balance |
| AR aging | Monthly | Customer-level aging |
| Top customer revenue share | Monthly | Revenue by customer |
| Backlog report | Monthly | Orders, cancellations, deferrals |
| OEM exposure report | Monthly | Shipments, delays, pricing changes |
| Litigation / adverse media certification | Monthly | No new material event |

**Escalation:** Failure to deliver required reports may result in: 
- RM escalation  
- credit monitoring review  
- suspension of accordion availability  
- watchlist consideration  

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=10pzimFb2rkN5LjTlktIz8DdMTBYCsQV5" download="On-Screen_Artefact_5.pdf">On-Screen_Artefact_5.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 6 - SECURITY AGREEMENT SUMMARY</summary>

As continuing collateral security for all obligations, Borrower grants the Bank a first priority security interest in financed CNC machinery, automation equipment, replacements, proceeds, and insurance proceeds. 

| **Metric** | **Value** |
|------------|-----------|
| Appraised OLV | $10.13M |
| Initial facility | $6.5M |
| Initial LTV | Lower than original 79% |
| Collateral type | Specialized CNC equipment |
| Perfection | UCC-1 filing + insurance loss payee |

**Collateral Note:** Collateral is acceptable but specialized. Recovery value may be sensitive to secondary market conditions. 

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=10pzimFb2rkN5LjTlktIz8DdMTBYCsQV5" download="On-Screen_Artefact_6.pdf">On-Screen_Artefact_6.pdf</a>

</details>

<details>
  <summary>ON-SCREEN ARTEFACT 7 - BOOKING INSTRUCTION SHEET</summary>


| **Field** | **Value** |
|-----------|-----------|
| Borrower | Vector Aero Components, LLC |
| Facility ID | VAC-TL-2026-001 |
| Initial amount | $6,500,000 |
| Accordion amount | $1,500,000 contingent |
| Product code | Equipment Term Loan |
| Rate index | SOFR |
| Margin | 2.45% |
| Current all-in rate | 6.10% |
| Amortization | Monthly principal and interest |
| Monitoring tier | Enhanced |
| Guarantee flag | Yes |
| Accordion auto-release | No — credit review required |

📄 **Export: Word / PDF:** <a href="https://drive.google.com/uc?export=download&id=10pzimFb2rkN5LjTlktIz8DdMTBYCsQV5" download="On-Screen_Artefact_7.pdf">On-Screen_Artefact_7.pdf</a>

</details>

**DOCUMENTATION DECISION SIGNALS** 

| **Signal** | **Value** | **Basis** |
|------------|-----------|-----------|
| Template version | Current | Document repository |
| Clause deviations | Yes, approved by committee | Accordion + guarantee |
| Legal risk | Moderate | Custom terms and enhanced reporting |
| Export readiness | Complete | Word / PDF pack |
| Approval terms matched | Yes | Committee decision record |

**SO WHAT** 

- Human decision is converted into enforceable obligations.  
- Documents reflect modified structure, not original request.  
- Accordion and guarantee terms are operationally trackable.  

**NOW WHAT** 

- Validate closing conditions and fund initial tranche.  

> Handing over to Closing Agent... 

---

**STEP 14 — CLOSING / FUNDING** 

<br>

**🤖 Closing Agent is thinking…** 

> Closing modified facility... 
> Validating guarantee, collateral, and booking instructions... 

**PROCESS** 

| **Type** | **Action** |
|----------|------------|
| Validate | Executed loan documents |
| Validate | Limited guarantee executed |
| Confirm | UCC filing |
| Confirm | Insurance loss payee |
| Refresh | Sanctions / compliance status |
| Book | $6.5M initial facility |
| Record | $1.5M accordion as contingent availability |
| Release | Initial proceeds |

**FUNDING OUTPUT** 

| **Item** | **Value** |
|----------|-----------|
| Initial facility funded | $6.5M |
| Accordion | $1.5M contingent |
| Funding status | Released |
| Booking status | Complete |
| Guarantee status | Executed |
| Collateral perfection | Complete |

**SO WHAT** 

- Bank funds cautiously, not fully.  
- Legal protections are active.  
- Accordion remains controlled, not automatically available.  

**NOW WHAT** 

- Activate enhanced monitoring.  

> Handing over to Monitoring Agent... 

---

**STEP 15 — ENHANCED MONITORING** 

<br>

**🤖 Monitoring Agent is thinking…** 

> Enhanced monitoring activated. 

> Tracking concentration, coverage, backlog, and media risk. 

<br>

**GET / PROCESS / GIVE** 

| **GET** | **Source** | **PROCESS** | **GIVE** |
|---------|------------|-------------|----------|
| Monthly management accounts | Borrower portal / ERP | Recalculate EBITDA and FCCR | Monthly credit snapshot |
| AR aging | ERP | Compute customer concentration | Concentration signal |
| Backlog report | Borrower upload | Track backlog burn / replenishment | Demand signal |
| Core loan payment data | Core lending | Detect missed / late payments | Payment alert |
| Sector risk update | Internal sector desk | Refresh Conditions view | Sector warning |
| Adverse media refresh | Screening utility | Detect new events | Compliance alert |
| Covenant certificate | Borrower portal | Confirm compliance | Covenant status |

**MONITORING TRIGGERS** 

| **Trigger** | **Action** |
|-------------|------------|
| FCCR ≥1.25x and concentration <50% | Review accordion release |
| FCCR <1.10x | Watchlist review |
| Top customer >60% | Credit escalation |
| Backlog falls below 6 months | Demand risk review |
| New adverse media event | Compliance review |
| Reporting late >5 business days | RM escalation |
| Payment delinquency | Credit monitoring alert |

**ACCORDION REVIEW LOGIC** 

| **Condition** | **Required** |
|---------------|--------------|
| FCCR | ≥1.25x |
| Top customer concentration | <50% |
| Payment status | Current |
| Backlog | Acceptable |
| Compliance refresh | No new material event |
| Human review | Required |

**SO WHAT** 

- Risk is not just approved and forgotten.  
- VAC remains in enhanced surveillance.  
- Accordion release depends on measurable improvement.  

**NOW WHAT** 

- Continue monthly monitoring.  
- Trigger committee re-review if conditions improve or deteriorate.  

> Enhanced Monitoring Activated 

---

**STEP 16 — CONSOLIDATED AUDIT TRAIL** 

<br>

**🤖 Audit Agent is thinking…** 

> Compiling consolidated audit trail... 

> Linking source data, deterministic calculations, specialist modules, human approvals, documents, funding, and monitoring... 

**CONSOLIDATED AUDIT TRAIL** 

| **Date** | **Step** | **Event** | **Decision / Output** | **Owner** |
|----------|----------|-----------|----------------------|-----------|
| 16 Apr 2026 | Intake | Application received | Accepted | Intake Agent |
| 16 Apr 2026 | Plan Resolution | Base plan selected | US MM Equipment Finance v4.2 | Plan Resolution Agent |
| 16 Apr 2026 | Plan Resolution | Fact-led specialist modules attached | Concentration / Demand / Media / Structuring | Plan Resolution Agent |
| 17 Apr 2026 | Compliance | KYC / AML cleared | Proceed with media disclosure | Compliance Agent |
| 17 Apr 2026 | Media Review | Civil litigation classified | Moderate governance flag | Adverse Media Agent |
| 18 Apr 2026 | Spreading | Financials spread | FCCR 1.18x, LTV 79% | Financial Spreading Agent |
| 18 Apr 2026 | 5C | Scorecard completed | Raw Score 3.85, Grade 5 indicative | Borrower Assessment Agent |
| 19 Apr 2026 | Concentration | Stress test completed | Weak downside resilience | Stress Agent |
| 19 Apr 2026 | Demand Outlook | Sector analysis completed | Demand survives, margin risk high | Demand Outlook Agent |
| 19 Apr 2026 | Replanner | Original path failed approval objective | Replanner activated | Replanner Agent |
| 19 Apr 2026 | Structuring | Alternatives generated | Option E strongest balance | Structuring Agent |
| 20 Apr 2026 | Pricing | Options priced | Option E at SOFR +245 bps | Pricing Agent |
| 20 Apr 2026 | HITL | Committee reviewed decision pack | Modified approval | Credit Committee |
| 20 Apr 2026 | Documentation | Conditional documents generated | v1.0 Word / PDF | Documentation Agent |
| 22 Apr 2026 | Closing | Guarantee + security completed | Ready to fund | Closing Agent |
| 24 Apr 2026 | Funding | Initial tranche funded | $6.5M released | Closing Agent |
| Ongoing  | Monitoring | Enhanced monitoring active | Monthly review | Monitoring Agent |

**DECISION EXPLAINABILITY SNAPSHOT** 

| **Decision** | **Final Outcome** | **Basis** |
|--------------|-------------------|-----------|
| Why not approve original $8M? | Original structure rejected | FCCR 1.18x below floor, concentration 58%, stress weakness |
| Why not auto-decline? | Business still viable | Profitable, collateral acceptable, backlog exists, no AML hard stop |
| Why Replanner? | Original path weak | Needed structure alternatives |
| Why $6.5M now? | Coverage improves | FCCR rises to 1.29x |
| Why $1.5M accordion? | Preserves client upside | Release only if performance improves |
| Why guarantee? | Additional support | Capacity + concentration concerns |
| Why enhanced monitoring? | Residual risks remain | Concentration, sector slowdown, media disclosure |
| Why committee? | Multi-factor exception | Human judgment required |

**CONTROL CHECKS** 

| **Control** | **Result** |
|-------------|-------------|
| Unauthorized override | No |
| Straight-through approval attempted | No |
| Human approval captured | Yes |
| Policy exception documented | Yes |
| Approved terms = booked terms | Yes |
| Monitoring triggers activated | Yes |
| Audit evidence complete | Yes |

**SO WHAT** 

- Full lifecycle is replayable.  
- Kaya explains not just the outcome, but why the original request changed.  
- Human judgment is preserved, but heavily supported by deterministic evidence.  

**NOW WHAT** 

- Archive case.  
- Continue enhanced monitoring.  
- Append future monitoring and accordion decisions to the same audit chain.  

> Audit Pack Finalized 

> Case Archived 

> Enhanced Monitoring Linked 

### FINAL OUTCOME 

| **Metric** | **Result** |
|------------|------------|
| Borrower | Vector Aero Components, LLC |
| Original request | $8.0M |
| Approved now | $6.5M |
| Future capacity | $1.5M accordion |
| Pricing | SOFR + 245 bps |
| Current all-in rate | 6.10% |
| Human intervention | Required |
| Why HITL required | Coverage breach + concentration + sector weakness + media flag |
| Kaya value | Deterministic decision support + restructuring |
| Monitoring | Enhanced monthly |
| Auditability | Full replayable |
`
    }
  ])
);
