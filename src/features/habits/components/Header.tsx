import DailySummary from "@/features/habits/components/DailySummary.tsx";
import DatePicker from "@/shared/ui/DatePicker.tsx";

const Header = () => {
  return (
    <div className="p-2 pl-4 mb-6 bg-gray-50 outline-2 outline-gray-200 rounded-lg">
      <p>
        <span className="inline-flex items-center gap-2">
          🔥 For
          <DatePicker />
        </span>
        <DailySummary />
      </p>
    </div>
  );
};

export default Header;
