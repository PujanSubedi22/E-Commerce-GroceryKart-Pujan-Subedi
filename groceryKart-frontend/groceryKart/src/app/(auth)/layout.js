"use client";

const AuthLayout = ({ children }) => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
