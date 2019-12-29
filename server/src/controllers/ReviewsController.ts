import { BaseController } from './BaseController'
import { Review } from '../Models'

export class ReviewsController extends BaseController<Review> {
  async index (): Promise<any> {
    try {
      const params = this.index_params
      let reviews = this.db.Filter()

      // if (params.category_id) {
      //   reviews = reviews.Where(x => x.category_id === params.category_id)
      // }

      // if (this.index_params.comment) {
      //   reviews = reviews.Where(x => x.comment === params.comment)
      // }

      const result = await reviews.Values()

      return this.success(result)
    } catch (e) {
      return this.error(e)
    }
  }

  index_params (): { category_id?: number, comment?: string } {
    return {
      category_id: this.params.category_id ? parseInt(this.params.category_id, 10) : undefined,
      comment: this.params.comment
    }
  }
}
