# Type Declarations for JXA

Deno-friendly type declarations for JXA ported from [@jxa/types](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/types) and [@jxa/global-type](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/global-type). 

All the app-specific type declarations are from [@jxa/types/src/core](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/types/src/core).

## Usage

```ts
// script.ts
import { run } from "https://deno.land/x/jxa_run/mod.ts";
import type {} from "https://deno.land/x/jxa_run/global.d.ts";

const result = await run(
  () => {
    return Application("System Events").desktopFolder().properties().name;
  },
);
console.log(result);
```

```shell
$ deno run --allow-run script.ts
Desktop
```

You can generate type declarations for specific applications with [@jxa/sdef-to-dts](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/sdef-to-dts). Here's an example using `GoogleChrome.d.ts`:

```ts
// script.ts
import { run } from "https://deno.land/x/jxa_run/mod.ts";
import type {} from "https://deno.land/x/jxa_run/global.d.ts";
import type { GoogleChrome } from "https://raw.githubusercontent.com/JXA-userland/JXA/master/packages/%40jxa/types/test/fixtures/GoogleChrome.d.ts";

const result = await run(
  () => {
    const chrome = Application<GoogleChrome>("Google Chrome");
    const windows: GoogleChrome.Window[] = chrome.windows();
    windows.map((window) => {
      const activeTab: GoogleChrome.Tab = window.activeTab();
      return activeTab.title();
    });
  },
);
console.log(result);
```

Then `deno run --allow-run script.ts` will output a list of the title of the active tab of each of your windows.

