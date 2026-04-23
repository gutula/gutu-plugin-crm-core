import {
  createBusinessDomainStateStore,
  createBusinessOrchestrationState,
  createBusinessPluginService,
  type BusinessAdvancePrimaryRecordInput,
  type BusinessCreatePrimaryRecordInput,
  type BusinessFailPendingDownstreamItemInput,
  type BusinessReconcilePrimaryRecordInput,
  type BusinessReplayDeadLetterInput,
  type BusinessResolvePendingDownstreamItemInput
} from "@platform/business-runtime";

import { type ExceptionRecord, type PrimaryRecord, type SecondaryRecord } from "../model";

export type CreatePrimaryRecordInput = BusinessCreatePrimaryRecordInput;
export type AdvancePrimaryRecordInput = BusinessAdvancePrimaryRecordInput;
export type ReconcilePrimaryRecordInput = BusinessReconcilePrimaryRecordInput;
export type ResolvePendingDownstreamItemInput = BusinessResolvePendingDownstreamItemInput;
export type FailPendingDownstreamItemInput = BusinessFailPendingDownstreamItemInput;
export type ReplayDeadLetterInput = BusinessReplayDeadLetterInput;

function seedState() {
  return {
    primaryRecords: [
      {
        id: "crm-core:seed",
        tenantId: "tenant-platform",
        title: "CRM Core Seed Record",
        counterpartyId: "party:seed",
        companyId: "company:primary",
        branchId: "branch:head-office",
        recordState: "active",
        approvalState: "approved",
        postingState: "unposted",
        fulfillmentState: "none",
        amountMinor: 125000,
        currencyCode: "USD",
        revisionNo: 1,
        reasonCode: null,
        effectiveAt: "2026-04-23T00:00:00.000Z",
        correlationId: "crm-core:seed",
        processId: "crm-opportunity-lifecycle:seed",
        upstreamRefs: [],
        downstreamRefs: [],
        updatedAt: "2026-04-23T00:00:00.000Z"
      }
    ] satisfies PrimaryRecord[],
    secondaryRecords: [] satisfies SecondaryRecord[],
    exceptionRecords: [] satisfies ExceptionRecord[],
    orchestration: createBusinessOrchestrationState()
  };
}

const store = createBusinessDomainStateStore({
  pluginId: "crm-core",
  sqlite: {
    primaryTable: "crm_core_primary_records",
    secondaryTable: "crm_core_secondary_records",
    exceptionTable: "crm_core_exception_records",
    dbFileName: "business-runtime.sqlite"
  },
  postgres: {
    schemaName: "crm_core"
  },
  seedStateFactory: seedState
});

const service = createBusinessPluginService({
  pluginId: "crm-core",
  displayName: "CRM Core",
  primaryResourceId: "crm.leads",
  secondaryResourceId: "crm.opportunities",
  exceptionResourceId: "crm.forecasts",
  createEvent: "crm.lead-captured.v1",
  advanceEvent: "crm.opportunity-advanced.v1",
  reconcileEvent: "crm.handoff-ready.v1",
  projectionJobId: "crm.projections.refresh",
  reconciliationJobId: "crm.reconciliation.run",
  advanceActionLabel: "Advance Opportunity",
  orchestrationTargets: {
  "create": [],
  "advance": [
    "traceability.links.record"
  ],
  "reconcile": [
    "sales.quotes.create",
    "traceability.links.record"
  ]
},
  store
});

export const {
  listPrimaryRecords,
  listSecondaryRecords,
  listExceptionRecords,
  listPublishedMessages,
  listPendingDownstreamItems,
  listDeadLetters,
  listProjectionRecords,
  getBusinessOverview,
  createPrimaryRecord,
  advancePrimaryRecord,
  reconcilePrimaryRecord,
  resolvePendingDownstreamItem,
  failPendingDownstreamItem,
  replayDeadLetter
} = service;
