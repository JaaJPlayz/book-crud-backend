export class CreateBookDto {
  author: string;
  title: string;
  description: string;
  price: number;
  count: number;
  image?: string | undefined;
}
