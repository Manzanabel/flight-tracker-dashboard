import { DetailedHTMLProps, LiHTMLAttributes } from "react";
interface PaperProps {
  keyword: string;
  options: string[];
  setKeyword: (keyword: string) => void;
  onSelection: (
    option: string
  ) => DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
}

export const Paper = ({
  keyword,
  options,
  onSelection,
  setKeyword,
}: PaperProps) => {
  return (
    <div className="paper-container">
      <ul>
        {options.length > 0 ? (
          options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onSelection(option);
                setKeyword("");
              }}
            >
              {option}
            </li>
          ))
        ) : (
          <li>No results for {keyword}</li>
        )}
      </ul>
    </div>
  );
};
