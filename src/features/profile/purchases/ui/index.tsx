import { Card, Divider, Flex } from "antd";
import Purchase from "./Purchase";
import { mockPurchases } from "../../../../api/mock/purchases";

/* 
  TODO: Поменять на RTK Query после написания бека
*/
const PurchasesList = () => {
  return (
    <Flex vertical gap={8}>
      <Card>
        {mockPurchases.map((purchase, index) => (
          <div key={purchase.id}>
            <Purchase
              author={purchase.author}
              name={purchase.name}
              price={purchase.price}
              date={purchase.date}
            />
            {index !== mockPurchases.length - 1 && <Divider />}
          </div>
        ))}
      </Card>
    </Flex>
  );
};

export default PurchasesList;