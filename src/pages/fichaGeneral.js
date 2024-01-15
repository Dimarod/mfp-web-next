import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

 const PdfCorp = dynamic(() =>
   import("@/components/PdfGeneral", {
     loading: <p>Loading...</p>,
     ssr: false,
   })
 );

const FichaGeneral = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return <>{client && <PdfCorp />}</>;
};

export default FichaGeneral;
