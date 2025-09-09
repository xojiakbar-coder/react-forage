export declare namespace Storage {
  export interface StorageMethods {
    get: (key: string) => void;
    set: (key: string, value: any) => void;
    remove: (key: string) => void;
  }

  export interface Storage {
    local: StorageMethods;
    session: StorageMethods;
  }
}
