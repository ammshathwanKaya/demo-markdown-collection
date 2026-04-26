localStorage.setItem(
  "demo_303c05c9-3b65-43ad-a454-392dffc2289f",
  JSON.stringify([
    {
      message:
        "I need to check the risk profile and get assistance on next-best actions for customer Jason R (ID: JR007), with a view to mitigate potential loss",
      response: `
🤖 **Loss Mitigation AI Underwriter Agent is thinking...** 

> Initializing loss mitigation workflow

> Orchestrating child agents

---

🤖 **Document Intake & Parser Agent thinking...**
- Parsing attached files, knowledge bases and integrated APIs. 
- Validating completeness of the package.
- Enriching with credit **bureau API pull.** 

#### Borrower Profile:
| Field              | Value                  |
|--------------------|------------------------|
| Customer           | Jason                   |
| Gross Income       | $4,000/mo              |
| Net Income         | $3,100/mo              |
| Mortgage Balance   | $210,000               |
| Property Value     | $200,000               |
| LTV                | 105%                   |
| Current DTI        | 61%                    |
| FICO               | 590                    |
| Hardship           | Temporary (3 months)   |

---

🤖 **Investor Guidelines Parser Agent thinking...**
- Extracts thresholds:
  - Modification requires DTI ≤ 45%, hardship temporary. 
  - Forbearance requires hardship ≤ 12 months. 
  - Short Sale / DIL permitted if DTI > 55% OR hardship permanent. 
  - Repayment Plan: Delinquent < 3 months, post-plan DTI ≤ 50%. 
  - Continue Current: If no delinquency/hardship.

#### Structured Rule Matrix 
| Action              | Criteria                                                                 |
|---------------------|--------------------------------------------------------------------------|
| Modification        | Post-mod DTI ≤ 45%, LTV ≤ 110%, hardship temporary (< 6 months)          |
| Forbearance         | Post-forbearance DTI ≤ 55%, hardship expected to resolve within 12 months |
| Short Sale          | DTI > 55% OR hardship permanent; property marketed per investor rules     |
| Deed in Lieu        | Same as Short Sale but borrower opts for direct transfer of title         |
| Continue as Current | No delinquency, current on payments, no hardship                          |
| Repayment Plan      | Delinquent < 3 months, stable income, DTI ≤ 50% post-plan                 |

---

🤖 **Risk Scoring Agent is thinking...**


> Applying weighted model...

#### Weighted Model Criteria
| Parameter        | Weight | Description                                                        |
|------------------|--------|--------------------------------------------------------------------|
| Payment History  | 30%    | Considers late payments, delinquencies, credit utilization         |
| Income Stability | 25%    | Evaluates reliability of borrower’s income (job stability, variability) |
| Loan-to-Value (LTV) | 20% | Measures mortgage balance vs. property value                       |
| Debt-to-Income (DTI) | 15% | Ratio of debt obligations to gross income                         |
| Hardship Category | 10%   | Temporary vs. permanent hardship, and its severity                 |

#### Risk Scoring Adjustments & Elevations (Rulebook)
| Parameter        | Band      | Adjustment Rule                                                 | Adjustment Value |
|------------------|-----------|-----------------------------------------------------------------|------------------|
| Hardship Status  | Elevated  | If hardship = Elevated, add points to reflect operational tail risk | +6               |
| Hardship Status  | Permanent | If hardship = Permanent, add points due to sustained impairment risk | +10              |
| Hardship Status  | None      | No adjustment                                                   | 0                |
| Payment History  | Elevated  | If <24 months clean history, add buffer                         | +3               |
| DTI              | Elevated  | If DTI >45%, add buffer                                         | +2               |

#### Application of Model to Customer Jason. 
| Parameter        | Weight | Customer Jason’s Profile                  | Scoring Assessment       | Weighted Contribution |
|------------------|--------|-----------------------------------------|-------------------------|---------------------|
| Payment History  | 30%    | Weak (FICO 590)                         | 0.45 × 30               | 13.5                |
| Income Stability | 25%    | Net income $3,100 (stable but strained) | 0.40 × 25               | 10.0                |
| LTV              | 20%    | 105% (≤110% guideline)                  | 0.35 × 20               | 7.0                 |
| DTI              | 15%    | 61% (well above acceptable thresholds)  | 0.30 × 15               | 4.5                 |
| Hardship         | 10%    | Temporary (3 months)                     | 0.40 × 10               | 4.0                 |

Applied Hardship=Elevated (+6) only. Payment History and DTI adjustments not applied in baseline. These overlays are governance-controlled.

**Result:** Customer **Jason’s Risk Score = 39 + 6 = 45 (High Risk Category).**

---

🤖 **Resolution Simulation Agent is thinking...**

- Runs borrower data against each eligible loss mitigation scenario. 
- Recalculates Debt-to-Income (DTI), Loan-to-Value (LTV), and FICO score for each option. 
- Flags scenarios that fail investor thresholds. 
- Provides comparative view of before-and-after borrower parameters. 

#### Output (Scenario-by-Scenario Projections – Customer Jason):
| Scenario           | DTI (Before → After) | LTV (Before → After) | FICO (Before → After) | Result                                             |
|-------------------|--------------------|---------------------|----------------------|---------------------------------------------------|
| Modification       | 61% → 45.3%        | 105% → 105%         | 590 → 595            | ✅ Borderline: qualifies with compensating factors |
| Forbearance        | 61% → 61%          | 105% → 105%         | 590 → 590            | ✅ Eligible, but less optimal                     |
| Short Sale         | 61% → 0%           | 105% → N/A          | 590 → 550            | ❌ Not appropriate – hardship temporary          |
| Deed in Lieu       | 61% → 0%           | 105% → N/A          | 590 → 550            | ❌ Not appropriate – hardship temporary          |
| Repayment Plan     | 61% → ~55% (est.)  | 105% → 105%         | 590 → 595            | ❌ Fails post-plan DTI ≤ 50%                     |
| Continue as Current| 61% → 61%          | 105% → 105%         | 590 → 590            | ❌ Not viable – borrower delinquent              |

---

🤖 **Recommendation Generator Agent is thinking...** 

- Compares all scenario outcomes against investor thresholds. 
- Eliminates ineligible actions. 
- Scores eligible options… 
- Selects the option with strongest compliance + loss recovery alignment. 

**Output (Customer Jason):**

**Recommended Action:** Modification (with compensating factors) 

**Alternative:** Forbearance (temporary hardship backup option) 

#### Parameter Change Summary:
| Parameter | Before | After (Modification) |
|-----------|--------|---------------------|
| DTI       | 61%    | ≈ 45.3%             |
| LTV       | 105%   | 105%                |
| FICO      | 590    | 595                 |

**Final Recommendation:** Modification approved, justified under hardship duration and LTV ≤ 110% rule, despite borderline DTI.

---

🤖 **HITL Interface Agent is thinking...**

**JIRA Ticket Raised for Human Review**  
This ticket is auto-generated using KAYA’s JIRA connector  

**View the JIRA ticket:** [KAYA-LM-2047](https://techlabsglobal.atlassian.net/browse/FC-3?target=_blank)  

**Important for Underwriter Review:**  
- Review the recommendation for compliance and investor alignment. 
- Approve, reject, or override system recommendation. 
- If overriding, document rationale in the comments.   

**Once approved:**  
- Mark JIRA ticket as “Approved/Rejected”  
- This triggers Communication Agent to send borrower letter and update compliance logs.  
`,
      apiCalls: [
        {
          trigger: "after",
          method: "POST",
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
      response: `
Human Review Received

🤖 **HITL Interface Agent is thinking...**

- Underwriter approval received → Action confirmed as Modification. 
- Updated approval and reasoning saved in compliance logs 
- Recording Jason’s case and associated JIRA ticket into CRM 
- Status updated: HITL Complete – Resolution Approved 

---

🤖 **Communication Agent is thinking...**

> Drafting borrower communication…

- Generates borrower-facing letter with explanation, terms, and disclaimers. 
- CC: Investor SPOC, Assigned Underwriter, Customer SPOC. 

---

#### Sample Email to Jason

### Subject: Outcome of Loss Mitigation Review

Dear Jason,

Based on our review of your financial profile and circumstances, we have determined that the most appropriate course of action is: Modification (with compensating factors). 

This decision is based on your current Debt-to-Income ratio, Loan-to-Value ratio, credit history, and the nature of your (temporary 3-month) hardship, as compared against our investor's guidelines. 

**Details:**
- Risk Category: High Risk (45) 
- Reason: Post-mod DTI ≈ 45.3% using 3.5% rate and 480-month term; LTV 105.0% ≤ 110%. 
- Key Parameters (Before → After): DTI 61.0% → 45.3%; LTV 105.0% → 105.0%; FICO 590 → 595 (illustrative). 

**Disclaimer / Forward-Looking View:**

Please note: This modification approval assumes your hardship resolves within approximately 3 months. If your hardship becomes permanent or your income decreases materially, we will re-evaluate your eligibility and may consider forbearance or liquidation options. 

If your situation changes before the end of the review period, please notify us immediately so we can reassess your eligibility and options

Regards,

Loan Servicing Team

---

> Sending email to Jason… 

> Email sent successfully.


🤖 **Monitoring & Trigger Agent is thinking...**
- Monitoring hardship resolution timeline (3 months). 
- Will auto re-intake if borrower fails to proceed or hardship status changes. 
- Updating borrower profile… 
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
          bodyTemplate: `{"subject":"Outcome of Loss Mitigation Review","to":["vijay@kayatech.com" , "kasunib@kayatech.com" , "ammshathwan@kayatech.com", "Jason@kayatech.com"],"content":"<p>Dear Jason,</p><p>Based on our review of your financial profile and circumstances, we have determined that the most appropriate course of action is: <strong>Modification (with compensating factors).</strong></p><p>This decision is based on your current Debt-to-Income ratio, Loan-to-Value ratio, credit history, and the nature of your (temporary 3-month) hardship, as compared against our investor's guidelines.</p><h3>Details:</h3><ul><li><strong>Risk Category:</strong> High Risk (45)</li><li><strong>Reason:</strong> Post-mod DTI ≈ 45.3% using 3.5% rate and 480-month term; LTV 105.0% ≤ 110%.</li><li><strong>Key Parameters (Before → After):</strong> DTI 61.0% → 45.3%; LTV 105.0% → 105.0%; FICO 590 → 595 (illustrative).</li></ul><h3>Disclaimer / Forward-Looking View:</h3><p>Please note: This modification approval assumes your hardship resolves within approximately 3 months. If your hardship becomes permanent or your income decreases materially, we will re-evaluate your eligibility and may consider forbearance or liquidation options.</p><p>If your situation changes before the end of the review period, please notify us immediately so we can reassess your eligibility and options.</p><p>Regards,</p><p><strong>Loan Servicing Team</strong></p>"}`,
        },
      ],
    },
  ]),
);
