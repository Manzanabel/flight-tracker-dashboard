import { loadingMessage } from "../../utilities/sharedComponents";

type CardWithChildProps = React.PropsWithChildren<{
  title: string;
  isLoading?: boolean;
  size?: "map" | "medium";
  onClose?: () => void;
}>;

export const Card = ({
  title,
  children,
  isLoading,
  onClose,
  size = "medium",
}: CardWithChildProps) => {
  return (
    <div className={`card-container-${size}`}>
      <p className="card-title">
        {title} {onClose && <span onClick={onClose}>&times;</span>}
      </p>

      {isLoading ? loadingMessage : children}
    </div>
  );
};
