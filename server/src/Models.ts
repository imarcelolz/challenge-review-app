export enum Sentiment {
  Negative = -1,
  Neutral = 0,
  Positive = 1
}

export interface Model {
  id: number
}

export interface Review extends Model {
  comment: string
  created_at: string
  themes: Array<{ theme_id: number, sentiment: Sentiment }>
}

export interface Category extends Model {
  name: string
}

export interface Theme extends Model {
  category_id: number
  name: string
}
