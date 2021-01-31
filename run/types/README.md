# Type Declarations for JXA

Deno-friendly type declarations for JXA ported from [@jxa/types](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/types) and [@jxa/global-type](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/global-type). 

All the app-specific type declarations are from [@jxa/types/src/core](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/types/src/core).

## Contents
- [Type Declarations for JXA](#type-declarations-for-jxa)
  - [Contents](#contents)
  - [Basic Usage](#basic-usage)
  - [App-specific declarations](#app-specific-declarations)

## Basic Usage

```ts
// script.ts
import { run } from "https://deno.land/x/jxa_run/mod.ts";
import type {} from "https://deno.land/x/jxa_run/global.d.ts";

const result = await run(
  () => 
  Application("System Events").desktopFolder().properties().name,
);
console.log(result);
```

```shell
$ deno run --allow-run script.ts
Desktop
```

If we did not have the line importing `global.d.ts`, type checking would fail:
```shell
$ deno run --allow-run script.ts
error: TS2304 [ERROR]: Cannot find name 'Application'.
  () => Application("System Events").desktopFolder().properties().name,
```

## App-specific declarations

`global.d.ts` only includes declarations for system apps. To use JXA Run with non-system apps, you can generate type declarations for specific applications with [@jxa/sdef-to-dts](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/sdef-to-dts). Here's an example using `GoogleChrome.d.ts`:

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

Then `deno run --allow-run script.ts` will output the title of your active tab. 

