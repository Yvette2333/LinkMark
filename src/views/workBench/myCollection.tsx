import React, {
    useState, useEffect, useCallback, Fragment, FC
} from 'react';
import {
    Row, Col, Button, Input, Table, Modal, Form, notification
} from 'antd';
import { BarsOutlined, AppstoreOutlined, CalendarOutlined } from '@ant-design/icons';
import { MyCollectionProps } from '@/interfaces/views';
import useRedux from '@/hooks/useRedux';
const { Search } = Input;
const FormItem = Form.Item;

const Styles = { fontSize: '20px', marginLeft: 8, cursor: 'pointer' };

const columns = [
    {
        title: '站点图标',
        dataIndex: 'favIconUrl',
        render: (text: string) => <img src={text} alt={text} height="32"
            onError={(e: any) => { e.target.error = null; e.target.src = require('@/assets/images/logo.png'); }} />
    },
    {
        title: '站点',
        dataIndex: 'title',
        render: (text: string, record: any) => {
            return <a href={record.pageUrl} target="_blank" rel="noopener noreferrer"> {text}</a>;
        }
    },
    {
        title: '收藏的文字',
        dataIndex: 'selectionText'
    }
];

const MyCollection: FC<MyCollectionProps> = () => {
    const { Dispatch } = useRedux();
    const [visible, toggleVisible] = useState<boolean>(false);
    const [viewType, toogleViewType] = useState<boolean>(false);
    const [dataSource, setDT] = useState([]);

    const handleOk = (): void => toggleVisible(false);

    const handleCancel = (): void => toggleVisible(false);

    const queryList = useCallback(() => {
        fetch('http://192.168.1.9:8088/collection/queryBookMark', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({})
        }).then((res) => res.json()).then((data) => {
            if (data.code === 200) {
                setDT(data.result);
            }
        }).catch((err) => {
            notification.error({
                message: '/linkmark/queryBookMark',
                description: err.message
                // onClick: () => {
                //   console.log('Notification Clicked!');
                // },
            });
        });
    }, []);

    useEffect(() => {
        queryList();
    }, [queryList]);

    const sagaQuery = (): void => {
        Dispatch({
            type: 'Request',
            payload: { name: 'yuwei233' },
            callback: (data: any) => {
                console.log(data);
            }
        });
    };

    return (
        <Fragment>
            <Row>
                <Col span={8}>
                    <Button type="primary" onClick={(): void => toggleVisible(!visible)}>新增收藏</Button>
                    <Button type="primary" onClick={sagaQuery}>saga查询地址</Button>
                </Col>
                <Col span={8} offset={8}>
                    <Search style={{ width: 320 }} />
                    {
                        viewType
                            ? <BarsOutlined onClick={() => toogleViewType(!viewType)} style={Styles} />
                            : <AppstoreOutlined onClick={() => toogleViewType(!viewType)} style={Styles} />
                    }
                    <CalendarOutlined style={Styles} />
                </Col>
            </Row>

            <Table
                dataSource={dataSource}
                size="small"
                columns={columns}
                rowKey="_id"
            />

            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form>
                    <FormItem>
                        <Input />
                    </FormItem>
                </Form>
            </Modal>

        </Fragment>
    );
};

export default React.memo(MyCollection);
