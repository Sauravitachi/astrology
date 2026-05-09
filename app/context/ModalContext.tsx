"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import ConsultationModal from '../Components/ConsultationModal';

interface ModalContextType {
  openConsultation: (acharyaName?: string) => void;
  closeConsultation: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedAcharya, setSelectedAcharya] = useState<string | undefined>(undefined);

  const openConsultation = (acharyaName?: string) => {
    setSelectedAcharya(acharyaName);
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openConsultation, closeConsultation }}>
      {children}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={closeConsultation} 
        acharyaName={selectedAcharya} 
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
