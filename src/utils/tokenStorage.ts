const tokens: Map<string, string> = new Map();

export function getToken(key: string): string {
  return tokens.get(key) || '';
}

export function setToken(key: string, token: string) {
  tokens.set(key, token);
}

export function clearAllTokens() {
  tokens.clear();
}
