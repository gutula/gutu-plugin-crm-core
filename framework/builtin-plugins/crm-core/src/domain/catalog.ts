export const domainCatalog = {
  "erpnextModules": [
    "CRM"
  ],
  "erpnextDoctypes": [
    "Lead",
    "Opportunity",
    "Prospect",
    "Appointment",
    "Campaign",
    "Sales Stage"
  ],
  "ownedEntities": [
    "Lead",
    "Opportunity",
    "Prospect",
    "Campaign",
    "Stage History",
    "Forecast Snapshot"
  ],
  "reports": [
    "Lead Details",
    "Opportunity Summary",
    "Pipeline by Stage",
    "Sales Stage Analysis"
  ],
  "exceptionQueues": [
    "lead-dedupe-review",
    "handoff-readiness-blockers",
    "stale-opportunity-followups"
  ],
  "operationalScenarios": [
    "lead-capture",
    "qualification-and-scoring",
    "opportunity-handoff-to-sales"
  ],
  "settingsSurfaces": [
    "CRM Settings",
    "Appointment Booking Settings"
  ],
  "edgeCases": [
    "duplicate lead conversion",
    "opportunity reopen after loss",
    "handoff without commercial context"
  ]
} as const;
