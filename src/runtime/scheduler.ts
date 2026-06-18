import type { RuntimeContext } from "./context";
import { tick } from "./interpreter";

export type Scheduler = {
  start(): void;
  stop(): void;
  running(): boolean;
};

export function createScheduler(context: RuntimeContext, onFrame: (context: RuntimeContext) => void): Scheduler {
  let animationFrame = 0;
  let active = false;
  let last = performance.now();

  const frame = (now: number) => {
    if (!active) return;

    const dt = (now - last) / 1000;
    last = now;
    tick(context, dt);
    onFrame(context);
    animationFrame = requestAnimationFrame(frame);
  };

  return {
    start() {
      if (active) return;
      active = true;
      last = performance.now();
      animationFrame = requestAnimationFrame(frame);
    },
    stop() {
      active = false;
      cancelAnimationFrame(animationFrame);
    },
    running() {
      return active;
    }
  };
}
