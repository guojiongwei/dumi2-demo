/**
 * 延时
 *
 * @param duration 时长
 * @returns Promise
 * @example
 * ```js
 * sleep(3000)
 * ```
 */
export default function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
