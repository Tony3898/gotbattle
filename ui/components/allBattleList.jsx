import React from 'react'
import {Space, Table, Tag} from 'antd';

function AllBattleList(props) {
  const {battles, customFilter} = props
  let sorter = (a, b, key) => {
    return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)
  }

  let columns = [
    {
      title: 'Battle Number',
      dataIndex: '_id',
      key: '_id',
      sorter: (a, b) => sorter(a, b, '_id'),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: Math.random(),
      sorter: (a, b) => sorter(a, b, 'name'),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Year',
      dataIndex: 'year',
      key: Math.random(),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Attacker King',
      dataIndex: 'attacker_king',
      key: Math.random(),
      sorter: (a, b) => sorter(a, b, 'attacker_king'),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Defender King',
      dataIndex: 'defender_king',
      sorter: (a, b) => sorter(a, b, 'defender_king'),
      key: Math.random(),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Battle Type',
      dataIndex: 'battle_type',
      key: Math.random(),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Attacker Size',
      dataIndex: 'attacker_size',
      key: Math.random(),
      sorter: (a, b) => sorter(a, b, 'attacker_size'),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Defender Size',
      dataIndex: 'defender_size',
      sorter: (a, b) => sorter(a, b, 'defender_size'),
      key: Math.random(),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Attacker Commander',
      dataIndex: 'attacker_commander',
      key: Math.random(),
      render: ((text, record) => {
        return text ? text.split(',').map(t => {
          return <Space><Tag color='geekblue' key={Math.random()}>{t.trim()}</Tag></Space>
        }) : '-'
      })
    }, {
      title: 'Defender Commander',
      dataIndex: 'defender_commander',
      key: Math.random(),
      render: ((text, record) => {
        return text ? text.split(',').map(t => {
          return <Tag color='volcano' key={Math.random()}>{t.trim()}</Tag>
        }) : '-'
      })
    }, {
      title: 'Location',
      dataIndex: 'location',
      key: Math.random(),
      sorter: (a, b) => sorter(a, b, 'location'),
      render: ((text, record) => {
        return text ? text : '-'
      })
    }, {
      title: 'Outcome',
      dataIndex: 'attacker_outcome',
      key: Math.random(),
      sorter: (a, b) => sorter(a, b, 'attacker_outcome'),
      onFilter: (value, record) => record['attacker_outcome'].indexOf(value) === 0,
      filters: [
        {
          text: 'Win',
          value: 'win',
        },
        {
          text: 'Loss',
          value: 'loss',
        }],
      render: ((text, record) => {
        return text ? <Tag color={text === 'loss' ? 'volcano' : 'green'}
                           key={Math.random()}>{text ? text.toUpperCase() : '-'}</Tag> :
            '-'
      })
    },]
  return (
      <>
        <div className={'all-battles'}>
          <Table bordered scroll={{x: 1500}} dataSource={battles} columns={columns}/>;
        </div>
      </>
  )
}

export default AllBattleList