import {
  advancePrimaryRecord,
  amendPrimaryRecord,
  createPrimaryRecord,
  placePrimaryRecordOnHold,
  reconcilePrimaryRecord,
  releasePrimaryRecordHold,
  reversePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type AmendPrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type PlacePrimaryRecordOnHoldInput,
  type ReconcilePrimaryRecordInput,
  type ReleasePrimaryRecordHoldInput,
  type ReversePrimaryRecordInput
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
  },
  {
    "id": "crm.leads.hold",
    "label": "Place Record On Hold",
    "phase": "hold",
    "methodName": "placeRecordOnHold"
  },
  {
    "id": "crm.leads.release",
    "label": "Release Record Hold",
    "phase": "release",
    "methodName": "releaseRecordHold"
  },
  {
    "id": "crm.leads.amend",
    "label": "Amend Record",
    "phase": "amend",
    "methodName": "amendRecord"
  },
  {
    "id": "crm.leads.reverse",
    "label": "Reverse Record",
    "phase": "reverse",
    "methodName": "reverseRecord"
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

export async function placeRecordOnHold(input: PlacePrimaryRecordOnHoldInput) {
  return placePrimaryRecordOnHold(input);
}

export async function releaseRecordHold(input: ReleasePrimaryRecordHoldInput) {
  return releasePrimaryRecordHold(input);
}

export async function amendRecord(input: AmendPrimaryRecordInput) {
  return amendPrimaryRecord(input);
}

export async function reverseRecord(input: ReversePrimaryRecordInput) {
  return reversePrimaryRecord(input);
}
