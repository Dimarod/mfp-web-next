/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import seca from "../../public/seca.png";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
Font.register({
  family: "Pacifico",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/pacifico@latest/latin-400-normal.woff2",
    },
  ],
});
const styles = StyleSheet.create({
  page: {
    padding: "50px",
    border: "15px solid pink",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px",
    flexGrow: "1",
  },
  logo: {
    width: "18%",
  },
  title: {
    fontSize: "24px",
    fontFamily: "Pacifico",
  },
  label: {
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "2px",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: "20%",
    padding: "2px",
    fontSize: "10px",
    border: "2px solid pink",
    margin: "2px auto",
  },
  container: {
    width: "100%",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: "10px",
  },
  secContainer: {
    width: "49%",
    backgroundColor: "#EEE",
    margin: "25px 2px",
  },
  titleContainer: {
    backgroundColor: "#acacac",
    width: "100%",
  },
  subContainer: {
    backgroundColor: "#fff",
    width: "50%",
    margin: "3px auto",
    borderRadius: "50%",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "10px",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
});

const PdfFacial = ({ formData }) => {
  console.log("log desde el pdf", formData);
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document title={`fichaCorporal${formData.nombre}`}>
          <Page size="A4" style={styles.page}>
            <View style={styles.headerContainer}>
              <Image
                style={styles.logo}
                src="/logomfp.png"
                alt="Logo"
                title="Logo"
              />
              <Text style={styles.title}>Ficha Corporal</Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.label}>Terapeuta</Text>
                <Text>Jorjito Maestre</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>DATOS GENERALES</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.input}>{formData.nombre}</Text>
                <Text style={styles.label}>Dirección:</Text>
                <Text style={styles.input}>{formData.direccion}</Text>
                <Text style={styles.label}>Ciudad:</Text>
                <Text style={styles.input}>{formData.ciudad}</Text>
                <Text style={styles.label}>CC:</Text>
                <Text style={styles.input}> {formData.documento}</Text>
                <Text style={styles.label}>Edad:</Text>
                <Text style={styles.input}>{formData.edad}</Text>
                <Text style={styles.label}>Estado civil:</Text>
                <Text style={styles.input}>{formData.estCivil}</Text>
                <Text style={styles.label}> Correo:</Text>
                <Text style={styles.input}>{formData.correo}</Text>
                <Text style={styles.label}>Teléfono:</Text>
                <Text style={styles.input}>{formData.telefono}</Text>
                <Text style={styles.label}>Fecha:</Text>
                <Text style={styles.input}>{formData.fecha}</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>INFORME PATOLOGICO</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Enf. Cardiacas</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.enfCar}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsEnfCar}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Enf. Circulatorias</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.enfCirc}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsEnfCirc}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Presenta alergias</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.alergias}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsAlergias}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Enf. Renales</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.enfRen}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsEnfRen}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Problemas de azúcar</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.azucar}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsAzucar}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Sufre convulsiones</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.convulsiones}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsConvulsiones}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Enf. Digestivas</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.enfDige}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsEnfDige}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Problemas de presión</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.presion}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsPresion}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Cremas de uso actual</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.cremas}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsCremas}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Usa lentes de contacto</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.lentes}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsLentes}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Problemas en la piel</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.piel}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsPiel}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Se ha realizado cirugías</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.cirugias}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsCirugias}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Posee implantes dentales</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.impDent}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsImpDent}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Fractura Facial</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.fractura}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsFractura}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Medicamentos</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.meds}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsMeds}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Tratamientos dermatologicos</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.trat}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsTrat}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Autotratamientos</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.autoTrat}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsAutoTrat}</Text>
                  </View>
                </View>
                <View style={{ maxWidth: "30%" }}>
                  <Text style={styles.label}>Observaciones</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "2px solid gray",
                      justifyContent: "space-around",
                      alignItems: "center",
                      borderRight: "2px solid gray",
                      borderLeft: "2px solid gray",
                    }}
                  >
                    <Text style={styles.input}>{formData.obs}</Text>
                    <Text style={styles.label}>Especifique</Text>
                    <Text style={styles.input}>{formData.obsGen}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <View style={{ width: "65%" }}>
                <View style={styles.titleContainer}>
                  <View style={styles.subContainer}>
                    <Text style={styles.subtitle}>TIPO DE CUTIS</Text>
                  </View>
                </View>
                <View style={styles.dataContainer}>
                  <View
                    style={{
                      width: "65%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="seca.png"
                      alt="pielSeca"
                      style={{ width: "20%" }}
                    />
                    <Image
                      src="grasa.png"
                      alt="pielGrasa"
                      style={{ width: "20%" }}
                    />
                  </View>
                  <Text style={styles.input}>{formData.cutis}</Text>
                </View>
              </View>
              <View style={{ width: "35%" }}>
                <Image src="rostro.png" alt="Anatomía facial" />
              </View>
            </View>
            <View style={styles.container}>
             <View style={styles.dataContainer}>
              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "30%"}}>
                <Text style={styles.label}>Diagnóstico general</Text>
                <Text style={styles.input}>{formData.diagnostico}</Text>
              </View>
              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "30%"}}>
                <Text style={styles.label}>Procedimiento a realizar</Text>
                <Text style={styles.input}>{formData.procedimiento}</Text>
              </View>
              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "30%"}}>
                <Text style={styles.label}>Presupuesto</Text>
                <Text style={styles.input}>{formData.presupuesto}</Text>
              </View>
             </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PdfFacial;
