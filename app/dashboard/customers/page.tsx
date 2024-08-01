import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const customers = await fetchFilteredCustomers(searchParams?.query || '');

  return (
    <div className="w-full">
      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
