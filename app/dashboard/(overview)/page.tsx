  import { Card } from '@/app/ui/dashboard/cards';
  import RevenueChart from '@/app/ui/dashboard/revenue-chart';
  import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
  import { lusitana, redhat } from '@/app/ui/fonts';
  import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import PreheatPLA from '@/app/ui/dashboard/preheat-pla';
   
  export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices,
    } = await fetchCardData();
    return (
      <main>
        <h1 className={`${redhat.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Extruder Temp" value={totalPaidInvoices} type="collected" /> 
          <Card title="Bed Temp" value={totalPendingInvoices} type="pending" /> 
          <Card title="Ambient Temp" value={numberOfInvoices} type="invoices" /> 
          <Card
            title="Ambient Humidity"
            value={numberOfCustomers}
            type="customers"
          /> 
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <PreheatPLA revenue={revenue}  /> 
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart revenue={revenue}  /> 
          <LatestInvoices latestInvoices={latestInvoices} /> 
        </div>
      </main>
    );
  }