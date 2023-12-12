import { useRouter } from 'next/router'

function About() {

    const router = useRouter()
    return <>About


        <div><button onClick={() => router.push("/dasboard")}>Dasboard Page</button></div>
        <div><button onClick={() => router.push("/about")}>About Page</button></div>
        <div><button onClick={() => router.push("/")}>Home Page</button></div></>
}

export default About