
import { useRouter } from 'next/router'
function Dashboard() {
    const router = useRouter()
    return <>Dashboard


        <div><button onClick={() => router.push("/dasboard")}>Dasboard Page</button></div>
        <div><button onClick={() => router.push("/about")}>About Page</button></div>
        <div><button onClick={() => router.push("/")}>Home Page</button></div></>

}

export default Dashboard