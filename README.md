# CRM Core

<p align="center">
  <img src="./docs/assets/gutu-mascot.png" alt="Gutu mascot" width="220" />
</p>

Lead, opportunity, campaign, and pre-sales engagement records with governed handoff readiness before sales takes commercial truth ownership.

![Maturity: Hardened](https://img.shields.io/badge/Maturity-Hardened-2563eb) ![Verification: Build+Typecheck+Lint+Test+Contracts+Migrations+Integration](https://img.shields.io/badge/Verification-Build%2BTypecheck%2BLint%2BTest%2BContracts%2BMigrations%2BIntegration-2563eb) ![DB: postgres+sqlite](https://img.shields.io/badge/DB-postgres%2Bsqlite-2563eb) ![Integration Model: Actions+Resources+Jobs+Workflows+UI](https://img.shields.io/badge/Integration%20Model-Actions%2BResources%2BJobs%2BWorkflows%2BUI-2563eb)

## Part Of The Gutu Stack

| Aspect | Value |
| --- | --- |
| Repo kind | First-party plugin |
| Domain group | Operational Data |
| Default category | Business / CRM & Pipeline |
| Primary focus | lead intake, opportunity state, handoff readiness |
| Best when | You need a governed domain boundary with explicit contracts and independent release cadence. |
| Composes through | Actions+Resources+Jobs+Workflows+UI |

- Gutu keeps plugins as independent repos with manifest-governed boundaries, compatibility channels, and verification lanes instead of hiding everything behind one giant mutable codebase.
- This plugin is meant to compose through explicit actions, resources, jobs, workflows, and runtime envelopes, not through undocumented hook chains.

## What It Does Now

Owns lead, opportunity, and pre-sales readiness state so commercial handoff stays explicit before Sales becomes the demand source of truth.

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

## Maturity

**Maturity Tier:** `Hardened`

This tier is justified because unit coverage exists, contract coverage exists, integration coverage exists, migration coverage exists, job definitions are exported, and workflow definitions are exported.

## Verified Capability Summary

- Domain group: **Operational Data**
- Default category: **Business / CRM & Pipeline**
- Verification surface: **Build+Typecheck+Lint+Test+Contracts+Migrations+Integration**
- Tests discovered: **5** total files across unit, contract, integration, migration lanes
- Integration model: **Actions+Resources+Jobs+Workflows+UI**
- Database support: **postgres + sqlite**

## Dependency And Compatibility Summary

| Field | Value |
| --- | --- |
| Package | `@plugins/crm-core` |
| Manifest ID | `crm-core` |
| Repo | [gutu-plugin-crm-core](https://github.com/gutula/gutu-plugin-crm-core) |
| Depends On | `auth-core`, `org-tenant-core`, `role-policy-core`, `audit-core`, `workflow-core`, `party-relationships-core` |
| Requested Capabilities | `ui.register.admin`, `api.rest.mount`, `data.write.crm`, `events.publish.crm` |
| Provided Capabilities | `crm.leads`, `crm.opportunities`, `crm.forecasts` |
| Runtime | bun>=1.3.12 |
| Database | postgres, sqlite |
| Integration Model | Actions+Resources+Jobs+Workflows+UI |

## Capability Matrix

| Surface | Count | Details |
| --- | --- | --- |
| Actions | 7 | `crm.leads.capture`, `crm.opportunities.advance`, `crm.handoffs.prepare`, `crm.leads.hold`, `crm.leads.release`, `crm.leads.amend`, `crm.leads.reverse` |
| Resources | 3 | `crm.leads`, `crm.opportunities`, `crm.forecasts` |
| Jobs | 2 | `crm.projections.refresh`, `crm.reconciliation.run` |
| Workflows | 1 | `crm-opportunity-lifecycle` |
| UI | Present | base UI surface, admin contributions |
| Owned Entities | 6 | `Lead`, `Opportunity`, `Prospect`, `Campaign`, `Stage History`, `Forecast Snapshot` |
| Reports | 4 | `Lead Details`, `Opportunity Summary`, `Pipeline by Stage`, `Sales Stage Analysis` |
| Exception Queues | 3 | `lead-dedupe-review`, `handoff-readiness-blockers`, `stale-opportunity-followups` |
| Operational Scenarios | 3 | `lead-capture`, `qualification-and-scoring`, `opportunity-handoff-to-sales` |
| Settings Surfaces | 2 | `CRM Settings`, `Appointment Booking Settings` |
| ERPNext Refs | 1 | `CRM` |

## Quick Start For Integrators

Use this repo inside a **compatible Gutu workspace** or the **ecosystem certification workspace** so its `workspace:*` dependencies resolve honestly.

```bash
# from a compatible workspace that already includes this plugin's dependency graph
bun install
bun run build
bun run test
bun run docs:check
```

```ts
import { manifest, captureCrmLeadAction, BusinessPrimaryResource, jobDefinitions, workflowDefinitions, adminContributions, uiSurface } from "@plugins/crm-core";

console.log(manifest.id);
console.log(captureCrmLeadAction.id);
console.log(BusinessPrimaryResource.id);
```

Use the root repo scripts for day-to-day work **after the workspace is bootstrapped**, or run the nested package directly from `framework/builtin-plugins/crm-core` if you need lower-level control.

## Current Test Coverage

- Root verification scripts: `bun run build`, `bun run typecheck`, `bun run lint`, `bun run test`, `bun run test:contracts`, `bun run test:unit`, `bun run test:integration`, `bun run test:migrations`, `bun run docs:check`
- Unit files: 1
- Contracts files: 1
- Integration files: 1
- Migrations files: 2

## Known Boundaries And Non-Goals

- Not a full vertical application suite; this plugin only owns the domain slice exported in this repo.
- Not a replacement for explicit orchestration in jobs/workflows when multi-step automation is required.
- Cross-plugin composition should use Gutu command, event, job, and workflow primitives. This repo should not be documented as exposing a generic WordPress-style hook system unless one is explicitly exported.

## Recommended Next Milestones

- Deepen scoring, routing, and handoff validation before more quote creation depends on CRM quality.
- Add stronger campaign and activity evidence where pre-sales governance becomes operationally significant.
- Broaden lifecycle coverage with deeper orchestration, reconciliation, and operator tooling where the business flow requires it.
- Add more explicit domain events or follow-up job surfaces when downstream systems need tighter coupling.
- Convert more ERP parity references into first-class runtime handlers where needed, starting from `Lead`, `Opportunity`, `Prospect`.

## More Docs

See [DEVELOPER.md](./DEVELOPER.md), [TODO.md](./TODO.md), [SECURITY.md](./SECURITY.md), [CONTRIBUTING.md](./CONTRIBUTING.md). The internal domain sources used to build those docs live under:

- `plugins/gutu-plugin-crm-core/framework/builtin-plugins/crm-core/docs/AGENT_CONTEXT.md`
- `plugins/gutu-plugin-crm-core/framework/builtin-plugins/crm-core/docs/BUSINESS_RULES.md`
- `plugins/gutu-plugin-crm-core/framework/builtin-plugins/crm-core/docs/EDGE_CASES.md`
- `plugins/gutu-plugin-crm-core/framework/builtin-plugins/crm-core/docs/FLOWS.md`
- `plugins/gutu-plugin-crm-core/framework/builtin-plugins/crm-core/docs/GLOSSARY.md`
- `plugins/gutu-plugin-crm-core/framework/builtin-plugins/crm-core/docs/MANDATORY_STEPS.md`
