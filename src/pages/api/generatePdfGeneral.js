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
      enfCard,
      enfHema,
      enfRena,
      enfEndo,
      enfGastro,
      enfPulm,
      enfNeuro,
      enfMent,
      enfDerma,
      enfMeta,
      embarazo,
      climaterio,
      anticonceptivosO,
      reempHormonal,
      actFisica,
      tabaquismo,
      drogas,
      automedicacion,
      alcohol,
      pasatiempos,
      desgarres,
      espasmos,
      tiron,
      contracturas,
      columna,
      fracturas,
      luxaciones,
      esguinces,
      cancer,
      marcapasos,
      tiroides,
      impMetal,
      cardiopatias,
      otros,
      despierta,
      desayuna,
      almuerza,
      cena,
      duerme,
      peso,
      talla,
      estatura,
      imc,
      obsFisica,
      agua,
      azucares,
      lacteos,
      frutas,
      verduras,
      CRojas,
      CBlancas,
      grasas,
      harinas,
      dieta,
      pielEnCasa,
      pielProductos,
      protectorSolar,
      pielCabina,
      manchasPiel,
      verrugas,
      vitiligo,
      cicatrices,
      quistes,
      psoriasis,
      eccemas,
      forunculos,
      acne,
      pielJoven,
      pielMadura,
      pielNormal,
      pielSeca,
      pielMixta,
      pielGrasa,
      pielDeshidratada,
      pielAsfictica,
      pielAliptica,
      fotoenvejecida,
      pielGruesa,
      pielDelgada,
      poroAbierto,
      poroCerrado,
      expSuaves,
      expProfundas,
      expArrugas,
      expFlacidez,
      hipercromias,
      rosacea,
      cuperosis,
      tactoSuave,
      pielAcartonada,
      pielOleosa,
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
    doc.fillColor('#F3C623').fontSize(25).text(`Padece Enfermedades`, 190, 230);
    doc.fillColor('black').fontSize(16).text(`Cardiovasculares: ${enfCard}`, 80, 280);
    doc.fontSize(16).text(`Pulmonares: ${enfPulm}`, 80, 300);
    doc.fontSize(16).text(`Renales: ${enfRena}`, 80, 320);
    doc.fontSize(16).text(`Gastrointestinales: ${enfGastro}`, 80, 340);
    doc.fontSize(16).text(`Hematológicas: ${enfHema}`, 80, 360);
    doc.fontSize(16).text(`Endocrinas: ${enfEndo}`, 370, 280);
    doc.fontSize(16).text(`Neurológicas: ${enfNeuro}`, 370, 300);
    doc.fontSize(16).text(`Mentales: ${enfMent}`, 370, 320);
    doc.fontSize(16).text(`Dermatológicas: ${enfDerma}`, 370, 340);
    doc.fontSize(16).text(`Metabólicas: ${enfMeta}`, 370, 360);
    doc.fontSize(16).text('--------------------------------------------------------------------------------------', 80, 380)
    doc.fontSize(16).text(`Marcapasos: ${marcapasos}`, 80, 400);
    doc.fontSize(16).text(`Cardiopatías: ${cardiopatias}`, 260, 400);
    doc.fontSize(16).text(`Cáncer: ${cancer}`, 430, 400);
    doc.fontSize(16).text(`Implantes Metálicos: ${impMetal}`, 130, 430);
    doc.fontSize(16).text(`Tiroides: ${tiroides}`, 340, 430);
    doc.fillColor('#F3C623').fontSize(25).text('Estado de Gravidez y Lesiones', 140, 480)
    doc.fillColor('black').fontSize(16).text(`Embarazo Actual: ${embarazo}`, 80, 530)
    doc.fontSize(16).text(`Anticonceptivos Orales: ${anticonceptivosO}`, 80, 550)
    doc.fontSize(16).text(`Climaterio: ${climaterio}`, 80, 570)
    doc.fontSize(16).text(`Reemplazo Hormonal: ${reempHormonal}`, 80, 590)
    doc.fontSize(16).text(`Dolor de Columna: ${columna}`, 80, 610)
    doc.fontSize(16).text(`Fracturas: ${fracturas}`, 80, 630)
    doc.fontSize(16).text(`Luxaciones: ${luxaciones}`, 350, 530)
    doc.fontSize(16).text(`Esguinces: ${esguinces}`, 350, 550)
    doc.fontSize(16).text(`Contracturas: ${contracturas}`, 350, 570)
    doc.fontSize(16).text(`Espasmos Musculares: ${espasmos}`, 350, 590)
    doc.fontSize(16).text(`Tirón: ${tiron}`, 350, 610)
    doc.fontSize(16).text(`Desgarres: ${desgarres}`, 350, 630)
    doc.fillColor('#F3C623').fontSize(25).text('Actividad Física', 210, 670)
    doc.fillColor('black').fontSize(16).text(`${actFisica}`, 270, 700)
    doc.addPage()
    doc.fillColor('#F3C623').fontSize(25).text('Hábitos de Salud', 210, 50)
    doc.fillColor('black').fontSize(16).text(`Tabaquismo: ${tabaquismo}`, 80, 100)
    doc.text(`Drogas: ${drogas}`, 310, 100)
    doc.text(`Se Automedica: ${automedicacion}`, 80, 120)
    doc.text(`Alcoholismo: ${alcohol}`, 310, 120)
    doc.text(`Pasatiempos: ${pasatiempos}`, 80, 140)
    doc.fillColor('#F3C623').fontSize(25).text('Diario de Actividades', 210, 190)
    doc.fillColor('black').fontSize(16).text(`Despierta a las: ${despierta}`, 80, 240)
    doc.text(`Desayuno: ${desayuna}`, 80, 260)
    doc.text(`Almuerzo: ${almuerza}`, 80, 280)
    doc.text(`Cena: ${cena}`, 80, 300)
    doc.text(`Duerme a las: ${duerme}`, 80, 320)
    doc.fillColor('#F3C623').fontSize(25).text('Exploración Física', 210, 370)
    doc.fillColor('black').fontSize(16).text(`Peso: ${peso}`, 80, 420)
    doc.text(`Estatura: ${estatura}`, 80, 440)
    doc.text(`IMC: ${imc}`, 80, 460)
    doc.text(`Talla: ${talla}`, 80, 480)
    doc.fillColor('#F3C623').fontSize(25).text('Hábitos Alimenticios', 210, 530)
    doc.fillColor('black').fontSize(16).text(`Agua: ${agua}`, 80, 580)
    doc.text(`Azúcar: ${azucares}`, 80, 600)
    doc.text(`Lácteos: ${lacteos}`, 80, 620)
    doc.text(`Frutas: ${frutas}`, 80, 640)
    doc.text(`Verduras: ${verduras}`, 80, 660)
    doc.text(`Carnes Rojas: ${CRojas}`, 80, 680)
    doc.text(`Carnes Blancas: ${CBlancas}`, 80, 700)
    doc.addPage()
    doc.text(`Grasas: ${grasas}`, 80, 100)
    doc.text(`Harinas: ${harinas}`, 80, 120)
    doc.text(`Dieta: ${dieta}`, 80, 140)
    doc.fillColor('#F3C623').fontSize(25).text('Cuidado de la Piel', 210, 190)
    doc.fillColor('black').fontSize(16).text(`Cuidado en Casa: ${pielEnCasa}`, 80, 240)
    doc.text(`Productos Utilizados: ${pielProductos}`, 80, 260)
    doc.text(`Protector Solar: ${protectorSolar}`, 80, 280)
    doc.text(`Cuidado en Cabina: ${pielCabina}`, 80, 300)
    doc.fillColor('#F3C623').fontSize(25).text('Caracteristicas de la Piel', 210, 350)
    doc.fillColor('black').fontSize(16).text(`Manchas: ${manchasPiel}`, 80, 400)
    doc.text(`Verrugas: ${verrugas}`, 80, 420)
    doc.text(`Vitiligo: ${vitiligo}`, 80, 440)
    doc.text(`Cicatrices: ${cicatrices}`, 80, 460)
    doc.text(`Quistes: ${quistes}`, 80, 480)
    doc.text(`Psoriasis: ${psoriasis}`, 80, 500)
    doc.text(`Eccemas: ${eccemas}`, 80, 520)
    doc.text(`Forúnculos: ${forunculos}`, 80, 540)
    doc.text(`Acné: ${acne}`, 80, 560)
    doc.fillColor('#F3C623').fontSize(25).text('Tipo de Piel', 210, 610)
    doc.fillColor('#F3C623').fontSize(20).text('Biotipo', 80, 630)
    doc.fillColor('black').fontSize(16).text(`Piel Joven: ${pielJoven}`, 80, 660)
    doc.text(`Piel Madura: ${pielMadura}`, 80, 680)
    doc.text(`Piel Normal: ${pielNormal}`, 80, 700)
    doc.addPage()
    doc.text(`Piel Seca: ${pielSeca}`, 80, 100)
    doc.text(`Piel Mixta: ${pielMixta}`, 80, 120)
    doc.text(`Piel Grasa: ${pielGrasa}`, 80, 140)
    doc.fillColor('#F3C623').fontSize(20).text('Estado', 80, 170)
    doc.fillColor('black').fontSize(16).text(`Piel Deshidratada: ${pielDeshidratada}`, 80, 200)
    doc.text(`Piel Asfictica: ${pielAsfictica}`, 80, 220)
    doc.text(`Piel Aliptica: ${pielAliptica}`, 80, 240)
    doc.text(`Fotoenvejecida: ${fotoenvejecida}`, 80, 260)
    doc.fillColor('#F3C623').fontSize(20).text('Características', 80, 290)
    doc.fillColor('black').fontSize(16).text(`Piel Gruesa: ${pielGruesa}`, 80, 320)
    doc.text(`Piel Delgada: ${pielDelgada}`, 80, 340)
    doc.text(`Poros Abiertos: ${poroAbierto}`, 80, 360)
    doc.text(`Poros Cerrados: ${poroCerrado}`, 80, 380)
    doc.fillColor('#F3C623').fontSize(20).text('Líneas de Expresión', 80, 410)
    doc.fillColor('black').fontSize(16).text(`Suaves: ${expSuaves}`, 80, 440)
    doc.text(`Profundas: ${expProfundas}`, 80, 460)
    doc.text(`Arrugas: ${expArrugas}`, 80, 480)
    doc.text(`Flacidez: ${expFlacidez}`, 80, 500)
    doc.fillColor('#F3C623').fontSize(20).text('Alteraciones', 80, 530)
    doc.fillColor('black').fontSize(16).text(`Hipercromías: ${hipercromias}`, 80, 560)
    doc.text(`Rosácea: ${rosacea}`, 80, 580)
    doc.text(`Cuperosis: ${cuperosis}`, 80, 600)
    doc.text(`Acné: ${acne}`, 80, 620)
    doc.fillColor('#F3C623').fontSize(20).text('Tacto', 80, 640)
    doc.fillColor('black').fontSize(16).text(`Suave: ${tactoSuave}`, 80, 660)
    doc.text(`Acartonada: ${pielAcartonada}`, 80, 680)
    doc.text(`Oleosa: ${pielOleosa}`, 80, 700)




    

    

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
