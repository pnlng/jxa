# JXA

Deno modules for running JavaScript for Automation (JXA), mostly ported from Node packages by [JXA-userland/JXA](https://github.com/JXA-userland/JXA). 


## Run JXA in Deno

```js
// script.js
import { run } from "https://deno.land/x/jxa_run/mod.ts"

const result = await run((name, emoji) =>
  `Hello ${name} ${emoji}!`, "Deno", "🦕");
console.log(result)
```

```shell
$ deno run --allow-run script.js
Hello Deno 🦕!
```

See [run/](./run/) for detailed documentation. 

## TypeScript Support

```ts
// script.ts
import { run } from "https://deno.land/x/jxa_run/mod.ts";
import type {} from "https://deno.land/x/jxa_run/global.d.ts";
// Generated with @jxa/sdef-to-dts
import type { GoogleChrome } from "https://raw.githubusercontent.com/JXA-userland/JXA/master/packages/%40jxa/types/test/fixtures/GoogleChrome.d.ts";

const result = await run(
  () => {
    const chrome = Application<GoogleChrome>("Google Chrome");
    const windows: GoogleChrome.Window[] = chrome.windows();
    const activeTab: GoogleChrome.Tab = windows[0].activeTab();
    return activeTab.title();
  },
);
console.log(result);

```

`deno run --allow-run script.ts` will output the title of your active tab in Chrome. 

See [run/types/](./run/types/) for more information about TypeScript support. 