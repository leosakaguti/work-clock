import { Platform, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../../styles/colors";
import { styles } from "./styles";
import { ComponentProps, JSX, useEffect, useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type Props = {
  label: string;
  dateTime: Date;
  setDateTime: (date: Date) => void;
  fieldMode: "date" | "time";
  style?: any;
  iconName?: ComponentProps<typeof Feather>["name"] | null;
};

export default function DateInput({
  label,
  dateTime,
  setDateTime,
  fieldMode,
  style,
  iconName = "calendar",
}: Props) {
  const [show, setShow] = useState(false);

  const formattedDateTime =
    fieldMode === "date"
      ? dateTime.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : dateTime.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        });

  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 5;
  const minYear = currentYear - 5;

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(Platform.OS === "ios");

    if (selectedDate) {
      setDateTime(selectedDate);
    }
  };

  function showDatepicker() {
    setShow(true);
  }

  return (
    <View style={style}>
      <View style={styles.label}>
        {iconName && <Feather name="calendar" size={16} color={colors.label} />}
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.dateTimeButton} onPress={showDatepicker}>
        <Text style={styles.dateText}>{formattedDateTime}</Text>
      </TouchableOpacity>

      {show ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateTime}
          mode={fieldMode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          maximumDate={new Date(maxYear, 10, 20)}
          minimumDate={new Date(minYear, 0, 1)}
        />
      ) : null}
    </View>
  );
}
