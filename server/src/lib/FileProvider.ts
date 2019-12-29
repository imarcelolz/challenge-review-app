import { Query } from './Query'
import { IDataProvider } from './IDataProvider'
import { IQuery } from './IQuery'
import { Model } from '../Models'

export class FileProvider<ModelType extends Model> implements IDataProvider<ModelType> {

  constructor(protected collection: ModelType[]) {}

  Query (): IQuery<ModelType> {
    return new Query(this.collection)
  }

  Create (model: ModelType): ModelType {
    model.id = FileProvider.nextId(this.collection)
    this.collection.push(model)

    return model
  }

  Update (model: ModelType): ModelType {
    const index = this.collection.findIndex(x => x.id == model.id)

    if (!index) {
      throw new Error(`I can't find one model with id: ${model.id}`)
    }

    this.collection[index] = model

    return model
  }

  Destroy (id: number): void {
    const index = this.collection.findIndex(x => x.id == id)

    if (!index) {
      throw new Error(`I can't find one model with id: ${id}`)
    }

    this.collection.splice(index, 1)
  }

  private static nextId(collection: Model[]): number {
    let id = 0;

    collection.forEach(model => {
      id < model.id && (id = model.id)
    })

    return id + 1
  }
}
