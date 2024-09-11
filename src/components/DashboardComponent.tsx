/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/dashboard.tsx
import React, { useEffect, useState } from 'react';
import DashboardHeader from 'components/ui/DashboardHeader';
import DashboardSidebar from './ui/DashboardSidebar';
import { generateMockAnalyticsData } from '../utils/generateMockData';
import LineChartWidget from '../components/ui/LineChartWidget';
import SingletonCard from 'components/ui/SingletonCard';
import BarChartWidget from 'components/ui/BarChartWidget';

export default function DashboardComponent() {
  const [analyticsData, setAnalyticsData] = useState<any>(null);

  useEffect(() => {
    const data = generateMockAnalyticsData();
    setAnalyticsData(data);
  }, []);

  if (!analyticsData) {
    // to check if the data loading screen is working
    return <div className='bg-red-900'>Loading...</div>;
  }

  const ageGroupData = analyticsData.demographics.ageGroups.map((group: { ageRange: string, percentage: number }) => ({
    name: group.ageRange,
    value: group.percentage,
  }));

  const genderData = analyticsData.demographics.genders.map((gender: { gender: string, percentage: number }) => ({
    name: gender.gender,
    value: gender.percentage,
  }));

  const countryData = analyticsData.demographics.countries.map((country: { country: string, percentage: number }) => ({
    name: country.country,
    value: country.percentage,
  }));

  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-48">
        <DashboardHeader />
        <div className="p-4">
          <h2 className="text-4xl font-medium mb-4">Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SingletonCard heading="Page Views" value={analyticsData.pageViews} />
            <SingletonCard heading="Unique Visitors" value={analyticsData.uniqueVisitors} />
            <SingletonCard heading="Bounce Rate" value={analyticsData.bounceRate.toFixed(2)} />
            <SingletonCard heading="Session Duration" value={analyticsData.sessionDuration.toFixed(2)} unit="minutes" />
            <BarChartWidget data={ageGroupData} title="Age Demographics" />
            <BarChartWidget data={genderData} title="Gender Demographics" />
            <BarChartWidget data={countryData} title="Country Demographics" />
          </div>
        </div>
        <div className="p-4">
          <LineChartWidget data={analyticsData.dailyVisits} title="Daily Website Visits" />
        </div>
      </div>
    </div>
  );
}
