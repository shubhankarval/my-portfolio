interface DateProps {
  date: string;
}

export default function Date({ date }: DateProps) {
  return <span className="text-gray-400">{date}</span>;
}
