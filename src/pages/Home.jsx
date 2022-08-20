// import components 
import Aboute from '../components/aboute/Aboute';
import Contect from '../components/contect/Contect';
import Content from '../components/content/Content';
import Navbar from '../components/navbar/Navbar';
import ShowProducts from '../components/products/ShowProducts';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <ShowProducts />
      <Aboute />
      <Contect />
    </div>
  );
}

export default Home;
