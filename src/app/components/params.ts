export class Params {
  atr: URLSearchParams = new URLSearchParams()
  append(emailWord: string, emailUni: string): void {
    return this.atr.append(emailWord, emailUni)
  }
  toString(): string {
    return this.atr.toString()
  }
}
