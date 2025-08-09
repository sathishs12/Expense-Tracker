// Sample news data with 2-line descriptions
const newsData = [
  {
    id: 1,
    title: "India Launches New Space Mission",
    description:
      "ISRO successfully launches its latest lunar exploration mission. The mission aims to study the moon's surface and search for water resources.",
    url: "https://example.com/news1",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-09",
  },
  {
    id: 2,
    title: "Tech Giants Release AI Updates",
    description:
      "Major technology companies reveal their latest AI-powered tools. These updates promise faster processing speeds and better automation features.",
    url: "https://example.com/news2",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-08",
  },
  {
    id: 3,
    title: "Global Climate Summit Concludes",
    description:
      "World leaders agree on stricter measures to combat climate change. New policies focus on renewable energy adoption and carbon emission reduction.",
    url: "https://example.com/news3",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-07",
  },
  {
    id: 4,
    title: "Stock Market Hits Record High",
    description:
      "The Sensex and Nifty indexes surged to record levels today. Investor optimism was fueled by strong quarterly earnings and global market trends.",
    url: "https://example.com/news4",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-06",
  },
  {
    id: 5,
    title: "RBI Keeps Interest Rates Steady",
    description:
      "The Reserve Bank of India decided to maintain the current repo rate. The move aims to balance inflation control with economic growth.",
    url: "https://example.com/news5",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-05",
  },
  {
    id: 6,
    title: "Oil Prices Climb Amid Supply Concerns",
    description:
      "Global crude oil prices rose sharply this week. Analysts cite production cuts and rising demand as the key drivers of the surge.",
    url: "https://example.com/news6",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-04",
  },
  {
    id: 7,
    title: "Gold Prices Fall as Dollar Strengthens",
    description:
      "Gold prices dipped due to a stronger US dollar and higher bond yields. Investors are shifting focus toward riskier assets.",
    url: "https://example.com/news7",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-03",
  },
  {
    id: 8,
    title: "Electric Vehicle Sales Soar in India",
    description:
      "India witnessed a record rise in electric vehicle sales this year. Government incentives and rising fuel prices boosted the shift to EVs.",
    url: "https://example.com/news8",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-02",
  },
  {
    id: 9,
    title: "Startups Attract Record Investments",
    description:
      "Indian startups raised unprecedented funding in the last quarter. Fintech and edtech sectors led the investment boom.",
    url: "https://example.com/news9",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-08-01",
  },
  {
    id: 10,
    title: "IMF Upgrades India's Growth Forecast",
    description:
      "The International Monetary Fund has revised India's GDP growth forecast upward. The improvement is attributed to strong domestic demand.",
    url: "https://example.com/news10",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-31",
  },
  {
    id: 11,
    title: "Cryptocurrency Market Volatility Spikes",
    description:
      "Bitcoin and Ethereum prices swung wildly in the past week. Regulatory developments and investor sentiment drove the changes.",
    url: "https://example.com/news11",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-30",
  },
  {
    id: 12,
    title: "New Tax Policies Announced",
    description:
      "The government unveiled revised tax slabs for the upcoming fiscal year. The changes aim to simplify the tax process and boost compliance.",
    url: "https://example.com/news12",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-29",
  },
  {
    id: 13,
    title: "Real Estate Sector Shows Signs of Recovery",
    description:
      "Housing demand in major cities is on the rise again. Lower interest rates and flexible payment options attract buyers.",
    url: "https://example.com/news13",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-28",
  },
  {
    id: 14,
    title: "India's Forex Reserves Hit All-Time High",
    description:
      "The country's foreign exchange reserves crossed a historic mark. Strong export earnings and capital inflows contributed to the surge.",
    url: "https://example.com/news14",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-27",
  },
  {
    id: 15,
    title: "Tech Company Reports Record Profits",
    description:
      "One of India's largest tech firms posted its highest quarterly profits. Increased software exports and digital services fueled the growth.",
    url: "https://example.com/news15",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-26",
  },
  {
    id: 16,
    title: "Air Travel Demand Surges Post-Pandemic",
    description:
      "Airlines in India are witnessing a surge in passenger numbers. Tourism revival and festive season travel boost bookings.",
    url: "https://example.com/news16",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-25",
  },
  {
    id: 17,
    title: "Agriculture Sector Sees Higher Output",
    description:
      "Better monsoon rains have led to higher agricultural yields. Farmers are optimistic about crop prices this season.",
    url: "https://example.com/news17",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-24",
  },
  {
    id: 18,
    title: "Global Trade Tensions Ease",
    description:
      "Recent trade talks between major economies have reduced tensions. Markets responded positively to the improved diplomatic relations.",
    url: "https://example.com/news18",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-23",
  },
  {
    id: 19,
    title: "Indian Rupee Gains Against Dollar",
    description:
      "The rupee strengthened against the US dollar in today's trade. Foreign capital inflows and strong export numbers supported the currency.",
    url: "https://example.com/news19",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-22",
  },
  {
    id: 20,
    title: "Manufacturing Sector Records Growth",
    description:
      "India's manufacturing PMI rose to its highest in two years. Increased demand and improved supply chains drove the expansion.",
    url: "https://example.com/news20",
    imageUrl: "https://via.placeholder.com/300x200",
    publishedAt: "2025-07-21",
  },
];

export default newsData;
