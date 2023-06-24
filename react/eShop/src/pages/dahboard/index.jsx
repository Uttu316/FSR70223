import React from "react";
import Barchart from "../../components/charts/bar";
import ChartCard from "../../components/charts/chartCard";
import PieChart from "../../components/charts/pie";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div style={{ background: "gray" }}>
      <Header showHome={true} />
      <ChartCard>
        <Barchart />
      </ChartCard>
      <ChartCard>
        <PieChart />
      </ChartCard>
    </div>
  );
};

export default Dashboard;
