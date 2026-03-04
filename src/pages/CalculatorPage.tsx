"use client";

import React from 'react';
import Calculator from '@/components/Calculator';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CalculatorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mb-6 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold ml-4 text-slate-800 dark:text-white">Calculadora</h1>
      </div>
      
      <Calculator />
      
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default CalculatorPage;