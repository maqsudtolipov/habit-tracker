export const logError = (label: string, error: unknown) => {
  const tag = `🔴 [${label}]`;
  if (error instanceof Error) {
    console.error(`${tag} 💥 ${error.message}\n📌 Stack:`, error.stack);
  } else {
    console.error(`${tag} 💥`, error);
  }
};
