import { cn } from "../lib/utils";

interface CardColorProps {
  className: string;
  seleccion: string;
  onClick: () => void;
}

export function CardColor(props: CardColorProps) {
  const { className, seleccion, onClick, ...rest } = props;

  return (
    <div
      className={cn(
        `w-10 md:w-11 h-11 md:rounded-full border-4 border-gray-200 md:m-1 
        hover:border-white dark:border-zinc-600 ${className}`,
        seleccion === className && "border-white dark:border-zinc-300"
      )}
      onClick={props.onClick}
      {...rest}
    ></div>
  );
}
