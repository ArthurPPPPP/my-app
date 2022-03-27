export async function fetchUsers(url: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: "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",
    },
  });
  const data = await response.json();
  return data;
}
