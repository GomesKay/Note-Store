type CategoryNotebook = "basicos" | "gamer" | "pro"

export interface Notebook {
  id: number
  title: string
  image: string
  mark: string
  score: number
  numberOfReviews: number
  price: number
  previousPrice?: number
  category: CategoryNotebook
}
