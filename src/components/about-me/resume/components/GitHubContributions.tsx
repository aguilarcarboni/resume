import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total: {
    [year: number]: number;
    lastYear?: number;
  };
  contributions: Contribution[];
}

const getLevelColor = (level: number) => {
  switch (level) {
    case 0:
      return 'bg-zinc-100 dark:bg-zinc-900';
    case 1:
      return 'bg-emerald-200 dark:bg-emerald-900/30';
    case 2:
      return 'bg-emerald-300 dark:bg-emerald-800/50';
    case 3:
      return 'bg-emerald-400 dark:bg-emerald-700';
    case 4:
      return 'bg-emerald-500 dark:bg-emerald-600';
    default:
      return 'bg-zinc-100 dark:bg-zinc-900';
  }
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<ContributionsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredDay, setHoveredDay] = useState<Contribution | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/aguilarcarboni?y=last');
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        const data = await response.json();
        setContributions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">GitHub Contributions</h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">GitHub Contributions</h3>
        </CardHeader>
        <CardContent>
          <div className="text-red-500">Error: {error}</div>
        </CardContent>
      </Card>
    );
  }

  const totalContributions = contributions?.total?.lastYear || 0;
  const contributionDays = contributions?.contributions || [];

  // Create a 52x7 grid from the contributions data
  const weeks: Contribution[][] = [];
  let currentWeek: Contribution[] = [];

  contributionDays.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // Add remaining days to the last week if any
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return (
    <Card>
      <CardHeader>
        <div className='flex gap-2'>
          <Code className='text-primary'/>
          <CardTitle>GitHub Contributions</CardTitle>
        </div>
        <CardDescription>Check out my work this year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-bold">
            {totalContributions.toLocaleString()}
            <span className="text-sm font-normal text-gray-500 ml-2">
              contributions in the last year
            </span>
          </div>

          <div className="relative">
            {hoveredDay && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white px-3 py-2 rounded-md text-sm z-10">
                {hoveredDay.count} contributions on {formatDate(hoveredDay.date)}
              </div>
            )}
            <div className="grid grid-flow-col gap-[3px] auto-cols-fr overflow-x-auto pb-4">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={cn(
                        'w-[10px] h-[10px] rounded-sm transition-colors duration-200',
                        getLevelColor(day.level)
                      )}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GitHubContributions; 