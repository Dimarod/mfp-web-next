/* eslint-disable react/no-deprecated */
import React, { useState } from "react";
import FormCorporal from "@/components/formCorporal";
import Pdf from "@/components/Pdf";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";

// const PdfCorp = dynamic(() =>
//   import("@/components/Pdfeditor", {
//     loading: <p>Loading...</p>,
//     ssr: false,
//   })
// );

const PdfCorporal = () => {
  // const [client, setClient] = useState(false);

  // useEffect(() => {
  //   setClient(true);
  // }, []);
  // return <>{client && <PdfCorp />}</>;

  const [pdfVisible, setPdfVisible] = useState(false);
  const [formData, setFormData] = useState(null);

  const handlePdfGeneration = (data) => {
    setFormData(data);
    setPdfVisible(true);
  };
  return (
    <>
      <Layout>
        <div>
          <FormCorporal onSubmit={handlePdfGeneration} />
          {pdfVisible && <Pdf formData={formData} />}
        </div>
      </Layout>
    </>
  );
};

export default PdfCorporal;
