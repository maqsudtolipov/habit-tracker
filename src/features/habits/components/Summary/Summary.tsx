import DailySummary from "@/features/habits/components/Summary/DailySummary.tsx";
import SummaryActions from "@/features/habits/components/Summary/SummaryActions.tsx";

const Summary = () => {
  return (
    <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
      <DailySummary />
      <SummaryActions />
    </div>
  );
};

export default Summary;
