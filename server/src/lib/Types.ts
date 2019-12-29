export type Predicate<Model> = (model: Model) => boolean
export type QueryResult<Model> = Promise<Model>
