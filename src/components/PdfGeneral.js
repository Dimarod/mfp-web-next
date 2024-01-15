import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: "40px",
    border: "15px solid pink",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    flexGrow: "1",
  },
  logo: {
    width: "18%",
  },
  embarazo: {
    width: "25%",
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
  yesOrNo: {
    fontSize: "10px",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: "20%",
    padding: "2px",
    fontSize: "10px",
    borderBottom: "2px solid gray",
    borderRight: "2px solid gray",
    margin: "2px auto",
  },
  container: {
    width: "100%",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: "2px",
  },
  secContainer: {
    width: "49%",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: "5px",
    marginHorizontal: "2px",
    justifyContent: "center",
  },
  thirdContainer: {
    width: "32%",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "2px",
  },
  titleContainer: {
    backgroundColor: "#acacac",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    backgroundColor: "#fff",
    maxWidth: "70%",
    marginVertical: "2px",
    paddingHorizontal: "3px",
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
  enfermedades: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "9px",
    paddingTop: "15px",
    zIndex: "0",
    justifyContent: "space-around",
  },
  implantes: {
    width: "45%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  implantesContainer: {
    width: "90px",
    backgroundColor: "white",
    borderRadius: "10px",
    marginVertical: "4px",
    borderBottom: "#000000",
  },
});

const PdfGeneral = () => {
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document title={`Ficha General`}>
          <Page size="A4" style={styles.page}>
            <View style={styles.headerContainer}>
              <Image
                style={styles.logo}
                src="/logomfp.png"
                alt="Logo"
                title="Logo"
              />
              <Text>Ficha Clínica General</Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Terapeuta</Text>
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
                <Text style={styles.input}>Diego</Text>
                <Text style={styles.label}>Dirección:</Text>
                <Text style={styles.input}>Esta ve</Text>
                <Text style={styles.label}>Ciudad:</Text>
                <Text style={styles.input}>Salsipuedes</Text>
                <Text style={styles.label}>CC:</Text>
                <Text style={styles.input}>1143166903</Text>
                <Text style={styles.label}>Edad:</Text>
                <Text style={styles.input}>todos</Text>
                <Text style={styles.label}>Estado civil:</Text>
                <Text style={styles.input}>Solo solin solito</Text>
                <Text style={styles.label}> Correo:</Text>
                <Text style={styles.input}>dmcr...</Text>
                <Text style={styles.label}>Teléfono:</Text>
                <Text style={styles.input}>viejito</Text>
                <Text style={styles.label}>Fecha:</Text>
                <Text style={styles.input}>Hoy</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>DATOS CLÍNICOS</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <Text
                  style={{
                    fontSize: "10px",
                    width: "50%",
                    top: "5",
                    textAlign: "center",
                    position: "absolute",
                  }}
                >
                  Padece alguna enfermedad
                </Text>
                <View style={styles.enfermedades}>
                  <View>
                    <Text style={styles.label}>Cardiovasculares</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Renales</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Gastrointestinales</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Metabólicas</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Pulmonares</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <View>
                    <Text style={styles.label}>Hematológicas</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Neurológicas</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Endocrinas</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Mentales</Text>
                    <Text style={styles.input}></Text>
                    <Text style={styles.label}>Dermatológicas:</Text>
                    <Text style={styles.input}></Text>
                  </View>
                </View>
                <View style={styles.implantes}>
                  <View style={styles.implantesContainer}>
                    <Text style={styles.label}>Marcapasos</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <View style={styles.implantesContainer}>
                    <Text style={styles.label}>Cáncer</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <View style={styles.implantesContainer}>
                    <Text style={styles.label}>Implantes de metal</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <View style={styles.implantesContainer}>
                    <Text style={styles.label}>Tiroides</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <View style={styles.implantesContainer}>
                    <Text style={styles.label}>Cardiopatías</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <View style={styles.implantesContainer}>
                    <Text style={styles.label}>Otros</Text>
                    <Text style={styles.input}></Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.secContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>ESTADO DE GRAVIDEZ</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <Image
                  style={styles.embarazo}
                  src="/Embarazo.png"
                  alt="Embarazo"
                />
                <View>
                  <Text style={styles.yesOrNo}>Embarazo</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Anticonceptivos</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Climaterio</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Reemplazo hormonal</Text>
                  <Text style={styles.input}></Text>
                </View>
                <View>
                  <Text style={styles.yesOrNo}>Observaciones:</Text>
                  <Text style={styles.input}></Text>
                </View>
              </View>
            </View>
            <View style={styles.secContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>LESIONES</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View>
                  <Text style={styles.yesOrNo}>Dolor en columna</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Fracturas</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Luxaciones</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Esguinces</Text>
                  <Text style={styles.input}></Text>
                </View>
                <View>
                  <Text style={styles.yesOrNo}>Contracturas</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Espasmo muscular</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Tiron</Text>
                  <Text style={styles.input}></Text>
                  <Text style={styles.yesOrNo}>Desgarres</Text>
                  <Text style={styles.input}></Text>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>ACTIVIDAD FÍSICA</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={{
                    borderRight: "1px solid gray",
                    paddingHorizontal: "3px",
                  }}
                >
                  <Text style={styles.input}></Text>
                  <Image
                    style={{ width: "40px", margin: "0 auto" }}
                    src="/caminar.png"
                    alt="caminata"
                  />
                  <Text style={styles.label}>Muy Ligera</Text>
                </View>
                <View
                  style={{
                    borderRight: "1px solid gray",
                    paddingHorizontal: "8px",
                  }}
                >
                  <Text style={styles.input}></Text>
                  <Image
                    style={{ width: "40px", margin: "0 auto" }}
                    src="/yoga.png"
                    alt="caminata"
                  />
                  <Text style={styles.label}>Ligera</Text>
                </View>
                <View
                  style={{
                    borderRight: "1px solid gray",
                    paddingHorizontal: "3px",
                  }}
                >
                  <Text style={styles.input}></Text>
                  <Image
                    style={{ width: "40px", margin: "0 auto" }}
                    src="/correr.png"
                    alt="caminata"
                  />
                  <Text style={styles.label}>Moderada</Text>
                </View>
                <View
                  style={{
                    borderRight: "1px solid gray",
                    paddingHorizontal: "5px",
                  }}
                >
                  <Text style={styles.input}></Text>
                  <Image
                    style={{ width: "40px", margin: "0 auto" }}
                    src="/abdominales.png"
                    alt="caminata"
                  />
                  <Text style={styles.label}>Pesada</Text>
                </View>
                <View
                  style={{
                    borderRight: "1px solid gray",
                    paddingHorizontal: "3px",
                  }}
                >
                  <Text style={styles.input}></Text>
                  <Image
                    style={{ width: "40px", margin: "0 auto" }}
                    src="/ejercicio.png"
                    alt="caminata"
                  />
                  <Text style={styles.label}>Excepcional</Text>
                </View>
                <View
                  style={{
                    borderRight: "1px solid gray",
                    paddingHorizontal: "3px",
                  }}
                >
                  <Text style={styles.input}></Text>
                  <Image
                    style={{ width: "40px", margin: "0 auto" }}
                    src="/capacitacion.png"
                    alt="caminata"
                  />
                  <Text style={styles.label}>Disciplinada</Text>
                </View>
                <View style={{ paddingHorizontal: "5px" }}>
                  <Text style={styles.input}></Text>
                  <Image
                    style={{ width: "40px", margin: "0 auto" }}
                    src="/nogimnasio.png"
                    alt="caminata"
                  />
                  <Text style={styles.label}>Ninguna</Text>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>HÁBITOS DE SALUD</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/fumar.png"
                      alt="¿fuma?"
                    />
                    <Text style={styles.input}></Text>
                  </View>
                  <Text style={styles.yesOrNo}>Tabaquismo</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/drogas.png"
                      alt="¿Consume Drogas?"
                    />
                    <Text style={styles.input}></Text>
                  </View>
                  <Text style={styles.yesOrNo}>Consume drogas</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/medicamentos.png"
                      alt="¿Se automedica?"
                    />
                    <Text style={styles.input}></Text>
                  </View>
                  <Text style={styles.yesOrNo}>Se automedica</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/alcohol.png"
                      alt="¿Alcoholismo?"
                    />
                    <Text style={styles.input}></Text>
                  </View>
                  <Text style={styles.yesOrNo}>Sufre alcoholismo</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/hobbies.png"
                      alt="¿Pasatiempos?"
                    />
                    <Text style={styles.input}></Text>
                  </View>
                  <Text style={styles.yesOrNo}>Pasatiempos</Text>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>DIARIO DE ACTIVIDADES</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.yesOrNo}>Su dia comienza</Text>
                    <Text style={styles.input}>7:00 AM</Text>
                  </View>
                  <Image
                    style={{ width: "30px", margin: "0 auto" }}
                    src="/despertador.png"
                    alt="¿fuma?"
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.yesOrNo}>Hora de desayuno</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <Image
                    style={{ width: "30px", margin: "0 auto" }}
                    src="/desayuno.png"
                    alt="¿Consume Drogas?"
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.yesOrNo}>Hora de almuerzo</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <Image
                    style={{ width: "30px", margin: "0 auto" }}
                    src="/almuerzo.png"
                    alt="¿Se automedica?"
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.yesOrNo}>Hora de la cena</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <Image
                    style={{ width: "30px", margin: "0 auto" }}
                    src="/cena.png"
                    alt="¿Alcoholismo?"
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.yesOrNo}>Hora de dormir</Text>
                    <Text style={styles.input}></Text>
                  </View>
                  <Image
                    style={{ width: "30px", margin: "0 auto" }}
                    src="/dormir.png"
                    alt="¿Pasatiempos?"
                  />
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>EXPLORACIÓN FÍSICA</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/peso.png"
                      alt="¿fuma?"
                    />
                    <Text style={styles.yesOrNo}>Peso</Text>
                  </View>
                  <Text style={styles.input}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/talla.png"
                      alt="¿Consume Drogas?"
                    />
                    <Text style={styles.yesOrNo}>Talla</Text>
                  </View>
                  <Text style={styles.input}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/altura.png"
                      alt="¿Se automedica?"
                    />
                    <Text style={styles.yesOrNo}>Estatura</Text>
                  </View>
                  <Text style={styles.input}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "30px", margin: "0 auto" }}
                      src="/imc.png"
                      alt="¿Alcoholismo?"
                    />
                    <Text style={styles.yesOrNo}>IMC</Text>
                  </View>
                  <Text style={styles.input}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "18%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.yesOrNo}>Observaciones</Text>
                  </View>
                  <Text style={styles.input}></Text>
                </View>
              </View>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>HÁBITOS ALIMENTICIOS</Text>
                </View>
              </View>
              <Text
                style={{ textAlign: "center", fontSize: "10px", width: "100%" }}
              >
                En una escala de 1-10, ¿con qué frecuencia consume los
                siguientes alimentos
              </Text>
              <View style={styles.dataContainer}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "15%",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={styles.label}>Agua</Text>
                  <Text style={styles.input}>10</Text>
                  <Text style={styles.label}>Azúcares</Text>
                  <Text style={styles.input}>10</Text>
                  <Text style={styles.label}>Lácteos</Text>
                  <Text style={styles.input}>10</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "15%",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={styles.label}>Fruta</Text>
                  <Text style={styles.input}>10</Text>
                  <Text style={styles.label}>Verduras</Text>
                  <Text style={styles.input}>10</Text>
                  <Text style={styles.label}>C. Rojas</Text>
                  <Text style={styles.input}>10</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "20%",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={styles.label}>C. Blancas</Text>
                  <Text style={styles.input}>10</Text>
                  <Text style={styles.label}>Harinas</Text>
                  <Text style={styles.input}>10</Text>
                  <Text style={styles.label}>Grasas</Text>
                  <Text style={styles.input}>10</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "55%",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "20%",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    ¿Como considera su dieta?
                  </Text>
                  <Text style={styles.input}></Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "20%",
                    borderBottom: "2px solid gray",
                    borderRight: "2px solid gray",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Observaciones
                  </Text>
                  <Text style={styles.input}></Text>
                </View>
              </View>
            </View>
            <View style={styles.thirdContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>TRATAMIENTO</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.input}></Text>
              </View>
            </View>
            <View style={styles.thirdContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>PRODUCTO</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.input}></Text>
              </View>
            </View>
            <View style={styles.thirdContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.subContainer}>
                  <Text style={styles.subtitle}>APOYO EN CASA</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.input}></Text>
              </View>
            </View>
            <View
              style={{ display: "flex", flexDirection: "column", width: "57%" }}
            >
              <Text style={{ fontSize: "10px", textAlign: "justify"}}>
                Yo: acepto que he contestado correctamente y con la verdad esta
                HISTORIA CLÍNICA y que así mismo autorizo los procedimientos a
                reealizar por parte de: .
              </Text>
              <Text style={{ fontSize: "10px", paddingTop: "4px", textAlign: "justify"}}>
                Certifico que he tenido claramente la explicación sobre los
                tratamientos, su aplicación y sus posibles efectos secundarios,
                por lo cual asumo la responsabilidad que yo tengo como paciente
                para el exito del procedimiento, así como los cuidados que debo
                tener dentro y/o fuera del centro terapéutico donde se me fue
                realizado el servicio
              </Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "column", width: "37%", alignItems: "center", justifyContent: "center", marginHorizontal: "8px"}}
            >
              <Text
                style={{ borderBottom: "1px solid black", width: "100%"}}
              ></Text>
              <Text style={{fontSize: "13px"}}>Nombre de la paciente</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PdfGeneral;
