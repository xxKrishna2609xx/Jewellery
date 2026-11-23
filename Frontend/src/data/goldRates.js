// Live Gold & Silver Market Rates in India (INR)
export const LIVE_RATES = {
  lastUpdated: 'Today at 02:30 PM IST',
  city: 'Mumbai / Delhi-NCR',
  rates: {
    '24K': {
      purity: '99.9% Pure Gold',
      hallmark: '999',
      ratePerGram: 7850,
      previousRate: 7815,
      change: +35,
      changePercent: '+0.45%',
      isUp: true,
      description: 'Investment grade pure gold'
    },
    '22K': {
      purity: '91.6% Standard Gold',
      hallmark: '916 BIS',
      ratePerGram: 7210,
      previousRate: 7178,
      change: +32,
      changePercent: '+0.44%',
      isUp: true,
      description: 'Traditional & Bridal Fine Jewellery'
    },
    '18K': {
      purity: '75.0% Fine Gold',
      hallmark: '750 BIS',
      ratePerGram: 5910,
      previousRate: 5884,
      change: +26,
      changePercent: '+0.44%',
      isUp: true,
      description: 'Contemporary & Diamond Setting Jewellery'
    },
    '14K': {
      purity: '58.5% Everyday Gold',
      hallmark: '585 BIS',
      ratePerGram: 4630,
      previousRate: 4610,
      change: +20,
      changePercent: '+0.43%',
      isUp: true,
      description: 'Daily Minimalist & Workwear'
    },
    'Silver': {
      purity: '99.9% Fine Silver',
      hallmark: '999',
      ratePerGram: 96,
      previousRate: 96.5,
      change: -0.5,
      changePercent: '-0.52%',
      isUp: false,
      description: 'Sterling & Pure Silver'
    }
  },
  // 7-day trend for 22K Gold
  trend7Days: [
    { day: 'Mon', rate: 7140 },
    { day: 'Tue', rate: 7165 },
    { day: 'Wed', rate: 7180 },
    { day: 'Thu', rate: 7155 },
    { day: 'Fri', rate: 7178 },
    { day: 'Sat', rate: 7190 },
    { day: 'Sun', rate: 7210 },
  ]
};

// Transparency Price Calculator Formula (Right Gold's Bill Yourself concept elevated)
export function calculateJewelleryPrice({
  netGoldWeight,
  purity = '22K',
  makingChargeRate = 12, // percentage of gold value or fixed
  gemstoneValue = 0,
  discountPercent = 0
}) {
  const goldRate = LIVE_RATES.rates[purity]?.ratePerGram || 7210;
  const rawGoldValue = Math.round(netGoldWeight * goldRate);
  
  // Making charges can be percentage
  const makingCharges = Math.round(rawGoldValue * (makingChargeRate / 100));
  
  // Discount applied on making charges (industry standard in India)
  const discountAmount = Math.round(makingCharges * (discountPercent / 100));
  const finalMakingCharges = Math.max(0, makingCharges - discountAmount);
  
  // Subtotal before tax
  const subtotal = rawGoldValue + finalMakingCharges + gemstoneValue;
  
  // 3% Indian GST on Gold Jewellery
  const gst = Math.round(subtotal * 0.03);
  
  const total = subtotal + gst;

  return {
    goldRate,
    netGoldWeight,
    rawGoldValue,
    makingCharges,
    discountAmount,
    finalMakingCharges,
    gemstoneValue,
    subtotal,
    gst,
    total
  };
}

// Indian Rupee Currency Formatter
export function formatINR(number) {
  if (number === undefined || number === null || isNaN(number)) return '₹0';
  return '₹' + Number(number).toLocaleString('en-IN');
}
