
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex w-full min-h-screen justify-center items-center">
            {children}
      </div>
    );
  }