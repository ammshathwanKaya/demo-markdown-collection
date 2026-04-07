localStorage.setItem(
  "demo_da11145b-b711-4b91-ad0d-bf5ec9a46f6e",
  JSON.stringify([
    {
      message: "Enable the full bid lifecycle for this RFP to maximize win rate, efficiency and cycle time, while leveraging resident information across all approved sources",
      response: `  
**🤖 Orchestration & Governance Agent is thinking…**  

> Request received.  
> Initializing KBOP workspace execution.  

<br>

**Workspace Initialization**  

<br>

**User Action**  
Workspaces → Create → Upload RFP → Import Opportunity (CRM Sync)  

**Agent is doing**  
> Parsing RFP  
> Pulling CRM + Teams + Knowledge + MSA + HR  

<br>

**🤖 Orchestration Agent — RFP Parsing is thinking…**  

> Extracting raw RFP inputs.  

<br>

**Raw RFP Extract**  

| **Site ID** | **Country** | **Tier** | **Bandwidth** | **Note** |
|-------------|-------------|----------|---------------|----------|
| UK-001 | UK | T1 | 2 Gbps | — |
| BR-045 | Brazil | T2 | Missing | — |
| MX-078 | Mexico | T2 | Missing | — |

**Normalized Dataset**  

| **Site** | **Region** | **Tier** | **Bandwidth** | **Source** | **Confidence** |
|----------|------------|----------|---------------|------------|----------------|
| BR-045 | LATAM | T2 | 200 Mbps | Benchmark | Medium |
| MX-078 | LATAM | T2 | 200 Mbps | Similar Sites | Medium |

**Normalization Log**  

| **Rule** | **Applied** |
|----------|-------------|
| Missing BW inferred | ✅ |
| Tier mapping | ✅ |

**🤖 Context Enrichment Agent is thinking…**  

> Enriching dataset with enterprise context.  

**Salesforce**  

| **Field** | **Value** |
|-----------|-----------|
| Strategic Index | 4.5 |
| Deal Size | 45M–55M |

**Teams Insights**  

| **Insight** | **Impact** |
|-------------|------------|
| LATAM pricing issue | Pricing risk |

**MSA**  

| **Clause** | **Value** | **Risk** |
|------------|-----------|----------|
| Liability | 100× ACV (~$4.8B) | ❌ |

**🤖 Orchestration Agent is thinking…**  

> ✅ Context + dataset ready  

> Routing to → Opportunity Qualification Agent  

<br>

**🤖 Opportunity Qualification Agent is thinking…**  

> Combining RFP dataset with enterprise context.  

**Sign-on Deck**  

**Opportunity Summary**  

| **Metric** | **Value** |
|------------|-----------|
| Sites | 420 |
| ACV | $48M |
| Strategic Index | 4.5 |

**Integrated Risk Register**  

| **Risk** | **Impact** | **Quant** |
|----------|------------|-----------|
| LATAM pricing | High | +12% |
| Workforce | High | -33% |
| Liability | ❌ | $4.8B |

**Strategy**  

| **Lever** | **Decision** |
|-----------|--------------|
| Margin | ≥16% |
| Legal | Cap required |

**🤖 HITL — Sign-on Approval Checkpoint**  

> Awaiting Approval...  
`,
    },
    {
      message: "Approved",
      response: `  
**Approval Table**  

| **Role** | **Decision** | **Timestamp** |
|----------|--------------|---------------|
| Sales | ✅ | 2026-03-30 10:05 |
| Finance | ✅ | 2026-03-30 10:08 |
| Legal | Conditional | 2026-03-30 10:12 |

**Dashboard — Qualification**  

| **Metric** | **Value** |
|------------|-----------|
| Strategic Index | 4.5 |
| Risk | High |

**🤖 Qualification Agent is thinking…**  

> ✅ Approved (Conditional)  

> Routing to → Workforce Validation Agent  

<br>

**🤖 Workforce Validation Agent is thinking…**  

**Workforce Analysis**  

| **Region** | **Required** | **Available** | **Gap** | **Impact** |
|------------|--------------|---------------|---------|------------|
| LATAM | 12 | 8 | -4 | +10% |

**Dashboard — Workforce**  

| **Coverage** | **Value** |
|--------------|-----------|
| Coverage | 82% |

<br>

**🤖 Workforce Agent is thinking…**  

> ✅ Delivery risk flagged  

> Routing to → Bid Kickoff Agent  

<br>

**🤖 Bid Kickoff Agent is thinking…**  

**Execution Tracker**  

| **Task** | **Status** |
|----------|------------|
| Pricing | Running |

**🤖 Bid Kickoff Agent is thinking…**  

> ✅ Execution structured  

> Routing to → Solution Design Agent  

<br>

**🤖 Solution Design Agent is thinking…**  

**Solution Design**  

| **Site** | **Design** |
|----------|------------|
| BR-045 | Internet + LTE |

**Dashboard — Solution**  

| **Sites** | **Value** |
|-----------|-----------|
| Sites | 420 |

**🤖 Solution Agent is thinking…**  

> ✅ Solution ready  

> Routing to → Pricing Agent  

<br>

**🤖 Pricing Agent is thinking…**  

**Step 1 — Baseline (From RFP)**  

| **Site** | **BW** | **Source** |
|----------|--------|------------|
| BR-045 | 200 Mbps | Inferred |

**Step 2 — Cost Build (LBP)**  

| **Component** | **LBP** | **Deal** | **Date** | **Adj** | **Final** |
|---------------|---------|----------|----------|---------|-----------|
| Access | 3500 | LATAM Brazil WAN | 2023-06-15 | +8% | 3780 |
| CPE | 900 | Cisco Global | 2024-01-10 | +5% | 945 |
| Install | 800 | LATAM Rollout | 2023-09-20 | +10% | 880 |
| Service | 750 | EU WAN | 2023-11-05 | +5% | 787 |
| TOTAL | — | — | — | — | 6392 |

**Step 3 — BCM V1**  

| **Cost** | **Markup** | **Risk** | **Price** |
|----------|------------|----------|-----------|
| 6392 | 20% | +5% | 8050 |

**Step 4 — Benchmark**  

| **Current** | **Benchmark** | **Gap** |
|-------------|---------------|---------|
| 8050 | 6900 | +17% |

**Step 5 — BCM V2**  

| **Cost** | **Markup** | **Price** |
|----------|------------|-----------|
| 6200 | 18% | 7316 |

**Step 6 — BCM V3**  

| **Cost** | **Markup** | **Price** |
|----------|------------|-----------|
| 6100 | 17% | 7137 |

**Step 7 — Freeze (V1)**  

| **Metric** | **Value** | **Timestamp** |
|------------|-----------|---------------|
| ACV | $47.99M | 2026-03-30 11:20 |
| Margin | 18% | — |
| Status | 🔒 Frozen | — |

**Step 8 — FES (Deep Validation)**  

| **Metric** | **Value** |
|------------|-----------|
| Revenue | 47.99M |
| Total Cost | 39.35M |
| Margin | 18% |

**Sensitivity**  

| **Scenario** | **Margin** |
|--------------|------------|
| LATAM +5% | 16.5% |

**Dashboard — Pricing**  

| **Metric** | **Value** |
|------------|-----------|
| ACV | 47.99M |
| Margin | 18% |
| Status | Frozen |

**🤖 Pricing Agent is thinking…**  

> ✅ Submission ready  

> Routing to → Proposal & Negotiation Agent  

<br>

**🤖 Proposal Agent is thinking…**  

**V1**  

| **Version** | **ACV** | **Margin** | **Timestamp** |
|-------------|---------|------------|---------------|
| V1 | 47.99M | 18% | 2026-03-30 11:30 |

**Client Feedback**  

**V2**  

| **ACV** | **Margin** | **Timestamp** |
|---------|------------|---------------|
| 46.5M | 16.2% | 2026-04-02 09:15 |

**V3**  

| **ACV** | **Margin** | **Timestamp** |
|---------|------------|---------------|
| 46.8M | 17% | 2026-04-05 14:40 |

**MSA Final**  

| **Clause** | **Final** |
|------------|-----------|
| Liability | 100% ACV |

**Dashboard — Proposal**  

| **Version** | **ACV** | **Margin** |
|-------------|---------|------------|
| V3 | 46.8M | 17% |

**🤖 Proposal Agent is thinking…**  

> ✅ Finalized  

> Routing to → Governance Agent  

<br>

**🤖 Governance Agent is thinking…**  

**Version Ledger**  

| **Version** | **Change** | **Approved By** | **Timestamp** |
|-------------|------------|-----------------|---------------|
| V2 | Pricing | Finance | 2026-04-02 |
| V3 | SLA | Legal | 2026-04-05 |

**Dashboard — Approval**  

| **Final ACV** | **Margin** | **Status** |
|---------------|------------|------------|
| 46.8M | 17% | Approved |

**🤖 Governance Agent is thinking…**  

> ✅ Approved  

> Routing to → Knowledge (CAPA) Agent  

<br>

**🤖 CAPA Agent is thinking…**  

**CAPA**  

| **Category** | **Action** |
|--------------|------------|
| Pricing | Update LBP |
| Delivery | LATAM partners |
| Legal | Pre-negotiate caps |

**🤖 CAPA Agent is thinking…**  

> ✅ Knowledge captured  

<br>

**🤖 Audit Governance Agent is thinking…**  

**Final — Audit Trail**  

**Site Trace**  

| **Site** | **Input** | **Output** | **Timestamp** |
|----------|-----------|------------|---------------|
| BR-045 | Missing BW | 200 Mbps | 2026-03-30 09:10 |

**Pricing Trace**  

| **Step** | **Value** | **Source** | **Timestamp** |
|----------|-----------|------------|---------------|
| Cost | 6392 | LBP | 2026-03-30 10:40 |
| BCM V1 | 8050 | Markup | 2026-03-30 10:50 |
| BCM V3 | 7137 | Optimized | 2026-03-30 11:10 |

**Version Trace**  

| **Version** | **Change** | **Timestamp** |
|-------------|------------|---------------|
| V1 | Initial | 2026-03-30 |
| V2 | Pricing ↓ | 2026-04-02 |
| V3 | SLA adjust | 2026-04-05 |

**Approval Trace**  

| **Stage** | **Approver** | **Timestamp** |
|-----------|--------------|---------------|
| Sign-on | Finance | 2026-03-30 |
| V2 | Finance | 2026-04-02 |
| Final | CFO | 2026-04-05 |

**End State**  

- RFP parsed and normalized  
- Context enriched across enterprise systems  
- Opportunity qualified with governance controls  
- Workforce risk identified  
- Pricing optimized and validated  
- Proposal negotiated and finalized  
- Governance approvals completed  
- Knowledge captured for future reuse  
- Full lifecycle audit trace preserved  
`,
    },
    {
      message: "Give me a summary of the solution for Site BR-045",
      response: `  
**🤖 Assistance Agent is thinking…**

### ON SCREEN — SITE SUMMARY (BR-045)

| **Section** | **Details** |
|-------------|-------------|
| **Site Highlights** | Site ID: BR-045<br>Location: Brazil (LATAM)<br>Site Type: Tier 2 Warehouse<br>Bandwidth: 200 Mbps (Inferred)<br>Source: Benchmark inference (similar LATAM Tier 2 sites)<br>Confidence: Medium |
| **Solution Highlights** | Design: Hybrid WAN (Internet + LTE Backup)<br>SD-WAN: Cisco (aligned with global standard)<br>Rationale:<br>• No reliable MPLS availability in region<br>• LTE added for resiliency<br>• Cost-optimized vs Tier 1 design<br>Dependencies: Local ISP availability, LTE coverage validation |
| **Pricing Summary (MRC)** | Cost (Derived via LBP): $6,392<br>Final Price (BCM V3): $7,137<br>Benchmark Price: ~$6,900<br>Variance: +3.4%<br>Margin Contribution: ~17%<br>Pricing Source:<br>• Access: Brazil WAN Deal (Jun 2023, $3,500 base)<br>• CPE: Cisco Global (Jan 2024) |
| **Key Risks / Flags** | • Bandwidth inferred (not provided in RFP)<br>• LATAM supplier variability<br>• Workforce dependency (LATAM gap -33%) |
| **Solution SME (Recommended)** | Maria L (LATAM Delivery Lead) — deployed similar LATAM WAN solutions<br>David K (Pricing SME) — owned Brazil WAN pricing benchmark |
`,
    },
  ])
);