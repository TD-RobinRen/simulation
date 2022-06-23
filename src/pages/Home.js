import Button from '@cobalt/react-button';
import Flex from '@cobalt/react-flex'

import PageHeader from '../components/page-header'

export default function Home() {
  return (
    <>
      <PageHeader
        title={'Simulation'}
        extra={[
          <Button style={{ padding: '0 8px' }} size='small' type='primary'>
            Create
          </Button>
        ]}
      />
    </>
  )
}