import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "expo-router";
import { styles } from "../../src/styles/home.styles";
import { colors } from "../../src/styles/colors";
import RecentJourneyItem from "../../src/components/RecentJourneyItem";
import EmptyState from "../../src/components/EmptyState";
import { toJourney } from "../../src/mappers/journey.mapper";
import { JourneyDTOArraySchema } from "../../src/types/journey.schema";
import { Journey } from "../../src/entities/journey";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type Nav = BottomTabNavigationProp<any>;

export default function Home() {
  const [dados, setDados] = useState<Journey[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHoras, setTotalHoras] = useState(0);
  const flatListRef = useRef<FlatList<Journey>>(null);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const navigation = useNavigation<Nav>();

  async function calculateTotalTime() {
    let total = 0;

    dados.map((item) => {
      const tempo = item.elapsedHours;
      total += tempo;
    });

    setTotalHoras(total);
  }
  async function fetchDados() {
    if (!apiUrl) {
      return;
    }
    setIsLoading(true);
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
    setDados([]);

    try {
      const [response] = await Promise.all([
        fetch(`${apiUrl}/jornada`, {
          method: "GET",
        }),
      ]);

      const code = response.status;
      if (code !== 200) {
        throw new Error("Erro ao obter dados do servidor!");
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();

        const validationResult = JourneyDTOArraySchema.safeParse(result);
        if (!validationResult.success) {
          console.error(
            "Dados da API não correspondem ao schema esperado:",
            validationResult.error,
          );
          return;
        }

        setDados(validationResult.data.map(toJourney));
      }
    } catch (err) {
      console.log("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDados();
  }, [apiUrl]);

  useEffect(() => {
    calculateTotalTime();
  }, [dados]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      fetchDados();
    });

    return unsubscribe;
  }, [navigation, apiUrl]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo(a), Usuário</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Total do mês atual: Abril</Text>
        <View style={styles.monthTimeContainer}>
          <Text style={styles.infoValue}>{totalHoras}</Text>
          <Text style={styles.infoUnit}>HORAS</Text>
        </View>
      </View>
      <View style={styles.recentRecordsContainer}>
        <View style={styles.recentRecordsTitle}>
          <Text
            style={{
              color: colors.backgroundPrimary,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Registros Recentes
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#8b8b8b", fontWeight: "600" }}>
              VER TODOS
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          ref={flatListRef}
          data={dados}
          refreshing={isLoading}
          onRefresh={fetchDados}
          ListEmptyComponent={
            <EmptyState
              title="Nenhum registro encontrado"
              description="Comece a registrar suas jornadas"
              icon="inbox"
            />
          }
          renderItem={({ item }) => <RecentJourneyItem item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fabButton}
          onPress={() => {
            /* Ação do botão, ex: navigation.navigate('NovaJornada') */
          }}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
