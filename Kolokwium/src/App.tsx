import React, { useState, useEffect, createContext } from 'react';
import { ProductList } from './components/ProductList';
import { SearchWindow } from './components/SearchWindow';
import {EditButton} from './components/EditButton';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface AppContextProps {
  products: Product[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleEdit: (productId: number) => void;
  handleDelete: (productId: number) => void;
}

export const AppContext = createContext<AppContextProps>({
  products: [],
  searchTerm: '',
  setSearchTerm: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
});

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleEdit = (productId: number) => {
    console.log(`Editing product with ID ${productId}`);
  };
  const handleDelete = (productId: number) => {
    const updatedUsers = products.filter(product => product.id !== productId);
    setProducts(updatedUsers);
  };

  return (
    <AppContext.Provider value={{ products, searchTerm, setSearchTerm, handleEdit, handleDelete }}>
      <div>
        <h1>Mariia Kondak kolokwium</h1>
        {!searchTerm && <ProductList products={products} />}
        <SearchWindow />
      </div>
    </AppContext.Provider>
  );
};

export { App };
