import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "crm-core",
  "kind": "plugin",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-plugin-crm-core",
  "displayName": "CRM Core",
  "domainGroup": "Operational Data",
  "defaultCategory": {
    "id": "business",
    "label": "Business",
    "subcategoryId": "crm_pipeline",
    "subcategoryLabel": "CRM & Pipeline"
  },
  "description": "Lead, opportunity, campaign, and pre-sales engagement records with governed handoff readiness before sales takes commercial truth ownership.",
  "extends": [],
  "dependsOn": [
    "auth-core",
    "org-tenant-core",
    "role-policy-core",
    "audit-core",
    "workflow-core",
    "party-relationships-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "auth-core",
      "class": "required",
      "rationale": "Required for CRM Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "org-tenant-core",
      "class": "required",
      "rationale": "Required for CRM Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "role-policy-core",
      "class": "required",
      "rationale": "Required for CRM Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "audit-core",
      "class": "required",
      "rationale": "Required for CRM Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "workflow-core",
      "class": "required",
      "rationale": "Required for CRM Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "party-relationships-core",
      "class": "required",
      "rationale": "Required for CRM Core to keep its boundary governed and explicit."
    }
  ],
  "optionalWith": [],
  "conflictsWith": [],
  "providesCapabilities": [
    "crm.leads",
    "crm.opportunities",
    "crm.forecasts"
  ],
  "requestedCapabilities": [
    "ui.register.admin",
    "api.rest.mount",
    "data.write.crm",
    "events.publish.crm"
  ],
  "ownsData": [
    "crm.leads",
    "crm.opportunities",
    "crm.activities",
    "crm.forecasts"
  ],
  "extendsData": [],
  "publicCommands": [
    "crm.leads.capture",
    "crm.opportunities.advance",
    "crm.handoffs.prepare",
    "crm.leads.hold",
    "crm.leads.release",
    "crm.leads.amend",
    "crm.leads.reverse"
  ],
  "publicQueries": [
    "crm.pipeline-summary",
    "crm.handoff-readiness"
  ],
  "publicEvents": [
    "crm.lead-captured.v1",
    "crm.opportunity-advanced.v1",
    "crm.handoff-ready.v1"
  ],
  "domainCatalog": {
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
  },
  "slotClaims": [],
  "trustTier": "first-party",
  "reviewTier": "R1",
  "isolationProfile": "same-process-trusted",
  "compatibility": {
    "framework": "^0.1.0",
    "runtime": "bun>=1.3.12",
    "db": [
      "postgres",
      "sqlite"
    ]
  }
});
