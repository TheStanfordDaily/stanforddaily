import React from "react";
import { Text, FlatList, Platform } from "react-native";

// Not currently used in other files
const OrderedListWrapper: React.ElementType = ({
  data,
  renderItem,
  style,
  ...props
}: any) => {
  if (Platform.OS === "web") {
    return (
      <ol {...props} style={{ marginTop: 0, marginBottom: 0, ...style }}>
        {data.map((item: any) => (
          <li key={JSON.stringify(item)}>{renderItem(item)}</li>
        ))}
      </ol>
    );
  } else {
    return (
      <FlatList
        {...props}
        data={data}
        style={style}
        renderItem={(object: any) => (
          <Text>
            {object.index + 1}. {renderItem(object.item)}
          </Text>
        )}
      />
    );
  }
};

// Not currently used in other files
export const OrderedList: React.ElementType = (props: any) => {
  return <OrderedListWrapper {...props} />;
};
