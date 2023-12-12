import product from '@/constant/product';
import { useRouter } from 'next/router';


function Home() {
  const router = useRouter()
  return <div>
    <div className='header'></div>
    <div className='mainContainer'>
      <div className='sidebar'></div>
      <div className='content'>
        {product.map((item)=>{
          return(<div className='item'>{item.id}{item.name}</div>)
        })}
      </div>
    </div>


  </div>
}

export default Home