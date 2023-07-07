export type PlansDataProps = {
  id: number
  title: string
  cost: number
  services: string[]
  index: number
  isActive?: boolean
  onActivate?: () => void
}

export const PlansData: PlansDataProps[] = [
  {
    id: 1,
    title: 'Basic',
    cost: 50.0,
    services: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'],
    index: 1.3,
  },

  {
    id: 2,
    title: 'Standart',
    cost: 95.0,
    services: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'],
    index: 1.6,
  },

  {
    id: 3,
    title: 'Premium',
    cost: 120.0,
    services: ['10 users included', '2 GB of storage', 'Email support', 'Help center access', '10 users included'],
    index: 1.9,
  },
]
