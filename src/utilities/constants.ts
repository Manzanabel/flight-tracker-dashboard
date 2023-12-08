export const CATEGORIES: Categories = {
  FLIGHT_NB: {
    key: "flightNb",
    label: "Flight number",
  },
  COMPANY: { key: "company", label: "Company" },
};

export interface Category {
  key: string;
  label: string;
}

export interface Categories {
  [key: string]: Category;
}
