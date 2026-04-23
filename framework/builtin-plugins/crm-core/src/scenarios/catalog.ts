export const scenarioDefinitions = [
  {
    "id": "lead-capture",
    "owningPlugin": "crm-core",
    "workflowId": "crm-opportunity-lifecycle",
    "actionIds": [
      "crm.leads.capture",
      "crm.opportunities.advance",
      "crm.handoffs.prepare",
      "crm.leads.hold",
      "crm.leads.release",
      "crm.leads.amend",
      "crm.leads.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "sales.quotes.create",
        "traceability.links.record"
      ]
    }
  },
  {
    "id": "qualification-and-scoring",
    "owningPlugin": "crm-core",
    "workflowId": "crm-opportunity-lifecycle",
    "actionIds": [
      "crm.leads.capture",
      "crm.opportunities.advance",
      "crm.handoffs.prepare",
      "crm.leads.hold",
      "crm.leads.release",
      "crm.leads.amend",
      "crm.leads.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "sales.quotes.create",
        "traceability.links.record"
      ]
    }
  },
  {
    "id": "opportunity-handoff-to-sales",
    "owningPlugin": "crm-core",
    "workflowId": "crm-opportunity-lifecycle",
    "actionIds": [
      "crm.leads.capture",
      "crm.opportunities.advance",
      "crm.handoffs.prepare",
      "crm.leads.hold",
      "crm.leads.release",
      "crm.leads.amend",
      "crm.leads.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "sales.quotes.create",
        "traceability.links.record"
      ]
    }
  }
] as const;
