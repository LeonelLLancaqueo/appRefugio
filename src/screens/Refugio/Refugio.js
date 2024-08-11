import React, { useEffect, useState } from "react";

import { View, ActivityIndicator } from "react-native";

import url from "../../components/urlApi";

import Card from "../../components/Card/Card";

import styles from "./styles";

const Refugio = ({ route }) => {
  const [isLoading, setLoading] = useState(true);

  const [refugio, setRefugio] = useState({});

  let path = url + "refugios/content/" + route.params.id;

  //hacemos un fetch a la api local
  const getRefugio = async () => {
    try {
      const consultaApiRefugio = await fetch(path)
        .then((response) => response.json())
        .then((refugioJson) => {
          setRefugio(refugioJson);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRefugio();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.containerRefugio}>
          <Card
            nombre={refugio.nombre}
            url={refugio.url}
            descripcion={refugio.descripcion}
          />
        </View>
      )}
    </View>
  );
};

export default Refugio;
