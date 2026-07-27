export interface Ticket {
  request: string;
  id: string;
  title: string;
  text: string;
  status: 'open' | 'closed';
}