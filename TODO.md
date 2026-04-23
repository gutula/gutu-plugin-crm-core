# CRM Core TODO

**Maturity Tier:** `Hardened`

## Shipped Now

- Exports 7 governed actions: `crm.leads.capture`, `crm.opportunities.advance`, `crm.handoffs.prepare`, `crm.leads.hold`, `crm.leads.release`, `crm.leads.amend`, `crm.leads.reverse`.
- Owns 3 resource contracts: `crm.leads`, `crm.opportunities`, `crm.forecasts`.
- Publishes 2 job definitions with explicit queue and retry policy metadata.
- Publishes 1 workflow definition with state-machine descriptions and mandatory steps.
- Adds richer admin workspace contributions on top of the base UI surface.
- Ships explicit SQL migration or rollback helpers alongside the domain model.
- Documents 6 owned entity surface(s): `Lead`, `Opportunity`, `Prospect`, `Campaign`, `Stage History`, `Forecast Snapshot`.
- Carries 4 report surface(s) and 3 exception queue(s) for operator parity and reconciliation visibility.
- Tracks ERPNext reference parity against module(s): `CRM`.
- Operational scenario matrix includes `lead-capture`, `qualification-and-scoring`, `opportunity-handoff-to-sales`.
- Governs 2 settings or policy surface(s) for operator control and rollout safety.

## Current Gaps

- No additional gaps were identified beyond the plugin’s stated non-goals.

## Recommended Next

- Deepen scoring, routing, and handoff validation before more quote creation depends on CRM quality.
- Add stronger campaign and activity evidence where pre-sales governance becomes operationally significant.
- Broaden lifecycle coverage with deeper orchestration, reconciliation, and operator tooling where the business flow requires it.
- Add more explicit domain events or follow-up job surfaces when downstream systems need tighter coupling.
- Convert more ERP parity references into first-class runtime handlers where needed, starting from `Lead`, `Opportunity`, `Prospect`.

## Later / Optional

- Outbound connectors, richer analytics, or portal-facing experiences once the core domain contracts harden.
