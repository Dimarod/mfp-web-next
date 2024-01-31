/* eslint-disable react/no-deprecated */
import React, { useState } from "react";
import FormFacial from "@/components/FormFacial";
import PdfFacial from "@/components/PdfFacial";
import Layout from "@/components/Layout";

// const PdfCorp = dynamic(() =>
//   import("@/components/Pdfeditor", {
//     loading: <p>Loading...</p>,
//     ssr: false,
//   })
// );

const FichaFacial = () => {
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
          <FormFacial onSubmit={handlePdfGeneration} />
          {pdfVisible && <PdfFacial formData={formData} />}
        </div>
      </Layout>
    </>
  );
};

export default FichaFacial;
