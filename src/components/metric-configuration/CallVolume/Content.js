import React, { useCallback } from 'react'
import { Button } from 'antd'
import CallNumberTable from './callNumberTable'
import TimeItem from '../TimeItem'

const Content = ({ sourceData, tableData, maximum_time, openModal, onReset, disabled = false }) => {

  const handleOpenModal = useCallback(() => {
    openModal()
  }, [openModal])

  const handleOnReset = useCallback(() => {
    onReset()
  }, [onReset])

  return (
    <div>

      <div style={{ marginBottom: '8px' }}>
        <Button type='primary' onClick={handleOpenModal}>Reload from a date</Button>
        <Button type='primary' onClick={handleOnReset} style={{ marginLeft: '8px' }}>Reset data</Button>
      </div>

      <div>
        <CallNumberTable sourceData={sourceData} tableData={tableData}/>

        <div style={{ marginTop: '16px' }}>
          <TimeItem isEdit disabled={disabled} title='Maximum Waiting Time' time={maximum_time}/>
        </div>
      </div>

    </div>
  )
}

export default Content