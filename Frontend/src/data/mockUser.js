// Mock Initial User & Order Data for Aura Jewels
export const DEFAULT_USER = {
  id: 'usr_aura_101',
  name: 'Aditi Sharma',
  email: 'aditi.sharma@example.com',
  phone: '+91 98101 23456',
  tier: 'Sovereign Patron',
  points: 4850,
  joinedDate: 'Member since Oct 2023',
  savedAddresses: [
    {
      id: 'addr_1',
      title: 'Home (Primary)',
      recipient: 'Aditi Sharma',
      phone: '+91 98101 23456',
      addressLine: 'B-402, Imperial Heights, Ring Road, South Extension Part 2',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110049',
      isDefault: true
    },
    {
      id: 'addr_2',
      title: 'Family Residence',
      recipient: 'R. K. Sharma',
      phone: '+91 98110 98765',
      addressLine: 'Villa 14, Silver Oak Estates, Golf Course Road',
      city: 'Gurugram',
      state: 'Haryana',
      pincode: '122002',
      isDefault: false
    }
  ],
  initialOrders: [
    {
      id: 'AURA-841920',
      date: '20 Nov 2026, 03:45 PM',
      status: 'Out for Armoured Delivery',
      statusCode: 3, // 0: Placed, 1: Hallmarked, 2: Vault Sealed, 3: Out for Delivery, 4: Delivered
      statusDescription: 'Your jewel is secured in an armored vault vehicle with armed escorts.',
      courier: 'Sequel Logistics Armoured Transit',
      trackingNumber: 'SEQL-IN-8921448',
      estimatedDelivery: 'Expected Today by 6:00 PM',
      totalAmount: 98500,
      paymentMethod: 'UPI (Google Pay)',
      huidNumber: 'HUID: AJ-916-ND8471',
      shippingAddress: 'B-402, Imperial Heights, South Extension Part 2, New Delhi - 110049',
      items: [
        {
          id: 'aura-rg-01',
          name: 'Celestial Crown Solitaire Diamond Ring',
          subtitle: '1.20 Ct Round Brilliant Solitaire',
          purity: '18K Gold',
          color: 'Yellow Gold',
          size: '14 (Standard)',
          weight: '4.85g',
          price: 98500,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop'
        }
      ]
    },
    {
      id: 'AURA-712093',
      date: '12 Oct 2026, 11:20 AM',
      status: 'Delivered & Verified',
      statusCode: 4,
      statusDescription: 'Package handed over with OTP verification. Hallmarking certificate included in box.',
      courier: 'BVC Security Express',
      trackingNumber: 'BVC-DEL-4410291',
      estimatedDelivery: 'Delivered on 14 Oct 2026',
      totalAmount: 158200,
      paymentMethod: 'Credit Card (HDFC Regalia)',
      huidNumber: 'HUID: AJ-916-MH3019',
      shippingAddress: 'B-402, Imperial Heights, South Extension Part 2, New Delhi - 110049',
      items: [
        {
          id: 'aura-er-03',
          name: 'Kashmiri Jhumka with Emerald Florets',
          subtitle: 'Classic Tiered Jhumka with Natural Emeralds',
          purity: '22K Gold',
          color: 'Yellow Gold',
          weight: '18.40g',
          price: 158200,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop'
        }
      ]
    }
  ]
};

// Tracking Step Definitions
export const TRACKING_STEPS = [
  { step: 0, label: 'Order Confirmed', desc: 'Payment verified & escrow secured' },
  { step: 1, label: 'BIS Hallmarking', desc: 'Laser HUID inscribed at certified center' },
  { step: 2, label: 'Tamper-Proof Vault Packing', desc: 'Sealed in velvet luxury case & security box' },
  { step: 3, label: 'Armoured Transit', desc: 'Sequel / BVC armed courier dispatched' },
  { step: 4, label: 'Delivered to Doorstep', desc: 'Inspected & handed over via secret OTP' },
];
