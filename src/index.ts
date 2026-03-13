export function getStartupMessage(now: Date = new Date()): string {
  return `[numi-kicks] service started at ${now.toISOString()}`;
}

function main(): void {
  console.log(getStartupMessage());
}

main();
