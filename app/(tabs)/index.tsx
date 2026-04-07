import {
  Button,
  FlatList,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { styles } from "../../src/styles/home.styles";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../../src/styles/colors";
import DateInput from "../../src/components/DateInput";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const calculateDuration = () => {
    if (!date || !startTime || !endTime) {
      return 0;
    }

    const start = new Date(date);
    start.setHours(startTime.getHours(), startTime.getMinutes());

    const end = new Date(date);
    end.setHours(endTime.getHours(), endTime.getMinutes());

    if (end <= start) return 0;

    const diffMs = end.getTime() - start.getTime();
    return Math.floor(diffMs / 1000); // seconds
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const formatDuration = () => {
    const duration = calculateDuration();
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  async function handleSubmit() {
    try {
      const response = await fetch(`${apiUrl}/jornada?date=${date}`, {
        method: "GET",
      });
      const data = await response.json();

      const dataEnviada = data.dataEnviada;

      alert(dataEnviada);
    } catch (err) {
      console.log(err);
    }
  }

  const duration = calculateDuration();

  const isDisabled = duration === 0;

  const dados = [
    {
      id: "1",
      title: "Item 1",
      diaSemana: "Hoje",
      data: "24/10",
      horaInicio: "08:00",
      horaFim: "17:30",
      horasTrabalhadas: 8.5,
    },
    {
      id: "2",
      title: "Item 2",
      diaSemana: "Ontem",
      data: "23/10",
      horaInicio: "07:45",
      horaFim: "18:15",
      horasTrabalhadas: 9.5,
    },
    {
      id: "3",
      title: "Item 3",
      diaSemana: "Terça",
      data: "22/10",
      horaInicio: "08:00",
      horaFim: "17:00",
      horasTrabalhadas: 8.0,
    },
    {
      id: "4",
      title: "Item 4",
      diaSemana: "Segunda",
      data: "21/10",
      horaInicio: "09:30",
      horaFim: "11:30",
      horasTrabalhadas: 2.0,
    },
    {
      id: "5",
      title: "Item 5",
      diaSemana: "Segunda",
      data: "21/10",
      horaInicio: "14:30",
      horaFim: "17:30",
      horasTrabalhadas: 3.0,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo(a), Usuário</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Total do mês atual: Abril</Text>
        <View style={styles.monthTimeContainer}>
          <Text style={styles.infoValue}>184.5</Text>
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
          data={dados}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.recentRecordCard}>
              <View style={styles.timeInfo}>
                <Feather
                  name="calendar"
                  size={24}
                  color={colors.backgroundPrimary}
                  style={{
                    backgroundColor: colors.cardBackground,
                    padding: 10,
                    borderRadius: 8,
                  }}
                />
                <View>
                  <Text>
                    {item.diaSemana}, {item.data}
                  </Text>
                  <Text>
                    {item.horaInicio} - {item.horaFim}
                  </Text>
                </View>
              </View>
              <View>
                <Text>{item.horasTrabalhadas}h</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
      {/* <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Feather name="clock" size={24} color={colors.backgroundPrimary} />
          <Text style={styles.cardTitleText}>Registrar Jornada</Text>
        </View>

        <DateInput
          label="Data"
          dateTime={date}
          setDateTime={setDate}
          fieldMode="date"
        />

        <View style={styles.dataRangeContainer}>
          <DateInput
            label="Início"
            dateTime={startTime}
            setDateTime={setStartTime}
            fieldMode="time"
            style={styles.dateRangeInput}
            iconName={null}
          />
          <DateInput
            label="Fim"
            dateTime={endTime}
            setDateTime={setEndTime}
            fieldMode="time"
            style={styles.dateRangeInput}
            iconName={null}
          />
        </View>

        <View style={styles.durationContainer}>
          <Text style={styles.durationTitle}>Duração Total</Text>
          <Text style={styles.duration}>
            {duration > 0 ? formatDuration() : "--h --m"}
          </Text>
          <Text style={styles.durationTime}>
            {duration > 0 ? formatTime(duration) : "--:--:--"}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.saveButton,
          isDisabled ? styles.saveButtonDisabled : styles.saveButton,
        ]}
        disabled={isDisabled}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Feather name="save" size={24} color="white" />
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity> */}
    </View>
  );
}
