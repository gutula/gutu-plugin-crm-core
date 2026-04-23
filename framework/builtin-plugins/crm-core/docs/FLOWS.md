# CRM Core Flows

## Happy paths

- `crm.leads.capture`: Capture CRM Lead
- `crm.opportunities.advance`: Advance Opportunity
- `crm.handoffs.prepare`: Prepare Sales Handoff

## Operational scenario matrix

- `lead-capture`
- `qualification-and-scoring`
- `opportunity-handoff-to-sales`

## Action-level flows

### `crm.leads.capture`

Capture CRM Lead

Permission: `crm.leads.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s idempotent semantics.

Side effects:

- Mutates or validates state owned by `crm.leads`, `crm.opportunities`, `crm.forecasts`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `crm.opportunities.advance`

Advance Opportunity

Permission: `crm.opportunities.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `crm.leads`, `crm.opportunities`, `crm.forecasts`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `crm.handoffs.prepare`

Prepare Sales Handoff

Permission: `crm.opportunities.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `crm.leads`, `crm.opportunities`, `crm.forecasts`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


## Cross-package interactions

- Direct dependencies: `auth-core`, `org-tenant-core`, `role-policy-core`, `audit-core`, `workflow-core`, `party-relationships-core`
- Requested capabilities: `ui.register.admin`, `api.rest.mount`, `data.write.crm`, `events.publish.crm`
- Integration model: Actions+Resources+Jobs+Workflows+UI
- ERPNext doctypes used as parity references: `Lead`, `Opportunity`, `Prospect`, `Appointment`, `Campaign`, `Sales Stage`
- Recovery ownership should stay with the host orchestration layer when the plugin does not explicitly export jobs, workflows, or lifecycle events.
