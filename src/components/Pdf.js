/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
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
    justifyContent: "space-between",
    width: "100%",
  },
  tableFill: {
    border: "1px solid black",
    fontSize: "11px",
    textAlign: "center",
  },
  table: {
    fontSize: "11px",
    border: "1px solid black",
    width: "33%",
    textAlign: "center",
  },
});

const Pdf = ({ formData }) => {
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
            <View style={styles.secContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>DATOS CLÍNICOS</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View>
                  <Text style={styles.label}>Enf. Cardiacas</Text>
                  <Text style={styles.input}>{formData.enfCar}</Text>
                  <Text style={styles.label}>Enf. Renales</Text>
                  <Text style={styles.input}>{formData.enfRen}</Text>
                  <Text style={styles.label}>Enf. Circulatorias</Text>
                  <Text style={styles.input}>{formData.enfCirc}</Text>
                  <Text style={styles.label}>Enf. Pulmonares</Text>
                  <Text style={styles.input}>{formData.enfPulm}</Text>
                  <Text style={styles.label}>Enf. Digestivas</Text>
                  <Text style={styles.input}>{formData.enfDige}</Text>
                  <Text style={styles.label}>Enf. Hematológicas</Text>
                  <Text style={styles.input}>{formData.enfHema}</Text>
                  <Text style={styles.label}>Enf. Endocrinas</Text>
                  <Text style={styles.input}>{formData.enfEndo}</Text>
                  <Text style={styles.label}>Enf. Neurológicas</Text>
                  <Text style={styles.input}>{formData.enfNeu}</Text>
                </View>
                <View>
                  <Text style={styles.label}>Prob de presión</Text>
                  <Text style={styles.input}>{formData.presion}</Text>
                  <Text style={styles.label}>Alergias:</Text>
                  <Text style={styles.input}>{formData.alergia}</Text>
                  <Text style={styles.label}>Prob en la piel</Text>
                  <Text style={styles.input}>{formData.piel}</Text>
                  <Text style={styles.label}>Sufre Convulsiones</Text>
                  <Text style={styles.input}>{formData.convulsiones}</Text>
                  <Text style={styles.label}>Tabaco</Text>
                  <Text style={styles.input}>{formData.tabaco}</Text>
                  <Text style={styles.label}>Alcohol</Text>
                  <Text style={styles.input}>{formData.alcohol}</Text>
                  <Text style={styles.label}>Drogas</Text>
                  <Text style={styles.input}>{formData.drogas}</Text>
                  <Text style={styles.label}>Marcapasos</Text>
                  <Text style={styles.input}>{formData.marcapasos}</Text>
                </View>
              </View>
            </View>
            <View style={styles.secContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>ANATOMÍA CORPORAL</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.label}>Edad:</Text>
                <Text style={styles.input}>{formData.edad}:</Text>
                <Text style={styles.label}>Peso:</Text>
                <Text style={styles.input}>{formData.peso}:</Text>
                <Text style={styles.label}>Estatura:</Text>
                <Text style={styles.input}>{formData.estatura}:</Text>
              </View>
              <Image src="/anatomia.png" alt="Anatomía" title="Anatomía" />
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>MEDIDAS CORPORALES</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View style={{ width: "60%" }}>
                  <Text style={styles.tableFill}>Cintura:</Text>
                  <Text style={styles.tableFill}>Pecho:</Text>
                  <Text style={styles.tableFill}>Cadera:</Text>
                  <Text style={styles.tableFill}>Abdomen:</Text>
                  <Text style={styles.tableFill}>Brazo izquierdo:</Text>
                  <Text style={styles.tableFill}>Brazo derecho:</Text>
                  <Text style={styles.tableFill}>Muslo izquierdo:</Text>
                  <Text style={styles.tableFill}>Muslo derecho:</Text>
                  <Text style={styles.tableFill}>Pantorrilla izquierda:</Text>
                  <Text style={styles.tableFill}>Pantorrilla derecha:</Text>
                </View>
                <View
                  style={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    paddingBottom: "13px",
                  }}
                >
                  <Text style={styles.table}>Inicio:</Text>
                  <Text style={styles.table}>Medio:</Text>
                  <Text style={styles.table}>Fin:</Text>
                  <Text style={styles.table}>{formData.cinturaInicio}</Text>
                  <Text style={styles.table}>{formData.cinturaMedio}</Text>
                  <Text style={styles.table}>{formData.cinturaFin}</Text>
                  <Text style={styles.table}>{formData.pechoInicio}</Text>
                  <Text style={styles.table}>{formData.pechoMedio}</Text>
                  <Text style={styles.table}>{formData.pechoFin}</Text>
                  <Text style={styles.table}>{formData.caderaInicio}</Text>
                  <Text style={styles.table}>{formData.caderaMedio}</Text>
                  <Text style={styles.table}>{formData.caderaFin}</Text>
                  <Text style={styles.table}>{formData.abdomenInicio}</Text>
                  <Text style={styles.table}>{formData.abdomenMedio}</Text>
                  <Text style={styles.table}>{formData.abdomenFin}</Text>
                  <Text style={styles.table}>{formData.biInicio}</Text>
                  <Text style={styles.table}>{formData.biMedio}</Text>
                  <Text style={styles.table}>{formData.biFin}</Text>
                  <Text style={styles.table}>{formData.bdInicio}</Text>
                  <Text style={styles.table}>{formData.bdMedio}</Text>
                  <Text style={styles.table}>{formData.bdFin}</Text>
                  <Text style={styles.table}>{formData.miInicio}</Text>
                  <Text style={styles.table}>{formData.miMedio}</Text>
                  <Text style={styles.table}>{formData.miFin}</Text>
                  <Text style={styles.table}>{formData.mdInicio}</Text>
                  <Text style={styles.table}>{formData.mdMedio}</Text>
                  <Text style={styles.table}>{formData.mdFin}</Text>
                  <Text style={styles.table}>{formData.piInicio}</Text>
                  <Text style={styles.table}>{formData.piMedio}</Text>
                  <Text style={styles.table}>{formData.piFin}</Text>
                  <Text style={styles.table}>{formData.pdInicio}</Text>
                  <Text style={styles.table}>{formData.pdMedio}</Text>
                  <Text style={styles.table}>{formData.pdFin}</Text>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default Pdf;
