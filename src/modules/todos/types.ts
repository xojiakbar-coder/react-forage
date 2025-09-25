export declare namespace IApi {
  export type Response = IQuery.Todos;

  export namespace Single {
    export type Response = {};
  }
}

export declare namespace IEntity {
  export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }
}

export declare namespace IQuery {
  export type Todos = IEntity.Todo[];
}
