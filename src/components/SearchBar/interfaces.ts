export interface OptionSelect {
  key: string;
  label: string;
}

export interface SearchBarProps {
  optionsSelect: OptionSelect[];
  autocompleteData: string[];
  keyword: string;
  setCategory: (category: string) => void;
  setKeyWord: (keyword: string) => void;
  category: string;
  onSelectionAutocomplete: (selectedOption: string) => void;
}
