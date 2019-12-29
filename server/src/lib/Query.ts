import { IQuery } from './IQuery'
import { QueryResult, Predicate } from './Types'

export class Query<Model> implements IQuery<Model> {
  private collection: Model[]

  constructor (collection: Model[]) {
    this.collection = collection
  }

  All (): QueryResult<Model[]> {
    return Promise.resolve<Model[]>(this.collection)
  }

  First (predicate: Predicate<Model>): QueryResult<Model> {
    const result = this.collection.find(predicate)
    if (!result) {
      return Promise.reject<Model>(new Error('Element not found'))
    }
    return Promise.resolve<Model>(result)
  }

  Where (predicate: Predicate<Model>): IQuery<Model> {
    const result = this.collection.filter(predicate)
    return new Query<Model>(result)
  }

  Values (): QueryResult<Model[]> {
    return Promise.resolve<Model[]>(this.collection)
  }
}
