import { describe, expect, it } from "bun:test";

import {
  buildCrmCoreMigrationSql,
  buildCrmCoreRollbackSql,
  getCrmCoreLookupIndexName,
  getCrmCoreStatusIndexName
} from "../../src/postgres";

describe("crm-core postgres helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildCrmCoreMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS crm_core.primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS crm_core.secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS crm_core.exception_records");
    expect(sql).toContain(getCrmCoreLookupIndexName());
    expect(sql).toContain(getCrmCoreStatusIndexName());
  });

  it("rolls the schema back safely", () => {
    const sql = buildCrmCoreRollbackSql({ schemaName: "crm_core_preview", dropSchema: true }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS crm_core_preview.exception_records");
    expect(sql).toContain("DROP SCHEMA IF EXISTS crm_core_preview CASCADE");
  });
});
