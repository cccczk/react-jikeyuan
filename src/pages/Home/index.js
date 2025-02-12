import BarChart from "./components/BarChart";

const Home = () => {
  return (
    <div>
      <BarChart titleText="三大框架满意度" barData={[40, 70, 10]}></BarChart>
      <BarChart titleText="三大框架使用率" barData={[70, 40, 10]}></BarChart>
    </div>
  );
};

export default Home;
