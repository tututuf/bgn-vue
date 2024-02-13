export function debounce(fn: Function, delay: number = 500) {
  let timeout: number | null = null
  return function (this: Function, event: any) {
    if (timeout != null) clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, [event]), delay);
  }
}

export function throttle(func: Function, delay: number = 500) {
  let lastTime = 0;
  return function (this: Function, ...args: any[]) {
    const currentTime = Date.now();
    if (currentTime - lastTime >= delay) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  }
}