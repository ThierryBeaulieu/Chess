export default class Cookie {
  private static CHARACTERS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  public static generateSessionId(size: number): String {
    let sessionId = '';

    for (let i = 0; i < size; i++) {
      sessionId += this.CHARACTERS.charAt(
        Math.floor(Math.random() * this.CHARACTERS.length),
      );
    }
    return sessionId;
  }
}
