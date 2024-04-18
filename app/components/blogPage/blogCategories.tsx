'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';

export enum BlogPostCategory {
  ALL = 'All',
  SHAREPOINT = 'Sharepoint/Office 365',
  CONSULTING = 'Consulting',
  SQL = 'SQL Server Database',
  ANALYTICS = 'Analytics, B.I.',
  ETL = 'ETL',
}
export function BlogCategories() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-3/12 gap-2">
      <p className="text-xl font-bold">CATEGORIES:</p>
      {Object.values(BlogPostCategory).map((category, idx) => {
        return (
          <Link
            href={''}
            key={idx}
            className="text-xl hover:underline hover:font-bold"
          >
            <Button
              variant={'link'}
              key={idx}
              onClick={() => {
                router.push(`?category=${category}`);
              }}
              className="text-xl hover:underline hover:font-bold"
            >
              {category}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
