import React, { useState } from "react";
import FormGeneral from "@/components/FormGeneral";
import Pdf from "@/components/Pdf";
import Layout from "@/components/Layout";

const PdfGeneral = () => {
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
          <FormGeneral onSubmit={handlePdfGeneration} />
          {pdfVisible && <Pdf formData={formData} />}
        </div>
      </Layout>
    </>
  );
};

export default PdfGeneral;
