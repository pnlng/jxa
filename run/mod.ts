export const runJXACode = <R>(jxaCode: string): Promise<R> => {
  return runInOsascript(jxaCode, []);
};

export function run<R>(
  jxaCodeFunction: () => R,
): Promise<R>;

export function run<R>(
  jxaCodeFunction: (...args: any[]) => void,
  ...args: any[]
): Promise<R>;

export function run<R, A1>(
  jxaCodeFunction: (a1: A1) => R,
  a1: A1,
): Promise<R>;

export function run<R, A1, A2>(
  jxaCodeFunction: (a1: A1, a2: A2) => void,
  a1: A1,
  a2: A2,
): Promise<R>;

export function run<R, A1, A2, A3>(
  jxaCodeFunction: (a1: A1, a2: A2, a3: A3) => void,
  a1: A1,
  a2: A2,
  a3: A3,
): Promise<R>;

export function run<R, A1, A2, A3, A4>(
  jxaCodeFunction: (a1: A1, a2: A2, a3: A3, a4: A4) => void,
  a1: A1,
  a2: A2,
  a3: A3,
  a4: A4,
): Promise<R>;

export function run<R, A1, A2, A3, A4, A5>(
  jxaCodeFunction: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => void,
  a1: A1,
  a2: A2,
  a3: A3,
  a4: A4,
  a5: A5,
): Promise<R>;

export function run<R, A1, A2, A3, A4, A5, A6>(
  jxaCodeFunction: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => void,
  a1: A1,
  a2: A2,
  a3: A3,
  a4: A4,
  a5: A5,
  a6: A6,
): Promise<R>;

export function run<R, A1, A2, A3, A4, A5, A6, A7>(
  jxaCodeFunction: (
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
  ) => void,
  a1: A1,
  a2: A2,
  a3: A3,
  a4: A4,
  a5: A5,
  a6: A6,
  a7: A7,
): Promise<R>;

export function run<R, A1, A2, A3, A4, A5, A6, A7, A8>(
  jxaCodeFunction: (
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
    a8: A8,
  ) => void,
  a1: A1,
  a2: A2,
  a3: A3,
  a4: A4,
  a5: A5,
  a6: A6,
  a7: A7,
  a8: A8,
): Promise<R>;

export function run<R, A1, A2, A3, A4, A5, A6, A7, A8, A9>(
  jxaCodeFunction: (
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
    a8: A8,
    a9: A9,
  ) => void,
  a1: A1,
  a2: A2,
  a3: A3,
  a4: A4,
  a5: A5,
  a6: A6,
  a7: A7,
  a8: A8,
  a9: A9,
): Promise<R>;

export function run(jxaCodeFunction: (...args: any[]) => void, ...args: any[]) {
  const code = `
  ObjC.import('stdlib');
  const args = JSON.parse($.getenv('OSA_ARGS'));
  const fn   = (${jxaCodeFunction.toString()});
  const out  = fn.apply(null, args);
  JSON.stringify({ result: out });
  `;
  return runInOsascript(code, args);
}

const runInOsascript = async (code: string, args: any[]) => {
  const cmd = Deno.run({
    cmd: ["osascript", "-l", "JavaScript"],
    env: { OSA_ARGS: JSON.stringify(args) },
    stdin: "piped",
    stdout: "piped",
    stderr: "piped",
  });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  await cmd.stdin.write(encoder.encode(code));
  cmd.stdin.close();

  const error = await cmd.stderrOutput();
  const output = await cmd.output();
  cmd.close();

  if (error.length) handleError(decoder.decode(error));
  const outStr = decoder.decode(output);
  if (!output.length) return undefined;
  try {
    const result = JSON.parse(outStr.trim()).result;
    return result;
  } catch {
    return outStr.trim();
  }
};

const handleError = (OsascriptMessage: string) => {
  const errorGroups = OsascriptMessage.match(
    /execution\serror:\sError:\s(?<type>\w+):\s(?<message>.+)\(-\d+\)/,
  )?.groups;
  const errorTypeString = errorGroups?.type ?? "";
  const errorMessage = errorGroups?.message?.trim() ??
    "An error occured";
  const errorMapping: Record<
    string,
    ErrorConstructor | AggregateErrorConstructor
  > = {
    "Error": Error,
    "AggregateError": AggregateError,
    "EvalError": EvalError,
    "RangeError": RangeError,
    "ReferenceError": ReferenceError,
    "SyntaxError": SyntaxError,
    "TypeError": TypeError,
    "URIError": URIError,
  };
  const errorType = errorMapping?.[errorTypeString] ?? Error;
  throw errorType(errorMessage);
};
