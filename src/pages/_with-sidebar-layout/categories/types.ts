export interface CategoryProps {
  categories: CategoryObject[];
  searchValue: string;
  errorMessage: string;
  handleChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddCategory: (name: string) => void;
  handleRemoveCategory: (id: string) => void;
  handleEditCategory: (id: string) => void;
}

export interface CategoryObject {
  id: string;
  name: string;
}

export interface CategoryRowProps {
  name: string;
  handleRemoveCategory: () => void;
  handleEditCategory: () => void;
}
