import SummaryText from "@/features/habits/components/Summary/SummaryText.tsx";
import SummaryActions from "@/features/habits/components/Summary/SummaryActions.tsx";

const Summary = () => {
  return (
    <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
      <SummaryText />
      <SummaryActions />
    </div>
  );
};

export default Summary;
