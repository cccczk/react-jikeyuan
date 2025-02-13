import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.scss";
import { useEffect, useState } from "react";
import { getChannelsAPI } from "@/apis/other";
import { createArticleAPI, getDetailAPI, updateArticleAPI } from "@/apis/article";
import { useChannel } from "@/hooks/useChannels";

const { Option } = Select;

const Publish = () => {
  // const [channels, setChannels] = useState([]);
  // useEffect(() => {
  //   getChannelsAPI().then((res) => {
  //     console.log(res.data.channels);
  //     setChannels(res.data.channels);
  //   });
  // }, []);

  const { channels } = useChannel();
  const onFinish = (formData) => {
    console.log(formData);
    if (imageList.length !== imageType) return message.warning("bupipei");
    const { title, content, channel_id } = formData;
    const reqData = {
      title,
      content,
      cover: {
        type: imageType,
        images: imageList.map((item) => {
          if (item.response) {
            return item.response.data.url;
          } else {
            return item.url;
          }
        }),
      },
      channel_id,
    };
    if (articleId) {
      updateArticleAPI({...reqData,id: articleId}).then((res) => {
        console.log('gengx');
        
      })
    } else {
      createArticleAPI(reqData).then((res) => {
        console.log(res.data);
      });
    }
  };
  const [imageList, setImageList] = useState([]);
  const onUploadChange = (value) => {
    console.log(value);
    setImageList(value.fileList);
  };
  const [imageType, setImageType] = useState(0);
  const onTypeChange = (value) => {
    setImageType(value.target.value);
  };
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [form] = Form.useForm();
  const [title, setTitle] = useState("发布文章");
  useEffect(() => {
    console.log();
    if (articleId) {
      setTitle("编辑文章");
      getDetailAPI(articleId).then((res) => {
        const data = res.data;
        console.log(data, form);
        form.setFieldsValue({
          ...data,
          type: data.cover.type,
        });
        setImageType(data.cover.type);
        setImageList(
          data.cover.images.map((url) => {
            return { url };
          })
        );
      });
    } else {
      setTitle("发布文章");
    }
  }, [articleId, form]);
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[{ title: <Link to={"/"}>首页</Link> }, { title }]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channels.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType > 0 && (
              <Upload
                maxCount={imageType}
                name="image"
                action={"http://geek.itheima.net/v1_0/upload"}
                listType="picture-card"
                showUploadList
                onChange={onUploadChange}
                fileList={imageList}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
