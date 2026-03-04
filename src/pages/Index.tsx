"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Calculator as CalculatorIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="text-center max-w-md w-full bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-xl border border-slate-200 dark:border-slate-700">
        <div className="bg-emerald-100 dark:bg-emerald-900/30 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <CalculatorIcon className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
          Mi App Android
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Bienvenido a tu centro de herramientas. Comienza usando la calculadora.
        </p>
        
        <Button 
          onClick={() => navigate('/calculator')}
          className="w-full py-6 text-lg font-bold rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
        >
          Abrir Calculadora
        </Button>
      </div>
      
      <div className="mt-12">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;