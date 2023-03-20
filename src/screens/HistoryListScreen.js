import { FlatList, View } from "react-native";
import { Header } from "../components/header/Header";
import { LottoNumberView } from "../components/LottoNumberView";
import { Typography } from "../components/Typography";
import { useSelector } from "react-redux";

export const HistoryListScreen = () => {
  const history = useSelector((state) => state.numbers.history);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY LIST" />
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                height: 100,
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                marginVertical: 5,
              }}
            >
              <Typography fontSize={16}>{item.date}</Typography>
              <LottoNumberView numbers={item.numbers} />
            </View>
          );
        }}
      />
    </View>
  );
};
