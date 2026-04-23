export const reportDefinitions = [
  {
    "id": "crm-core.report.01",
    "label": "Lead Details",
    "owningPlugin": "crm-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "lead-dedupe-review",
      "handoff-readiness-blockers",
      "stale-opportunity-followups"
    ]
  },
  {
    "id": "crm-core.report.02",
    "label": "Opportunity Summary",
    "owningPlugin": "crm-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "lead-dedupe-review",
      "handoff-readiness-blockers",
      "stale-opportunity-followups"
    ]
  },
  {
    "id": "crm-core.report.03",
    "label": "Pipeline by Stage",
    "owningPlugin": "crm-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "lead-dedupe-review",
      "handoff-readiness-blockers",
      "stale-opportunity-followups"
    ]
  },
  {
    "id": "crm-core.report.04",
    "label": "Sales Stage Analysis",
    "owningPlugin": "crm-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "lead-dedupe-review",
      "handoff-readiness-blockers",
      "stale-opportunity-followups"
    ]
  }
] as const;
