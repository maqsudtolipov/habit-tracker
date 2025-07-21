import DailySummary from "@/features/habits/components/header/DailySummary.tsx";
import HeaderActions from "@/features/habits/components/header/HeaderActions.tsx";

const Header = () => {
  return (
    <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
      <DailySummary />
      <HeaderActions />
    </div>
  );
};

export default Header;
