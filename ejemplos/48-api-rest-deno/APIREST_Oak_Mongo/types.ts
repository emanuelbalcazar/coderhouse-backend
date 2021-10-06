export interface Quote {
  _id: { $oid: string };
  quote: string;
  quoteID: string;
  author: string;
}