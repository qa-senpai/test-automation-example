/*
 * Патерн Фасад - легко навчитися, важко оволодіти
 * YOUTUBE https://youtu.be/ghb_miDDvU0
 */
export interface IElementOptions {
  timeout?: number;
  state?: "attached" | "visible" | "detached" | "hidden";
  forceClick?: boolean;
}
