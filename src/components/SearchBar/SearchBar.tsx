import { Autocomplete } from "./Autocomplete";
import { OptionSelect, SearchBarProps } from "./interfaces";

export const findLabelFromOptionKey = (
  key: string,
  options: OptionSelect[]
) => {
  const optionObj = options.find((option) => option.key === key);
  return optionObj ? optionObj.label : "";
};

const filteredResults = (data: string[], keyword: string) => {
  return data.filter((element) => new RegExp(keyword, "i").test(element));
};

export const SearchBar = ({
  optionsSelect,
  autocompleteData,
  keyword,
  setKeyWord,
  category,
  setCategory,
  onSelectionAutocomplete,
}: SearchBarProps) => {
  return (
    <div className="searchbar-container">
      <select
        className="searchbar-input"
        name="categorySelector"
        id="searchbar-select-category"
        onChange={(event) => setCategory(event.target?.value)}
      >
        {optionsSelect.length > 0 &&
          optionsSelect.map((categoryOption, index) => {
            return (
              <option value={categoryOption.key} key={index}>
                {categoryOption.label}
              </option>
            );
          })}
      </select>
      <Autocomplete
        category={findLabelFromOptionKey(category, optionsSelect)}
        setKeyword={setKeyWord}
        keyword={keyword}
        options={filteredResults(autocompleteData, keyword)}
        onSelection={onSelectionAutocomplete}
      />
    </div>
  );
};
