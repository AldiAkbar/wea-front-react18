import Statistik from "../Components/Dashboard/Statistik"
import Navbar from "../Components/Navbar"
import TableData from "../Components/Dashboard/TableData"
import Head from "../Components/Head"


const Dashboard = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <div className="bg-gray-100 dark:bg-gray-400 h-screen">
            <div className="max-w-[1500px] mx-auto">
              <h1 className="py-5 text-4xl font-medium dark:text-gray-50 text-center">Dashboard</h1>
              <Statistik />
              <TableData />
          </div>
        </div>
    </div>
  )
}

export default Dashboard