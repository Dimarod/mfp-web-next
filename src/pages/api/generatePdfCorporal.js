import PDFDocument from "pdfkit";
import { buffer } from "micro";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const rawBody = await buffer(req); // Procesamos el buffer del body
    const bodyString = rawBody.toString(); // Convertimos el buffer a string
    const {
      nombre,
      direccion,
      ciudad,
      edad,
      documento,
      estCivil,
      telefono,
      correo,
      fecha,
      estatura,
      peso,
      iniCintura,
      medCintura,
      finCintura,
      iniPecho,
      medPecho,
      finPecho,
      iniCadera,
      medCadera,
      finCadera,
      iniAbdomen,
      medAbdomen,
      finAbdomen,
      iniBIzquierdo,
      medBIzquierdo,
      finBIzquierdo,
      iniBDerecho,
      medBDerecho,
      finBDerecho,
      iniMIzquierdo,
      medMIzquierdo,
      finMIzquierdo,
      iniMDerecho,
      medMDerecho,
      finMDerecho,
      iniPIzquierda,
      medPIzquierda,
      finPIzquierda,
      iniPDerecha,
      medPDerecha,
      finPDerecha,
    } = JSON.parse(bodyString); // Parseamos el JSON

    const doc = new PDFDocument();
    let buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      const pdfData = Buffer.concat(buffers);
      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=ficha-clinica-general-${nombre}.pdf`,
        "Content-Length": pdfData.length,
      });
      res.end(pdfData);
    });

    // Añadir contenido al PDF
    doc
      .fillColor("#F3C623")
      .fontSize(25)
      .text(`Ficha Clínica General`, 190, 50);
    doc.fillColor("black").fontSize(16).text(`Nombre: ${nombre}`, 80, 100);
    doc.fontSize(16).text(`Documento: ${documento}`, 310, 100);
    doc.fontSize(16).text(`F. Nacimiento: ${fecha}`, 80, 120);
    doc.fontSize(16).text(`Edad: ${edad}`, 310, 120);
    doc.fontSize(16).text(`Dirección: ${direccion}`, 80, 140);
    doc.fontSize(16).text(`Correo: ${correo}`, 310, 140);
    doc.fontSize(16).text(`Ciudad: ${ciudad}`, 80, 160);
    doc.fontSize(16).text(`E. Civil: ${estCivil}`, 310, 160);
    doc.fontSize(16).text(`Peso: ${peso}`, 80, 180);
    doc.fontSize(16).text(`Estatura: ${estatura}`, 310, 180);
    doc.fontSize(16).text(`Telefono: ${telefono}`, 80, 200);
    doc.fontSize(16).text(`-----------------------------------------------------------------------`, 80, 230);
    doc.fillColor("#F3C623").fontSize(25).text(`Anatomía Corporal`, 190, 280);
    doc.fillColor("black").fontSize(16).text(`Edad: ${edad}`, 80, 330);
    doc.fontSize(16).text(`Estatura: ${estatura}`, 310, 330);
    doc.fontSize(16).text(`Peso: ${peso}`, 80, 350);
    doc.fontSize(16).text(`-----------------------------------------------------------------------`, 80, 230);
    doc.fillColor("#F3C623").fontSize(25).text(`Medidas Corporales`, 190, 400);
    doc.fillColor("black").fontSize(20).text(`Cintura`, 80, 450);
    doc.fontSize(16).text(`Inicio: ${iniCintura}`, 80, 470)
    doc.fontSize(16).text(`Medio: ${medCintura}`, 210, 470)
    doc.fontSize(16).text(`Final: ${finCintura}`, 340, 470)
    doc.fontSize(20).text(`Pecho`, 80, 490);
    doc.fontSize(16).text(`Inicio: ${iniPecho}`, 80, 510)
    doc.fontSize(16).text(`Medio: ${medPecho}`, 210, 510)
    doc.fontSize(16).text(`Final: ${finPecho}`, 340, 510)
    doc.fontSize(20).text(`Cadera`, 80, 530);
    doc.fontSize(16).text(`Inicio: ${iniCadera}`, 80,550)
    doc.fontSize(16).text(`Medio: ${medCadera}`, 210, 550)
    doc.fontSize(16).text(`Final: ${finCadera}`, 340, 550)
    doc.fontSize(20).text(`Abdomen`, 80, 570);
    doc.fontSize(16).text(`Inicio: ${iniAbdomen}`, 80, 590)
    doc.fontSize(16).text(`Medio: ${medAbdomen}`, 210, 590)
    doc.fontSize(16).text(`Final: ${finAbdomen}`, 340, 590)
    doc.fontSize(20).text(`Brazo Izquierdo`, 80, 610);
    doc.fontSize(16).text(`Inicio: ${iniBIzquierdo}`, 80, 630)
    doc.fontSize(16).text(`Medio: ${medBIzquierdo}`, 210, 630)
    doc.fontSize(16).text(`Final: ${finBIzquierdo}`, 340, 630)
    doc.fontSize(20).text(`Brazo Derecho`, 80, 650);
    doc.fontSize(16).text(`Inicio: ${iniBDerecho}`, 80, 670)
    doc.fontSize(16).text(`Medio: ${medBDerecho}`, 210, 670)
    doc.fontSize(16).text(`Final: ${finBDerecho}`, 340, 670)
    doc.addPage()
    doc.fontSize(20).text(`Muslo Izquierdo`, 80, 100);
    doc.fontSize(16).text(`Inicio: ${iniMIzquierdo}`, 80, 120)
    doc.fontSize(16).text(`Medio: ${medMIzquierdo}`, 210, 120)
    doc.fontSize(16).text(`Final: ${finMIzquierdo}`, 340, 120)
    doc.fontSize(20).text(`Muslo Derecho`, 80, 140);
    doc.fontSize(16).text(`Inicio: ${iniMDerecho}`, 80, 160)
    doc.fontSize(16).text(`Medio: ${medMDerecho}`, 210, 160)
    doc.fontSize(16).text(`Final: ${finMDerecho}`, 340, 160)
    doc.fontSize(20).text(`Pantorrilla Izquierda`, 80, 180);
    doc.fontSize(16).text(`Inicio: ${iniPIzquierda}`, 80, 200)
    doc.fontSize(16).text(`Medio: ${medPIzquierda}`, 210, 200)
    doc.fontSize(16).text(`Final: ${finPIzquierda}`, 340, 200)
    doc.fontSize(20).text(`Pantorrilla Derecha`, 80, 220);
    doc.fontSize(16).text(`Inicio: ${iniPDerecha}`, 80, 240)
    doc.fontSize(16).text(`Medio: ${medPDerecha}`, 210, 240)
    doc.fontSize(16).text(`Final: ${finPDerecha}`, 340, 240)

    doc.end();
  } else {
    res.status(405).send({ message: "Only POST requests are allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
