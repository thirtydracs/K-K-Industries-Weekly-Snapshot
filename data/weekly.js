const weeklyData = [

  {
    weekEnding: "4 April 2026",
    project: "Caltex D'Aguilar",
    status: "Behind",
    holding: "Ace Demolition. Consistently sending 1 man, failing to show up, and working minimal hours. Rubbish removal is an outstanding constraint blocking road base and next-phase civil works.",
    labour: "Insufficient",
    labourDetail: "PGE Civil adequate at 2–4 men. Ace Demolition insufficient — 1 man maximum, absent Mar 27, leaving early Mar 26. Site manager flagged as 'go slow demolition' in log notes.",
    reality: "This site is behind and the cause is clear — Ace Demolition is not performing. PGE has done their job well. The programme is being held back by one underperforming contractor who has had multiple opportunities to rectify. A formal intervention or replacement decision is needed this week.",
    progress: {
      planned: "Complete rubbish removal; place road base on main slab pad; under-slab plumbing rough-in; grease trap install.",
      actual: "Under-slab plumbing and grease trap completed (PGE). Council inspection passed. Main slab pad area completed. Bulk earthworks ongoing. Sediment fencing installed. Road base NOT placed.",
      gap: "Road base not placed (wet pad, Ace incomplete). Rubbish removal still not finished. Stockpile area on adjacent block running out of space."
    },
    issues: [
      { issue: "Ace Demolition underperforming", cause: "1 man crew, no-shows, early departures", impact: "Rubbish removal incomplete — blocking road base and programme" },
      { issue: "Pad too wet for road base", cause: "Rain events on multiple days", impact: "Road base delayed — compounded by Ace Demolition not clearing site" },
      { issue: "Stockpile space running out", cause: "Bulk earthworks filling adjacent block", impact: "Soil management becoming a constraint" }
    ],
    repeatIssues: "Ace Demolition failure recorded on every working day this week (Mar 23, 24, 25, 26, 27). No-show Mar 27. Left early Mar 26. One man maximum all other days. Systemic contractor failure — action overdue.",
    contractors: [
      { name: "PGE Civil & Plumbing", status: "performing", status_label: "Performing", reason: "Under-slab plumbing, grease trap, and earthworks completed as planned." },
      { name: "Guillotine Concreting", status: "adequate", status_label: "Adequate", reason: "Set up profiles for excavation and boxing — early stage, monitoring required." },
      { name: "Ace Demolition", status: "underperforming", status_label: "Underperforming", reason: "Chronic under-resourcing. No-show. Early departures. Rubbish removal incomplete after multiple weeks." },
      { name: "TFH", status: "adequate", status_label: "Adequate", reason: "Temporary fencing delivered and installed as required." },
      { name: "Surveyor", status: "performing", status_label: "Performing", reason: "Main slab marked out on pad area." }
    ],
    score: 4,
    scoreLabel: "Problem",
    next: [
      "Formal written notice to Ace Demolition — complete rubbish removal by set hard date or face replacement.",
      "Resolve stockpile space issue on adjacent block before earthworks are locked out.",
      "Confirm revised road base programme with PGE once Ace clears the site."
    ],
    dataWarning: null
  },

  {
    weekEnding: "4 April 2026",
    project: "Pearl Energy Emerald",
    status: "Critical Delay",
    holding: "No daily logs submitted this week. Site activity cannot be confirmed.",
    labour: "Unknown",
    labourDetail: null,
    reality: "Buildertrend export is empty — header page only. No works, trades, or programme status can be reported.",
    progress: { planned: null, actual: null, gap: null },
    issues: [],
    repeatIssues: null,
    contractors: [],
    score: null,
    scoreLabel: null,
    next: [
      "Site manager to submit logs immediately or confirm nil activity in writing.",
      "If site was not active this week, a nil-activity log must still be submitted."
    ],
    dataWarning: "No logs submitted this week. Buildertrend export is empty — header page only."
  },

  {
    weekEnding: "4 April 2026",
    project: "Pearl Energy Childers",
    status: "On Track",
    holding: "Brucon (concreter) not yet mobilised. Confirmed start 7/4/26 — this is the critical gate.",
    labour: "Light",
    labourDetail: "Red Dirt Civil — 1 man and 1 x 5T excavator all week. One late start on 31 Mar (arrived 15:00). Adequate for cleanup phase only.",
    reality: "Childers is in good shape heading into next week. Earthworks are clean, surveyors have completed set-outs, and all reinforcement has arrived. The stormwater issue needs resolution before it blocks progress. Programme depends entirely on Brucon mobilising on 7/4/26 as confirmed.",
    progress: {
      planned: "Continue sieving stockpiled material; surveyors to finalise set outs; reinforcement deliveries.",
      actual: "Sieving 90%+ complete. Surveyors completed final mark-up and gridlines (Mar 30). All reinforcement (tilt panels, shop slab, pad footings) delivered via Form Direct (Apr 2).",
      gap: "No gap — planned works completed. Job is at a natural handover point waiting for Brucon."
    },
    issues: [
      { issue: "Stormwater connection issue", cause: "Existing earthenware IL too high to connect", impact: "SGP report pending — resolution required before civil sign-off" },
      { issue: "No existing water meter found", cause: "Water connected directly to supply", impact: "Compliance risk — SPG to advise on remedy" },
      { issue: "Late start (Mar 31)", cause: "Red Dirt arrived 15:00", impact: "2.5hrs lost — low impact this week but a pattern to monitor" }
    ],
    repeatIssues: null,
    contractors: [
      { name: "Red Dirt Civil", status: "adequate", status_label: "Adequate", reason: "Completed sieving and cleanup as planned. One late start recorded." },
      { name: "Cullen & Couper (Surveyors)", status: "performing", status_label: "Performing", reason: "Final mark-up and gridlines completed on schedule." },
      { name: "SPG (Plumbing)", status: "monitor", status_label: "Monitor", reason: "Stormwater connection issue raised — remedy report not yet received." },
      { name: "Brucon (Concreter)", status: "not_started", status_label: "Not Yet Started", reason: "Confirmed for 7/4/26. Critical path item." }
    ],
    score: 7,
    scoreLabel: "Friction",
    next: [
      "Confirm Brucon on site 7/4/26 — call and verify morning of.",
      "Follow up SPG stormwater report — get the remedy in writing before concrete pours.",
      "Check water meter compliance issue — flag to client/council if no water meter exists."
    ],
    dataWarning: null
  },

  {
    weekEnding: "4 April 2026",
    project: "Exus Williamstown",
    status: "Unknown",
    holding: "Cannot determine — no structured fields completed in any log this week. Wind on Mar 27 (37mph) likely impacted external cladding but was not formally recorded.",
    labour: "Adequate",
    labourDetail: "B&M 2–4 men (cladding), Roofers (lower roofs and box gutters), Summit 2 men (GyG rough-in), Provision 2 men (make good penos). Multiple trades active. Output unverifiable.",
    reality: "Multiple trades on site and appear to be progressing. However K&K has no documented record of what was planned, completed, or whether issues exist. This is a documentation failure and a commercial and legal exposure.",
    progress: {
      planned: null,
      actual: "Cladding progressing (B&M, battens and GyG panels). Lower roofs ongoing. Summit completing GyG rough-in. Provision making good penetrations.",
      gap: "Cannot calculate — planned works not logged."
    },
    issues: [
      { issue: "Structured fields all N/A", cause: "Logs not completed correctly", impact: "Cannot confirm programme, issues, or planned vs actual output" },
      { issue: "High wind event (Mar 27)", cause: "37mph winds recorded", impact: "External cladding likely stopped — not confirmed in log" }
    ],
    repeatIssues: "Every log entry this week has all structured fields marked N/A. Systemic failure — Matthew Thomas is not completing Buildertrend logs correctly.",
    contractors: [
      { name: "B&M (Cladding)", status: "adequate", status_label: "Adequate", reason: "Active all week. Cladding and batten installation continuing." },
      { name: "Roofers", status: "adequate", status_label: "Adequate", reason: "Lower roofs and box gutters progressing." },
      { name: "Summit", status: "adequate", status_label: "Adequate", reason: "GyG rough-in progressing." },
      { name: "Provision", status: "adequate", status_label: "Adequate", reason: "Make good to penetrations being completed." }
    ],
    score: 5,
    scoreLabel: "Friction",
    next: [
      "Matthew Thomas to complete structured fields in all daily logs — non-negotiable.",
      "Confirm programme position — is the job on track, behind, or critical?",
      "Log the Mar 27 wind event formally including what work was stopped and duration."
    ],
    dataWarning: "Daily logs not completed correctly — all structured fields N/A across every entry. Report accuracy reduced. Findings based on trade attendance notes only."
  }

];
