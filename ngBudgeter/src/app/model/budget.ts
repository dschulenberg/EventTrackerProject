export class Budget {
  id: number;
  category: string;
  description: string;
  amount: number;
  variance: boolean;

  constructor(
    id: number = 0,
    category: string = '',
    description: string = '',
    amount: number = 0,
    variance: boolean = false
  ) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.amount = amount;
    this.variance = variance;
  }
}
