interface HabitDescriptionProps {
  description: string;
}

const HabitDescription = ({ description }: HabitDescriptionProps) => {
  return <p className="text-sm text-neutral-500">{description}</p>;
};

export default HabitDescription;
