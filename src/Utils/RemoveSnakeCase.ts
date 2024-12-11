export function validateJSON(obj: any) {
  return 'object' === typeof obj && '{' === JSON.stringify(obj)[0];
}

export function recursive(obj: any, lowerCase: boolean = false): any {
  if (!validateJSON(obj)) return obj;
  return Object.keys(obj).reduce(
    (pV, cV) => ({
      ...pV,
      [(lowerCase ? cV : cV.toLowerCase()).replace(/_[a-z]/gi, (x) => (x?.[1] || 'Unknown').toUpperCase())]: recursive(
        obj[cV]
      )
    }),
    {}
  );
}

export function RemoveSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/_[a-z]/gi, (x) => (x?.[1] || 'Unknown').toUpperCase());
}
