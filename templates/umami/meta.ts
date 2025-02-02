// Generated using "yarn build-templates"

export const meta = {
  name: "Umami",
  description:
    "Umami is an open source, privacy-focused alternative to Google Analytics. Umami lets you to gather the data you need while respecting the privacy of your users. Umami does not collect any personal information, does not use cookies, does not track users across websites, and is GDPR compliant. Best of all, you don't need to display an annoying cookie notice.",
  instructions: 'You can login with username "admin" and password "umami".',
  changeLog: [{ date: "2022-09-27", description: "first release" }],
  links: [
    { label: "Website", url: "https://umami.is/" },
    { label: "Github", url: "https://github.com/umami-software/umami" },
    { label: "Documentation", url: "https://umami.is/docs" },
  ],
  contributors: [{ name: "Andrei Canta", url: "https://github.com/deiucanta" }],
  schema: {
    type: "object",
    required: [
      "projectName",
      "domain",
      "appServiceName",
      "databaseServiceName",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      domain: { type: "string", title: "Domain" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "umami",
      },
      databaseServiceName: {
        type: "string",
        title: "Database Service Name",
        default: "umami-db",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type Domain = string;
export type AppServiceName = string;
export type DatabaseServiceName = string;

export interface Input {
  projectName: ProjectName;
  domain: Domain;
  appServiceName: AppServiceName;
  databaseServiceName: DatabaseServiceName;
}
