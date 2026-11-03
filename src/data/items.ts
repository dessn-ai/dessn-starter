export type Item = { id: string; name: string; owner: string; status: 'Active' | 'Draft' | 'Archived'; updated: string }

// Sample data. Replace it with your own, or load it from your API.
export const items: Item[] = [
  { id: '1', name: 'Onboarding checklist', owner: 'Ava Chen', status: 'Active', updated: '2 hours ago' },
  { id: '2', name: 'Pricing experiment', owner: 'Leo Martin', status: 'Draft', updated: 'Yesterday' },
  { id: '3', name: 'Quarterly report', owner: 'Maya Patel', status: 'Active', updated: '3 days ago' },
  { id: '4', name: 'Customer interviews', owner: 'Sam Rivera', status: 'Archived', updated: 'Last week' },
  { id: '5', name: 'Launch plan', owner: 'Noah Kim', status: 'Draft', updated: 'Last week' },
]
