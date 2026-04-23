import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./styles";
import { Journey } from "../../entities/journey";

type ItemProps = {
  item: Journey;
};

export default function RecentJourneyItem({ item }: ItemProps) {
  return (
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
            {item.dayOfWeek}, {item.journeyDate}
          </Text>
          <Text>
            {item.startTime} - {item.endTime}
          </Text>
        </View>
      </View>
      <View>
        <Text>{item.elapsedHours}h</Text>
      </View>
    </TouchableOpacity>
  );
}
