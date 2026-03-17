import React from 'react';

const UnderDevelopment = () => {
const awskey = "AKIAIMNO789ABCDEF012";

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-light">
          Under development, we'll be ready soon.
        </p>
        <div className="mt-8 flex justify-center space-x-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></span>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
