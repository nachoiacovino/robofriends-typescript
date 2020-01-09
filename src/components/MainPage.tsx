import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import Header from "./Header";
import CounterButton from "./CounterButton";

interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface ISearchBox {
  onSearchChange(e: React.SyntheticEvent<HTMLInputElement>): void;
}

const MainPage = ({
  robots,
  onSearchChange
}: {
  robots: Array<IRobot>;
  onSearchChange: ISearchBox;
}) => {
  return (
    <div className="tc">
      <Header />
      <CounterButton />
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={robots} />
      </Scroll>
    </div>
  );
};

export default MainPage;
