import React, { useState } from "react";
import FormGeneral from "@/components/FormGeneral";
import PdfGeneral from "@/components/PdfGeneral";
import Layout from "@/components/Layout";

const FichaGeneral = () => {
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
          {pdfVisible && <PdfGeneral formData={formData} />}
        </div>
      </Layout>
    </>
  );
};

export default FichaGeneral;
