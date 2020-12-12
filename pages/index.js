import Layout from '../components/layout'
import PageHeading from '../components/PageHeading'
import StackedList from '../components/StackedList'

function IndexPage() {
  return (
    <Layout>
      {/* {console.log(Api)} */}
      <PageHeading title="Dashboard" subtitle="Overview" />
      <StackedList data={''} />
    </Layout>
  )
}

export default IndexPage
