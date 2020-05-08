import React from 'react';
import { List, Avatar, Button, Skeleton, Card } from 'antd';
import reqwest from 'reqwest';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class MutipleList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData((res: any) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = (callback: any) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res: any) => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data
      // .concat(
      //   [...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res: any) => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        grid={{ gutter: 16, column: 4 }}
        renderItem={(item: any) => (
          // <List.Item
          //   actions={[
          //     <a key="list-loadmore-edit">edit</a>,
          //     <a key="list-loadmore-more">more</a>
          //   ]}
          // >
          //   <Skeleton avatar title={false} loading={item.loading} active>
          //     <List.Item.Meta
          //       avatar={
          //         <img width="60" height="60" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          //       }
          //       title={<h3>{item.name.last}</h3>}
          //       description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          //     />
          //     <div style={{width:80}}>来源</div>
          //     <div>收藏的时间</div>
          //   </Skeleton>
          // </List.Item>
          <List.Item>

            <Card title={item.title}>
              <Skeleton title={false} loading={item.loading} active >
                Card content
              </Skeleton>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default MutipleList