import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../Card/Card";

import urlApi from "../urlApi";

import styles from "./styles";

const CardRefugio = () => {
  const [isLoading, setLoading] = useState(false);
  const [refugio, setRefugio] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 3;

  //hacemos un fetch a la api local
  const getRefugio = async (page) => {
    if (currentPage === totalPages || isLoading) {
      return;
    }

    try {
      setLoading(true);

      //borrar consultarApiRefugio
      await fetch(
        urlApi + `refugios/pagination?page=${page}&pageSize=${pageSize}`
      )
        .then((response) => response.json())
        .then((refugioJson) => {
          setRefugio((preloadElements) => {
            return [...preloadElements, ...refugioJson.refugios];
          });

          setTotalPages(refugioJson.totalPages);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setCurrentPage(currentPage + 1);

      setLoading(false);
    }
  };

  useEffect(() => {
    getRefugio(currentPage);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={refugio}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          onEndReached={() => getRefugio(currentPage)}
          renderItem={({ item }) => (
            <Card
              nombre={item.nombre}
              url={item.url}
              descripcion={item.descripcion}
            />
          )}
          ListFooterComponent={() => {
            !isLoading && <ActivityIndicator />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default CardRefugio;
