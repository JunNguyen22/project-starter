import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

// Note: TypeScript module augmentation is not supported in plain JS.
// If needed, move this logic to a `.d.ts` file or handle it in your app code.

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
  ],
});
