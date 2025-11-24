// https://sharetext.io/9b3303f8
localStorage.setItem(
  "demo_d3d1ff50-3327-4ea0-9edc-56793e24d57b",
  JSON.stringify([
    {
      message:
        "Find and fill the attached excel for BioTouch Global Solutions, Inc.",
      response: `
🤖 **Parent Orchestrator is thinking...** 

> Received empty SOV Excel + Company context... 

> Initializing workflow... 

> Spawning child agents in sequence

---

🤖 **SOV Ingestion & Schema Agent is thinking...** 

> Accessing: **Excel Parser API.**

> Initializing schema... normalizing headers...

---

🤖 **Address Normalizer & Geocoder Agent is thinking...** 

> Accessing: Google Maps Geocoding API / OSM Nominatim... 

> Initializing process... standardizing addresses... assigning geo-confidence... 

| Location | Normalized Address                        | Geo Result (Lat/Lng) | Confidence |
|----------|-------------------------------------------|----------------------|------------|
| CT       | 30 Railroad Ave, West Haven, CT 06516     | 41.27, -72.95        | 0.93       |
| ID       | 670 S Colorado Ave, Idaho Falls, ID 83402 | 43.48, -112.03       | 0.91       |
| GA       | 5101 Transport Blvd, Columbus, GA 31907   | 32.46, -84.93        | 0.92       |
| GA       | 5700 Old Brim Road, Midland, GA 31820     | 32.56, -84.83        | 0.90       |
| RI       | 25 Amflex Dr, Cranston, RI 02920          | 41.77, -71.48        | 0.94       |
| RI       | 30 Martin St, Cumberland, RI 02864        | 41.92, -71.43        | 0.92       |

---

🤖 **Property Source Agent is thinking...**

> Accessing: LoopNet, Trulia, Assessor APIs, Permit Portals... 

> Initializing extraction... gathering Sq. Ft., Year Built, Stories, Construction, Renovations...

| Location        | Sq. Ft. | Year Built | Stories | Construction       | Sprinklered | Roof Update | Electrical | Heating | Plumbing |
|-----------------|---------|------------|---------|--------------------|-------------|-------------|------------|---------|----------|
| CT (West Haven) | 48,000  | 2005       | 3       | Non-combustible    | Yes         | 2019        | 2018       | 2017    | 2016     |
| ID (Idaho Falls)| 36,000  | 1998       | 2       | Joisted Masonry    | No          | 2015        | 2014       | 2013    | 2012     |
| GA (Columbus)   | 62,000  | 2010       | 4       | Steel Frame        | Yes         | 2020        | 2018       | 2018    | 2017     |
| GA (Midland)    | 41,500  | 2007       | 3       | Non-combustible    | Yes         | 2018        | 2016       | 2016    | 2015     |
| RI (Cranston)   | 55,000  | 2002       | 4       | Fire Resistive     | Yes         | 2017        | 2016       | 2015    | 2015     |
| RI (Cumberland) | 29,000  | 1995       | 2       | Joisted Masonry    | No          | 2014        | 2012       | 2012    | 2011     |

---

🤖 **Business Enrichment Agent is thinking...**

> Accessing: **LinkedIn public, Company website, EDGAR/News...** 

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Employees (est.)| 201–500 (as of Aug 2025)                |
| Leadership      | CEO: Jane Doe; CFO: John Smith          |
| Annual Revenue  | Not publicly disclosed (private company)|

> (This enrichment applied globally to all rows; not address-specific.)

---

🤖 **Validation & Canonicalization Agent is thinking...**
> Accessing: Provenance KB + Confidence Rules. 

> Consolidating fields, resolving conflicts. 

### Connecticut – 30 Railroad Ave, West Haven, CT
| Field        | Candidate Values                                 | Value          | Rerouted to HITL |
|--------------|--------------------------------------------------|----------------|------------------|
| Sq. Ft.      | 48,000 (Assessor 0.91), 47,500 (LoopNet 0.75)    | 48,000         | No               |
| Year Built   | 2005 (Assessor 0.90), 2006 (Listing 0.78)        | 2005           | Yes              |
| Construction | Non-combustible (Assessor 0.85)                  | Non-combustible| No               |
| Sprinklered  | Yes (Permit 0.85)                                | Yes            | No               |
| Roof Update  | 2019 (Permit 0.88)                               | 2019           | No               |

### Idaho – 670 S Colorado Ave, Idaho Falls, ID 
| Field        | Candidate Values                                | Value          | Rerouted to HITL |
|--------------|-------------------------------------------------|----------------|------------------|
| Sq. Ft.      | 36,000 (Assessor 0.90), 35,500 (Trulia 0.72)    | 36,000         | No               |
| Year Built   | 1998 (Assessor 0.93), 1999 (Listing 0.68)       | 1998           | Yes              |
| Construction | Joisted Masonry (Assessor 0.80)                 | Joisted Masonry| No               |
| Sprinklered  | No (Assessor 0.80)                              | No             | No               |
| Roof Update  | 2015 (Permit 0.85)                              | 2015           | No               |

### Georgia – 5101 Transport Blvd, Columbus, GA
| Field        | Candidate Values                                | Value      | Rerouted to HITL |
|--------------|-------------------------------------------------|------------|------------------|
| Sq. Ft.      | 62,000 (Assessor 0.92), 61,500 (LoopNet 0.75)   | 62,000     | No               |
| Year Built   | 2010 (Assessor 0.94), 2011 (Listing 0.70)       | 2010       | No               |
| Construction | Steel Frame (Assessor 0.83)                     | Steel Frame| No               |
| Sprinklered  | Yes (Permit 0.88)                               | Yes        | No               |
| Roof Update  | 2020 (Permit 0.89)                              | 2020       | No               |

### Georgia – 5700 Old Brim Road, Midland, GA 
| Field        | Candidate Values                                | Value          | Rerouted to HITL |
|--------------|-------------------------------------------------|----------------|------------------|
| Sq. Ft.      | 41,500 (Assessor 0.90), 42,000 (Trulia 0.73)    | 41,500         | No               |
| Year Built   | 2007 (Assessor 0.91), 2008 (Listing 0.71)       | 2007           | No               |
| Construction | Non-combustible (Assessor 0.82)                 | Non-combustible| No               |
| Sprinklered  | Yes (Permit 0.84)                               | Yes            | No               |
| Roof Update  | 2018 (Permit 0.86)                              | 2018           | No               |

### Rhode Island – 25 Amflex Dr, Cranston, RI 
| Field        | Candidate Values                                | Value        | Rerouted to HITL |
|--------------|-------------------------------------------------|--------------|------------------|
| Sq. Ft.      | 55,000 (Assessor 0.93), 54,500 (LoopNet 0.76)   | 55,000       | No               |
| Year Built   | 2002 (Assessor 0.95), 2003 (Listing 0.72)       | 2002         | No               |
| Construction | Fire Resistive (Assessor 0.88)                  | Fire Resistive| No               |
| Sprinklered  | Yes (Permit 0.86)                               | Yes          | No               |
| Roof Update  | 2017 (Permit 0.87)                              | 2017         | No               |

### Rhode Island – 30 Martin St, Cumberland, RI
| Field        | Candidate Values                                | Value          | Rerouted to HITL |
|--------------|-------------------------------------------------|----------------|------------------|
| Sq. Ft.      | 29,000 (Assessor 0.89), 28,500 (Trulia 0.70)    | 29,000         | No               |
| Year Built   | 1995 (Assessor 0.92), 1996 (Listing 0.69)       | 1995           | No               |
| Construction | Joisted Masonry (Assessor 0.81)                 | Joisted Masonry| No               |
| Sprinklered  | No (Assessor 0.78)                              | No             | No               |
| Roof Update  | 2014 (Permit 0.84)                              | 2014           | No               |

---

🤖 **HITL Coordinator is thinking...**

#### JIRA Ticket Raised for Human Review

This ticket is auto-generated using **KAYA’s JIRA connector.**

**View the JIRA ticket:** [KAYA-LM-2047](https://techlabsglobal.atlassian.net/browse/FC-4?target=_blank)  

**Important for Reviewer:**
- Review the auto-filled Excel attached in the JIRA. 
- Fill in any missing fields, amend or correct values where necessary, or modify entries. 
- Reattach the updated Excel to the JIRA ticket. 

**Once approved:**
- Mark JIRA ticket as “Approved/Rejected”. 
- This triggers Write-Back & Export Agent to generate the filled excel. 
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
### Human Review Received

🤖 **HITL Coordinator is thinking...**

- Reviewer approval received.  
- Updated approval and reasoning saved in compliance logs

---

🤖 **Write-Back & Export Agent is thinking...**

> Accessing: Excel Writer.
> Writing final HITL-approved values into SOV Excel. 

| Address, City, State Zip                   | Facility Profile | Building Value | Improvements & Betterments Value | Business Personal Property | Business Income/ Extra Expense | Total Insured Value | Sq. Ft. | Year Built | Fire & Burglar Alarms | Construction Type | Stories | Units | Pool | Basement | Sprinklered | Plumbing (Yr) | Heating (Yr) | Electrical (Yr) | Roof (Yr) |
|--------------------------------------------|------------------|----------------|---------------------------------|----------------------------|--------------------------------|---------------------|---------|------------|-----------------------|------------------|---------|-------|------|----------|-------------|---------------|--------------|-----------------|-----------|
| 30 Railroad Ave, West Haven, CT 06516      | Office           | —              | —                               | —                          | —                              | —                   | 48,000  | 2005       | Yes                   | Non-combustible  | 3       | —     | No   | No       | Yes         | 2016          | 2017         | 2018            | 2019      |
| 670 S Colorado Ave, Idaho Falls, ID 83402  | Office/Warehouse | —              | —                               | —                          | —                              | —                   | 36,000  | 1998       | No                    | Joisted Masonry  | 2       | —     | No   | No       | No          | 2012          | 2013         | 2014            | 2015      |
| 5101 Transport Blvd, Columbus, GA 31907    | Office           | —              | —                               | —                          | —                              | —                   | 62,000  | 2010       | Yes                   | Steel Frame      | 4       | —     | No   | No       | Yes         | 2017          | 2018         | 2018            | 2020      |
| 5700 Old Brim Road, Midland, GA 31820      | Office           | —              | —                               | —                          | —                              | —                   | 41,500  | 2007       | Yes                   | Non-combustible  | 3       | —     | No   | No       | Yes         | 2015          | 2016         | 2016            | 2018      |
| 25 Amflex Dr, Cranston, RI 02920           | Office           | —              | —                               | —                          | —                              | —                   | 55,000  | 2002       | Yes                   | Fire Resistive   | 4       | —     | No   | No       | Yes         | 2015          | 2015         | 2016            | 2017      |
| 30 Martin St, Cumberland, RI 02864         | Office           | —              | —                               | —                          | —                              | —                   | 29,000  | 1995       | No                    | Joisted Masonry  | 2       | —     | No   | No       | No          | 2011          | 2012         | 2012            | 2014      |


**Download the excel file here:** <a href="https://kayatechxyz-my.sharepoint.com/:x:/g/personal/kasunib_kayatech_com/EQWYva-BafRNvKnvT28QbFIB53lXKNU_yNebHrDhsge0Dw?e=Tuxx1l&download=1" download="Filled_2025-26 Property Statement of Values (SOV).xlsx">Filled_2025-26 Property Statement of Values (SOV).xlsx</a>

---

🤖 **Audit, Monitoring & Caching Agent is thinking...**

- Logging: API usage, reviewer IDs, timestamps, error metrics. 
- Exporting full audit trail + HITL log. 
`,
    },
  ])
);
