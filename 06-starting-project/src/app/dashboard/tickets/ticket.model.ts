export interface Ticket {
  request: string;
  id: string;
  title: string;
  status: 'open' | 'closed';
}