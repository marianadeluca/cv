import "./date-period.scss";

interface PeriodProps {
  startPeriod: string;
  endPeriod?: string;
}

function UIDatePeriod({ startPeriod, endPeriod = "atualmente" }: PeriodProps) {
  return (
    <span className="date-period">
      {startPeriod} - {endPeriod}
    </span>
  );
}

export default UIDatePeriod;
