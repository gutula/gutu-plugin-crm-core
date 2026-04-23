export const exceptionQueueDefinitions = [
  {
    "id": "lead-dedupe-review",
    "label": "Lead Dedupe Review",
    "severity": "medium",
    "owner": "sales-rep",
    "reconciliationJobId": "crm.reconciliation.run"
  },
  {
    "id": "handoff-readiness-blockers",
    "label": "Handoff Readiness Blockers",
    "severity": "medium",
    "owner": "sales-rep",
    "reconciliationJobId": "crm.reconciliation.run"
  },
  {
    "id": "stale-opportunity-followups",
    "label": "Stale Opportunity Followups",
    "severity": "medium",
    "owner": "sales-rep",
    "reconciliationJobId": "crm.reconciliation.run"
  }
] as const;
