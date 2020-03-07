import React, { useState, useEffect, useCallback } from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title:"标题",
    dataIndex:"title",
    render:(text:string,record:any)=>{
      return <a href={record.pageUrl}> {text}</a>
    },
  },
  {
    title:"收藏的文字",
    dataIndex:"selectionText"
  },
  {
    title:"站点图标",
    dataIndex:"favIconUrl",
    render:(text:string)=><img src={text} alt={text}/> 
  }
]


function App() {

  const [dataSource, setDT] = useState([])
  const sendFetch = () => {
    fetch("http://192.168.1.6:8088/linkmark/insertBookMark", {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      // mode: 'no-cors',
      body: JSON.stringify({
        title: "yuwei2333", pageUrl: "yuwei2333", selectionText: "yuwei2333", favIconUrl: "yuwei2333"
      })
    }).then((res) => res.json()).then((data) => console.log(data))
  }

  const queryList = useCallback(() => {
    fetch("http://192.168.1.6:8088/linkmark/queryBookMark", {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({}),
    }).then((res) => res.json()).then((data) => {
      if (data.code === 200) {
        setDT(data.data)
      }
    })
  },[])

  useEffect(()=>{
    queryList()
  },[queryList])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button>
            <a href="http://192.168.1.6:8088/api/getData">/api/getData</a>
          </Button>
        </p>
        <Button onClick={sendFetch}>
          insert BookMark
        </Button>

        <Table
          dataSource={dataSource}
          size="small"
          columns={columns}
          bordered
          rowKey="_id"
        />
      </header>
    </div>
  );
}

export default App;
