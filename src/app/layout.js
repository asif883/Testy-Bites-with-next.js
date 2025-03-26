import "./globals.css";
import ClientWrapper from "./Components/ClientWrapper";




export const metadata = {
  title: "Testy Bites - Delicious Meals",
  description: "Order the best food from Testy Bites!",
  icons:"./logo.tbr.png"
};

export default function RootLayout({ children }) {
 


  return (
    <html lang="en" data-theme="light">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

