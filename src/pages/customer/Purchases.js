import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Table from "../../components/elements/Table/Table";
import { NO_MENU_ORDER_YET_MSG } from "../../constants/messages";
import LoadingSpin from "../../components/elements/LoadingSpin/LoadingSpin";

const API_URL = process.env.REACT_APP_API_PURCHASE_URL;

const Root = styled.div``;

const Title = styled.div`
  font-size: 1.8rem;
`;

const NoOrderWrapper = styled.div`
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: break-spaces;
  flex-direction: column;
`;

const OrderLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 30px;
`;

const PurchaseHistory = () => {
  const [inputMatrix, setInputMatrix] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const headers = ["Date", "Items", "Total Price"];
  const labels = ["date", "items", "totalPrice"];
  const subLabels = ["name", "quantity", "price"];

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const temp = response.data.data.map((purchase) => {
          let sum = 0;
          return {
            date: `${purchase.purchaseDate
              .slice(0, 3)
              .join("-")} ${purchase.purchaseDate.slice(3, 6).join(":")}`,
            items: purchase.purchaseItems.map((purchaseItem) => {
              sum += purchaseItem.totalPriceInCent;
              return {
                name: purchaseItem.itemName,
                quantity: purchaseItem.quantity,
                price: purchaseItem.totalPriceInCent / 100,
              };
            }),
            totalPrice: `$${((sum / 100) * 1.05).toFixed(2)}`,
          };
        });
        temp.reverse();

        if (!temp.length) {
          setDataFetched(true);
          return;
        }

        setInputMatrix(temp);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (inputMatrix.length) setDataFetched(true);
  }, [inputMatrix]);

  return dataFetched ? (
    inputMatrix && inputMatrix.length ? (
      <Root>
        <Title>Order History</Title>

        <Table
          data={inputMatrix}
          headers={headers}
          labels={labels}
          subItemsLabel="items"
          subLabels={subLabels}
          subParentHeader="Items"
        />
      </Root>
    ) : (
      <>
        <NoOrderWrapper>
          {NO_MENU_ORDER_YET_MSG}
          <OrderLink to="/Menu">Click to order</OrderLink>
        </NoOrderWrapper>
      </>
    )
  ) : (
    <LoadingSpin />
  );
};

export default PurchaseHistory;
