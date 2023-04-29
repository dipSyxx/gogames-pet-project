export type PlansDataProps = {
  id: number
  title: string
  cost: number
  services: string[]
}

export const PlansData: PlansDataProps[] = [
  {
    id: 1,
    title: 'Basic',
    cost: 50.0,
    services: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'],
  },

  {
    id: 2,
    title: 'Standart',
    cost: 95.0,
    services: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'],
  },

  {
    id: 3,
    title: 'Premium',
    cost: 120.0,
    services: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'],
  },
]
