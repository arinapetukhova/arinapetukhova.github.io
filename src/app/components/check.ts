export function Check(resp: Response): boolean {
  if (!resp.ok) {
    throw new Error('Network response was not ok')
  }
  return true
}
