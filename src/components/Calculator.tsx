"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Delete, Divide, Minus, Plus, X, Equal } from "lucide-react";

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const handleNumber = (num: string) => {
    if (display === '0' || isFinished) {
      setDisplay(num);
      setIsFinished(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
    setIsFinished(false);
  };

  const calculate = () => {
    try {
      const fullEquation = equation + display;
      // Usamos una forma segura de evaluar operaciones simples
      const result = eval(fullEquation.replace('×', '*').replace('÷', '/'));
      setDisplay(String(result));
      setEquation('');
      setIsFinished(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const deleteLast = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6 bg-slate-950 text-white border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
      <div className="flex flex-col h-[500px] justify-between">
        {/* Pantalla */}
        <div className="flex flex-col items-end justify-end p-4 h-32">
          <div className="text-slate-400 text-xl h-8">{equation}</div>
          <div className="text-6xl font-light tracking-tighter truncate w-full text-right">
            {display}
          </div>
        </div>

        {/* Teclado */}
        <div className="grid grid-cols-4 gap-3">
          <Button 
            variant="ghost" 
            onClick={clear}
            className="h-16 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xl font-medium"
          >
            AC
          </Button>
          <Button 
            variant="ghost" 
            onClick={deleteLast}
            className="h-16 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xl"
          >
            <Delete size={24} />
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleOperator('/')}
            className="h-16 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xl"
          >
            <Divide size={24} />
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleOperator('*')}
            className="h-16 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xl"
          >
            <X size={24} />
          </Button>

          {[7, 8, 9].map((num) => (
            <Button 
              key={num}
              variant="ghost" 
              onClick={() => handleNumber(String(num))}
              className="h-16 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-2xl font-light"
            >
              {num}
            </Button>
          ))}
          <Button 
            variant="ghost" 
            onClick={() => handleOperator('-')}
            className="h-16 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xl"
          >
            <Minus size={24} />
          </Button>

          {[4, 5, 6].map((num) => (
            <Button 
              key={num}
              variant="ghost" 
              onClick={() => handleNumber(String(num))}
              className="h-16 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-2xl font-light"
            >
              {num}
            </Button>
          ))}
          <Button 
            variant="ghost" 
            onClick={() => handleOperator('+')}
            className="h-16 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xl"
          >
            <Plus size={24} />
          </Button>

          {[1, 2, 3].map((num) => (
            <Button 
              key={num}
              variant="ghost" 
              onClick={() => handleNumber(String(num))}
              className="h-16 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-2xl font-light"
            >
              {num}
            </Button>
          ))}
          <Button 
            variant="ghost" 
            onClick={calculate}
            className="h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xl row-span-2"
          >
            <Equal size={28} />
          </Button>

          <Button 
            variant="ghost" 
            onClick={() => handleNumber('0')}
            className="h-16 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-2xl font-light col-span-2"
          >
            0
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNumber('.')}
            className="h-16 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-2xl font-light"
          >
            .
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Calculator;