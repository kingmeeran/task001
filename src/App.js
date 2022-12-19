import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Card from './Card';

function App() {
  let data = [
    {
      plan: "Free",
      price: "$0",
      cont: [
        { title: "Single User", enable: true },
        { title: "5GB Storage", enable: true },
        { title: "Unlimited Public Projects", enable: true },
        { title: "Community Access", enable: true },
        { title: "Unlimited Private Projects" },
        { title: "Dedicated Phone Support" },
        { title: "Free Subdomain" },
        { title: "Monthly Status Reports" }
      ]
    },
    {
      plan: "PLUS",
      price: "$9",
      cont: [
        { title: "5 Users", enable: true, bold: false },
        { title: "50GB Storage", enable: true },
        { title: "Unlimited Public Projects", enable: true },
        { title: "Community Access", enable: true },
        { title: "Unlimited Private Projects", enable: true },
        { title: "Dedicated Phone Support", enable: true },
        { title: "Free Subdomain", enable: true },
        { title: "Monthly Status Reports" }
      ]
    },
    {
      plan: "PRO",
      price: "$49",
      cont: [
        { title: "Unlimited Users", enable: true, bold: false },
        { title: "150GB Storage", enable: true },
        { title: "Unlimited Public Projects", enable: true },
        { title: "Community Access", enable: true },
        { title: "Unlimited Private Projects", enable: true },
        { title: "Dedicated Phone Support", enable: true },
        { title: "Unlimited Free Subdomain", enable: true },
        { title: "Monthly Status Reports", enable: true }
      ]
    }
  ]
  return (
    <div className='App p-10'>
      <div className="container">
        <div className="row">
          {
            data.map((data) => {
              return <Card data={data} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
