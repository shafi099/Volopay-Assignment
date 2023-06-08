export const mockApiResponse = {
  data: [
    {
      name: 'Mixmax',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: {
        value: 100,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 1000,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '9 Feb',
      limit: 100,
      status: 'active',
    },
    {
      name: 'Quickbooks',
      budget_name: 'Software subscription',
      owner_id: 2,
      spent: {
        value: 50,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 250,
        currency: 'SGD',
      },
      card_type: 'subscription',
      expiry: '31 March',
      limit: 10,
      status: 'active',
    },
    {
      name: 'Netflix',
      budget_name: 'Entertainment',
      owner_id: 1,
      spent: {
        value: 20,
        currency: 'USD',
      },
      available_to_spend: {
        value: 50,
        currency: 'USD',
      },
      card_type: 'subscription',
      expiry: 'N/A',
      limit: 50,
      status: 'active',
    },
    {
      name: 'Amazon Prime',
      budget_name: 'Shopping',
      owner_id: 2,
      spent: {
        value: 40,
        currency: 'USD',
      },
      available_to_spend: {
        value: 60,
        currency: 'USD',
      },
      card_type: 'subscription',
      expiry: 'N/A',
      limit: 100,
      status: 'active',
    },
    {
      name: 'Spotify',
      budget_name: 'Entertainment',
      owner_id: 1,
      spent: {
        value: 15,
        currency: 'USD',
      },
      available_to_spend: {
        value: 35,
        currency: 'USD',
      },
      card_type: 'subscription',
      expiry: 'N/A',
      limit: 40,
      status: 'active',
    },
    {
      name: 'Apple Music',
      budget_name: 'Entertainment',
      owner_id: 2,
      spent: {
        value: 25,
        currency: 'USD',
      },
      available_to_spend: {
        value: 75,
        currency: 'USD',
      },
      card_type: 'subscription',
      expiry: 'N/A',
      limit: 80,
      status: 'active',
    },
    {
      name: 'HBO',
      budget_name: 'Entertainment',
      owner_id: 2,
      spent: {
        value: 25,
        currency: 'USD',
      },
      available_to_spend: {
        value: 75,
        currency: 'USD',
      },
      card_type: 'burner',
      expiry: '12 Apr',
      limit: 80,
      status: 'Inactive',
    },
    {
      name: 'Zee TV',
      budget_name: 'Entertainment',
      owner_id: 2,
      spent: {
        value: 25,
        currency: 'USD',
      },
      available_to_spend: {
        value: 75,
        currency: 'USD',
      },
      card_type: 'burner',
      expiry: '28 Jun',
      limit: 80,
      status: 'active',
    },
  ],
  page: 1,
  per_page: 10,
  total: 100,
};
