type Listener<T = any> = (payload: T) => void;

class EventEmitter<Events extends Record<string, any>> {
  private listeners: { [K in keyof Events]?: Listener<Events[K]>[] } = {};

  on<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(listener);
  }

  off<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event]!.filter((l) => l !== listener);
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    if (!this.listeners[event]) return;
    this.listeners[event]!.forEach((listener) => listener(payload));
  }
}

// === Пример использования ===
export interface MyEvents {
  [key: `rotate_${string}`]: number;
}

export const emitter = new EventEmitter<MyEvents>();
