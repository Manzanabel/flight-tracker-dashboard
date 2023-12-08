import { ClassAttributes } from "react";
import { Paper } from "./Paper";

interface AutocompleteProps {
  category: string;
  setKeyword: (keyword: string) => void;
  keyword: string;
  options: string[];
  onSelection: (option: string) => ClassAttributes<HTMLLIElement>;
}

export const Autocomplete = ({
  category,
  setKeyword,
  keyword,
  options,
  onSelection,
}: AutocompleteProps) => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar-input"
        placeholder={`Search by ${category}`}
        onChange={(event) => setKeyword(event.target?.value)}
        value={keyword}
      />
      {keyword && (
        <Paper
          onSelection={onSelection}
          keyword={keyword}
          options={options}
          setKeyword={setKeyword}
        />
      )}
    </div>
  );
};
