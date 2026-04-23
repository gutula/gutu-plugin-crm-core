import {
  advancePrimaryRecord,
  createPrimaryRecord,
  reconcilePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type ReconcilePrimaryRecordInput
} from "../services/main.service";

export const businessFlowDefinitions = [
  {
    "id": "crm.leads.capture",
    "label": "Capture CRM Lead",
    "phase": "create",
    "methodName": "captureCrmLead"
  },
  {
    "id": "crm.opportunities.advance",
    "label": "Advance Opportunity",
    "phase": "advance",
    "methodName": "advanceOpportunity"
  },
  {
    "id": "crm.handoffs.prepare",
    "label": "Prepare Sales Handoff",
    "phase": "reconcile",
    "methodName": "prepareSalesHandoff"
  }
] as const;

export async function captureCrmLead(input: CreatePrimaryRecordInput) {
  return createPrimaryRecord(input);
}

export async function advanceOpportunity(input: AdvancePrimaryRecordInput) {
  return advancePrimaryRecord(input);
}

export async function prepareSalesHandoff(input: ReconcilePrimaryRecordInput) {
  return reconcilePrimaryRecord(input);
}
