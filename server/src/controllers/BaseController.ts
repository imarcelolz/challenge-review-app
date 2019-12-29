import { FastifyRequest } from 'fastify'
import { IDataProvider } from '../lib/IDataProvider'
import { Model } from '../Models';

export interface RequestParams {
  [key: string]: any
}

export interface ResourceResponse<ReturnType> {
  status: Number,
  data: ReturnType
}

export abstract class BaseController<ModelType extends Model> {
  protected readonly request: FastifyRequest;
  protected db: IDataProvider<ModelType>;

  get params (): RequestParams {
    return { ...this.request.params, ...this.request.query }
  }

  constructor (db: IDataProvider<ModelType>, request: FastifyRequest) {
    this.db = db
    this.request = request
  }

  async index (): Promise<any> {
    try {
      const result = await this.db.Query().All()

      return this.success(result)
    } catch (e) {
      return this.error(e)
    }
  }

  async create (): Promise<any>  {
    try {
      const result = await this.db.Create(this.attributes)

      return this.success(result)
    } catch (e) {
      return this.error(e)
    }
  }

  async update (): Promise<any>  {
    try {
      const result = await this.db.Update(this.attributes)

      return this.success(result)
    } catch (e) {
      return this.error(e)
    }
  }

  async destroy (): Promise<any>  {
    try {
      const result = await this.db.Destroy(this.params.id)

      return this.success(result)
    } catch (e) {
      return this.error(e)
    }
  }

  protected success<ReturnType>(payload: ReturnType): ResourceResponse<ReturnType> {
    return { status: 200, data: payload }
  }

  protected error<ReturnType>(payload: ReturnType): ResourceResponse<ReturnType> {
    return { status: 500, data: payload }
  }

  protected get attributes(): ModelType {
    return this.params[''] as ModelType
  }
}
