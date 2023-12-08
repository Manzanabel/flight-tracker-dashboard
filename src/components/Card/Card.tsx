import { loadingMessage } from "../../utilities/sharedComponents";

type CardWithChildProps = React.PropsWithChildren<{
  title: string;
  isLoading?: boolean;
  size?: "map" | "medium";
}>;

export const Card = ({
  title,
  children,
  isLoading,
  size = "medium",
}: CardWithChildProps) => {
  return (
    <div className={`card-container-${size}`}>
      <p className="card-title">{title}</p>
      {isLoading ? loadingMessage : children}
    </div>
  );
};
