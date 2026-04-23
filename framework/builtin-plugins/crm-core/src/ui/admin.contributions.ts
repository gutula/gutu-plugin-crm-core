import {
  defineAdminNav,
  defineCommand,
  definePage,
  defineWorkspace,
  type AdminContributionRegistry
} from "@platform/admin-contracts";

import { BusinessAdminPage } from "./admin/main.page";

export const adminContributions: Pick<AdminContributionRegistry, "workspaces" | "nav" | "pages" | "commands"> = {
  workspaces: [
    defineWorkspace({
      id: "crm",
      label: "CRM",
      icon: "network",
      description: "Pre-sales pipeline, forecasting, and commercial handoff readiness.",
      permission: "crm.leads.read",
      homePath: "/admin/business/crm",
      quickActions: ["crm-core.open.control-room"]
    })
  ],
  nav: [
    defineAdminNav({
      workspace: "crm",
      group: "control-room",
      items: [
        {
          id: "crm-core.overview",
          label: "Control Room",
          icon: "network",
          to: "/admin/business/crm",
          permission: "crm.leads.read"
        }
      ]
    })
  ],
  pages: [
    definePage({
      id: "crm-core.page",
      kind: "dashboard",
      route: "/admin/business/crm",
      label: "CRM Control Room",
      workspace: "crm",
      group: "control-room",
      permission: "crm.leads.read",
      component: BusinessAdminPage
    })
  ],
  commands: [
    defineCommand({
      id: "crm-core.open.control-room",
      label: "Open CRM Core",
      permission: "crm.leads.read",
      href: "/admin/business/crm",
      keywords: ["crm core","crm","business"]
    })
  ]
};
