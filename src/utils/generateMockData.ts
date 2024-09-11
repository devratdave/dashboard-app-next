import { faker } from '@faker-js/faker';
// I have added some comments to make you understand how I generated the mock data

// Helper function to generate random daily data
function generateDailyVisits(days: number) {
  const dailyVisits = [];
  const today = new Date();
  for (let i = 0; i < days; i++) {
    const date = new Date(today); // Create a new date object for today
    date.setDate(today.getDate() - i); // Subtract `i` days from today's date
    
    dailyVisits.push({
      date: date.toISOString().split('T')[0], // Get only the date part
      visits: faker.number.int({ min: 100, max: 500 }), // Random number of visits per day
    });
  }
  return dailyVisits.reverse(); // Reverse the array to get the most recent date last
}

export function generateMockAnalyticsData() {
  const uniqueVisitors = faker.number.int({ min: 500, max: 5000 });
  const pageViews = faker.number.int({ min: uniqueVisitors, max: uniqueVisitors + 5000 });

  const countryDemographics = Array.from({ length: 5 }, () => ({
    country: faker.location.country(),
    percentage: faker.number.float({ min: 5, max: 30 }),
  }));

  const dailyVisits = generateDailyVisits(30); // Generate data for the last 30 days

  return {
    pageViews,
    uniqueVisitors,
    bounceRate: faker.number.float({ min: 20, max: 70 }),
    sessionDuration: faker.number.float({ min: 1, max: 10 }),
    demographics: {
      ageGroups: [
        { ageRange: '18-24', percentage: faker.number.float({ min: 10, max: 40 }) },
        { ageRange: '25-34', percentage: faker.number.float({ min: 20, max: 50 }) },
        { ageRange: '35-44', percentage: faker.number.float({ min: 10, max: 30 }) },
        { ageRange: '45-54', percentage: faker.number.float({ min: 5, max: 20 }) },
      ],
      genders: [
        { gender: 'Male', percentage: faker.number.float({ min: 40, max: 60 }) },
        { gender: 'Female', percentage: faker.number.float({ min: 40, max: 60 }) },
      ],
      countries: countryDemographics,
    },
    dailyVisits,
  };
}
