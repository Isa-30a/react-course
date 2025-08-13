import { defineWorkspace } from "vitest/config.js";

//its for monerepos. if you have 7 packages in one repo you can define different vitest wworkspaces for each one of them.

export default defineWorkspace([
  {
    extends: ".vite.config.js",
    test: {
      include: ["**/*.node.test.{js,jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
    },
  },
  {
    extends: ".vite.config.js",
    test: {
      //things that get run before your test get run
      setupFiles: ["vitest-browser-react"],
      include: ["**/*.browser.test.{js,jsx}"],
      //just give you a label
      name: "browser",
      browser: {
        provider: "playwright",
        enabled: true,
        //name the browser you would like to test
        name: "firefox",
      },
    },
  },
]);
