localStorage.setItem(
  "demo_d3d1ff50-3327-4ea0-9edc-56793e24d57b",
  JSON.stringify([
    {
      message: "What are the current rules in our rule engine?",
      response: `
🤖 **Parent Orchestrator is thinking...** 

- Accessing Knowledge Base SOV_Rule_Engine.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Validation Rules</th>
      <th>Top-up/Completion Approach</th>
      <th>Associated Sources</th>
      <th>Compliance Validation Step</th>
      <th>Client Approval Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>City, State Zip</td>
      <td>Address must be parsable (Address1, City, State/Prov, ZIP/PC). Reject PO Boxes for property coverage; require geocode accuracy ≥ rooftop or parcel; ZIP format valid; country present.</td>
      <td>Standardize via USPS; expand abbreviations; preserve suite/unit. Geocode with rooftop priority then parcel/street; backfill missing city/state from geocode. Flag multiple candidates or low accuracy for HITL.</td>
      <td>USPS + commercial geocoder (rooftop&gt;parcel&gt;street); County Assessor (APN, improvements, eff. year built)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed. Y if multiple matches or geocode accuracy &lt; parcel</td>
    </tr>
    <tr>
      <td>Facility</td>
      <td>Profile</td>
      <td>Occupancy must map to canonical list (e.g., Grocery, Warehouse/Distribution, Hotel, Food Processing, Office). NAICS required; seasonal flags where applicable.</td>
      <td>Derive occupancy/NAICS from client info, company site, listings text, permits. If ambiguous, pick top two candidates and send to HITL.</td>
      <td>Company site/brand pages, press/news, GMB/Yelp imagery; LoopNet/CRE listings (facts & photos); City permit/inspection portals (roof, fire, MEP)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed. Y if occupancy or NAICS changed</td>
    </tr>
    <tr>
      <td>Building</td>
      <td>Value</td>
      <td>Numeric &gt; 0; within replacement cost band vs SqFt×cost/ft² (industry benchmark). Variance tolerance ±25% before exception.</td>
      <td>Estimate via replacement cost model (construction, sqft, year built); do NOT use market value. If missing, compute median of peer band and mark low confidence.</td>
      <td>Replacement cost tool (licensed) or internal benchmark; Assessor improvements (context only)</td>
      <td>If using licensed cost tools, confirm license coverage; otherwise use internal benchmarks only. Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed. Always Y for changes or estimates</td>
    </tr>
    <tr>
      <td>Improvements &amp; Betterments</td>
      <td>Value</td>
      <td>≥ 0; for tenants typically 5–20% of building value (industry dependent). If owner-occupied, may be 0 unless recent renovations.</td>
      <td>Derive from leases or recent permits; otherwise estimate as % of building value by occupancy (Warehouse 2–10%, Retail 5–15%, Hotel 5–12%). Mark low confidence if estimated.</td>
      <td>City permit/inspection portals (roof, fire, MEP); Leases (client-provided)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed. Y if estimated or &gt;10% change</td>
    </tr>
    <tr>
      <td>Business Personal Property</td>
      <td>≥ 0; consistency with occupancy (Manufacturing/Retail higher than Office). Check ratio vs building value; tolerance ±20%.</td>
      <td>Infer from photos/listings and personal property tax rolls where public; fallback heuristic by occupancy (Warehouse 5–20%, Retail 15–35%, Manufacturing 25–60%).</td>
      <td>Personal property tax rolls (where public/allowed); LoopNet/CRE listings (facts & photos); Company site/brand pages, press/news, GMB/Yelp imagery</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if derived or variance &gt;10%</td>
    </tr>
    <tr>
      <td>Business Income/Extra Expense</td>
      <td>Present and &gt; 0; months of indemnity documented (12–18 typical). Cross-check BI value ≈ revenue × margin × indemnity months.</td>
      <td>Use client financials when provided; else estimate revenue via public signals and margin by industry; default 12 months if absent, mark low confidence.</td>
      <td>Client financials/EDGAR (public), revenue proxies (private)</td>
      <td>Do not retain private financials beyond need; mask sensitive figures in exports; Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Always Y</td>
    </tr>
    <tr>
      <td>Total Insured Value</td>
      <td>TIV = Building + IBT + BPP + BI (as applicable); row- and account-level rollups must reconcile within 5%.</td>
      <td>Compute from component values; if mismatch, raise exception and propose corrected TIV.</td>
      <td>Internal calculation from component fields</td>
      <td>N/A beyond general audit logging</td>
      <td>Y if mismatch corrected</td>
    </tr>
    <tr>
      <td>Sq. Ft.</td>
      <td>&gt; 0; cross-check vs assessor/listings; bands by occupancy; sanity with Stories (SqFt per story reasonable).</td>
      <td>Prefer assessor GBA; if missing, use listings/photos; if still missing, estimate from footprint via maps.</td>
      <td>County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if change &gt;10%</td>
    </tr>
    <tr>
      <td>Year Built</td>
      <td>4-digit; ≤ current year; if Effective Year Built available, store both; variance &gt; ±3 years triggers exception.</td>
      <td>Pull Effective Year Built from assessor; confirm via permits and listings; record renovation years.</td>
      <td>County Assessor (APN, improvements, eff. year built); City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if change ≥3 years</td>
    </tr>
    <tr>
      <td>Fire &amp; Burglar Alarms</td>
      <td>Categorical: {None, Local, Central Station, UL}. Fire alarm presence aligns with sprinkler/permit records.</td>
      <td>Use listings, permits, inspection tags; confirm central-station provider if stated.</td>
      <td>City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>Construction Type</td>
      <td>Map to ISO classes {Frame, Joisted Masonry, Noncombustible, Masonry Noncombustible, Modified Fire Resistive, Fire Resistive}. If unclear, choose top 2 candidates for HITL.</td>
      <td>Derive from assessor materials &amp; listings photos; cross-check permits (structural).</td>
      <td>County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos); City permit/inspection portals (roof, fire, MEP)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>Stories</td>
      <td>Integer ≥1; SqFt ÷ Stories must be within reasonable per-floor bands by occupancy.</td>
      <td>Prefer assessor; else listings/street imagery; infer from photos if necessary.</td>
      <td>County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if change &gt;1 story</td>
    </tr>
    <tr>
      <td>Units</td>
      <td>Integer ≥0; required for hotels/multifamily; optional otherwise.</td>
      <td>Pull from brand/company site and listings; if occupancy not unit-based, set N/A.</td>
      <td>Company site/brand pages, press/news, GMB/Yelp imagery; LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if occupancy unit-based</td>
    </tr>
    <tr>
      <td>Pool</td>
      <td>Boolean {Y/N}; if Y, ensure liability endorsements addressed; indoor/outdoor tag optional.</td>
      <td>Listings photos, amenities pages, permits for pool/spa.</td>
      <td>LoopNet/CRE listings (facts & photos); City permit/inspection portals (roof, fire, MEP)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if Y</td>
    </tr>
    <tr>
      <td>Basement</td>
      <td>Boolean {Y/N}; if Y, capture finished/unf. and flood relevance.</td>
      <td>Assessor records and listings; imagery where available.</td>
      <td>County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if Y</td>
    </tr>
    <tr>
      <td>Sprinklered</td>
      <td>Categorical: {None, Partial, Full, ESFR}. Must be consistent with permits; affects rating.</td>
      <td>Pull from fire permits and listings photos; if unknown, set Unknown and route to HITL.</td>
      <td>City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>Plumbing</td>
      <td>Type and last major update year; flag galvanized or very old systems.</td>
      <td>Look for plumbing permits; otherwise listings/inspection notes.</td>
      <td>City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if original/old or unknown</td>
    </tr>
    <tr>
      <td>Heating</td>
      <td>Type (e.g., Gas FAU, Electric, Oil, Solid Fuel) and update year; flag solid-fuel or old systems.</td>
      <td>Permits and listings; photos to confirm equipment.</td>
      <td>City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if solid fuel/old or changed</td>
    </tr>
    <tr>
      <td>Electrical</td>
      <td>Service size (amps), panel type, update year; flag knob-and-tube or aluminum branch wiring.</td>
      <td>Electrical permits; listings/inspection summaries if any.</td>
      <td>City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if outdated or changed</td>
    </tr>
    <tr>
      <td>Roof</td>
      <td>Type (BUR, TPO, EPDM, Metal, Tile, Shingle), last replacement year; flag roofs &gt;25 years (shingle) or &gt;20 (flat) for exception.</td>
      <td>Roof permits and listings; aerial imagery notes (no storing imagery).</td>
      <td>City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
      <td>Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
      <td>Y if age thresholds exceeded or changed</td>
    </tr>
  </tbody>
</table>
`,
    },
  ])
);
