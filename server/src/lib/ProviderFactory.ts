import categoriesData from '../../data/categories.json'
import reviewsData from '../../data/reviews.json'
import themesData from '../../data/themes.json'
import { IDataProvider } from './IDataProvider'
import { Model } from '../Models.js'
import { FileProvider } from './FileProvider.js'

export class ProviderFactory {
  constructor(protected useFilesystem: boolean) {}

  create<ModelType extends Model>(typeName: string): IDataProvider<ModelType> {
    return this.createFileProvider(typeName)
  }

  private createFileProvider<ModelType extends Model>(typeName: string): IDataProvider<ModelType> {
    let collection: ModelType[]

    if (typeName == 'Category') {
      collection = categoriesData as unknown as ModelType[]
    }
    if (typeName == 'Reviews') {
      collection = reviewsData as unknown as ModelType[]
    }
    else {
      collection = themesData as unknown as ModelType[]
    }

    return new FileProvider<ModelType>(collection)
  }
}
