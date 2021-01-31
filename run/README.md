# jxa-run

Deno module for running JavaScript for Automation (JXA). Mostly a port of the Node package [@jxa/run](https://github.com/JXA-userland/JXA/tree/master/packages/%40jxa/run). 

## Contents
- [jxa-run](#jxa-run)
  - [Contents](#contents)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Importing](#importing)
  - [API](#api)
      - [run(jxaFunction, ...args)](#runjxafunction-args)
      - [runJXACode(jxaCode)](#runjxacodejxacode)
  - [Differences from `@jxa/run`](#differences-from-jxarun)
  - [Testing](#testing)

## Prerequisites

- macOS 10.10 or later
- [Deno](https://deno.land/#installation)

## Usage

```js
// script.js
import { run } from "https://deno.land/x/jxa-run/mod.ts"

const result = await run((name, emoji) =>
  `Hello ${name} ${emoji}!`, "Deno", "🦕");
console.log(result)
```

```shell
$ deno run --allow-run script.js
Hello Deno 🦕!
```

## Importing

From [deno.land/x](https://deno.land/x/jxa_run):

```ts
// Always import the latest release
import { run } from "https://deno.land/x/jxa_run/mod.ts"
// Import a specific version
import { run } from "https://deno.land/x/jxa_run@{tag}/mod.ts"
```

From [nest.land](https://nest.land/package/jxa-run):

```ts
import { run } from "https://x.nest.land/jxa-run@{tag}/mod.ts"
```

## API

#### run(jxaFunction, ...args)

Return a Promise giving the output of `jxaFunction` on `args`.

##### jxaFunction

Type: `(...args: any[]) => any`

##### ...args

Type: `any[]`

**Note:** `jxaFunction` does not have access to variables outside its scope. For example, running the code below will result in an error.

```js
const wolf = "🐺"
run(() => console.log(wolf))
// ReferenceError: Can't find variable: wolf
```
#### runJXACode(jxaCode)

##### jxaCode

Type: `string`

Example:

```js
const result = await runJXACode(
  `Application("System Events").currentUser().name()`
  );
console.log(result) 
// [username]
```

## Differences from `@jxa/run`

The main difference is in error handling. If there is an error in JXA execution, `@jxa/run` (the Node package) will log the error message to console without throwing any errors. On the other hand, `jxa-run` (this Deno module) will throw an Error. 

## Testing

Running `make` will perform the tests in `test.ts`. 