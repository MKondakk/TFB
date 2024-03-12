import { createContext, useContext, useState, ReactNode } from 'react';

interface RatingContextType {
  ratings: Record<string, number>;
  updateRating: (mealId: string, newRating: number) => void;
}

const RatingContext = createContext<RatingContextType | undefined>(undefined);

interface RatingProviderProps {
  children: ReactNode;
}

export const RatingProvider = ({ children }: RatingProviderProps) => {
  const [ratings, setRatings] = useState<Record<string, number>>({});

  const updateRating = (mealId: string, newRating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [mealId]: newRating,
    }));
  };

  const contextValue: RatingContextType = {
    ratings,
    updateRating,
  };

  return (
    <RatingContext.Provider value={contextValue}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRating = (): RatingContextType => {
  const context = useContext(RatingContext);
  if (!context) {
    throw new Error('useRating must be used within a RatingProvider');
  }
  return context;
};
