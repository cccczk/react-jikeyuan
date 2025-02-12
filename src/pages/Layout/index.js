import { Layout, Menu, Popconfirm } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { clearUserInfo, fetchUserInfo } from "@/store/modules/user";
import { useDispatch, useSelector } from "react-redux";

const { Header, Sider } = Layout;

const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "/publish",
    icon: <EditOutlined />,
  },
];

const GeekLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);
  const navigate = useNavigate();
  const onMenuClick = (route) => {
    console.log(route);
    const path = route.key;
    navigate(path);
  };
    const onConfirm = () => {
        dispatch(clearUserInfo())
        navigate('/login')
  };
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
              onConfirm={onConfirm}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ height: "100%", borderRight: 0 }}
            onClick={onMenuClick}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default GeekLayout;
