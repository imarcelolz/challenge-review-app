import { IQuery } from './IQuery'
import { Model } from '../Models';

export interface IDataProvider<ModelType extends Model> {
  Query (): IQuery<ModelType>
  Create (model: ModelType): ModelType
  Update (model: ModelType): ModelType
  Destroy (id: number): void
}
