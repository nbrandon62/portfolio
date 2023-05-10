import Exp from '../components/Exp';
import ExpHeader from '../components/ExpHeader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProjectList from '../components/ProjectList';
import ProjectsHeader from '../components/ProjectsHeader';
import SideBar from '../components/SideBar';
import '../styles/App.css';

function Home() {
  return (
    <>
        <Navbar />
        <SideBar />
        <Header />
        <ExpHeader />
        <Exp />
        <ProjectsHeader />
        <ProjectList />
        <Footer />
    </>
  );
}

export default Home;
